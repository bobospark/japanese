import { useState } from 'react';
import { speak } from '../utils/tts';
import type { SavedItem } from '../hooks/useStudyState';

interface SavedPageProps {
  savedItems: SavedItem[];
  onRemove: (id: string) => void;
  onBack: () => void;
}

export default function SavedPage({ savedItems, onRemove, onBack }: SavedPageProps) {
  const [filter, setFilter] = useState<'all' | 'word' | 'sentence'>('all');

  const filtered = savedItems.filter(item =>
    filter === 'all' ? true : item.type === filter
  );

  const words = savedItems.filter(i => i.type === 'word').length;
  const sents = savedItems.filter(i => i.type === 'sentence').length;

  return (
    <div className="vocab-page fade-up">
      <div className="quiz-header">
        <button className="back-btn" onClick={onBack}>← 뒤로</button>
        <div className="quiz-title">
          <h1>저장된 항목</h1>
          <p>단어 {words}개 · 문장 {sents}개 저장됨</p>
        </div>
      </div>

      <div className="level-tabs" style={{ marginBottom: '1.5rem' }}>
        {(['all', 'word', 'sentence'] as const).map(f => (
          <button
            key={f}
            className={`level-tab ${filter === f ? 'active-tab' : ''}`}
            onClick={() => setFilter(f)}
          >
            {f === 'all' ? `전체 (${savedItems.length})` : f === 'word' ? `단어 (${words})` : `문장 (${sents})`}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">⭐</div>
          <p>저장된 항목이 없습니다.<br />퀴즈 중 ☆ 버튼을 눌러 단어와 문장을 저장해보세요!</p>
        </div>
      ) : (
        <div className="saved-list">
          {filtered.map(item => (
            <div key={item.id} className="saved-item">
              <span className={`type-badge ${item.type === 'word' ? 'type-word' : 'type-sentence'}`}>
                {item.type === 'word' ? '단어' : '문장'}
              </span>
              <div style={{ flex: 1 }}>
                <div
                  className="saved-jp"
                  onClick={() => speak(item.japanese)}
                  title="클릭하면 발음을 들을 수 있어요"
                >
                  {item.japanese}
                </div>
                <div className="saved-reading">{item.reading}</div>
                <div className="saved-meaning">{item.meaning}</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                  {new Date(item.savedAt).toLocaleDateString('ko-KR', { month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
                <button
                  className="speak-btn"
                  style={{ fontSize: '0.75rem', padding: '4px 10px' }}
                  onClick={() => speak(item.japanese)}
                >
                  🔊
                </button>
                <button className="remove-btn" onClick={() => onRemove(item.id)} title="삭제">
                  ✕
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
