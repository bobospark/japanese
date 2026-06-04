export function speak(text: string, lang: string = 'ja-JP') {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = lang;
  utter.rate = 0.85;
  utter.pitch = 1.0;
  window.speechSynthesis.speak(utter);
}
