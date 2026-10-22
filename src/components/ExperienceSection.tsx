"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function ExperienceSection() {
  // Dates use interval notation: "]" = ended, "∞)" = ongoing. Keep newest first.
  const experiences = [
    {
      title: "Software Engineering Intern",
      org: "Red Hat - Data and AI",
      location: "Lowell, MA",
      interval: "[May 2026, Aug 2026]",
      bullets: [
        "Created a company-identification pipeline using Python and SQL for URL normalization and multi-dataset relational joins to deterministically match domains, achieving a 77% company match rate to resolve 110,000+ anonymous monthly web interactions into 6,000+ companies",
        "Aggregated anonymous web traffic in Snowflake, implementing SQL regex and pattern matching on page types and visit frequency to categorize raw hits into buying signals across 40 Red Hat products",
        "Containerized an internal Streamlit application and deployed it on OpenShift/Kubernetes, delivering a self-serve UI that reduced data querying to under 60s for cross-disciplinary engineering and marketing teams",
        "Engineered an aggregate data product using dbt on GitLab to power 3 downstream AI platforms and scale internal analytics operations"
      ],
    },
    {
      title: "Software Engineer",
      org: "Hack4Impact BU",
      location: "Remote",
      interval: "[Jan 2026, ∞)",
      bullets: [
        "Architected secure REST APIs using Next.js, Prisma, and Supabase, implementing role-based authentication and mutating endpoints to manage event schedules and inventory for the Campus Closet platform",
        "Accelerated project delivery by developing a frontend for the Bridge OTW bed-allocation platform using TypeScript, Next.js, and Tailwind CSS, rapidly integrating Supabase backends via Jira-tracked workflows"
      ],
    },
    {
      title: "Director of Operations",
      org: "Upsilon Pi Epsilon",
      location: "Boston, MA",
      interval: "[Jan 2024, ∞)",
      bullets: [
        "Manage the full lifecycle of 2–3 student-led computer science workshops per semester with a 5 person team, increasing student engagement by 50% by implementing a 6-week preparation process.",
        "Streamline member recruitment process to 30 days by screening 45 candidates per semester and facilitating behavioral and technical interviews with 15 applicants, ensuring a constant influx of qualified members.",
      ],
    },
    {
      title: "Information Technology Support Specialist",
      org: "Boston University Information Services & Technology",
      location: "Brookline, MA",
      interval: "[Sep 2023, Sep 2025]",
      bullets: [
        "Resolved 500+ technical issues for IT and classroom equipment across 5 campuses with 90% first-call resolution rate, ensuring reliable technology performance for students and faculty.",
        "Oversaw distribution of 50+ student loaner laptops, reducing turnaround time to 10 minutes through optimized check-out/check-in workflows.",
      ],
    },
  ];

  const startYear = (interval: string) => interval.match(/\d{4}/)?.[0];

  return (
    <section id="experience" className="py-40">
      <h2 className="text-3xl font-bold text-center mb-16 text-foreground">
        Experience
      </h2>

      <div className="relative max-w-5xl mx-auto pt-6">
        {/* Time axis */}
        <div className="absolute top-2 bottom-0 left-4 md:left-1/2 w-0.5 -translate-x-1/2 bg-neutral-300 dark:bg-neutral-700" />
        <ChevronUp className="absolute -top-2 left-4 md:left-1/2 -translate-x-1/2 w-5 h-5 text-neutral-400 dark:text-neutral-600" />

        <div className="space-y-8">
          {experiences.map((exp, i) => {
            const year = startYear(exp.interval);
            const showTick = i === 0 || year !== startYear(experiences[i - 1].interval);
            const ongoing = exp.interval.endsWith("∞)");
            const cardLeft = i % 2 === 0;

            return (
              <Fragment key={exp.title}>

                <div className="relative pl-10 md:pl-0 md:grid md:grid-cols-[1fr_3rem_1fr] md:items-center">
                  {/* Node: filled = closed interval, hollow + pulse = open interval */}
                  <div className="absolute left-4 top-1 md:top-1/2 md:left-1/2 -translate-x-1/2 md:-translate-y-1/2 z-10">
                    {ongoing ? (
                      <span className="relative flex w-4 h-4">
                        <span className="absolute inline-flex w-full h-full rounded-full bg-primary/40 animate-ping" />
                        <span className="relative inline-flex w-4 h-4 rounded-full border-2 border-primary bg-background" />
                      </span>
                    ) : (
                      <span className="block w-4 h-4 rounded-full bg-primary" />
                    )}
                  </div>

                  {/* Interval label, opposite the card */}
                  <p
                    className={`mb-2 md:mb-0 md:row-start-1 font-mono text-sm text-muted-foreground ${
                      cardLeft ? "md:col-start-3 md:text-left" : "md:col-start-1 md:text-right"
                    }`}
                  >
                    {exp.interval}
                  </p>

                  <motion.div
                    initial={{ opacity: 0, x: cardLeft ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className={`md:row-start-1 ${cardLeft ? "md:col-start-1" : "md:col-start-3"}`}
                  >
                    <Card className="w-full overflow-hidden shadow-md rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-background transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                      <CardHeader>
                        <CardTitle className="text-lg font-semibold text-foreground">
                          {exp.title}
                        </CardTitle>
                        <CardDescription className="text-sm text-muted-foreground">
                          {exp.org} • {exp.location}
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
                </div>
              </Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}
