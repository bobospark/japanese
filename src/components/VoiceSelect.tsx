import { useEffect, useState } from 'react';
import {
  getPreferredVoiceUri,
  listJapaneseVoices,
  setPreferredVoiceUri,
  speakJapanese,
} from '../utils/tts';

export default function VoiceSelect() {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selected, setSelected] = useState(getPreferredVoiceUri() ?? '');

  useEffect(() => {
    const refresh = () => setVoices(listJapaneseVoices());
    refresh();
    speechSynthesis.addEventListener('voiceschanged', refresh);
    return () => speechSynthesis.removeEventListener('voiceschanged', refresh);
  }, []);

  if (voices.length === 0) return null;

  return (
    <div className="voice-select" title="일본어 음성 (Chrome·Edge에서 더 자연스러움)">
      <label className="voice-select-label" htmlFor="tts-voice">🔊</label>
      <select
        id="tts-voice"
        className="voice-select-input"
        value={selected}
        onChange={e => {
          const uri = e.target.value;
          setSelected(uri);
          setPreferredVoiceUri(uri || null);
          void speakJapanese('あ');
        }}
      >
        <option value="">자동 (Natural/Google 우선)</option>
        {voices.map(v => (
          <option key={v.voiceURI} value={v.voiceURI}>
            {v.name}
          </option>
        ))}
      </select>
    </div>
  );
}
