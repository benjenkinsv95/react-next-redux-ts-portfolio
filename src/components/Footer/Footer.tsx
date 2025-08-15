import IconLinks from "@/components/IconLinks/IconLinks";

export default function Footer() {
  return (
    <footer className="bg-muted border-t border-border py-8">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <IconLinks className="mb-4" />
        <div className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Ben Jenkins - All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
