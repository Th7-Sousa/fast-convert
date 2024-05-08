'use client'

import React from 'react';

export default function UnitTag({ icon, text, isSelected, onSelect }) {
  const bgColor = isSelected ? 'bg-mainPurple-100' : 'bg-Gray-200';
  const textColor = isSelected ? 'text-mainWhite-100' : 'text-gray-900';
  const selHover = isSelected ? 'hover:none' : 'hover:bg-Gray-400'
  const selBorder = isSelected ? 'border: none' : 'border-b-2 border-solid border-Gray-400'

  return (
    <div onClick={onSelect} className={`max-w-full py-3 pl-6 pr-6 cursor-pointer ${selHover} ${bgColor} ${textColor} ${selBorder} flex gap-2 items-center
    `}>
      {icon}
      <p className={`text-base font-medium `}>{text}</p>
    </div>
  );
}
