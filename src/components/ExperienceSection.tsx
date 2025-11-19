"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Incoming Software Engineering Intern",
      org: "Boston University Information Services & Technology",
      location: "Boston, MA",
      date: "Oct. 2025",
      bullets: [
        "Selected for upcoming internship in Client Technology Engineering, focusing on scalable software and data infrastructure within Boston University’s IT organization.",
      ],
    },
    {
      title: "Director of Operations",
      org: "Upsilon Pi Epsilon",
      location: "Boston, MA",
      date: "Jan. 2024 – Present",
      bullets: [
        "Manage the full lifecycle of 2–3 student-led computer science workshops per semester with a 5 person team, increasing student engagement by 50% by implementing a 6-week preparation process.",
        "Streamline member recruitment process to 30 days by screening 45 candidates per semester and facilitating behavioral and technical interviews with 15 applicants, ensuring a constant influx of qualified members.",
      ],
    },
    {
      title: "Information Technology Support Specialist",
      org: "Boston University Information Services & Technology",
      location: "Brookline, MA",
      date: "Sep. 2023 – Sep. 2025",
      bullets: [
        "Resolved 500+ technical issues for IT and classroom equipment across 5 campuses with 90% first-call resolution rate, ensuring reliable technology performance for students and faculty.",
        "Oversaw distribution of 50+ student loaner laptops, reducing turnaround time to 10 minutes through optimized check-out/check-in workflows.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-40">
      <h2 className="text-3xl font-bold text-center mb-10 text-foreground">
        Experience
      </h2>

      <div className="flex flex-wrap justify-center gap-8 px-4">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="w-full sm:w-[340px]"
          >
            <Card className="overflow-hidden shadow-md rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-background transition-all duration-300 hover:shadow-lg hover:scale-[1.05]">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-foreground">
                  {exp.title}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  {exp.org} • {exp.location} • {exp.date}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="list-disc ml-5 space-y-2 text-sm text-muted-foreground">
                  {exp.bullets.map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}