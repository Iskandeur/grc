import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { courseContent } from '../data/courseContent';
import FlashcardDeck from './FlashcardDeck';
import QuizMode from './QuizMode';
import { BookOpen, HelpCircle, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ModuleView() {
    const { id } = useParams();
    const [mode, setMode] = useState('flashcards'); // 'flashcards' or 'quiz'
    const moduleData = courseContent.find((m) => m.id === id);

    if (!moduleData) {
        return (
            <div className="text-center py-20">
                <h2 className="text-2xl font-bold text-danger">Module Introuvable</h2>
                <Link to="/" className="text-primary hover:underline mt-4 block">Retour à l'accueil</Link>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <Link to="/" className="inline-flex items-center gap-2 text-muted hover:text-primary transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Retour au tableau de bord
            </Link>

            <div className="text-center space-y-4">
                <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {moduleData.title}
                </h1>
                <p className="text-muted text-lg">{moduleData.description}</p>
            </div>

            <div className="flex justify-center gap-4">
                <button
                    onClick={() => setMode('flashcards')}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg border transition-all ${mode === 'flashcards'
                        ? 'bg-primary/20 border-primary text-primary'
                        : 'bg-surface border-white/10 hover:bg-surface/80'
                        }`}
                >
                    <BookOpen className="w-5 h-5" />
                    Flashcards
                </button>
                <button
                    onClick={() => setMode('quiz')}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg border transition-all ${mode === 'quiz'
                        ? 'bg-secondary/20 border-secondary text-secondary'
                        : 'bg-surface border-white/10 hover:bg-surface/80'
                        }`}
                >
                    <HelpCircle className="w-5 h-5" />
                    Mode Quiz
                </button>
            </div>

            <motion.div
                key={mode}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="min-h-[400px]"
            >
                {mode === 'flashcards' ? (
                    <FlashcardDeck cards={moduleData.flashcards} />
                ) : (
                    <QuizMode
                        questions={moduleData.quiz}
                        onRestart={() => setMode('flashcards')} // Simple reset by switching modes or could implement proper reset
                    />
                )}
            </motion.div>
        </div>
    );
}
