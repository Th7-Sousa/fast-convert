'use client'

import React, { useState } from 'react';
import Input from "./Input";
import Select from "./Select";
import Result from "./Result";
import ButtonPrimary from "./ButtonPrimary";
import convert from "convert-units";

export default function ConvertMain() {

  const Measures = {
    timer: {
      "ns": "nanosegundos",
      "mu": "microssegundos",
      "ms": "milissegundos",
      "s": "segundos",
      "min": "minutos",
      "h": "horas",
      "d": "dias",
      "week": "semanas",
      "month": "meses",
      "year": "anos"
    }
  }

  const [inputValue, setInputValue] = useState('');
  const [fromUnit, setFromUnit] = useState('');
  const [toUnit, setToUnit] = useState('');
  const [result, setResult] = useState('');

  // Transforma o objeto timer em um array de opções para o Select
  const timerOptions = Object.entries(Measures.timer).map(([key, value]) => ({
    value: key,
    label: value
  }));

  const optionsSelect = timerOptions; // Agora optionsSelect contém as opções corretas

  const handleConversion = () => {
    if (inputValue && fromUnit && toUnit) {
      const convertedValue = convert(inputValue).from(fromUnit).to(toUnit)
      setResult(convertedValue.toString());
      console.log(convertedValue)
    }
  };

  return (
    <div id="convert-main" className="w-full flex flex-col items-center">
      <div className="p-12 flex flex-col items-center gap-12 rounded-md border border-solid border-Gray-400">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <span className="text-xl">Converter:</span>
            <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <Select options={optionsSelect} value={fromUnit} onChange={(e) => setFromUnit(e.target.value)} />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl">Em:</span>
            <Select options={optionsSelect} value={toUnit} onChange={(e) => setToUnit(e.target.value)} />
          </div>
        </div>
        <ButtonPrimary text='Converter' onClick={handleConversion} />
        <Result render={result ? true : false} result={result} unity={toUnit} />
      </div>
    </div>
  );
}
