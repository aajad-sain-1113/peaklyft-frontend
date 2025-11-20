"use client";

import { useState, useEffect } from "react";
import { methodologyData } from "@/utils/utils";

export default function Methodology() {
  const [active, setActive] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % methodologyData.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="container py-20 text-black rounded-[25px]">
        <h2 className="font mb-14">
          AntWalk <span className="text-primary">Methodology</span>
        </h2>
      <div className="container text-center flex flex-col items-center justify-center rounded-[25px] h-[465px]" style={{background:"radial-gradient(at center center, #4E5FF5 0%, #101D96 100%)"}}>

        <div className="flex flex-col md:flex-row justify-center gap-10 mb-14">
          {methodologyData.map((item, i) => (
            <div
              key={i}
              className={`relative flex flex-col items-center p-6 rounded-xl cursor-pointer w-[130px] h-[130px]
              ${active === i ? "border-2 border-white shadow-lg" : "border border-white/20"}
            `}
              onClick={() => setActive(i)}
            >
              <img src={item.icon} className="w-[45px] h-[45px] mb-4 opacity-90" />
              <p className="text-lg font-medium">{item.title}</p>

              {active === i && (
                <div className="absolute -bottom-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white"></div>
              )}
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto bg-white/10 p-10 rounded-2xl backdrop-blur-md shadow-lg transition-all duration-700">
          <h3 className="text-xl font-semibold mb-4 text-center">
            {methodologyData[active].title} with precise learning assets
          </h3>
          <p className="text-white/80 text-base leading-relaxed">
            {methodologyData[active].description}
          </p>
        </div>
      </div>
    </section>
  );
}
