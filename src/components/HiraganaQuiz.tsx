import { useState, useCallback } from 'react';
import { speakJapanese } from '../utils/tts';

interface KanaQuizProps {
  onBack: () => void;
  onRecord: (correct: boolean) => void;
}

type KanaChar = { char: string; roma: string };
type KanaGroup = { label: string; chars: KanaChar[] };

// ───── 히라가나 그룹 ─────
const HIRAGANA_GROUPS: KanaGroup[] = [
  {
    label: 'あ행',
    chars: [
      { char: 'あ', roma: 'a' }, { char: 'い', roma: 'i' }, { char: 'う', roma: 'u' },
      { char: 'え', roma: 'e' }, { char: 'お', roma: 'o' },
    ],
  },
  {
    label: 'か행',
    chars: [
      { char: 'か', roma: 'ka' }, { char: 'き', roma: 'ki' }, { char: 'く', roma: 'ku' },
      { char: 'け', roma: 'ke' }, { char: 'こ', roma: 'ko' },
    ],
  },
  {
    label: 'さ행',
    chars: [
      { char: 'さ', roma: 'sa' }, { char: 'し', roma: 'shi' }, { char: 'す', roma: 'su' },
      { char: 'せ', roma: 'se' }, { char: 'そ', roma: 'so' },
    ],
  },
  {
    label: 'た행',
    chars: [
      { char: 'た', roma: 'ta' }, { char: 'ち', roma: 'chi' }, { char: 'つ', roma: 'tsu' },
      { char: 'て', roma: 'te' }, { char: 'と', roma: 'to' },
    ],
  },
  {
    label: 'な행',
    chars: [
      { char: 'な', roma: 'na' }, { char: 'に', roma: 'ni' }, { char: 'ぬ', roma: 'nu' },
      { char: 'ね', roma: 'ne' }, { char: 'の', roma: 'no' },
    ],
  },
  {
    label: 'は행',
    chars: [
      { char: 'は', roma: 'ha' }, { char: 'ひ', roma: 'hi' }, { char: 'ふ', roma: 'fu' },
      { char: 'へ', roma: 'he' }, { char: 'ほ', roma: 'ho' },
    ],
  },
  {
    label: 'ま행',
    chars: [
      { char: 'ま', roma: 'ma' }, { char: 'み', roma: 'mi' }, { char: 'む', roma: 'mu' },
      { char: 'め', roma: 'me' }, { char: 'も', roma: 'mo' },
    ],
  },
  {
    label: 'や행',
    chars: [
      { char: 'や', roma: 'ya' }, { char: 'ゆ', roma: 'yu' }, { char: 'よ', roma: 'yo' },
    ],
  },
  {
    label: 'ら행',
    chars: [
      { char: 'ら', roma: 'ra' }, { char: 'り', roma: 'ri' }, { char: 'る', roma: 'ru' },
      { char: 'れ', roma: 're' }, { char: 'ろ', roma: 'ro' },
    ],
  },
  {
    label: 'わ행 + ん',
    chars: [
      { char: 'わ', roma: 'wa' }, { char: 'を', roma: 'wo' }, { char: 'ん', roma: 'n' },
    ],
  },
  {
    label: 'が행 (탁음)',
    chars: [
      { char: 'が', roma: 'ga' }, { char: 'ぎ', roma: 'gi' }, { char: 'ぐ', roma: 'gu' },
      { char: 'げ', roma: 'ge' }, { char: 'ご', roma: 'go' },
    ],
  },
  {
    label: 'ざ행 (탁음)',
    chars: [
      { char: 'ざ', roma: 'za' }, { char: 'じ', roma: 'ji' }, { char: 'ず', roma: 'zu' },
      { char: 'ぜ', roma: 'ze' }, { char: 'ぞ', roma: 'zo' },
    ],
  },
  {
    label: 'だ행 (탁음)',
    chars: [
      { char: 'だ', roma: 'da' }, { char: 'ぢ', roma: 'di' }, { char: 'づ', roma: 'du' },
      { char: 'で', roma: 'de' }, { char: 'ど', roma: 'do' },
    ],
  },
  {
    label: 'ば행 (탁음)',
    chars: [
      { char: 'ば', roma: 'ba' }, { char: 'び', roma: 'bi' }, { char: 'ぶ', roma: 'bu' },
      { char: 'べ', roma: 'be' }, { char: 'ぼ', roma: 'bo' },
    ],
  },
  {
    label: 'ぱ행 (반탁음)',
    chars: [
      { char: 'ぱ', roma: 'pa' }, { char: 'ぴ', roma: 'pi' }, { char: 'ぷ', roma: 'pu' },
      { char: 'ぺ', roma: 'pe' }, { char: 'ぽ', roma: 'po' },
    ],
  },
  {
    label: 'きゃ행 (요음)',
    chars: [
      { char: 'きゃ', roma: 'kya' }, { char: 'きゅ', roma: 'kyu' }, { char: 'きょ', roma: 'kyo' },
    ],
  },
  {
    label: 'しゃ행 (요음)',
    chars: [
      { char: 'しゃ', roma: 'sha' }, { char: 'しゅ', roma: 'shu' }, { char: 'しょ', roma: 'sho' },
    ],
  },
  {
    label: 'ちゃ행 (요음)',
    chars: [
      { char: 'ちゃ', roma: 'cha' }, { char: 'ちゅ', roma: 'chu' }, { char: 'ちょ', roma: 'cho' },
    ],
  },
  {
    label: 'にゃ행 (요음)',
    chars: [
      { char: 'にゃ', roma: 'nya' }, { char: 'にゅ', roma: 'nyu' }, { char: 'にょ', roma: 'nyo' },
    ],
  },
  {
    label: 'ひゃ행 (요음)',
    chars: [
      { char: 'ひゃ', roma: 'hya' }, { char: 'ひゅ', roma: 'hyu' }, { char: 'ひょ', roma: 'hyo' },
    ],
  },
  {
    label: 'みゃ행 (요음)',
    chars: [
      { char: 'みゃ', roma: 'mya' }, { char: 'みゅ', roma: 'myu' }, { char: 'みょ', roma: 'myo' },
    ],
  },
  {
    label: 'りゃ행 (요음)',
    chars: [
      { char: 'りゃ', roma: 'rya' }, { char: 'りゅ', roma: 'ryu' }, { char: 'りょ', roma: 'ryo' },
    ],
  },
  {
    label: 'ぎゃ행 (탁음 요음)',
    chars: [
      { char: 'ぎゃ', roma: 'gya' }, { char: 'ぎゅ', roma: 'gyu' }, { char: 'ぎょ', roma: 'gyo' },
    ],
  },
  {
    label: 'じゃ행 (탁음 요음)',
    chars: [
      { char: 'じゃ', roma: 'ja' }, { char: 'じゅ', roma: 'ju' }, { char: 'じょ', roma: 'jo' },
    ],
  },
  {
    label: 'びゃ행 (탁음 요음)',
    chars: [
      { char: 'びゃ', roma: 'bya' }, { char: 'びゅ', roma: 'byu' }, { char: 'びょ', roma: 'byo' },
    ],
  },
  {
    label: 'ぴゃ행 (반탁음 요음)',
    chars: [
      { char: 'ぴゃ', roma: 'pya' }, { char: 'ぴゅ', roma: 'pyu' }, { char: 'ぴょ', roma: 'pyo' },
    ],
  },
];

