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
      width="52"
      height="52"
      viewBox="0 0 52 52"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M8 8 L44 44" />
      <path d="M44 20 V44 H20" />
    </svg>
  );
}

function Index() {
  return (
    <div className="flex min-h-screen flex-col bg-background px-6 pt-8 pb-10 text-foreground md:px-14 md:pt-10">
      {/* Top bar */}
      <header className="flex items-center justify-between text-[11px] font-medium uppercase tracking-[0.18em]">
        <a href="/" className="tracking-[0.24em]">
          Marmik
        </a>
        <nav className="hidden items-center gap-14 md:flex">
          <a href="#about" className="transition-opacity hover:opacity-50">
            About me
          </a>
          <a href="#projects" className="transition-opacity hover:opacity-50">
            Projects
          </a>
          <a href="#contacts" className="transition-opacity hover:opacity-50">
            Contacts
          </a>
        </nav>
        <a
          href="mailto:hello@marmiksoni.dev"
          className="normal-case tracking-[0.08em] transition-opacity hover:opacity-50"
        >
          hello@marmiksoni.dev
        </a>
      </header>

      {/* Headline */}
      <h1 className="mt-16 text-[clamp(3rem,10vw,8.5rem)] font-medium uppercase leading-[0.95] tracking-tight md:mt-24">
        Web Designer
        <br />
        & Developer
      </h1>

      {/* Intro */}
      <p
        className="ml-auto mt-10 max-w-3xl text-[13px] uppercase leading-relaxed tracking-wide md:mt-14"
        style={{ textIndent: "18%", textAlign: "justify" }}
      >
        I'm a passionate web designer & developer, specializing in clean
        interfaces, modern websites and adaptive web design. I build products
        that are simple, beautiful and easy to use — and I believe good results
        come from close collaboration, shared ambition and mutual respect. I
        create designs that make a positive impact on customers.
      </p>

      {/* Bottom block: portrait + arrow left, name right */}
      <div className="mt-auto flex items-end justify-between gap-10 pt-16">
        <div className="flex h-full flex-col justify-between self-stretch">
          <img
            src={portrait}
            alt="Portrait of Marmik Soni"
            width={768}
            height={960}
            className="w-36 rounded-md grayscale md:w-48"
          />
          <div className="mt-auto pt-10">
            <ArrowDownRight />
          </div>
        </div>
        <h2 className="text-right text-[clamp(2.5rem,8vw,6.5rem)] font-medium uppercase leading-[0.95] tracking-tight">
          Marmik
          <br />
          Soni
        </h2>
      </div>
    </div>
  );
}
