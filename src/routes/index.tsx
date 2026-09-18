import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Marmik Soni — Web Designer & Developer" },
      {
        name: "description",
        content:
          "Portfolio of Marmik Soni, a web designer and developer building clean, modern and easy-to-use products.",
      },
      { property: "og:title", content: "Marmik Soni — Web Designer & Developer" },
      {
        property: "og:description",
        content:
          "Portfolio of Marmik Soni, a web designer and developer building clean, modern and easy-to-use products.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function ArrowDownRight() {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 52 52"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
      className="h-8 w-8 md:h-11 md:w-11"
    >
      <path d="M8 8 L44 44" />
      <path d="M44 20 V44 H20" />
    </svg>
  );
}

function IslandMenu() {
  const linkClass =
    "rounded-full px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em] transition-colors hover:bg-foreground hover:text-background md:px-4 md:py-2 md:text-xs";
  return (
    <nav
      aria-label="Primary"
      className="fixed bottom-5 left-1/2 z-50 flex -translate-x-1/2 items-center gap-0.5 rounded-full border border-foreground/10 bg-background/70 p-1.5 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.18)] backdrop-blur-xl md:bottom-8 md:gap-1"
    >
      <a href="#about" className={linkClass}>
        About
      </a>
      <a href="#projects" className={linkClass}>
        Projects
      </a>
      <a href="#contacts" className={linkClass}>
        Contacts
      </a>
      <a
        href="mailto:hello@marmiksoni.dev"
        className="ml-0.5 rounded-full bg-foreground px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-background transition-opacity hover:opacity-80 md:ml-1 md:px-4 md:py-2 md:text-xs"
      >
        Email
      </a>
    </nav>
  );
}

function Index() {
  return (
    <div className="relative flex h-dvh flex-col overflow-hidden bg-background px-6 pt-8 text-foreground md:px-14 md:pt-12">
      {/* Headline */}
      <h1 className="text-[clamp(2.6rem,9.5vh,8rem)] font-medium uppercase leading-[0.95] tracking-tight">
        Web Designer
        <br />
        & Developer
      </h1>

      {/* Intro */}
      <p
        className="ml-auto mt-6 max-w-3xl text-[12px] uppercase leading-relaxed tracking-wide md:mt-10 md:text-[13px]"
        style={{ textIndent: "18%", textAlign: "justify" }}
      >
        I'm a passionate web designer & developer, specializing in clean
        interfaces, modern websites and adaptive web design. I build products
        that are simple, beautiful and easy to use — and I believe good results
        come from close collaboration, shared ambition and mutual respect. I
        create designs that make a positive impact on customers.
      </p>

      {/* Bottom block: portrait + arrow left, name right */}
      <div className="mt-auto flex items-end justify-between gap-6 pb-24 md:gap-10 md:pb-28">
        <div className="flex h-full min-h-0 flex-col justify-between self-stretch">
          <img
            src={portrait}
            alt="Portrait of Marmik Soni"
            width={768}
            height={960}
            className="w-24 rounded-md grayscale sm:w-32 md:w-44"
          />
          <div className="mt-auto pt-4 md:pt-8">
            <ArrowDownRight />
          </div>
        </div>
        <h2 className="text-right text-[clamp(2.2rem,7.5vh,6rem)] font-medium uppercase leading-[0.95] tracking-tight">
          Marmik
          <br />
          Soni
        </h2>
      </div>

      <IslandMenu />
    </div>
  );
}
