import IconLinks from "@/components/IconLinks/IconLinks";

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 h-screen w-screen text-center"
    >
      <h2 className="text-4xl mb-2">Ben Jenkins</h2>
      <h3 className="text-2xl mb-4">
        Sr.&nbsp;Software&nbsp;Engineer |&nbsp;Former&nbsp;Instructor &
        Humanoid&nbsp;Robot&nbsp;Engineer
      </h3>
      <IconLinks />
    </section>
  );
}
