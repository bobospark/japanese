import { useState, useCallback } from 'react';

export interface HistoryEntry {
  page: string;
  label: string;
  visitedAt: number;
}

export interface SavedItem {
  id: string;
  type: 'word' | 'sentence';
  japanese: string;
  reading: string;
  meaning: string;
  savedAt: number;
}

export interface StudyStats {
  hiraganaCorrect: number;
  hiraganaTotal: number;
  vocabCorrect: number;
  vocabTotal: number;
  sentenceCorrect: number;
  sentenceTotal: number;
}

function loadFromStorage<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function saveToStorage<T>(key: string, value: T): void {
  localStorage.setItem(key, JSON.stringify(value));
}

export function useStudyState() {
  const [history, setHistory] = useState<HistoryEntry[]>(() =>
    loadFromStorage<HistoryEntry[]>('jp_history', [])
  );

  const [savedItems, setSavedItems] = useState<SavedItem[]>(() =>
    loadFromStorage<SavedItem[]>('jp_saved', [])
  );

  const [stats, setStats] = useState<StudyStats>(() =>
    loadFromStorage<StudyStats>('jp_stats', {
      hiraganaCorrect: 0,
      hiraganaTotal: 0,
      vocabCorrect: 0,
      vocabTotal: 0,
      sentenceCorrect: 0,
      sentenceTotal: 0,
    })
  );

  const addHistory = useCallback((page: string, label: string) => {
    setHistory(prev => {
      const filtered = prev.filter(h => h.page !== page);
      const updated = [{ page, label, visitedAt: Date.now() }, ...filtered].slice(0, 20);
      saveToStorage('jp_history', updated);
      return updated;
    });
  }, []);

  const saveItem = useCallback((item: Omit<SavedItem, 'savedAt'>) => {
    setSavedItems(prev => {
      if (prev.some(s => s.id === item.id)) return prev;
      const updated = [{ ...item, savedAt: Date.now() }, ...prev];
      saveToStorage('jp_saved', updated);
      return updated;
    });
  }, []);

  const removeSavedItem = useCallback((id: string) => {
    setSavedItems(prev => {
      const updated = prev.filter(s => s.id !== id);
      saveToStorage('jp_saved', updated);
      return updated;
    });
  }, []);

  const isItemSaved = useCallback(
    (id: string) => savedItems.some(s => s.id === id),
    [savedItems]
  );

  const recordStat = useCallback(
    (type: 'hiragana' | 'vocab' | 'sentence', correct: boolean) => {
      setStats(prev => {
        const updated = { ...prev };
        if (type === 'hiragana') {
          updated.hiraganaTotal += 1;
          if (correct) updated.hiraganaCorrect += 1;
        } else if (type === 'vocab') {
          updated.vocabTotal += 1;
          if (correct) updated.vocabCorrect += 1;
        } else {
          updated.sentenceTotal += 1;
          if (correct) updated.sentenceCorrect += 1;
        }
        saveToStorage('jp_stats', updated);
        return updated;
      });
    },
    []
  );

  return {
    history,
    addHistory,
    savedItems,
    saveItem,
    removeSavedItem,
    isItemSaved,
    stats,
    recordStat,
  };
}
