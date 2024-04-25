import React, { useState } from 'react';
import './App.css'

function App() {
  const [sourceText, setSourceText] = useState('');
  const [translatedText, setTranslatedText] = useState('आप कैसे हैं।');
  const [sourceLanguage, setSourceLanguage] = useState('English');
  const [targetLanguage, setTargetLanguage] = useState('French');

  const translateText = () => {
    fetch('http://localhost:8000/translations/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        source_text: sourceText,
        source_language: sourceLanguage,
        target_language: targetLanguage,
      }),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      setTranslatedText(data.target_text);
    })
    .catch(error => {
      console.error('Error translating text:', error);
    });
  };

  return (
    <div className="App">
      <h1>Language Translator</h1>
      <textarea placeholder='Enter your text here...' value={sourceText} onChange={e => setSourceText(e.target.value)} />
      <select value={sourceLanguage} onChange={e => setSourceLanguage(e.target.value)}>
        <option value="English">English</option>
      </select>
      <select value={targetLanguage} onChange={e => setTargetLanguage(e.target.value)}>
        <option value="French">French</option>
        <option value="Hindi">Hindi</option>
        <option value="Spanish">Spanish</option>
      </select>
      <button onClick={translateText}>Translate</button>
      <h1>Translated Text</h1>
      <div>{translatedText}</div>
    </div>
  );
}

export default App;
