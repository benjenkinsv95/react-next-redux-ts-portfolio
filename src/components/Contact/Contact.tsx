import IconLinks from "@/components/IconLinks/IconLinks";
import Link from "next/link";

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 h-screen w-screen text-center scroll-offset"
    >
      <h1 className="text-4xl mb-2">Ben Jenkins</h1>
      <p className="text-2xl mb-4">
        Sr.&nbsp;Software&nbsp;Engineer |&nbsp;Former&nbsp;Instructor &
        Humanoid&nbsp;Robot&nbsp;Engineer
      </p>
      <IconLinks />
      <Link href="#about" className="mt-6">
        <button className="bg-amber-700 hover:bg-amber-600 hover:border hover:border-amber-700 text-white font-bold py-2 px-4 rounded mb-6">
          About Me
        </button>
      </Link>
      <Link href="#projects">
        <button className="bg-black hover:bg-gray-900 text-cyan-500 font-bold hover:text-white py-2 px-4 border border-cyan-500 hover:border-transparent rounded">
          View Projects
        </button>
      </Link>
    </section>
  );
}
