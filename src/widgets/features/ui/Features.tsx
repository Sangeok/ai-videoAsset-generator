import { Wand2, Mic, Image as ImageIcon, Captions, Zap, Globe } from "lucide-react";
import { cn } from "@/src/shared/lib/utils";

export default function Features() {
  const features = [
    {
      title: "AI Script Generation",
      description: "Turn a simple topic into a viral video script in seconds using advanced LLMs.",
      icon: <Wand2 className="w-6 h-6 text-purple-400" />,
      className: "md:col-span-2 lg:col-span-2 bg-gradient-to-br from-purple-900/20 to-black border-purple-500/20",
    },
    {
      title: "Multi-Language Support",
      description: "Reach a global audience with automatic translation.",
      icon: <Globe className="w-6 h-6 text-blue-400" />,
      className: "md:col-span-1 bg-slate-900/50 border-white/10",
    },
    {
      title: "Realistic AI Voiceovers",
      description: "Choose from a variety of premium voices that sound just like humans.",
      icon: <Mic className="w-6 h-6 text-pink-400" />,
      className: "md:col-span-1 bg-slate-900/50 border-white/10",
    },
    {
      title: "Contextual Imagery",
      description: "AI analyzes your script to generate the perfect visual for every scene.",
      icon: <ImageIcon className="w-6 h-6 text-emerald-400" />,
      className: "md:col-span-2 lg:col-span-2 bg-gradient-to-br from-emerald-900/20 to-black border-emerald-500/20",
    },
    {
      title: "Auto-Captions",
      description: "Generate perfectly timed subtitles automatically.",
      icon: <Captions className="w-6 h-6 text-orange-400" />,
      className: "md:col-span-1 bg-slate-900/50 border-white/10",
    },
    {
      title: "Generate Youtube Description",
      description: "AI will generate a description for your video to help you get more views.",
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      className: "md:col-span-2 bg-slate-900/50 border-white/10",
    },
  ];

  return (
    <section className="py-24 px-6 md:px-20 lg:px-32 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 mb-4">
            Everything you need to create
          </h2>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
            A complete suite of AI tools designed to automate your video production workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className={cn(
                "group relative p-8 rounded-3xl border backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-white/20 overflow-hidden",
                feature.className
              )}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500" />

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="mb-6 p-3 bg-white/5 w-fit rounded-xl backdrop-blur-md border border-white/10 group-hover:bg-white/10 transition-colors">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2 tracking-tight">{feature.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
