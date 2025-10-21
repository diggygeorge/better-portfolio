import React from "react";
import { Button } from "@/components/ui/button";

export default function ResumeSection() {
  return (
    <section id="resume" className="py-20 flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-6 text-foreground text-center">Resume</h2>

      {/* Embedded PDF */}
      <div className="w-full max-w-4xl h-[800px] shadow-xl rounded-2xl overflow-hidden">
        <iframe
          src="/resume/danielthomassweresume.pdf" // Place your PDF in the `public` folder
          className="w-full h-full border-0"
          title="Daniel George Resume"
        />
      </div>

      <div className="mt-8 flex gap-4 text-foreground">
        <Button asChild>
          <a href="/resume/danielthomassweresume.pdf" download>
            Download PDF
          </a>
        </Button>
      </div>
    </section>
  );
}
