import { PROJECTS } from "@/constants/projects";
import { ProjectCard } from "./ProjectCard";
import { styles } from "@/styles/Home.styles";

export function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.main}>
        <section className={styles.titleSection}>
          <h1 className={styles.title}>Welcome to ThatNinjaGuy</h1>
          <p className={styles.subtitle}>
            Explore my collection of projects showcasing web development,
            design, and problem-solving skills.
          </p>
        </section>

        <div className={styles.grid}>
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}
