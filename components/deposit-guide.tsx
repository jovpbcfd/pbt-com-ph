'use client'

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { deposits } from '../data/deposit-step'



export default function DepositGuide() {
    const [activeStep, setActiveStep] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const stepElements = document.querySelectorAll(".step-deposit");
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
            <div className="md:mt-10">
                <h2 className="font-[900] text-lg md:text-xl lg:text-2xl">
                    Making Deposits at Panalobet: Systematic Guide
                </h2>
                <p className="my-2 md:my-4">
                    Simple and rapid fund depositing into your Panalobet account lets you start immediately playing your preferred casino games or sports betting options.
                    Use the instructions below to safely and securely deposit money.
                </p>
                <div className="relative flex flex-col items-center p-1 md:p-6">
                    <div className="relative flex flex-col w-full">
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full" />
                        {deposits.map((deposit) => (
                            <motion.div
                                key={deposit.id}
                                className={cn(
                                    "relative flex flex-col py-6 md:items-center md:justify-between md:py-5 md:gap-12 md:flex-row step-deposit",
                                    activeStep === deposit.id ? "font-normal" : "text-gray-500"
                                )}
                                initial={{ opacity: 0.5 }}
                                animate={{ opacity: activeStep === deposit.id ? 1 : 0.5 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="flex w-full md:self-start md:w-[50%]">
                                    <div className="w-full border-1 border-dashed flex items-center justify-center rounded-md md:w-[600px] md:h-[460px]">
                                        image
                                    </div>
                                </div>
                                <div className="self-center w-full md:w-[50%]">
                                    <div className="rounded-full border-2 border-gray-300 font-bold transition-all bg-white shadow-lg hidden 
                                    md:flex md:items-center md:justify-center  md:mb-4 md:w-12 md:h-12">
                                        <span className={cn(activeStep === deposit.id ? "text-blue-600" : "text-gray-500")}>0{deposit.id}</span>
                                    </div>
                                    <h3 className="text-md uppercase font-bold text-center md:text-left md:font-[800] md:text-xl">{deposit.title}</h3>
                                    <p className="text-justify md:mt-4">{deposit.description}</p>
                                    <div className="mt-2 md:mt-4">
                                        {deposit.subTitle && (
                                            <h4 className="font-semibold md:text-md md:my-2">{deposit.subTitle}</h4>
                                        )
                                        }
                                        {deposit.subList && (
                                            <ul className="md:pl-5">
                                                {deposit.subList.map((item) => (
                                                    <li key={item.id} className="md:mb-2">{item.description}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
