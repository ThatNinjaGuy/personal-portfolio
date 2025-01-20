"use client";

import Link from "next/link";
import { Project } from "@/constants/projects";
import { styles } from "@/styles/ProjectCard.styles";
import { Icon } from "@/components/icons/IconMap";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
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
        <p className={styles.description}>{project.description}</p>

        <div className={styles.linksContainer}>
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.link.base} ${styles.link.github}`}
          >
            <Icon type="github" className="inline-block w-4 h-4 mr-1" />
            GitHub
          </Link>

          {project.associatedLinks?.map((link, linkIndex) => (
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
