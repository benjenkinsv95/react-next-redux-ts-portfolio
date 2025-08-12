import { HTMLAttributes } from "react";
import profilePic from "./ProfilePic.png";
import Image from "next/image";
import { linkProps } from "@/components/IconLinks/IconLinks";

const paragraphProps: HTMLAttributes<HTMLParagraphElement> = {
  className: "text-xl mb-4 leading-9",
};

// TODO: Extract and use elsewhere?
const primaryColorClass = "text-yellow-500";
const secondaryColorClass = "text-teal-500";

export default function About() {
  return (
    <div
      id="about"
      className="sm:container sm:mx-auto mx-2 text-center sm:text-left scroll-offset"
    >
      <h2 className="text-4xl font-bold py-2  text-yellow-500 text-center">
        About Me
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
        <div className="sm:col-span-2 mt-3">
          <p {...paragraphProps}>
            I{"'"}m a senior software engineer, recently at Hearst where I
            contributed to a React Content Management System, used by{" "}
            <span className={primaryColorClass}>
              50+ newspapers & magazines.
            </span>{" "}
            Including{" "}
            <span className={secondaryColorClass}>
              Cosmopolitan, Esquire, & Men{"'"}s Health.
            </span>
          </p>

          <p {...paragraphProps}>
            Formerly a software engineering instructor at General Assembly. I
            have had the opportunity to{" "}
            <span className={secondaryColorClass}>
              teach over 500 new developers
            </span>{" "}
            in demand skills, such as{" "}
            <span className={primaryColorClass}>React, Express, & Django</span>{" "}
            that they used to land jobs as full-stack developers.
          </p>

          <p {...paragraphProps}>
            Previously I developed software for{" "}
            <span className={primaryColorClass}>humanoid robots</span> which
            delivered therapy lessons to children with Autism.
          </p>

          <p {...paragraphProps}>
            Alongside work, I completed a{" "}
            <span className={secondaryColorClass}>
              Masters in Software Engineering
            </span>{" "}
            from{" "}
            <span className={primaryColorClass}>
              Harvard University{"'"}s Extension School
            </span>{" "}
            and a BA in Computer Science from TESU.
          </p>
          <div>
            <a href="mailto:benjenkinsv95@gmail.com" {...linkProps}>
              <button className="bg-yellow-500 hover:bg-transparent hover:border hover:border-yellow-500 text-black hover:text-yellow-500 font-bold py-2 px-4 rounded me-6">
                Get in Touch
              </button>
            </a>
            <a href="/Ben_Jenkins_Full_Stack_Resume.pdf" {...linkProps}>
              <button className="bg-transparent hover:bg-teal-600 text-teal-500 font-bold hover:text-white py-2 px-4 border border-teal-500 hover:border-transparent rounded">
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
  );
}
