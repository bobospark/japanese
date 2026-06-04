import type { HistoryEntry, StudyStats } from '../hooks/useStudyState';

type Page =
  | 'home'
  | 'hiragana'
  | 'vocab-quiz'
  | 'vocab-browse'
  | 'sentence-quiz'
  | 'sentence-browse'
  | 'saved';

interface DashboardProps {
  history: HistoryEntry[];
  stats: StudyStats;
  savedCount: number;
  onNavigate: (page: Page) => void;
}

const PAGE_LABELS: Record<Page, string> = {
  home: '홈',
  hiragana: '가나 차트',
  'vocab-quiz': '단어 퀴즈',
  'vocab-browse': '단어 목록',
  'sentence-quiz': '문장 순서 배열',
  'sentence-browse': '문장 목록',
  saved: '저장된 항목',
};

const BEGINNER_CARDS = [
  { page: 'hiragana' as Page, icon: 'あ', label: '가나 차트', desc: '히라가나·가타카나 5글자 묶음 & 퀴즈', badge: 'beginner' },
  { page: 'vocab-quiz' as Page, icon: '📝', label: '단어 퀴즈', desc: '뜻 맞히기 퀴즈 (초급/중급)', badge: 'beginner' },
  { page: 'vocab-browse' as Page, icon: '📖', label: '단어 목록', desc: '1000+ 단어 검색 & 저장', badge: 'beginner' },
  { page: 'sentence-quiz' as Page, icon: '🧩', label: '문장 순서 배열', desc: '단어 클릭으로 문장 만들기', badge: 'beginner' },
  { page: 'sentence-browse' as Page, icon: '💬', label: '문장 목록', desc: '500+ 문장 검색 & 저장', badge: 'intermediate' },
];

export default function Dashboard({ history, stats, savedCount, onNavigate }: DashboardProps) {
  const hiraganaAcc = stats.hiraganaTotal > 0
    ? Math.round((stats.hiraganaCorrect / stats.hiraganaTotal) * 100)
    : null;
  const vocabAcc = stats.vocabTotal > 0
    ? Math.round((stats.vocabCorrect / stats.vocabTotal) * 100)
    : null;
  const sentenceAcc = stats.sentenceTotal > 0
    ? Math.round((stats.sentenceCorrect / stats.sentenceTotal) * 100)
    : null;

  return (
    <div className="fade-up">
      {/* Hero */}
      <div className="dashboard-hero">
        <h1>日本語 学習</h1>
        <p>일본어를 재미있고 효율적으로 배워보세요 🎌</p>
      </div>

      {/* Stats */}
      <div className="stats-row">
        <div className="stat-card">
          <div className="stat-value">
            {hiraganaAcc !== null ? `${hiraganaAcc}%` : '—'}
          </div>
          <div className="stat-label">가나 퀴즈 정확도 ({stats.hiraganaTotal}문제)</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">
            {vocabAcc !== null ? `${vocabAcc}%` : '—'}
          </div>
          <div className="stat-label">단어 퀴즈 정확도 ({stats.vocabTotal}문제)</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">
            {sentenceAcc !== null ? `${sentenceAcc}%` : '—'}
          </div>
          <div className="stat-label">문장 배열 정확도 ({stats.sentenceTotal}문제)</div>
        </div>
      </div>

      {/* Recent history */}
      {history.length > 0 && (
        <div className="history-section">
          <h2>📌 최근 방문</h2>
          <div className="history-list">
            {history.slice(0, 8).map(h => (
              <button
                key={h.page}
                className="history-chip"
                onClick={() => onNavigate(h.page as Page)}
              >
                {PAGE_LABELS[h.page as Page] ?? h.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Menu cards */}
      <div className="menu-section">
        <h2>🎯 학습 메뉴</h2>
        <div className="menu-grid">
          {BEGINNER_CARDS.map(card => (
            <div
              key={card.page}
              className="menu-card"
              onClick={() => onNavigate(card.page)}
            >
              <span className="card-icon">{card.icon}</span>
              <h3>{card.label}</h3>
              <p>{card.desc}</p>
              <span className={`card-badge badge-${card.badge}`}>
                {card.badge === 'beginner' ? '초급' : '중급'}
              </span>
            </div>
          ))}
          <div className="menu-card" onClick={() => onNavigate('saved')}>
            <span className="card-icon">⭐</span>
            <h3>저장된 항목</h3>
            <p>저장한 단어와 문장 {savedCount > 0 ? `${savedCount}개` : ''}</p>
            {savedCount > 0 && (
              <span
                style={{
                  position: 'absolute', top: '1rem', right: '1rem',
                  background: 'rgba(251,191,36,0.15)', color: 'var(--accent-orange)',
                  padding: '2px 10px', borderRadius: '99px', fontSize: '0.72rem', fontWeight: 700
                }}
              >
                {savedCount}개
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Tips */}
      <div style={{
        background: 'var(--bg-card)', border: '1px solid var(--border)',
        borderRadius: 'var(--radius-lg)', padding: '1.5rem', marginTop: '1rem'
      }}>
        <h2 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
          💡 학습 팁
        </h2>
        <ul style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', display: 'grid', gap: '0.4rem', paddingLeft: '1.25rem' }}>
          <li>가나 차트에서 글자를 클릭하면 발음을 들을 수 있어요 (히라가나·가타카나)</li>
          <li>퀴즈 중 ☆ 버튼으로 어려운 단어/문장을 저장해두세요</li>
          <li>단어와 문장을 클릭하면 일본어 TTS로 발음을 확인할 수 있어요</li>
          <li>매일 꾸준히 연습하면 실력이 빠르게 향상돼요</li>
        </ul>
      </div>
    </div>
  );
}
