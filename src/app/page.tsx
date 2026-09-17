"use client";

import { Scene } from "@/components/game3d/Scene";
import { hero, publications } from "@/lib/data";
import { KeyboardControls } from "@react-three/drei";

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
    itemListElement: publications.map((pub, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: pub.title,
    })),
  };

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
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
      <main className="flex-1 w-full h-full">
        <KeyboardControls
          map={[
            { name: "forward", keys: ["ArrowUp", "KeyW"] },
            { name: "backward", keys: ["ArrowDown", "KeyS"] },
            { name: "left", keys: ["ArrowLeft", "KeyA"] },
            { name: "right", keys: ["ArrowRight", "KeyD"] },
          ]}
        >
          <Scene />
        </KeyboardControls>
      </main>
    </div>
  );
}
