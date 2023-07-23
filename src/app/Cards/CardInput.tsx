'use client';
import { Dispatch, SetStateAction } from 'react';

export interface CardInputProps {
  setCardQty: Dispatch<SetStateAction<string | undefined>>;
}

export function CardInput({ setCardQty }: CardInputProps) {
  function handleChange(value: string) {
    if (value.length > 2) return;
    setCardQty(value);
  }

  return (
    <div className={`my-2 flex items-center gap-2 text-xl`}>
      <label htmlFor="cardQty">Number of cards:</label>
      <input
        className="text-zinc-200 outline-none w-10 p-1 text-center text-bold text-xl bg-transparent border-b-2 border-lime-200"
        name="cardQty"
        id="cardQty"
        type="text"
        maxLength={2}
        min="0"
        max="99"
        step="1"
        placeholder="00"
        pattern="[0-9]{2}"
        onChange={(e) => handleChange(e.target.value)}
        required
      />
    </div>
  );
}
