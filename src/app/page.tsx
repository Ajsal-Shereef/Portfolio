import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Teaching } from "@/components/teaching";
import { Education } from "@/components/education";
import { Publications } from "@/components/publications";
import { Certifications } from "@/components/certifications";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { hero, publications } from "@/lib/data";

export default function HomePage() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://ajsal-shereef.vercel.app";
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: hero.name,
    jobTitle: hero.tagline,
    email: hero.email,
    telephone: hero.phone,
    url: siteUrl,
    sameAs: [hero.github, hero.linkedin],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Geelong",
      addressRegion: "VIC",
      addressCountry: "AU",
    },
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Ajsal Shereef Portfolio",
    url: siteUrl,
    inLanguage: "en-AU",
  };

  const publicationsJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Research Publications",
    itemListElement: publications.map((title, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: title,
    })),
  };

  return (
    <div className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(publicationsJsonLd) }}
      />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Teaching />
        <Education />
        <Certifications />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
