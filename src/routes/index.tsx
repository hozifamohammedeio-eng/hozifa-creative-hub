import { createFileRoute } from "@tanstack/react-router";
import { Background } from "@/components/portfolio/Background";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Services } from "@/components/portfolio/Services";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Certificates } from "@/components/portfolio/Certificates";
import { Process } from "@/components/portfolio/Process";
import { Feedback } from "@/components/portfolio/Feedback";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { contact, site } from "@/data/site";

const title = "Hozifa Mohammad — Video Editor & AI Content Creator";
const description =
  "Freelance video editor, AI content creator and research specialist in Alexandria, Egypt. Short-form video, AI-assisted content, verified research, data and business documents.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: site.name,
          jobTitle: site.title,
          email: `mailto:${contact.email}`,
          telephone: contact.phone,
          address: { "@type": "PostalAddress", addressLocality: "Alexandria", addressCountry: "EG" },
          sameAs: [contact.linkedin, contact.instagram],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="relative min-h-dvh w-full overflow-x-hidden">
      <Background />
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Skills />
        <Certificates />
        <Process />
        <Feedback />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}