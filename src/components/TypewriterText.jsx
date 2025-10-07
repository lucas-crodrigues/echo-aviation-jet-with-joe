// src/components/TypewriterText.jsx
import { useState, useEffect, useRef } from "react";

const TypewriterText = ({ words, speed = 150 }) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [maxHeight, setMaxHeight] = useState(0);

  const textRef = useRef(null);

  useEffect(() => {
    // Set the max height dynamically based on the largest word
    const maxWordLength = Math.max(...words.map((word) => word.length));
    setMaxHeight(maxWordLength * 1.2); // Slightly larger for space

    if (subIndex === words[index].length + 1 && !isDeleting) {
      setTimeout(() => setIsDeleting(true), 1000);
    } else if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, speed);

    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting, words, index, speed]);

  return (
    <span
      ref={textRef}
      className="typewriter"
      style={{
        minHeight: `${maxHeight}px`,
        display: "inline-block",
        transition: "all 0.2s ease",
      }}
    >
      {words[index].substring(0, subIndex)}
    </span>
  );
};

export default TypewriterText;
