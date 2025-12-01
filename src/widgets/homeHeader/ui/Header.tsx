"use client";

import { Button } from "@/src/shared/ui/atoms/Button/Button";
import { VideoIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("/create-new-video");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl supports-[backdrop-filter]:bg-black/20 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors border border-white/10">
            <VideoIcon className="w-5 h-5 text-purple-400" />
          </div>
          <span className="text-lg font-bold tracking-tight text-white">AVG</span>
        </Link>

        <div className="flex items-center gap-4">
          <Button className="bg-white text-black hover:bg-slate-200 rounded-full px-6" onClick={handleGetStarted}>
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}
