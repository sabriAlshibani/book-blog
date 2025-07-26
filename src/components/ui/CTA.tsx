"use client";

import { CTAData } from "@/data/types/cta";
import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

interface CTAProps {
  data: CTAData;
  maxWidth?: string;
}

export default function CTA({ data, maxWidth = "max-w-xl" }: CTAProps) {
  const [values, setValues] = useState<string[]>(
    data.inputs ? Array(data.inputs.length).fill("") : []
  );

  const handleInputChange = (index: number, value: string) => {
    const newValues = [...values];
    newValues[index] = value;
    setValues(newValues);
  };

  return (
    <section
      className={`max-w-6xl px-4 py-10 rounded-2xl mx-auto ${maxWidth} 
      bg-gradient-to-r ${data.gradientFrom} ${data.gradientTo} text-white`}
    >
      <div className="text-center sm:text-start space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold">{data.title}</h2>
        <p className="text-sm md:text-base opacity-90">{data.description}</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 justify-center sm:justify-start items-center mt-6 flex-wrap">
        {data.inputs?.map((input, i) => (
          <Input
            key={i}
            type={input.type || "text"}
            placeholder={input.placeholder}
            className="text-right placeholder:text-right bg-white text-black w-full sm:w-auto sm:flex-1"
            value={values[i]}
            onChange={(e) => handleInputChange(i, e.target.value)}
          />
        ))}

        {data.buttons?.map((btn, i) => (
          <Button
          variant="primary"
            key={i}
            className="text-blue-700 px-6 py-2 font-medium rounded-lg"
          >
            {btn}
          </Button>
        ))}
      </div>
    </section>
  );
}
