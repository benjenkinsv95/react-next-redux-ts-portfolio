import IconLinks from "@/components/IconLinks/IconLinks";

export default function Footer() {
  // TODO: Update gradient colors
  return (
    <footer className="h-30 flex justify-center items-center bg-gradient-to-r from-blue-500 to-cyan-500">
      <div className="py-4 text-center">
        <IconLinks className="mb-2" />
        <div className="font-bold">
          © {new Date().getFullYear()} BEN JENKINS - ALL RIGHTS RESERVED
        </div>
      </div>
    </footer>
  );
}
