'use client'

import React, { useState, useEffect } from 'react';
import Input from "./Input";
import Select from "./Select";
import Result from "./Result";
import ButtonPrimary from "./ButtonPrimary";
import convert from "convert-units";

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

  const [inputValue, setInputValue] = useState('');
  const [fromUnit, setFromUnit] = useState(timerOptions[1].value);
  const [toUnit, setToUnit] = useState(timerOptions[0].value);
  const [result, setResult] = useState('');
  const [unitName, setUnitName] = useState('');

  useEffect(() => {
    setUnitName(Measures.timer[toUnit]);
  }, [Measures.timer]);

  const handleConversion = () => {
    if (inputValue) {
      console.log(inputValue, fromUnit, toUnit)
      if (inputValue && fromUnit && toUnit) {
        if (fromUnit != toUnit) {
          let convertedValue = convert(inputValue).from(fromUnit).to(toUnit);
          if (convertedValue % 1 === 0) {
            convertedValue = convertedValue.toFixed(0);
          } else {
            convertedValue = convertedValue.toFixed(20);
          }
          setResult(`${convertedValue} ${unitName}`);
          console.log(`${convertedValue} ${unitName}`)
        }
        else {
          setResult(false)
          alert("Unidade de medida de origem e destino são as mesmas.")
        }
      }
    } else {
      alert("Insira o valor a ser convertido!");
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
        <Result render={result ? true : false} result={result} />
      </div>
    </div>
  );
}
