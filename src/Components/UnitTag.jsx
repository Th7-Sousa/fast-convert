'use client'

import React from 'react';

export default function UnitTag({ icon, text, isSelected, onSelect }) {
  const bgColor = isSelected ? 'bg-Gray-600' : 'bg-Gray-300';
  const textColor = isSelected ? 'text-mainWhite-100' : 'text-gray-900';

  return (
    <div onClick={onSelect} className={`py-3 px-3 max-w-max rounded-sm cursor-pointer hover:bg-Gray-500 ${bgColor} ${textColor} flex gap-1 items-center`}>
      {icon}
      <p className={`text-base font-semibold `}>{text}</p>
    </div>
  );
}
