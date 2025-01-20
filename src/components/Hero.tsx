"use client";

import { PROJECTS } from "@/constants/projects";
import {
  MARKETPLACE_ITEMS,
  NEWS_ITEMS,
  BLOG_POSTS,
  SECTION_DESCRIPTIONS,
  SECTION_DETAILED_DESCRIPTIONS,
} from "@/constants/sections";
import { ProjectCard } from "./ProjectCard";
import { styles } from "@/styles/Home.styles";
import { Switcher } from "./Switcher";

type Section = "websites" | "marketplace" | "news" | "blogs";

interface HeroProps {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
}

export function Hero({ activeSection, setActiveSection }: HeroProps) {
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
    <>
      <Switcher
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <div className="max-w-3xl mx-auto mb-2 px-4">
        <p className="text-gray-700 text-lg text-center leading-relaxed">
          {SECTION_DESCRIPTIONS[activeSection]}
        </p>
      </div>

      <div className={styles.grid}>{renderContent()}</div>

      <div className="max-w-3xl mx-auto mb-2 px-4">
        <p className="text-gray-700 text-lg text-center leading-relaxed">
          {SECTION_DETAILED_DESCRIPTIONS[activeSection]}
        </p>
      </div>
    </>
  );
}
