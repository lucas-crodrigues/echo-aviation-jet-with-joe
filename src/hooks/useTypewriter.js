// src/hooks/useTypewriter.js
import { useEffect, useState } from "react";

const useTypewriter = (words, delay = 150) => {
  const [text, setText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(delay);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[currentWordIndex];

      if (isDeleting) {
        setText((prev) => prev.slice(0, prev.length - 1));
      } else {
        setText((prev) => currentWord.slice(0, prev.length + 1));
      }

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) =>
          prev === words.length - 1 ? 0 : prev + 1
        );
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, speed, currentWordIndex, words]);

  return text;
};

export default useTypewriter;
