import { Link } from 'react-router-dom';
import { courseContent } from '../data/courseContent';
import { BookOpen, FolderLock, Server, ShieldAlert } from 'lucide-react';
import { motion } from 'framer-motion';

const icons = [ShieldAlert, Server, FolderLock];

export default function Dashboard() {
    return (
        <div className="space-y-8">
            <div className="text-center space-y-4">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent pb-1">
                    Sélection du Module
                </h1>
                <p className="text-muted text-lg max-w-2xl mx-auto">
                    Choisissez un module pour commencer à réviser la Gouvernance, le Risque et la Conformité.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courseContent.map((part, index) => {
                    const Icon = icons[index % icons.length] || BookOpen;
                    return (
                        <motion.div
                            key={part.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link to={`/module/${part.id}`} className="block h-full">
                                <div className="h-full p-6 rounded-xl border border-white/10 bg-surface/50 hover:bg-surface hover:border-primary/50 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/10 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <Icon className="w-24 h-24 transform translate-x-4 -translate-y-4" />
                                    </div>
                                    <div className="w-12 h-12 rounded-lg bg-background border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-primary group-hover:text-accent relative z-10">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors relative z-10">{part.title}</h2>
                                    <p className="text-muted text-sm relative z-10">{part.description}</p>
                                </div>
                            </Link>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
