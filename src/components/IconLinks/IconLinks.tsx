import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";

import { SvgIconProps } from "@mui/material";
import { AnchorHTMLAttributes } from "react";

interface IconLinksProps {
  className?: string;
}

const iconProps: SvgIconProps = {
  className: "hover:text-yellow-300 mx-1.5",
  fontSize: "large",
};

export const linkProps: AnchorHTMLAttributes<HTMLAnchorElement> = {
  target: "_blank",
  rel: "noreferrer",
};

export default function IconLinks({ className }: IconLinksProps) {
  return (
    <div className={className}>
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
  );
}
