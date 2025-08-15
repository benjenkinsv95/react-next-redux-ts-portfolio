import IconLinks from "@/components/IconLinks/IconLinks";
import Link from "next/link";

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-center bg-background text-foreground h-screen w-screen text-center scroll-offset"
    >
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">
          Ben Jenkins
        </h1>
        <p className="text-2xl mb-8 text-muted-foreground">
          Senior Software Engineer | Former Instructor & Humanoid Robot Engineer
        </p>
        <IconLinks />
        <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
          <Link href="#about">
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-6 rounded-lg transition-colors duration-200 min-w-[140px]">
              About Me
            </button>
          </Link>
          <Link href="#projects">
            <button className="bg-card hover:bg-muted text-card-foreground font-semibold py-3 px-6 border border-border hover:border-primary rounded-lg transition-all duration-200 min-w-[140px]">
              View Projects
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