// ───── 가타카나 그룹 ─────
const KATAKANA_GROUPS: KanaGroup[] = [
  {
    label: 'ア행',
    chars: [
      { char: 'ア', roma: 'a' }, { char: 'イ', roma: 'i' }, { char: 'ウ', roma: 'u' },
      { char: 'エ', roma: 'e' }, { char: 'オ', roma: 'o' },
    ],
  },
  {
    label: 'カ행',
    chars: [
      { char: 'カ', roma: 'ka' }, { char: 'キ', roma: 'ki' }, { char: 'ク', roma: 'ku' },
      { char: 'ケ', roma: 'ke' }, { char: 'コ', roma: 'ko' },
    ],
  },
  {
    label: 'サ행',
    chars: [
      { char: 'サ', roma: 'sa' }, { char: 'シ', roma: 'shi' }, { char: 'ス', roma: 'su' },
      { char: 'セ', roma: 'se' }, { char: 'ソ', roma: 'so' },
    ],
  },
  {
    label: 'タ행',
    chars: [
      { char: 'タ', roma: 'ta' }, { char: 'チ', roma: 'chi' }, { char: 'ツ', roma: 'tsu' },
      { char: 'テ', roma: 'te' }, { char: 'ト', roma: 'to' },
    ],
  },
  {
    label: 'ナ행',
    chars: [
      { char: 'ナ', roma: 'na' }, { char: 'ニ', roma: 'ni' }, { char: 'ヌ', roma: 'nu' },
      { char: 'ネ', roma: 'ne' }, { char: 'ノ', roma: 'no' },
    ],
  },
  {
    label: 'ハ행',
    chars: [
      { char: 'ハ', roma: 'ha' }, { char: 'ヒ', roma: 'hi' }, { char: 'フ', roma: 'fu' },
      { char: 'ヘ', roma: 'he' }, { char: 'ホ', roma: 'ho' },
    ],
  },
  {
    label: 'マ행',
    chars: [
      { char: 'マ', roma: 'ma' }, { char: 'ミ', roma: 'mi' }, { char: 'ム', roma: 'mu' },
      { char: 'メ', roma: 'me' }, { char: 'モ', roma: 'mo' },
    ],
  },
  {
    label: 'ヤ행',
    chars: [
      { char: 'ヤ', roma: 'ya' }, { char: 'ユ', roma: 'yu' }, { char: 'ヨ', roma: 'yo' },
    ],
  },
  {
    label: 'ラ행',
    chars: [
      { char: 'ラ', roma: 'ra' }, { char: 'リ', roma: 'ri' }, { char: 'ル', roma: 'ru' },
      { char: 'レ', roma: 're' }, { char: 'ロ', roma: 'ro' },
    ],
  },
  {
    label: 'ワ행 + ン',
    chars: [
      { char: 'ワ', roma: 'wa' }, { char: 'ヲ', roma: 'wo' }, { char: 'ン', roma: 'n' },
    ],
  },
  {
    label: 'ガ행 (탁음)',
    chars: [
      { char: 'ガ', roma: 'ga' }, { char: 'ギ', roma: 'gi' }, { char: 'グ', roma: 'gu' },
      { char: 'ゲ', roma: 'ge' }, { char: 'ゴ', roma: 'go' },
    ],
  },
  {
    label: 'ザ행 (탁음)',
    chars: [
      { char: 'ザ', roma: 'za' }, { char: 'ジ', roma: 'ji' }, { char: 'ズ', roma: 'zu' },
      { char: 'ゼ', roma: 'ze' }, { char: 'ゾ', roma: 'zo' },
    ],
  },
  {
    label: 'ダ행 (탁음)',
    chars: [
      { char: 'ダ', roma: 'da' }, { char: 'ヂ', roma: 'di' }, { char: 'ヅ', roma: 'du' },
      { char: 'デ', roma: 'de' }, { char: 'ド', roma: 'do' },
    ],
  },
  {
    label: 'バ행 (탁음)',
    chars: [
      { char: 'バ', roma: 'ba' }, { char: 'ビ', roma: 'bi' }, { char: 'ブ', roma: 'bu' },
      { char: 'ベ', roma: 'be' }, { char: 'ボ', roma: 'bo' },
    ],
  },
  {
    label: 'パ행 (반탁음)',
    chars: [
      { char: 'パ', roma: 'pa' }, { char: 'ピ', roma: 'pi' }, { char: 'プ', roma: 'pu' },
      { char: 'ペ', roma: 'pe' }, { char: 'ポ', roma: 'po' },
    ],
  },
  {
    label: 'キャ행 (요음)',
    chars: [
      { char: 'キャ', roma: 'kya' }, { char: 'キュ', roma: 'kyu' }, { char: 'キョ', roma: 'kyo' },
    ],
  },
  {
    label: 'シャ행 (요음)',
    chars: [
      { char: 'シャ', roma: 'sha' }, { char: 'シュ', roma: 'shu' }, { char: 'ショ', roma: 'sho' },
    ],
  },
  {
    label: 'チャ행 (요음)',
    chars: [
      { char: 'チャ', roma: 'cha' }, { char: 'チュ', roma: 'chu' }, { char: 'チョ', roma: 'cho' },
    ],
  },
  {
    label: 'ニャ행 (요음)',
    chars: [
      { char: 'ニャ', roma: 'nya' }, { char: 'ニュ', roma: 'nyu' }, { char: 'ニョ', roma: 'nyo' },
    ],
  },
  {
    label: 'ヒャ행 (요음)',
    chars: [
      { char: 'ヒャ', roma: 'hya' }, { char: 'ヒュ', roma: 'hyu' }, { char: 'ヒョ', roma: 'hyo' },
    ],
  },
  {
    label: 'ミャ행 (요음)',
    chars: [
      { char: 'ミャ', roma: 'mya' }, { char: 'ミュ', roma: 'myu' }, { char: 'ミョ', roma: 'myo' },
    ],
  },
  {
    label: 'リャ행 (요음)',
    chars: [
      { char: 'リャ', roma: 'rya' }, { char: 'リュ', roma: 'ryu' }, { char: 'リョ', roma: 'ryo' },
    ],
  },
  {
    label: 'ギャ행 (탁음 요음)',
    chars: [
      { char: 'ギャ', roma: 'gya' }, { char: 'ギュ', roma: 'gyu' }, { char: 'ギョ', roma: 'gyo' },
    ],
  },
  {
    label: 'ジャ행 (탁음 요음)',
    chars: [
      { char: 'ジャ', roma: 'ja' }, { char: 'ジュ', roma: 'ju' }, { char: 'ジョ', roma: 'jo' },
    ],
  },
  {
    label: 'ビャ행 (탁음 요음)',
    chars: [
      { char: 'ビャ', roma: 'bya' }, { char: 'ビュ', roma: 'byu' }, { char: 'ビョ', roma: 'byo' },
    ],
  },
  {
    label: 'ピャ행 (반탁음 요음)',
    chars: [
      { char: 'ピャ', roma: 'pya' }, { char: 'ピュ', roma: 'pyu' }, { char: 'ピョ', roma: 'pyo' },
    ],
  },
  // 외래어 특수음
  {
    label: '특수음 (외래어)',
    chars: [
      { char: 'ファ', roma: 'fa' }, { char: 'フィ', roma: 'fi' }, { char: 'フェ', roma: 'fe' },
      { char: 'フォ', roma: 'fo' }, { char: 'ウィ', roma: 'wi' },
      { char: 'ヴァ', roma: 'va' }, { char: 'ヴィ', roma: 'vi' }, { char: 'ヴ', roma: 'vu' },
      { char: 'ヴェ', roma: 've' }, { char: 'ヴォ', roma: 'vo' },
    ],
  },
];

