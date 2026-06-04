const VOICE_PREF_KEY = 'japanese-tts-voice-uri';

const PREFERRED_VOICE_PATTERNS = [
  /natural|neural|premium|enhanced|online/i,
  /google.*japan|google.*日本/i,
  /nanami|haruka|ayumi|ichiro|keita|kyoko|otoya|sakura/i,
  /microsoft.*japan|microsoft.*日本/i,
];

function scoreVoice(voice: SpeechSynthesisVoice): number {
  if (!voice.lang.toLowerCase().startsWith('ja')) return -1;
  let score = 0;
  const label = `${voice.name} ${voice.voiceURI}`;
  PREFERRED_VOICE_PATTERNS.forEach((pattern, i) => {
    if (pattern.test(label)) score += (PREFERRED_VOICE_PATTERNS.length - i) * 10;
  });
  if (!voice.default) score += 2;
  return score;
}

function pickBestJapaneseVoice(voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | null {
  const ja = voices.filter(v => v.lang.toLowerCase().startsWith('ja'));
  if (!ja.length) return null;

  const savedUri = localStorage.getItem(VOICE_PREF_KEY);
  if (savedUri) {
    const saved = ja.find(v => v.voiceURI === savedUri);
    if (saved) return saved;
  }

  return ja.reduce((best, v) => (scoreVoice(v) > scoreVoice(best) ? v : best), ja[0]);
}

let voicesPromise: Promise<SpeechSynthesisVoice[]> | null = null;

function loadVoices(): Promise<SpeechSynthesisVoice[]> {
  if (voicesPromise) return voicesPromise;

  voicesPromise = new Promise(resolve => {
    const read = () => resolve(speechSynthesis.getVoices());

    if (speechSynthesis.getVoices().length > 0) {
      read();
      return;
    }

    const onChange = () => {
      speechSynthesis.removeEventListener('voiceschanged', onChange);
      read();
    };
    speechSynthesis.addEventListener('voiceschanged', onChange);
    setTimeout(read, 300);
  });

  return voicesPromise;
}

export function listJapaneseVoices(): SpeechSynthesisVoice[] {
  return speechSynthesis.getVoices().filter(v => v.lang.toLowerCase().startsWith('ja'));
}

export function setPreferredVoiceUri(uri: string | null) {
  if (uri) localStorage.setItem(VOICE_PREF_KEY, uri);
  else localStorage.removeItem(VOICE_PREF_KEY);
}

export function getPreferredVoiceUri(): string | null {
  return localStorage.getItem(VOICE_PREF_KEY);
}

/** 일본어 발음 — 읽기(히라가나)가 있으면 우선 사용 */
export async function speakJapanese(text: string, reading?: string) {
  const phrase = (reading?.trim() || text).trim();
  if (!phrase || !('speechSynthesis' in window)) return;

  window.speechSynthesis.cancel();

  const voices = await loadVoices();
  const voice = pickBestJapaneseVoice(voices);

  const utter = new SpeechSynthesisUtterance(phrase);
  utter.lang = 'ja-JP';
  if (voice) utter.voice = voice;
  utter.rate = 0.95;
  utter.pitch = 1.0;
  utter.volume = 1;

  window.speechSynthesis.speak(utter);
}

/** @deprecated speakJapanese 사용 권장 */
export function speak(text: string, lang: string = 'ja-JP') {
  void speakJapanese(text);
  void lang;
}

if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  void loadVoices();
}
