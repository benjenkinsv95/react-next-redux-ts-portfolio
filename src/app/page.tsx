import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-scree pb-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Contact />
        <section id='about'>About</section>
        <section id='projects'>Projects</section>
        <section id='skills'>Skills</section>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        Copyright yada
      </footer>
    </div>
  );
}
