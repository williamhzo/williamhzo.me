import Link from "next/link";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="prose mx-auto flex flex-col items-start gap-6 p-5 pt-24 font-sans">
      <Link
        href="/"
        className="text-muted-foreground hover:text-accent font-mono font-normal no-underline transition-colors duration-150"
      >
        home
      </Link>
      {children}
    </section>
  );
}
