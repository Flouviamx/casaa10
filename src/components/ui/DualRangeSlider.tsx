"use client";

import React, { useState, useEffect, useCallback } from "react";

interface DualRangeSliderProps {
  min: number;
  max: number;
  step: number;
  value: [number, number];
  onChange: (value: [number, number]) => void;
}

export default function DualRangeSlider({
  min,
  max,
  step,
  value,
  onChange,
}: DualRangeSliderProps) {
  const [minVal, setMinVal] = useState(value[0]);
  const [maxVal, setMaxVal] = useState(value[1]);

  // Sincronizar el estado interno con las props
  useEffect(() => {
    setMinVal(value[0]);
    setMaxVal(value[1]);
  }, [value]);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVal = Math.min(Number(e.target.value), maxVal - step);
    setMinVal(newVal);
    onChange([newVal, maxVal]);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVal = Math.max(Number(e.target.value), minVal + step);
    setMaxVal(newVal);
    onChange([minVal, newVal]);
  };

  const minPercent = ((minVal - min) / (max - min)) * 100;
  const maxPercent = ((maxVal - min) / (max - min)) * 100;

  return (
    <div className="relative w-full py-4 flex items-center">
      {/* Pista base gris */}
      <div className="absolute w-full h-1.5 bg-slate-200 rounded-full z-0" />

      {/* Pista activa (azul oscuro) */}
      <div
        className="absolute h-1.5 bg-[#0f2146] rounded-full z-10"
        style={{
          left: `${minPercent}%`,
          right: `${100 - maxPercent}%`,
        }}
      />

      {/* Slider Min */}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={minVal}
        onChange={handleMinChange}
        className="absolute w-full appearance-none bg-transparent pointer-events-none z-20 slider-thumb-apple"
      />

      {/* Slider Max */}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={maxVal}
        onChange={handleMaxChange}
        className="absolute w-full appearance-none bg-transparent pointer-events-none z-30 slider-thumb-apple"
      />

      {/* Estilos inyectados para customizar el "puntito" (thumb) en todos los navegadores */}
      <style dangerouslySetInnerHTML={{__html: `
        .slider-thumb-apple::-webkit-slider-thumb {
          pointer-events: auto;
          appearance: none;
          width: 20px;
          height: 20px;
          background-color: white;
          border: 2px solid #0f2146;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(15, 33, 70, 0.2);
          transition: transform 0.1s;
        }
        .slider-thumb-apple::-webkit-slider-thumb:active {
          transform: scale(1.1);
        }
        .slider-thumb-apple::-moz-range-thumb {
          pointer-events: auto;
          appearance: none;
          width: 20px;
          height: 20px;
          background-color: white;
          border: 2px solid #0f2146;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(15, 33, 70, 0.2);
          transition: transform 0.1s;
        }
        .slider-thumb-apple::-moz-range-thumb:active {
          transform: scale(1.1);
        }
      `}} />
    </div>
  );
}
