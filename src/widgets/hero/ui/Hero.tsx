"use client";

import { Button } from "@/src/shared/ui/atoms/Button/Button";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("/create-new-video");
  };

  return (
    <div className="p-10 flex flex-col items-center mt-24 md:px-20 lg:px-36 xl:px-48">
      <h2 className="font-bold text-6xl text-center">AI Youtube Short Video Asset Generator</h2>

      <div className="mt-7 gap-8 flex">
        <Button className="bg-white text-black cursor-pointer" size="lg" onClick={handleGetStarted}>
          Get Started
        </Button>
      </div>
    </div>
  );
}
