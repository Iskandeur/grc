import { Outlet, Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

export default function Layout() {
    return (
        <div className="min-h-screen flex flex-col bg-background text-text selection:bg-primary selection:text-surface">
            <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 font-bold text-xl tracking-tight group">
                        <div className="p-1.5 rounded-lg bg-surface group-hover:bg-primary/10 transition-colors">
                            <ShieldCheck className="w-6 h-6 text-primary" />
                        </div>
                        <span className="font-mono">GRC<span className="text-primary">_Nex</span></span>
                    </Link>
                    <div className="text-xs font-mono text-muted border border-white/10 px-2 py-1 rounded">
                        v1.0.0
                    </div>
                </div>
            </header>

            <main className="flex-1 container mx-auto px-4 py-8 relative">
                <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
                <Outlet />
            </main>

            <footer className="border-t border-white/5 py-8 mt-auto">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-sm text-muted font-mono">Gouvernance, Risque et Conformité // <span className="text-primary">EduSystem</span></p>
                </div>
            </footer>
        </div>
    );
}
