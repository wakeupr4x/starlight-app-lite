import { useEffect, useState } from 'react';

export function useTypewriter(text: string, speed: number = 100, delay: number = 500) {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopCount, setLoopCount] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (!isDeleting && displayedText === text) {
      // Pause at full text before starting to delete
      timer = setTimeout(() => setIsDeleting(true), delay);
    } else if (isDeleting && displayedText === '') {
      // Pause at empty text before starting to type again
      setIsDeleting(false);
      setLoopCount((prev) => prev + 1);
      timer = setTimeout(() => {}, delay);
    } else {
      // Typing or deleting
      timer = setTimeout(() => {
        if (isDeleting) {
          setDisplayedText((prev) => prev.slice(0, -1));
        } else {
          setDisplayedText((prev) => text.slice(0, prev.length + 1));
        }
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, text, speed, delay]);

  return { displayedText, isDeleting, loopCount };
}
