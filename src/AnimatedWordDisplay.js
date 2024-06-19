import React, { useState, useEffect } from "react";

const AnimatedWordDisplay = ({ word }) => {
  const [displayedWord, setDisplayedWord] = useState("");

  useEffect(() => {
    let currentWord = "";
    let letterIndex = 0;

    const animateLetter = (letter) => {
      if (letter === " ") {
        currentWord += " ";
        setDisplayedWord(currentWord);
        letterIndex++;
        if (letterIndex < word.length) {
          animateLetter(word[letterIndex]);
        }
        return;
      }

      let charCode = 65; // 'A'

      const interval = setInterval(() => {
        if (String.fromCharCode(charCode) === letter) {
          currentWord += letter;
          setDisplayedWord(currentWord);
          clearInterval(interval);
          if (letterIndex < word.length - 1) {
            letterIndex++;
            animateLetter(word[letterIndex]);
          }
        } else {
          setDisplayedWord(currentWord + String.fromCharCode(charCode));
          charCode++;
        }
      }, 10);
    };

    animateLetter(word[letterIndex]);

    return () => {
      // Cleanup function to clear intervals
      letterIndex = word.length;
    };
  }, [word]);

  return <div className="animated-word">{displayedWord}</div>;
};

export default AnimatedWordDisplay;
