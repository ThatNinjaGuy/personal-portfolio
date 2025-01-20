"use client";

import { PROJECTS } from "@/constants/projects";
import {
  MARKETPLACE_ITEMS,
  NEWS_ITEMS,
  BLOG_POSTS,
} from "@/constants/sections";
import { ProjectCard } from "./ProjectCard";
import { styles } from "@/styles/Home.styles";
import { useState } from "react";
import Image from "next/image";

type Section = "websites" | "marketplace" | "news" | "blogs";

export function Home() {
  const [activeSection, setActiveSection] = useState<Section>("marketplace");

  const renderContent = () => {
    switch (activeSection) {
      case "websites":
        return PROJECTS.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ));
      case "marketplace":
        return MARKETPLACE_ITEMS.map((item, index) => (
          <ProjectCard key={index} project={item} />
        ));
      case "news":
        return NEWS_ITEMS.map((item, index) => (
          <ProjectCard key={index} project={item} />
        ));
      case "blogs":
        return BLOG_POSTS.map((item, index) => (
          <ProjectCard key={index} project={item} />
        ));
    }
  };

  return (
    <main className={styles.page}>
      <div className={styles.main}>
        <section className={styles.titleSection}>
          <h1 className={styles.title}>ThatNinjaGuy</h1>
        </section>

        <div className="flex justify-center mb-2 w-full">
          <a
            href="https://www.thatninjaguy.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full cursor-pointer"
          >
            <div className="relative w-full h-[100px] overflow-hidden shadow-lg rounded-lg">
              <Image
                src="/mentorship-ad.gif"
                alt="Ninja Animation"
                fill
                style={{ objectFit: "cover" }}
                priority
                onError={(e) => {
                  console.error("Error loading image:", e);
                }}
              />
            </div>
          </a>
        </div>

        <div className="flex justify-center gap-4 mb-2">
          {["marketplace", "websites", "news", "blogs"].map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section as Section)}
              className={`px-6 py-3 rounded-lg font-medium transition-all
                ${
                  activeSection === section
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>

        <div className={styles.grid}>{renderContent()}</div>
      </div>
    </main>
  );
}
