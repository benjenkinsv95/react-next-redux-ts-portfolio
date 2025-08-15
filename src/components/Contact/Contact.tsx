import IconLinks from "@/components/IconLinks/IconLinks";
import Link from "next/link";
import Image from "next/image";
import profilePic from "./ProfilePic.png"; // adjust path if needed

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-background text-foreground min-h-screen md:h-screen w-screen flex items-center scroll-offset"
    >
      <div className="mx-auto max-w-6xl w-full px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left: hero text */}
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">
              Ben Jenkins
            </h1>
            <p className="text-2xl mb-1 text-muted-foreground">
              Senior Software Engineer
            </p>
            <p className="text-2xl mb-8 text-muted-foreground">
              Former Instructor & Humanoid Robot Engineer
            </p>

            <div className="flex justify-center md:justify-start">
              <IconLinks />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
              <Link href="#experience">
                <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-6 rounded-lg transition-colors duration-200 min-w-[140px]">
                  Experience
                </button>
              </Link>
              <Link href="#projects">
                <button className="bg-card hover:bg-muted text-card-foreground font-semibold py-3 px-6 border border-border hover:border-primary rounded-lg transition-all duration-200 min-w-[140px]">
                  View Projects
                </button>
              </Link>
            </div>
          </div>

          {/* Right: headshot */}
          <div className="flex justify-center md:justify-end">
            <Image
              src={profilePic}
              alt="Ben Jenkins headshot"
              priority
              width={320}
              height={320}
              sizes="(min-width: 1024px) 360px, (min-width: 768px) 320px, 60vw"
              className="rounded-2xl shadow-xl ring-1 ring-border/50 w-[240px] h-[240px] md:w-[320px] md:h-[320px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
