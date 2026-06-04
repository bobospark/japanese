import { useState, useCallback, useMemo } from 'react';
import { sentences, type Sentence } from '../data/sentences';
import { speak } from '../utils/tts';
import type { SavedItem } from '../hooks/useStudyState';

interface SentenceQuizProps {
  onBack: () => void;
  onRecord: (correct: boolean) => void;
  onSave: (item: Omit<SavedItem, 'savedAt'>) => void;
  onRemoveSave: (id: string) => void;
  isSaved: (id: string) => boolean;
  mode: 'quiz' | 'browse';
}

type Level = 'beginner' | 'intermediate';
type QuizState = 'idle' | 'quiz' | 'done';

const QUIZ_SIZE = 15;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ─── Browse mode ───
function SentenceBrowse({
  onBack, onSave, onRemoveSave, isSaved
}: Pick<SentenceQuizProps, 'onBack' | 'onSave' | 'onRemoveSave' | 'isSaved'>) {
  const [level, setLevel] = useState<Level>('beginner');
  const [search, setSearch] = useState('');
  const [cat, setCat] = useState('all');

  const categories = useMemo(() => {
    const all = sentences.map(s => s.category);
    return ['all', ...Array.from(new Set(all))];
  }, []);

  const filtered = useMemo(() => {
    return sentences.filter(s => {
      const levelMatch = s.level === level;
      const catMatch = cat === 'all' || s.category === cat;
      const searchMatch =
        s.sentence.includes(search) ||
        s.meaning.includes(search) ||
        s.reading.includes(search);
      return levelMatch && catMatch && (search ? searchMatch : true);
    });
  }, [level, cat, search]);

  const handleSaveToggle = (s: Sentence) => {
    const sid = `sentence-${s.id}`;
    if (isSaved(sid)) onRemoveSave(sid);
    else onSave({ id: sid, type: 'sentence', japanese: s.sentence, reading: s.reading, meaning: s.meaning });
  };

  return (
    <div className="vocab-page fade-up">
      <div className="quiz-header">
        <button className="back-btn" onClick={onBack}>← 뒤로</button>
        <div className="quiz-title">
          <h1>문장 목록</h1>
          <p>문장을 클릭하면 발음을 들을 수 있어요 · {filtered.length}개</p>
        </div>
      </div>

      <div className="level-tabs">
        {(['beginner', 'intermediate'] as Level[]).map(l => (
          <button
            key={l}
            className={`level-tab ${level === l ? 'active-tab' : ''}`}
            onClick={() => setLevel(l)}
          >
            {l === 'beginner' ? '초급' : '중급'}
          </button>
        ))}
      </div>

      <div className="search-bar">
        <span>🔍</span>
        <input
          placeholder="문장, 뜻으로 검색..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        {search && (
          <button
            style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
            onClick={() => setSearch('')}
          >✕</button>
        )}
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

      <div className="saved-list">
        {filtered.slice(0, 100).map(s => {
          const sid = `sentence-${s.id}`;
          return (
            <div key={s.id} className="saved-item" style={{ flexDirection: 'column', gap: '0.4rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span
                  className="saved-jp"
                  style={{ flex: 1 }}
                  onClick={() => speak(s.sentence)}
                  title="클릭하면 발음을 들을 수 있어요"
                >
                  {s.sentence}
                </span>
                <button
                  className={`save-btn ${isSaved(sid) ? 'saved' : 'unsaved'}`}
                  onClick={() => handleSaveToggle(s)}
                >
                  {isSaved(sid) ? '★' : '☆'}
                </button>
              </div>
              <div className="saved-reading">{s.reading}</div>
              <div className="saved-meaning">{s.meaning}</div>
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

// ─── Sentence Builder Quiz ───
export default function SentenceQuiz({ onBack, onRecord, onSave, onRemoveSave, isSaved, mode }: SentenceQuizProps) {
  const [level, setLevel] = useState<Level>('beginner');
  const [quizState, setQuizState] = useState<QuizState>('idle');
  const [queue, setQueue] = useState<Sentence[]>([]);
  const [current, setCurrent] = useState(0);
  const [bank, setBank] = useState<string[]>([]);
  const [answer, setAnswer] = useState<string[]>([]);
  const [checked, setChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);

  const pool = useMemo(() =>
    sentences.filter(s => s.level === level && s.tokens.filter(t => !['。', '？', '、'].includes(t)).length >= 3),
    [level]
  );

  const loadQuestion = useCallback((s: Sentence) => {
    const contentTokens = s.tokens.filter(t => !['。', '？', '、'].includes(t));
    setBank(shuffle(contentTokens));
    setAnswer([]);
    setChecked(false);
    setIsCorrect(false);
  }, []);

  const startQuiz = useCallback(() => {
    const q = shuffle(pool).slice(0, QUIZ_SIZE);
    setQueue(q);
    setCurrent(0);
    loadQuestion(q[0]);
    setScore(0);
    setQuizState('quiz');
  }, [pool, loadQuestion]);

  const handleBankClick = (token: string, idx: number) => {
    if (checked) return;
    setBank(b => b.filter((_, i) => i !== idx));
    setAnswer(a => [...a, token]);
  };

  const handleAnswerClick = (token: string, idx: number) => {
    if (checked) return;
    setAnswer(a => a.filter((_, i) => i !== idx));
    setBank(b => [...b, token]);
  };

  const handleCheck = () => {
    const s = queue[current];
    const contentTokens = s.tokens.filter(t => !['。', '？', '、'].includes(t));
    const correct = answer.join('') === contentTokens.join('');
    setIsCorrect(correct);
    setChecked(true);
    if (correct) setScore(sc => sc + 1);
    onRecord(correct);
    speak(s.sentence);
  };

  const handleNext = () => {
    const next = current + 1;
    if (next >= QUIZ_SIZE) { setQuizState('done'); return; }
    setCurrent(next);
    loadQuestion(queue[next]);
  };

  const handleSaveToggle = (s: Sentence) => {
    const sid = `sentence-${s.id}`;
    if (isSaved(sid)) onRemoveSave(sid);
    else onSave({ id: sid, type: 'sentence', japanese: s.sentence, reading: s.reading, meaning: s.meaning });
  };

  if (mode === 'browse') {
    return <SentenceBrowse onBack={onBack} onSave={onSave} onRemoveSave={onRemoveSave} isSaved={isSaved} />;
  }

  if (quizState === 'idle') {
    return (
      <div className="quiz-page fade-up">
        <div className="quiz-header">
          <button className="back-btn" onClick={onBack}>← 뒤로</button>
          <div className="quiz-title">
            <h1>문장 순서 배열</h1>
            <p>단어를 선택해서 올바른 문장을 만들어보세요</p>
          </div>
        </div>
        <div className="quiz-card" style={{ textAlign: 'center', padding: '3rem' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🧩</div>
          <h2 style={{ marginBottom: '1.5rem', color: 'var(--text-primary)' }}>레벨을 선택하세요</h2>
          <div className="level-tabs" style={{ justifyContent: 'center', marginBottom: '2rem' }}>
            <button
              className={`level-tab ${level === 'beginner' ? 'active-tab' : ''}`}
              onClick={() => setLevel('beginner')}
            >초급</button>
            <button
              className={`level-tab ${level === 'intermediate' ? 'active-tab' : ''}`}
              onClick={() => setLevel('intermediate')}
            >중급</button>
          </div>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            {pool.length}개 문장 중 {QUIZ_SIZE}문제
          </p>
          <button className="btn-primary" onClick={startQuiz}>퀴즈 시작</button>
        </div>
      </div>
    );
  }

  if (quizState === 'done') {
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
            <button className="btn-secondary" onClick={() => setQuizState('idle')}>레벨 선택</button>
            <button className="btn-secondary" onClick={onBack}>홈으로</button>
          </div>
        </div>
      </div>
    );
  }

  const s = queue[current];
  const sid = `sentence-${s.id}`;
  const progress = (current / QUIZ_SIZE) * 100;

  return (
    <div className="quiz-page fade-up">
      <div className="quiz-header">
        <button className="back-btn" onClick={() => setQuizState('idle')}>← 레벨 선택</button>
        <div className="quiz-title">
          <h1>문장 순서 배열 — {level === 'beginner' ? '초급' : '중급'}</h1>
          <p>단어를 클릭해서 문장 순서를 맞혀보세요</p>
        </div>
      </div>

      <div className="progress-bar-wrap">
        <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
      </div>

      <div className="quiz-card pop-in">
        <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
          뜻: <strong>{s.meaning}</strong>
        </div>
        <button className="speak-btn" onClick={() => speak(s.sentence)}>🔊 문장 듣기</button>
        <div className="quiz-counter" style={{ marginTop: '0.75rem' }}>
          {current + 1} / {QUIZ_SIZE} · 점수: {score}
        </div>
        <div style={{ marginTop: '0.5rem' }}>
          <button
            className={`save-btn ${isSaved(sid) ? 'saved' : 'unsaved'}`}
            onClick={() => handleSaveToggle(s)}
          >
            {isSaved(sid) ? '★ 저장됨' : '☆ 저장'}
          </button>
        </div>
      </div>

      {/* Answer area */}
      <div style={{ marginBottom: '0.5rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
        ↓ 내 답안 (클릭하면 취소)
      </div>
      <div className="sentence-area">
        {answer.length === 0 && (
          <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
            아래 단어를 클릭해서 순서대로 배열하세요
          </span>
        )}
        {answer.map((token, idx) => (
          <span
            key={`${token}-${idx}`}
            className={`token-word ${checked ? (isCorrect ? 'correct-token' : 'wrong-token') : 'in-answer'}`}
            onClick={() => handleAnswerClick(token, idx)}
          >
            {token}
          </span>
        ))}
      </div>

      {/* Token bank */}
      <div style={{ marginBottom: '0.5rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
        ↓ 단어 선택
      </div>
      <div className="token-bank">
        {bank.map((token, idx) => (
          <span
            key={`${token}-${idx}`}
            className="token-word in-bank"
            onClick={() => handleBankClick(token, idx)}
          >
            {token}
          </span>
        ))}
        {bank.length === 0 && answer.length > 0 && !checked && (
          <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>단어를 모두 배치했어요!</span>
        )}
      </div>

      {checked && (
        <div className={`result-banner ${isCorrect ? 'correct-banner' : 'wrong-banner'}`} style={{ marginTop: '1rem' }}>
          {isCorrect
            ? '✅ 정답!'
            : `❌ 오답! 정답: ${s.tokens.filter(t => !['。', '？', '、'].includes(t)).join(' ')}`
          }
        </div>
      )}

      <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem' }}>
        {!checked ? (
          <button
            className="next-btn"
            onClick={handleCheck}
            disabled={answer.length === 0}
            style={{ opacity: answer.length === 0 ? 0.5 : 1 }}
          >
            확인하기
          </button>
        ) : (
          <button className="next-btn" onClick={handleNext}>
            {current + 1 >= QUIZ_SIZE ? '결과 보기' : '다음 문제 →'}
          </button>
        )}
      </div>
    </div>
  );
}