type KanaType = 'hiragana' | 'katakana';
type Mode = 'chart' | 'quiz';
type QuizDirection = 'kana-to-roma' | 'roma-to-kana';

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const TOTAL_QUIZ = 20;

// 그룹 유형별 색상
function groupColor(label: string) {
  if (label.includes('탁음') && label.includes('요음')) return 'rgba(251,191,36,0.08)';
  if (label.includes('반탁음')) return 'rgba(249,168,212,0.08)';
  if (label.includes('탁음')) return 'rgba(167,139,250,0.08)';
  if (label.includes('요음')) return 'rgba(110,231,183,0.08)';
  if (label.includes('특수음')) return 'rgba(251,146,60,0.08)';
  return 'rgba(99,179,237,0.04)';
}
function groupBorderColor(label: string) {
  if (label.includes('탁음') && label.includes('요음')) return 'rgba(251,191,36,0.25)';
  if (label.includes('반탁음')) return 'rgba(249,168,212,0.25)';
  if (label.includes('탁음')) return 'rgba(167,139,250,0.25)';
  if (label.includes('요음')) return 'rgba(110,231,183,0.25)';
  if (label.includes('특수음')) return 'rgba(251,146,60,0.25)';
  return 'rgba(99,179,237,0.12)';
}

function groupRomaHint(chars: KanaChar[]): string {
  return chars.map(c => c.roma).join(' · ');
}

