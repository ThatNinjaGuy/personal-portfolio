export interface Project {
  title: string;
  description: string;
  url: string;
  githubUrl: string;
  associatedLinks?: {
    title: string;
    link: string;
  }[];
}

export const PROJECTS: Project[] = [
  {
    title: "Mentor Guide",
    description:
      "A comprehensive platform connecting mentors with mentees, facilitating knowledge sharing and professional growth.",
    url: "https://www.thatninjaguy.in/",
    githubUrl: "https://github.com/ThatNinjaGuy/guide",
  },
  {
    title: "Gatishakti",
    description:
      "A modern logistics and transportation management system to optimize supply chain operations.",
    url: "https://gatishakti.vercel.app/",
    githubUrl: "https://github.com/ThatNinjaGuy/gatishakti",
    associatedLinks: [
      {
        title: "Data Configuration",
        link: "https://gatishakti.vercel.app/studio",
      },
    ],
  },
  {
    title: "Harmony Initiatives",
    description:
      "A collaborative platform for social impact projects, connecting changemakers and resources.",
    url: "https://harmony-initiatives.vercel.app/",
    githubUrl: "https://github.com/ThatNinjaGuy/harmony-initiatives",
    associatedLinks: [
      {
        title: "Data Configuration",
        link: "https://harmony-initiatives.vercel.app/studio",
      },
    ],
  },
  {
    title: "Mentor Guide",
    description:
      "A comprehensive platform connecting mentors with mentees, facilitating knowledge sharing and professional growth.",
    url: "https://www.thatninjaguy.in/",
    githubUrl: "https://github.com/ThatNinjaGuy/guide",
  },
  {
    title: "Gatishakti",
    description:
      "A modern logistics and transportation management system to optimize supply chain operations.",
    url: "https://gatishakti.vercel.app/",
    githubUrl: "https://github.com/ThatNinjaGuy/gatishakti",
    associatedLinks: [
      {
        title: "Data Configuration",
        link: "https://gatishakti.vercel.app/studio",
      },
    ],
  },
  {
    title: "Harmony Initiatives",
    description:
      "A collaborative platform for social impact projects, connecting changemakers and resources.",
    url: "https://harmony-initiatives.vercel.app/",
    githubUrl: "https://github.com/ThatNinjaGuy/harmony-initiatives",
    associatedLinks: [
      {
        title: "Data Configuration",
        link: "https://harmony-initiatives.vercel.app/studio",
      },
    ],
  },
];
