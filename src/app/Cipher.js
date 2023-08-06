"use client";
import React, { useState } from 'react';
import './Cipher.css';

export default function CipherShift() {
  const [inputText, setInputText] = useState('');
  const [key, setKey] = useState(0);
  const [cipherText, setCipherText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleKeyChange = (event) => {
    setKey(parseInt(event.target.value));
  };

  const encryptText = () => {
    let result = '';
    for (let i = 0; i < inputText.length; i++) {
      const char = inputText.charAt(i);
      const charCode = char.charCodeAt(0);

      // For Hindi, the Unicode range for Devanagari script is 2304 to 2431.
      if (charCode >= 2304 && charCode <= 2431) {
        const encryptedCharCode = charCode + key;
        result += String.fromCharCode(encryptedCharCode);
      } else {
        result += char;
      }
    }
    setCipherText(result);
  };

  return (
    <>
      <div className="headingCipher">SHIFT CIPHER IMPLEMENTATION</div>
      <div className="bigContainer">
        <label htmlFor="PlainTextInput">Input your Text here!</label>
        <input type="text" id="PlainTextInput" value={inputText} onChange={handleInputChange} />

        <label htmlFor="PlainTextKey">Enter Key Value!</label>
        <input type="number" id="PlainTextKey" value={key} onChange={handleKeyChange} />

        <div className="outputResult">{cipherText}</div>

        <button onClick={encryptText}>Encrypt</button>
      </div>
    </>
  );
}
