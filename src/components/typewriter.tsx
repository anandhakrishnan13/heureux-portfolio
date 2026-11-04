import { useEffect, useState } from "react";

/**
 * Types `words` out sequentially, holding each completed phrase.
 * A single word types once and stays put — no delete/retype churn.
 */
export function Typewriter({
  words,
  className,
  speed = 70,
  hold = 2200,
}: {
  words: string[];
  className?: string;
  speed?: number;
  hold?: number;
}) {
  const [index, setIndex] = useState(0);
  const [length, setLength] = useState(0);

  const word = words[index % words.length] ?? "";
  const complete = length >= word.length;

  useEffect(() => {
    if (complete && words.length === 1) return;
    const t = setTimeout(
      () => {
        if (complete) {
          setIndex((v) => (v + 1) % words.length);
          setLength(0);
        } else {
          setLength((v) => v + 1);
        }
      },
      complete ? hold : speed,
    );
    return () => clearTimeout(t);
  }, [complete, length, words.length, speed, hold]);

  return (
    <span className={className}>
      <span className="sr-only">{words.join(" ")}</span>
      <span aria-hidden="true">
        {word.slice(0, length)}
        <span className="caret" />
      </span>
    </span>
  );
}
