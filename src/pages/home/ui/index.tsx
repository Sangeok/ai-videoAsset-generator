import Hero from "@/src/widgets/hero/ui/Hero";
import Header from "@/src/widgets/homeHeader/ui/Header";
import Features from "@/src/widgets/features/ui/Features";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-500/30">
      <Header />
      <main>
        <Hero />
        <Features />
      </main>
      <footer className="py-8 border-t border-white/10 text-center text-slate-500 text-sm bg-black">
        <p>© 2025 AVG. All rights reserved.</p>
      </footer>
    </div>
  );
}
