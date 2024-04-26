'use client'

import React from 'react';

export default function UnitTag({ icon, text, isSelected, onSelect }) {
  const bgColor = isSelected ? 'bg-mainPurple-100' : 'bg-Gray-300';
  const textColor = isSelected ? 'text-mainWhite-100' : 'text-gray-900';

  return (
    <div onClick={onSelect} className={`max-w-full py-3 pl-6 pr-3 cursor-pointer hover:bg-Gray-400 ${bgColor} ${textColor} flex gap-2 items-center
    border-b-2 border-solid border-Gray-400
    `}>
      {icon}
      <p className={`text-base font-medium `}>{text}</p>
    </div>
  );
}
