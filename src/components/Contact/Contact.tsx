import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import {  SvgIconProps } from "@mui/material";
import { AnchorHTMLAttributes } from "react";

const iconProps: SvgIconProps = {
  className: "hover:text-yellow-300 mx-1.5",
  fontSize: "large",
};

const linkProps: AnchorHTMLAttributes<HTMLAnchorElement> = {
  target: "_blank",
  rel: "noreferrer",
};

const Contact = () => (
  <section
    id="contact"
    className="flex flex-col justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 h-screen w-screen text-center"
  >
    <h2 className="text-4xl mb-2">Ben Jenkins</h2>
    <h3 className="text-2xl mb-4">
      Sr.&nbsp;Software&nbsp;Engineer |&nbsp;Former&nbsp;Instructor &
      Humanoid&nbsp;Robot&nbsp;Engineer
    </h3>
    <div>
      <a
        href="https://www.linkedin.com/in/benjenkinsv95/"
        aria-label="Ben Jenkins' LinkedIn"
        {...linkProps}
      >
        <LinkedInIcon {...iconProps} />
      </a>
      <a
        href="mailto:benjenkinsv95@gmail.com"
        aria-label="Ben Jenkins' Email"
        {...linkProps}
      >
        <EmailIcon {...iconProps} />
      </a>
      <a
        href="https://github.com/benjenkinsv95"
        aria-label="Ben Jenkins' GitHub"
        {...linkProps}
      >
        <GitHubIcon {...iconProps} />
      </a>
    </div>
  </section>
);

export default Contact;
