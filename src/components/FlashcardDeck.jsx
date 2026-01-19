import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, RotateCw } from 'lucide-react';

export default function FlashcardDeck({ cards }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [direction, setDirection] = useState(0);

    const currentCard = cards[currentIndex];

    const handleNext = () => {
        if (currentIndex < cards.length - 1) {
            setIsFlipped(false);
            setDirection(1);
            setCurrentIndex(prev => prev + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setIsFlipped(false);
            setDirection(-1);
            setCurrentIndex(prev => prev - 1);
        }
    };

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0,
            scale: 0.8
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
            transition: { duration: 0.3 }
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 300 : -300,
            opacity: 0,
            scale: 0.8,
            transition: { duration: 0.3 }
        })
    };

    return (
        <div className="flex flex-col items-center max-w-2xl mx-auto w-full">
            <div className="w-full flex justify-between text-sm text-muted font-mono mb-4 px-2">
                <span>Card {currentIndex + 1} / {cards.length}</span>
                <span>Tap to flip</span>
            </div>

            <div className="relative w-full aspect-[3/2] perspective-1000">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        className="w-full h-full cursor-pointer absolute"
                        onClick={() => setIsFlipped(!isFlipped)}
                        style={{ transformStyle: 'preserve-3d', transformOrigin: 'center' }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.div
                            className="w-full h-full absolute inset-0 rounded-2xl border border-white/10 bg-surface/50 backdrop-blur-xl shadow-2xl flex flex-col items-center justify-center p-8 text-center backface-hidden"
                            animate={{ rotateY: isFlipped ? 180 : 0 }}
                            transition={{ duration: 0.6, ease: "backOut" }}
                            style={{ backfaceVisibility: 'hidden' }}
                        >
                            <div className="text-primary font-mono text-sm uppercase tracking-widest mb-4">Term</div>
                            <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">{currentCard.term}</h3>
                            <div className="absolute bottom-6 right-6 text-muted/20">
                                <RotateCw className="w-6 h-6" />
                            </div>
                        </motion.div>

                        <motion.div
                            className="w-full h-full absolute inset-0 rounded-2xl border border-primary/20 bg-surface/90 backdrop-blur-xl shadow-2xl shadow-primary/5 flex flex-col items-center justify-center p-8 text-center backface-hidden"
                            initial={{ rotateY: 180 }}
                            animate={{ rotateY: isFlipped ? 0 : -180 }}
                            transition={{ duration: 0.6, ease: "backOut" }}
                            style={{ backfaceVisibility: 'hidden', transform: "rotateY(180deg)" }}
                        >
                            <div className="text-secondary font-mono text-sm uppercase tracking-widest mb-4">Definition</div>
                            <p className="text-xl md:text-2xl leading-relaxed text-gray-200">{currentCard.definition}</p>
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="flex items-center gap-8 mt-8">
                <button
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                    className="p-4 rounded-full bg-surface border border-white/10 hover:border-primary/50 disabled:opacity-30 disabled:cursor-not-allowed transition-all hover:scale-110 active:scale-95"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>

                <div className="h-1.5 w-32 bg-surface rounded-full overflow-hidden">
                    <div
                        className="h-full bg-primary transition-all duration-300"
                        style={{ width: `${((currentIndex + 1) / cards.length) * 100}%` }}
                    />
                </div>

                <button
                    onClick={handleNext}
                    disabled={currentIndex === cards.length - 1}
                    className="p-4 rounded-full bg-surface border border-white/10 hover:border-primary/50 disabled:opacity-30 disabled:cursor-not-allowed transition-all hover:scale-110 active:scale-95"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>
        </div>
    );
}
