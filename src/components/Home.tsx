"use client";

import { styles } from "@/styles/Home.styles";
import { useState } from "react";
import { Header } from "./Header";
import { Hero } from "./Hero";

type Section = "websites" | "marketplace" | "news" | "blogs";

export function Home() {
  const [activeSection, setActiveSection] = useState<Section>("marketplace");

  return (
    <main className={styles.page}>
      <div className={styles.main}>
        <Header />
        <Hero
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      </div>
    </main>
  );
}
