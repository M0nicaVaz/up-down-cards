'use client';
import { useState } from 'react';
import { CardInput } from './CardInput';
import { CardList } from './CardList';

export function Cards() {
  const [cardQty, setCardQty] = useState<string>();

  return (
    <div className={`flex flex-col gap-6 items-center justify-center`}>
      <CardInput setCardQty={setCardQty} />
      <CardList size={Number(cardQty)} />
    </div>
  );
}
