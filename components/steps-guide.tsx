"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { steps } from "@/data/registration-step";
import Image from "next/image";

export default function StepsGuide() {
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const stepElements = document.querySelectorAll(".step");
      let currentStep = 1;

      stepElements.forEach((step, index) => {
        const rect = step.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.5) {
          currentStep = index + 1;
        }
      });

      setActiveStep(currentStep);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="max-w-[1230px] mx-auto text-white p-2 md:p-0">
      <div className="md:mt-5">
        <h2 className="font-[900] text-lg md:text-xl lg:text-2xl">
          Detailed Step-by-Step Guide on Joining Panalobet Casino
        </h2>
        <p className="mb-2 md:mb-4">
          Joining Panalobet Casino lets you start playing your preferred games
          in no time by a simple and fast approach. Here is a thorough, exact
          tutorial on how to register for your account and savor the fascinating
          universe of online gaming.
        </p>
        <div className="relative w-full p-2 md:p-6 md:mt-4">
          <div className="relative flex flex-col w-full">
            <div className="absolute left-5 top-0 w-[1px] bg-gray-500/50 h-full -z-5" />
            {steps.map((step) => (
              <motion.div
                key={step.id}
                className={cn(
                  "relative flex items-start gap-4 step py-4 md:py-12",
                  activeStep === step.id ? "font-[400]" : "text-gray-500"
                )}
                initial={{ opacity: 0.5 }}
                animate={{ opacity: activeStep === step.id ? 1 : 0.5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="self-center relative">
                  <div
                    className={cn(
                      "w-10 h-10 flex items-center justify-center rounded-full border-2 border-gray-300 transition-all",
                      activeStep === step.id
                        ? "bg-[#3659E7] text-white border-[#3659E7]"
                        : "bg-[#3659E7]/90 text-white/90"
                    )}
                  >
                    {step.id}
                  </div>
                </div>
                <div className="flex w-full flex-col md:flex-row md:gap-4">
                  <div className="self-center md:w-[50%]">
                    <h3 className="text-md uppercase font-bold text-center md:text-left md:font-[800] md:text-xl">
                      {step.title}
                    </h3>
                    <p className="text-justify md:mt-4">{step.description}</p>
                  </div>
                  <div className="items-center justify-center rounded-md overflow-hidden md:ml-15 md:w-[450px] md:h-[450px]">
                    <Image
                      src={step.path}
                      width={450}
                      height={450}
                      alt={step.title}
                    />
                  </div>
                </div>
                {activeStep === step.id && (
                  <div className="absolute left-5 top-1/2 w-[1px] bg-[#3659E7] h-full transition-all transform -translate-y-1/2 -z-4" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
