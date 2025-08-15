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

export default function About() {
  return (
    <section
      id="about"
      className="bg-muted text-foreground py-16 px-4 scroll-offset"
    >
      <div className="container mx-auto max-w-6xl">
        <h2
          className={`text-4xl font-bold mb-12 ${headingColorClass} text-center`}
        >
          About Me
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-center lg:text-left">
          <div className="lg:col-span-2 space-y-6">
            <p {...paragraphProps}>
              I{"'"}m a senior software engineer, recently at Hearst where I
              contributed to a React Content Management System, used by{" "}
              <span className={`${primaryColorClass} font-semibold`}>
                50+ newspapers & magazines.
              </span>{" "}
              Including{" "}
              <span className={`${secondaryColorClass} font-semibold`}>
                Cosmopolitan, Esquire, & Men{"'"}s Health.
              </span>
            </p>

            <p {...paragraphProps}>
              Formerly a software engineering instructor at General Assembly. I
              have had the opportunity to{" "}
              <span className={`${secondaryColorClass} font-semibold`}>
                teach over 500 new developers
              </span>{" "}
              in demand skills, such as{" "}
              <span className={`${primaryColorClass} font-semibold`}>
                React, Express, & Django
              </span>{" "}
              that they used to land jobs as full-stack developers.
            </p>

            <p {...paragraphProps}>
              Previously I developed software for{" "}
              <span className={`${primaryColorClass} font-semibold`}>
                humanoid robots
              </span>{" "}
              which delivered therapy lessons to children with Autism.
            </p>

            <p {...paragraphProps}>
              Alongside work, I completed a{" "}
              <span className={`${secondaryColorClass} font-semibold`}>
                Masters in Software Engineering
              </span>{" "}
              from{" "}
              <span className={`${primaryColorClass} font-semibold`}>
                Harvard University{"'"}s Extension School
              </span>{" "}
              and a BA in Computer Science from TESU.
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
          <div className="mt-3">
            <Image
              className="rounded-lg w-full h-auto"
              src={profilePic}
              alt="A profile picture of Ben Jenkins."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
