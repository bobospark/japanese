import './index.css';
import { useState, useCallback } from 'react';
import { useStudyState } from './hooks/useStudyState';
import Dashboard from './components/Dashboard';
import HiraganaQuiz from './components/HiraganaQuiz';
import VocabQuiz from './components/VocabQuiz';
import SentenceQuiz from './components/SentenceQuiz';
import SavedPage from './components/SavedPage';
import VoiceSelect from './components/VoiceSelect';

type Page =
  | 'home'
  | 'hiragana'
  | 'vocab-quiz'
  | 'vocab-browse'
  | 'sentence-quiz'
  | 'sentence-browse'
  | 'saved';

const NAV_ITEMS: { page: Page; label: string }[] = [
  { page: 'home', label: '홈' },
  { page: 'hiragana', label: '가나' },
  { page: 'vocab-quiz', label: '단어 퀴즈' },
  { page: 'vocab-browse', label: '단어 목록' },
  { page: 'sentence-quiz', label: '문장 배열' },
  { page: 'sentence-browse', label: '문장 목록' },
  { page: 'saved', label: '⭐ 저장' },
];

const PAGE_LABELS: Record<Page, string> = {
  home: '홈',
  hiragana: '가나 차트',
  'vocab-quiz': '단어 퀴즈',
  'vocab-browse': '단어 목록',
  'sentence-quiz': '문장 순서 배열',
  'sentence-browse': '문장 목록',
  saved: '저장된 항목',
};

export default function App() {
  const [page, setPage] = useState<Page>('home');
  const { history, addHistory, savedItems, saveItem, removeSavedItem, isItemSaved, stats, recordStat } =
    useStudyState();

  const navigateTo = useCallback(
    (p: Page) => {
      setPage(p);
      if (p !== 'home') {
        addHistory(p, PAGE_LABELS[p]);
      }
    },
    [addHistory]
  );

  const goHome = () => navigateTo('home');

  return (
    <div className="app-layout">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-logo" onClick={goHome}>
          <span className="jp-char">日</span>
          <span>일본어 학습</span>
        </div>
        <div className="nav-links">
          {NAV_ITEMS.map(item => (
            <button
              key={item.page}
              className={`nav-link ${page === item.page ? 'active' : ''}`}
              onClick={() => navigateTo(item.page)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <VoiceSelect />
        <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
          저장 {savedItems.length}개
        </div>
      </nav>

      {/* Page Content */}
      <main className="page-content">
        {page === 'home' && (
          <Dashboard
            history={history}
            stats={stats}
            savedCount={savedItems.length}
            onNavigate={navigateTo}
          />
        )}

        {page === 'hiragana' && (
          <HiraganaQuiz
            onBack={goHome}
            onRecord={correct => recordStat('hiragana', correct)}
          />
        )}

        {(page === 'vocab-quiz' || page === 'vocab-browse') && (
          <VocabQuiz
            onBack={goHome}
            onRecord={correct => recordStat('vocab', correct)}
            onSave={saveItem}
            onRemoveSave={removeSavedItem}
            isSaved={isItemSaved}
            mode={page === 'vocab-quiz' ? 'quiz' : 'browse'}
          />
        )}

        {(page === 'sentence-quiz' || page === 'sentence-browse') && (
          <SentenceQuiz
            onBack={goHome}
            onRecord={correct => recordStat('sentence', correct)}
            onSave={saveItem}
            onRemoveSave={removeSavedItem}
            isSaved={isItemSaved}
            mode={page === 'sentence-quiz' ? 'quiz' : 'browse'}
          />
        )}

        {page === 'saved' && (
          <SavedPage
            savedItems={savedItems}
            onRemove={removeSavedItem}
            onBack={goHome}
          />
        )}
      </main>
    </div>
  );
}
