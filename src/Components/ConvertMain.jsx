'use client'

import React, { useState, useEffect } from 'react';
import Input from "./Input";
import Select from "./Select";
import Result from "./Result";
import ButtonPrimary from "./ButtonPrimary";
import convert from "convert-units";
import AlertDestructive from './Alert';

export default function ConvertMain() {
  const Measures = {
    timer: {
      "ns": "Nanosegundos",
      "mu": "Microssegundos",
      "ms": "Milissegundos",
      "s": "Segundos",
      "min": "Minutos",
      "h": "Horas",
      "d": "Dias",
      "week": "Semanas",
      "month": "Meses",
      "year": "Anos"
    }
  }

  const timerOptions = Object.entries(Measures.timer).map(([key, value]) => ({
    value: key,
    label: value
  }));

  const optionsSelect = timerOptions;

  const [inputValue, setInputValue] = useState(1);
  const [fromUnit, setFromUnit] = useState(timerOptions[1].value);
  const [toUnit, setToUnit] = useState(timerOptions[0].value);
  const [result, setResult] = useState('');
  const [uny, setUny] = useState('');
  const [unitName, setUnitName] = useState('');

  const [isRenderAlertUnity, setIsRenderAlertUnity] = useState(false);
  const [stateButton, setStateButton] = useState(false);

  useEffect(() => {
    setUnitName(Measures.timer[toUnit]);
  }, [Measures.timer]);

  const handleConversion = () => {

    if (fromUnit === toUnit) {
      setResult(false)
      setIsRenderAlertUnity(true);
      setStateButton(true);
      setTimeout(() => {
        setIsRenderAlertUnity(false);
        setStateButton(false);
      }, 5000);
      return;
    }

    const convertedValue = convert(inputValue).from(fromUnit).to(toUnit);
    setResult(convertedValue.toFixed(20).replace(/0+$/, '').replace(/\.$/, ''));
    setUny(unitName);
  };

  return (
    <div id="convert-main" className="w-full flex flex-col justify-center items-center">
      <AlertDestructive render={isRenderAlertUnity} />
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
        <ButtonPrimary text='Converter' onClick={handleConversion} state={stateButton} />
        <Result render={!!result} result={result} uny={uny} />
      </div>
    </div>
  );
}