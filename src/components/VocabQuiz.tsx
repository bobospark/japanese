import { useState, useCallback, useMemo } from 'react';
import { vocabulary, type Word } from '../data/vocabulary';
import { speak } from '../utils/tts';
import type { SavedItem } from '../hooks/useStudyState';

interface VocabQuizProps {
  onBack: () => void;
  onRecord: (correct: boolean) => void;
  onSave: (item: Omit<SavedItem, 'savedAt'>) => void;
  onRemoveSave: (id: string) => void;
  isSaved: (id: string) => boolean;
  mode: 'quiz' | 'browse';
}

type Level = 'beginner' | 'intermediate' | 'all';
type QuizMode = 'idle' | 'quiz' | 'done';

const QUIZ_SIZE = 20;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getOptions(correct: Word, pool: Word[]): Word[] {
  const others = shuffle(pool.filter(w => w.id !== correct.id)).slice(0, 3);
  return shuffle([correct, ...others]);
}

// ─── Browse mode ───
function VocabBrowse({
  onBack, onSave, onRemoveSave, isSaved
}: Pick<VocabQuizProps, 'onBack' | 'onSave' | 'onRemoveSave' | 'isSaved'>) {
  const [level, setLevel] = useState<Level>('beginner');
  const [search, setSearch] = useState('');
  const [cat, setCat] = useState('all');

  const categories = useMemo(() => {
    const all = vocabulary.map(v => v.category);
    return ['all', ...Array.from(new Set(all))];
  }, []);

  const filtered = useMemo(() => {
    return vocabulary.filter(w => {
      const levelMatch = level === 'all' || w.level === level;
      const catMatch = cat === 'all' || w.category === cat;
      const searchMatch =
        w.word.includes(search) ||
        w.reading.includes(search) ||
        w.meaning.includes(search) ||
        w.romaji.toLowerCase().includes(search.toLowerCase());
      return levelMatch && catMatch && (search ? searchMatch : true);
    });
  }, [level, cat, search]);

  const handleSaveToggle = (w: Word) => {
    const sid = `word-${w.id}`;
    if (isSaved(sid)) {
      onRemoveSave(sid);
    } else {
      onSave({ id: sid, type: 'word', japanese: w.word, reading: w.reading, meaning: w.meaning });
    }
  };

  return (
    <div className="vocab-page fade-up">
      <div className="quiz-header">
        <button className="back-btn" onClick={onBack}>← 뒤로</button>
        <div className="quiz-title">
          <h1>단어 목록</h1>
          <p>단어를 클릭하면 발음을 들을 수 있어요 · {filtered.length}개</p>
        </div>
      </div>

      <div className="level-tabs">
        {(['beginner', 'intermediate', 'all'] as Level[]).map(l => (
          <button
            key={l}
            className={`level-tab ${level === l ? 'active-tab' : ''}`}
            onClick={() => setLevel(l)}
          >
            {l === 'beginner' ? '초급' : l === 'intermediate' ? '중급' : '전체'}
          </button>
        ))}
      </div>

      <div className="search-bar">
        <span>🔍</span>
        <input
          placeholder="단어, 히라가나, 뜻으로 검색..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        {search && <button style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }} onClick={() => setSearch('')}>✕</button>}
      </div>

      <div className="category-pills">
        {categories.map(c => (
          <button
            key={c}
            className={`cat-pill ${cat === c ? 'active-cat' : ''}`}
            onClick={() => setCat(c)}
          >
            {c === 'all' ? '전체' : c}
          </button>
        ))}
      </div>

      <div className="vocab-list">
        {filtered.slice(0, 200).map(w => {
          const sid = `word-${w.id}`;
          return (
            <div key={w.id} className="vocab-item">
              <span
                className="jp-word"
                onClick={() => speak(w.word)}
                title="클릭하면 발음을 들을 수 있어요"
              >
                {w.word}
              </span>
              <div className="word-info">
                <div className="word-reading">{w.reading} [{w.romaji}]</div>
                <div className="word-meaning">{w.meaning}</div>
              </div>
              <span className="word-cat">{w.category}</span>
              <button
                className={`save-btn ${isSaved(sid) ? 'saved' : 'unsaved'}`}
                onClick={() => handleSaveToggle(w)}
              >
                {isSaved(sid) ? '★ 저장됨' : '☆ 저장'}
              </button>
            </div>
          );
        })}
        {filtered.length === 0 && (
          <div className="empty-state">
            <div className="empty-icon">🔍</div>
            <p>검색 결과가 없습니다</p>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Quiz mode ───
export default function VocabQuiz({ onBack, onRecord, onSave, onRemoveSave, isSaved, mode }: VocabQuizProps) {
  const [quizLevel, setQuizLevel] = useState<'beginner' | 'intermediate'>('beginner');
  const [quizMode, setQuizMode] = useState<QuizMode>('idle');
  const [queue, setQueue] = useState<Word[]>([]);
  const [current, setCurrent] = useState(0);
  const [options, setOptions] = useState<Word[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);

  const pool = useMemo(() => vocabulary.filter(w => w.level === quizLevel), [quizLevel]);

  const startQuiz = useCallback(() => {
    const q = shuffle(pool).slice(0, QUIZ_SIZE);
    setQueue(q);
    setCurrent(0);
    setOptions(getOptions(q[0], pool));
    setSelected(null);
    setAnswered(false);
    setScore(0);
    setQuizMode('quiz');
  }, [pool]);

  const handleSelect = (id: number) => {
    if (answered) return;
    setSelected(id);
    setAnswered(true);
    const isCorrect = id === queue[current].id;
    if (isCorrect) setScore(s => s + 1);
    onRecord(isCorrect);
    speak(queue[current].word);
  };

  const handleNext = () => {
    const next = current + 1;
    if (next >= QUIZ_SIZE) { setQuizMode('done'); return; }
    setCurrent(next);
    setOptions(getOptions(queue[next], pool));
    setSelected(null);
    setAnswered(false);
  };

  const handleSaveToggle = (w: Word) => {
    const sid = `word-${w.id}`;
    if (isSaved(sid)) onRemoveSave(sid);
    else onSave({ id: sid, type: 'word', japanese: w.word, reading: w.reading, meaning: w.meaning });
  };

  if (mode === 'browse') {
    return <VocabBrowse onBack={onBack} onSave={onSave} onRemoveSave={onRemoveSave} isSaved={isSaved} />;
  }

  if (quizMode === 'idle') {
    return (
      <div className="quiz-page fade-up">
        <div className="quiz-header">
          <button className="back-btn" onClick={onBack}>← 뒤로</button>
          <div className="quiz-title">
            <h1>단어 퀴즈</h1>
            <p>일본어 단어의 뜻을 맞혀보세요</p>
          </div>
        </div>
        <div className="quiz-card" style={{ textAlign: 'center', padding: '3rem' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📚</div>
          <h2 style={{ marginBottom: '1.5rem', color: 'var(--text-primary)' }}>레벨을 선택하세요</h2>
          <div className="level-tabs" style={{ justifyContent: 'center', marginBottom: '2rem' }}>
            <button
              className={`level-tab ${quizLevel === 'beginner' ? 'active-tab' : ''}`}
              onClick={() => setQuizLevel('beginner')}
            >초급</button>
            <button
              className={`level-tab ${quizLevel === 'intermediate' ? 'active-tab' : ''}`}
              onClick={() => setQuizLevel('intermediate')}
            >중급</button>
          </div>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            {pool.length}개 단어 중 {QUIZ_SIZE}문제
          </p>
          <button className="btn-primary" onClick={startQuiz}>퀴즈 시작</button>
        </div>
      </div>
    );
  }

  if (quizMode === 'done') {
    const pct = Math.round((score / QUIZ_SIZE) * 100);
    return (
      <div className="quiz-page fade-up">
        <div className="score-screen">
          <div className="score-big">{pct}%</div>
          <div className="score-label">
            {QUIZ_SIZE}문제 중 {score}개 정답!{' '}
            {pct >= 80 ? '🎉 훌륭해요!' : pct >= 60 ? '👍 좋아요!' : '💪 더 연습해봐요!'}
          </div>
          <div className="score-actions">
            <button className="btn-primary" onClick={startQuiz}>다시 퀴즈</button>
            <button className="btn-secondary" onClick={() => setQuizMode('idle')}>레벨 선택</button>
            <button className="btn-secondary" onClick={onBack}>홈으로</button>
          </div>
        </div>
      </div>
    );
  }

  const q = queue[current];
  const progress = (current / QUIZ_SIZE) * 100;
  const sid = `word-${q.id}`;

  return (
    <div className="quiz-page fade-up">
      <div className="quiz-header">
        <button className="back-btn" onClick={() => setQuizMode('idle')}>← 레벨 선택</button>
        <div className="quiz-title">
          <h1>단어 퀴즈 — {quizLevel === 'beginner' ? '초급' : '중급'}</h1>
          <p>일본어 뜻을 맞혀보세요</p>
        </div>
      </div>

      <div className="progress-bar-wrap">
        <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
      </div>

      <div className="quiz-card pop-in">
        <div className="question-jp" onClick={() => speak(q.word)}>{q.word}</div>
        <div className="question-reading">{q.reading}</div>
        <button className="speak-btn" onClick={() => speak(q.word)}>🔊 발음 듣기</button>
        <div className="quiz-counter">{current + 1} / {QUIZ_SIZE} · 점수: {score}</div>
        <div style={{ marginTop: '0.75rem' }}>
          <button
            className={`save-btn ${isSaved(sid) ? 'saved' : 'unsaved'}`}
            onClick={() => handleSaveToggle(q)}
          >
            {isSaved(sid) ? '★ 저장됨' : '☆ 저장'}
          </button>
        </div>
      </div>

      {answered && (
        <div className={`result-banner ${selected === q.id ? 'correct-banner' : 'wrong-banner'}`}>
          {selected === q.id ? '✅ 정답!' : `❌ 오답! 정답: ${q.meaning}`}
        </div>
      )}

      <div className="options-grid">
        {options.map(opt => {
          let cls = 'option-btn';
          if (answered) {
            if (opt.id === q.id) cls += ' correct';
            else if (opt.id === selected) cls += ' wrong';
          }
          return (
            <button
              key={opt.id}
              className={cls}
              onClick={() => handleSelect(opt.id)}
              disabled={answered}
            >
              {opt.meaning}
            </button>
          );
        })}
      </div>

      {answered && (
        <button className="next-btn" style={{ marginTop: '1rem' }} onClick={handleNext}>
          {current + 1 >= QUIZ_SIZE ? '결과 보기' : '다음 문제 →'}
        </button>
      )}
    </div>
  );
}
