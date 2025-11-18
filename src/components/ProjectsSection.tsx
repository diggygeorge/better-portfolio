import ProjectCard from "@/components/ProjectCard";

import dreamJournalImg from "@/components/img/dreamjournalimg.png";
import nutritionImg from "@/components/img/nutritionimg.png";
import incomeImg from "@/components/img/incomeimg.png";
import lovaslideImg from "@/components/img/lovaslideimg.png"
import whispersImg from "@/components/img/whisperimg.jpg"

export default function ProjectsSection() {
  const projects = [
    {
      image: whispersImg,
      alt: "Whispers app preview showing map-based story discovery",
      title: "Whispers",
      description: "Find stories where you stand.",
      tech: ["Next.js", "React", "Prisma ORM", "Supabase", "Google Maps API"],
      github: "https://github.com/rohitmandapati/whispers/",
      demo: "https://whispers-one.vercel.app/",
      youtube: "https://youtu.be/Ru7j08XEiTI"
    },
    {
      image: nutritionImg,
      alt: "MyFitnessTerrier web app dashboard displaying BU dining hall meals",
      title: "MyFitnessTerrier",
      description:
        "Nutrition calculator for all dining halls at Boston University.",
      tech: ["Python", "Next.js", "TypeScript", "MongoDB"],
      github: "https://github.com/diggygeorge/myfitnessterrier/",
      demo: "https://bu-nutrition.vercel.app/",
      youtube: "https://www.youtube.com/watch?v=E_UhFZvgSTU"
    },
    {
      image: "",
      alt: "No image provided.",
      title: "Raft Consensus Algorithm",
      description:
        "Implemented a distributed system with fault tolerance based on the Raft Consensus Protocol.",
      tech: ["Golang"],
      github: "",
      demo: "",
      youtube: ""
    },
    {
      image: incomeImg,
      alt: "Global Income Score interface comparing income values worldwide",
      title: "Global Income Score",
      description:
        "How well off are you in a certain location in the world?",
      tech: ["MySQL", "Supabase", "Express.js", "Node.js", "Vite"],
      github: "https://github.com/diggygeorge/global-income-score/",
      demo: "https://global-income-score-mu.vercel.app/",
      youtube: "https://www.youtube.com/watch?v=0_ViSrEWkiM"
    },
    {
      image: dreamJournalImg,
      alt: "Dream Journal app UI preview showing dream log entries",
      title: "Dreamcatchers",
      description:
        "Document your dreams and anonymously see others.",
      tech: ["Supabase", "Next.js", "TypeScript"],
      github: "https://github.com/diggygeorge/dream-journal/",
      demo: "https://dream-journal-drab.vercel.app/",
    },
    {
      image: lovaslideImg,
      alt: "Lovaslide animated presentation preview",
      title: "Lovaslide",
      description: "AI-generates a completely animated presentation!",
      tech: ["FastAPI", "Next.js", "Typescript", "Web Speech API", "SerpAPI"],
      github: "https://github.com/diggygeorge/lovaslide/",
      youtube: "https://youtu.be/yFuwiUV3AHQ"
    },
  ];

  return (
    <section id="projects" className="py-20 mx-20">
      <h2 className="text-3xl font-bold text-center mb-10 text-foreground">
        Projects
      </h2>
      <div className="flex flex-wrap gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
