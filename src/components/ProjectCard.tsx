"use client";

import Link from "next/link";
import { Project } from "@/constants/projects";
import { styles } from "@/styles/ProjectCard.styles";
import { Icon } from "@/components/icons/IconMap";
import { MarketplaceItem, NewsItem, BlogPost } from "@/constants/sections";

interface ProjectCardProps {
  project: Project | MarketplaceItem | NewsItem | BlogPost;
}

export function ProjectCard({ project }: ProjectCardProps) {
  // Check for specific item types and render additional info
  const renderExtraInfo = () => {
    if ("price" in project) {
      return <div className={styles.price}>{project.price}</div>;
    }
    if ("date" in project) {
      return (
        <div className={styles.newsInfo}>
          <span>{project.date}</span> • <span>{project.source}</span>
        </div>
      );
    }
    if ("author" in project) {
      return (
        <div className={styles.blogInfo}>
          <span>{project.author}</span> • <span>{project.readTime}</span>
        </div>
      );
    }
    return null;
  };

  return (
    <div className={styles.card}>
      <div className={styles.gradient} />

      <div className={styles.contentWrapper}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>{project.title}</h2>
          <Link
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.visitButton}
          >
            Visit
          </Link>
        </div>
        {renderExtraInfo()}
        <p className={styles.description}>{project.description}</p>

        <div className={styles.linksContainer}>
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.link.base} ${styles.link.github}`}
            >
              <Icon type="github" className="inline-block w-4 h-4 mr-1" />
              GitHub
            </Link>
          )}

          {"associatedLinks" in project &&
            project.associatedLinks?.map((link, linkIndex) => (
              <Link
                key={linkIndex}
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.link.base} ${styles.link.associated}`}
              >
                <Icon type={link.icon} className="inline-block w-4 h-4 mr-1" />
                {link.title}
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
