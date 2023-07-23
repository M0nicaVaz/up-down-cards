'use client';
import { useEffect, useState } from 'react';

export interface CardListProps {
  size: number;
}

export function CardList({ size }: CardListProps) {
  const [activeCard, setActiveCard] = useState<number>();
  const List = Array.from({ length: size }, (v, i) => i + 1);

  function isCardSelected(card: number) {
    return card === activeCard;
  }

  useEffect(() => {
    if (size === 0) setActiveCard(undefined);
  }, [size]);

  return (
    <ul
      className={`flex [perspective:1000px] flex-wrap px-8 md:px-16 lg:px-[128px] max-w-[1580px] justify-center gap-4`}
    >
      {List.map((card) => (
        <li
          data-testid="card"
          key={card}
          className={`shadow-xl duration-300 cursor-pointer h-24 w-20 border-2 rounded grid place-content-center transition-all  ${
            isCardSelected(card)
              ? 'bg-lime-950 border-lime-200 rotate-180'
              : 'border-lime-600 bg-lime-100 text-zinc-900'
          }`}
          onClick={() => setActiveCard(card)}
        >
          <span className={isCardSelected(card) ? 'rotate-180' : ''}>
            {isCardSelected(card) ? 'up' : 'down'}
          </span>
        </li>
      ))}
    </ul>
  );
}
