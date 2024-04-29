'use client'

import '@/app/globals.css'

import React, { useState } from 'react';
import UnitTag from "./UnitTag";

import { IoIosTimer } from "react-icons/io";
import { TbCoin } from "react-icons/tb";
import { FaChartArea } from "react-icons/fa";
import { TbRulerMeasure } from "react-icons/tb";
import { PiCylinderLight } from "react-icons/pi";
import { IoSpeedometerOutline } from "react-icons/io5";
import { GiWeight } from "react-icons/gi";
import { FaTemperatureHigh } from "react-icons/fa";
import { GiLightningFrequency } from "react-icons/gi";
import { SiAirbyte } from "react-icons/si";

export default function TagList() {
  const [selectedTag, setSelectedTag] = useState(null);

  const tags = {
    time: {
      name: "Tempo",
      icon: <IoIosTimer />
    },
    moeda: {
      name: "Moeda",
      icon: <TbCoin />
    },
    area: {
      name: "Área",
      icon: <FaChartArea />
    },
    comprimento: {
      name: "Comprimento",
      icon: <TbRulerMeasure />
    },
    volume: {
      name: "Volume",
      icon: <PiCylinderLight />
    },
    velocidade: {
      name: "Velocidade",
      icon: <IoSpeedometerOutline />
    },
    massa: {
      name: "Massa",
      icon: <GiWeight />
    },
    temperatura: {
      name: "Temperatura",
      icon: <FaTemperatureHigh />
    },
    frequencia: {
      name: "Frequência",
      icon: <GiLightningFrequency />
    },
    digital: {
      name: "Digital",
      icon: <SiAirbyte />
    },
    digital: {
      name: "Digital",
      icon: <SiAirbyte />
    },
    digital: {
      name: "Digital",
      icon: <SiAirbyte />
    },
  };

  return (
    <aside id='Section-tags' className='flex flex-col gap-2 pt-12' >

      <h6 className='text-black font-medium pl-6'>Unidades para converter</h6>
      <div className=" max-h-[448px] overflow-auto border-solid border-2 border-mainPurple-100 border-l-0 flex flex-col rounded-r-sm">
        {Object.entries(tags).map(([key, value]) => (
          <UnitTag
            key={key}
            text={value.name}
            icon={value.icon}
            isSelected={selectedTag === key}
            onSelect={() => setSelectedTag(key)}
          />
        ))}
      </div>
    </aside>
  );
}
