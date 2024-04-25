'use client'

import React, { useState } from 'react';
import UnitTag from "./UnitTag";

import { IoIosTimer } from "react-icons/io";
import { BsCoin } from "react-icons/bs";
import { FaChartArea } from "react-icons/fa";
import { TbRulerMeasure } from "react-icons/tb";
import { PiCylinderLight } from "react-icons/pi";

export default function SectionTag() {
  const [selectedTag, setSelectedTag] = useState(null);

  const tags = {
    time: {
      name: "Tempo",
      icon: <IoIosTimer />
    },
    moeda: {
      name: "Moeda",
      icon: <BsCoin />
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
  };

  return (
    <section className="w-full px-6 py-12 border-solid border-2 border-black flex gap-3">
      {Object.entries(tags).map(([key, value]) => (
        <UnitTag
          key={key}
          text={value.name}
          icon={value.icon}
          isSelected={selectedTag === key}
          onSelect={() => setSelectedTag(key)}
        />
      ))}
    </section>
  );
}