// ───── Chart Component ─────
function KanaChart({ groups }: { groups: KanaGroup[] }) {
  return (
    <div className="kana-chart">
      {groups.map(group => (
        <div
          key={group.label}
          className="kana-group"
          style={{
            background: groupColor(group.label),
            borderColor: groupBorderColor(group.label),
          }}
        >
          <div className="kana-group-head">
            <span className="kana-group-label">{group.label}</span>
            <span className="kana-group-roma">{groupRomaHint(group.chars)}</span>
          </div>
          <div className="kana-group-grid">
            {group.chars.map(h => (
              <div
                key={h.char}
                className="hiragana-cell"
                onClick={() => speakJapanese(h.char)}
                title={`${h.char} → ${h.roma}`}
              >
                <span className="hira-char">{h.char}</span>
                <span className="hira-roma">{h.roma}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// ───── Main Component ─────
export default function KanaQuiz({ onBack, onRecord }: KanaQuizProps) {
  const [kanaType, setKanaType] = useState<KanaType>('hiragana');
  const [mode, setMode] = useState<Mode>('chart');
  const [direction, setDirection] = useState<QuizDirection>('kana-to-roma');

  // Quiz state
  const [queue, setQueue] = useState<KanaChar[]>([]);
  const [current, setCurrent] = useState(0);
  const [options, setOptions] = useState<KanaChar[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const activeGroups = kanaType === 'hiragana' ? HIRAGANA_GROUPS : KATAKANA_GROUPS;
  const allChars = activeGroups.flatMap(g => g.chars);

  function getOptions(correct: KanaChar): KanaChar[] {
    const others = shuffle(allChars.filter(h => h.char !== correct.char)).slice(0, 3);
    return shuffle([correct, ...others]);
  }

  const startQuiz = useCallback(() => {
    const q = shuffle(allChars).slice(0, TOTAL_QUIZ);
    setQueue(q);
    setCurrent(0);
    setOptions(getOptions(q[0]));
    setSelected(null);
    setAnswered(false);
    setScore(0);
    setDone(false);
    setMode('quiz');
  }, [allChars]);

  const handleSelect = (val: string) => {
    if (answered) return;
    setSelected(val);
    setAnswered(true);
    const correctVal = direction === 'kana-to-roma' ? queue[current].roma : queue[current].char;
    const isCorrect = val === correctVal;
    if (isCorrect) setScore(s => s + 1);
    onRecord(isCorrect);
    speakJapanese(queue[current].char);
  };

  const handleNext = () => {
    if (current + 1 >= TOTAL_QUIZ) { setDone(true); return; }
    const next = current + 1;
    setCurrent(next);
    setOptions(getOptions(queue[next]));
    setSelected(null);
    setAnswered(false);
  };

  // ── Score Screen ──
  if (done) {
    const pct = Math.round((score / TOTAL_QUIZ) * 100);
    return (
      <div className="quiz-page fade-up">
        <div className="score-screen">
          <div className="score-big">{pct}%</div>
          <div className="score-label">
            {TOTAL_QUIZ}문제 중 {score}개 정답!{' '}
            {pct >= 80 ? '🎉 훌륭해요!' : pct >= 60 ? '👍 좋아요!' : '💪 더 연습해봐요!'}
          </div>
          <div className="score-actions">
            <button className="btn-primary" onClick={startQuiz}>다시 퀴즈</button>
            <button className="btn-secondary" onClick={() => { setMode('chart'); setDone(false); }}>차트 보기</button>
            <button className="btn-secondary" onClick={onBack}>홈으로</button>
          </div>
        </div>
      </div>
    );
  }

  // ── Quiz Screen ──
  if (mode === 'quiz') {
    const q = queue[current];
    const correctVal = direction === 'kana-to-roma' ? q.roma : q.char;
    const progress = (current / TOTAL_QUIZ) * 100;

    return (
      <div className="quiz-page fade-up">
        <div className="quiz-header">
          <button className="back-btn" onClick={() => setMode('chart')}>← 차트</button>
          <div className="quiz-title">
            <h1>{kanaType === 'hiragana' ? '히라가나' : '가타카나'} 퀴즈</h1>
            <p>{direction === 'kana-to-roma' ? '문자를 보고 로마자를 선택하세요' : '로마자를 보고 문자를 선택하세요'}</p>
          </div>
        </div>

        <div className="progress-bar-wrap">
          <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
        </div>

        <div className="quiz-card pop-in">
          <div
            className="question-jp"
            style={{ fontSize: direction === 'roma-to-kana' ? '2rem' : '4rem' }}
            onClick={() => speakJapanese(q.char)}
          >
            {direction === 'kana-to-roma' ? q.char : q.roma}
          </div>
          <button className="speak-btn" onClick={() => speakJapanese(q.char)}>🔊 발음 듣기</button>
          <div className="quiz-counter">{current + 1} / {TOTAL_QUIZ} · 점수: {score}</div>
        </div>

        {answered && (
          <div className={`result-banner ${selected === correctVal ? 'correct-banner' : 'wrong-banner'}`}>
            {selected === correctVal
              ? '✅ 정답!'
              : `❌ 오답! 정답: ${direction === 'kana-to-roma' ? q.roma : q.char}`}
          </div>
        )}

        <div className="options-grid">
          {options.map(opt => {
            const val = direction === 'kana-to-roma' ? opt.roma : opt.char;
            let cls = 'option-btn';
            if (answered) {
              if (val === correctVal) cls += ' correct';
              else if (val === selected) cls += ' wrong';
            }
            return (
              <button
                key={val}
                className={cls}
                onClick={() => handleSelect(val)}
                disabled={answered}
              >
                {val}
              </button>
            );
          })}
        </div>

        {answered && (
          <button className="next-btn" style={{ marginTop: '1rem' }} onClick={handleNext}>
            {current + 1 >= TOTAL_QUIZ ? '결과 보기' : '다음 문제 →'}
          </button>
        )}
      </div>
    );
  }

  // ── Chart Screen (default) ──
  return (
    <div className="quiz-page fade-up">
      <div className="quiz-header">
        <button className="back-btn" onClick={onBack}>← 뒤로</button>
        <div className="quiz-title">
          <h1>가나 차트 & 퀴즈</h1>
          <p>글자를 클릭하면 발음을 들을 수 있어요</p>
        </div>
      </div>

      {/* Kana type tabs */}
      <div className="kana-type-tabs">
        <button
          className={`level-tab ${kanaType === 'hiragana' ? 'active-tab' : ''}`}
          onClick={() => setKanaType('hiragana')}
        >
          ひ 히라가나
        </button>
        <button
          className={`level-tab ${kanaType === 'katakana' ? 'active-tab' : ''}`}
          onClick={() => setKanaType('katakana')}
        >
          カ 가타카나
        </button>
      </div>

      {/* Legend */}
      <div className="kana-legend">
        {[
          { label: '기본음', color: 'rgba(99,179,237,0.35)' },
          { label: '탁음', color: 'rgba(167,139,250,0.5)' },
          { label: '반탁음', color: 'rgba(249,168,212,0.5)' },
          { label: '요음', color: 'rgba(110,231,183,0.5)' },
          { label: '탁음+요음', color: 'rgba(251,191,36,0.5)' },
          ...(kanaType === 'katakana' ? [{ label: '특수음', color: 'rgba(251,146,60,0.5)' }] : []),
        ].map(item => (
          <div key={item.label} className="kana-legend-item">
            <span className="kana-legend-swatch" style={{ background: item.color }} />
            {item.label}
          </div>
        ))}
      </div>

      {/* Chart (목록 우선) */}
      <KanaChart groups={activeGroups} />

      {/* Quiz (차트 아래) */}
      <section className="kana-quiz-panel">
        <h2 className="kana-quiz-panel-title">퀴즈</h2>
        <p className="kana-quiz-panel-desc">
          차트로 익힌 뒤 {TOTAL_QUIZ}문제로 복습해 보세요
        </p>
        <div className="kana-quiz-panel-actions">
          <select
            className="kana-quiz-select"
            value={direction}
            onChange={e => setDirection(e.target.value as QuizDirection)}
          >
            <option value="kana-to-roma">가나 → 로마자</option>
            <option value="roma-to-kana">로마자 → 가나</option>
          </select>
          <button className="btn-primary" onClick={startQuiz}>
            퀴즈 시작 ({TOTAL_QUIZ}문제)
          </button>
        </div>
      </section>
    </div>
  );
}
