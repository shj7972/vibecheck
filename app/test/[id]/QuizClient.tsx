"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { calculateResult } from "@/lib/logic";
import { Button } from "@/components/ui/Button";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { TestData } from "@/lib/types";

export default function QuizClient({ test }: { test: TestData }) {
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<Record<string, number>>({});
    const [isCalculating, setIsCalculating] = useState(false);

    const currentQuestion = test.questions[currentStep];
    const progress = currentStep + 1;
    const total = test.questions.length;

    const handleAnswer = (optionScores: Record<string, number>) => {
        const newAnswers = { ...answers };
        Object.entries(optionScores).forEach(([key, value]) => {
            newAnswers[key] = (newAnswers[key] || 0) + value;
        });
        setAnswers(newAnswers);

        if (currentStep < total - 1) {
            setCurrentStep(prev => prev + 1);
        } else {
            finishTest(newAnswers);
        }
    };

    const finishTest = (finalAnswers: Record<string, number>) => {
        setIsCalculating(true);
        setTimeout(() => {
            const result = calculateResult(test.id, finalAnswers);
            if (result) {
                router.push(`/test/${test.id}/result?type=${result.type}`);
            }
        }, 1500);
    };

    if (isCalculating) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-white text-center">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 1 }}
                    className="mb-6 text-4xl"
                >
                    🔮
                </motion.div>
                <h2 className="text-xl font-bold mb-2">결과를 분석 중입니다...</h2>
                <p className="text-gray-500">당신의 성향을 분석하고 있어요!</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <div className="px-4 py-3 flex items-center border-b max-w-md w-full mx-auto">
                <button onClick={() => router.back()} className="p-2 hover:bg-gray-100 rounded-full">
                    <ArrowLeft size={20} className="text-gray-600" />
                </button>
                <div className="flex-1 mx-4">
                    <ProgressBar value={progress} max={total} />
                </div>
                <span className="text-xs font-medium text-gray-500 w-10 text-right">{currentStep + 1}/{total}</span>
            </div>

            <div className="flex-1 p-6 flex flex-col justify-center max-w-md w-full mx-auto">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentStep}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h2 className="text-2xl font-bold mb-8 leading-relaxed text-gray-800 break-keep">
                            Q{currentStep + 1}. <br />
                            {currentQuestion.text}
                        </h2>

                        <div className="space-y-3">
                            {currentQuestion.options.map((option) => (
                                <button
                                    key={option.id}
                                    onClick={() => handleAnswer(option.score)}
                                    className="w-full text-left p-4 rounded-xl border border-gray-200 bg-gray-50 hover:bg-primary/5 hover:border-primary hover:text-primary transition-all active:scale-98 font-medium text-gray-700 flex items-center justify-between group"
                                >
                                    {option.text}
                                    <ChevronRight className="opacity-0 group-hover:opacity-100 transition-opacity text-primary" size={20} />
                                </button>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
