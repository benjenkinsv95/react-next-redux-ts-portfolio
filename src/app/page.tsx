import Experience from "@/components/Experience/Experience";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Projects from "@/components/Projects/Projects";

export default function Home() {
  return (
    <main>
      <Contact />
      <Experience />
      <Projects />
      {/* <section id='projects'>Projects</section>
        <section id='skills'>Skills</section> */}
      <Footer />
    </main>
  );
}
