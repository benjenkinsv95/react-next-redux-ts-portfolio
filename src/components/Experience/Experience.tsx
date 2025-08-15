import { HTMLAttributes } from "react";
import profilePic from "./ProfilePic.png";
import Image from "next/image";
import { linkProps } from "@/components/IconLinks/IconLinks";

const paragraphProps: HTMLAttributes<HTMLParagraphElement> = {
  className: "text-lg mb-4 leading-8 text-muted-foreground",
};

const primaryColorClass = "text-primary";
const secondaryColorClass = "text-accent";
const headingColorClass = "text-foreground";

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-muted text-foreground py-16 px-4 scroll-offset"
    >
      <div className="container mx-auto max-w-6xl">
        <h2
          className={`text-4xl font-bold mb-12 ${headingColorClass} text-center`}
        >
          Experience
        </h2>
        <div className="grid grid-cols-1 gap-8 text-center md:text-left">
          <div className="space-y-6">
            {/* Orum */}
            <p {...paragraphProps}>
              <span className="font-semibold">
                Senior Software Engineer — Orum:
              </span>{" "}
              Built AI coaching features for sales reps (e.g.,{" "}
              <span className={`${primaryColorClass} font-semibold`}>
                AI call scorecards
              </span>
              ) —{" "}
              <a
                href="https://www.youtube.com/watch?v=_znmOB1tzjw"
                target="_blank"
                rel="noopener noreferrer"
                className={`${secondaryColorClass} underline underline-offset-4`}
              >
                demo
              </a>
              .
            </p>

            {/* Hearst */}
            <p {...paragraphProps}>
              <span className="font-semibold">
                Senior Software Engineer at Hearst:
              </span>{" "}
              Shipped React CMS features used by{" "}
              <span className={`${primaryColorClass} font-semibold`}>
                50+ brands
              </span>{" "}
              (Cosmopolitan, Esquire, Men{"'"}s Health) to develop online
              articles viewed by 145 million monthly visitors.
            </p>

            {/* General Assembly */}
            <p {...paragraphProps}>
              <span className="font-semibold">
                Lead Software Engineering Instructor at General Assembly:
              </span>{" "}
              Taught{" "}
              <span className={`${secondaryColorClass} font-semibold`}>
                500+ developers
              </span>{" "}
              how to write{" "}
              <span className={`${primaryColorClass} font-semibold`}>
                {" "}
                full-stack react apps{" "}
              </span>{" "}
              and developed internal full-stack apps (grade tracking, etc).
            </p>

            {/* RoboKind */}
            <p {...paragraphProps}>
              <span className="font-semibold">
                Software Engineer at RoboKind:
              </span>{" "}
              Developed software for{" "}
              <span className={`${primaryColorClass} font-semibold`}>
                humanoid robots
              </span>{" "}
              delivering therapy to children with autism, including lesson
              software and an internal content management system.
            </p>

            {/* Education */}
            <p {...paragraphProps}>
              <span className="font-semibold">Education:</span> Master{"'"}s in
              Software Engineering,{" "}
              <span className={`${secondaryColorClass} font-semibold`}>
                Harvard University Extension School
              </span>
              ; B.A. in Computer Science, TESU.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a href="mailto:benjenkinsv95@gmail.com" {...linkProps}>
                <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-6 rounded-lg transition-colors duration-200 min-w-[140px]">
                  Get in Touch
                </button>
              </a>
              <a href="/Ben_Jenkins_Full_Stack_Resume.pdf" {...linkProps}>
                <button className="bg-card hover:bg-muted text-card-foreground font-semibold py-3 px-6 border border-border hover:border-primary rounded-lg transition-all duration-200 min-w-[140px]">
                  Download Resume
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
