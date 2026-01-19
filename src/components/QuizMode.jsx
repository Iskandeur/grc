import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, ArrowRight, RotateCcw } from 'lucide-react';

export default function QuizMode({ questions, onRestart }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const currentQuestion = questions[currentIndex];

    const handleOptionClick = (option) => {
        if (isAnswered) return;
        setSelectedOption(option);
        setIsAnswered(true);
        if (option === currentQuestion.answer) {
            setScore(prev => prev + 1);
        }
    };

    const handleNext = () => {
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(prev => prev + 1);
            setSelectedOption(null);
            setIsAnswered(false);
        } else {
            setShowResult(true);
        }
    };

    if (showResult) {
        const percentage = Math.round((score / questions.length) * 100);
        return (
            <div className="flex flex-col items-center justify-center max-w-lg mx-auto w-full text-center p-8 bg-surface/50 backdrop-blur-md rounded-2xl border border-white/10">
                <h2 className="text-3xl font-bold mb-4">Quiz Terminé !</h2>
                <div className="relative w-32 h-32 flex items-center justify-center mb-6">
                    <svg className="transform -rotate-90 w-full h-full">
                        <circle cx="64" cy="64" r="60" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-surface" />
                        <motion.circle
                            cx="64" cy="64" r="60" stroke="currentColor" strokeWidth="8" fill="transparent"
                            className={percentage >= 80 ? "text-primary" : percentage >= 50 ? "text-secondary" : "text-danger"}
                            initial={{ strokeDasharray: 377, strokeDashoffset: 377 }}
                            animate={{ strokeDashoffset: 377 - (377 * percentage) / 100 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        />
                    </svg>
                    <div className="absolute text-2xl font-bold">{percentage}%</div>
                </div>

                <p className="text-muted mb-8 text-lg">
                    Vous avez <span className="text-text font-bold">{score}</span> bonnes réponses sur <span className="text-text font-bold">{questions.length}</span>.
                </p>

                <button
                    onClick={onRestart}
                    className="flex items-center gap-2 px-6 py-3 bg-primary text-background font-bold rounded-lg hover:brightness-110 transition-all active:scale-95"
                >
                    <RotateCcw className="w-5 h-5" />
                    Réessayer
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto w-full">
            <div className="flex justify-between items-center mb-6">
                <span className="text-sm font-mono text-muted">Question {currentIndex + 1} / {questions.length}</span>
                <div className="text-sm font-mono text-primary">Score: {score}</div>
            </div>

            <div className="w-full h-2 bg-surface rounded-full mb-8 overflow-hidden">
                <motion.div
                    className="h-full bg-primary"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
                />
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                >
                    <h3 className="text-2xl font-bold leading-tight">{currentQuestion.question}</h3>

                    <div className="space-y-3">
                        {currentQuestion.options.map((option, idx) => {
                            const isSelected = selectedOption === option;
                            const isCorrect = option === currentQuestion.answer;
                            const showCorrectness = isAnswered && (isSelected || isCorrect);

                            let borderColor = "border-white/10";
                            let bgColor = "bg-surface/50";
                            let textColor = "text-text";

                            if (isAnswered) {
                                if (isCorrect) {
                                    borderColor = "border-primary";
                                    bgColor = "bg-primary/20";
                                    textColor = "text-primary";
                                } else if (isSelected) {
                                    borderColor = "border-danger";
                                    bgColor = "bg-danger/20";
                                    textColor = "text-danger";
                                }
                            }

                            return (
                                <button
                                    key={idx}
                                    onClick={() => handleOptionClick(option)}
                                    disabled={isAnswered}
                                    className={`w-full p-4 rounded-xl border ${borderColor} ${bgColor} ${textColor} text-left transition-all duration-200 flex items-center justify-between group ${!isAnswered ? "hover:border-primary/50 hover:bg-surface" : ""}`}
                                >
                                    <span className="font-medium">{option}</span>
                                    {showCorrectness && (
                                        isCorrect ? <CheckCircle2 className="w-5 h-5 text-primary" /> : (isSelected && <XCircle className="w-5 h-5 text-danger" />)
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex justify-end">
                <button
                    onClick={handleNext}
                    disabled={!isAnswered}
                    className="flex items-center gap-2 px-6 py-3 bg-secondary text-white font-bold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-secondary/80 transition-all active:scale-95"
                >
                    {currentIndex === questions.length - 1 ? 'Terminer' : 'Suivant'}
                    <ArrowRight className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
}
