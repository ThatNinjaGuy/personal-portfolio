export type IconType = "settings" | "github" | "database" | "docs";

export interface AssociatedLink {
  title: string;
  link: string;
  icon: IconType;
}

export interface Project {
  title: string;
  description: string;
  url: string;
  githubUrl: string;
  associatedLinks?: AssociatedLink[];
}

export const PROJECTS: Project[] = [
  {
    title: "Mentor Guide",
    description:
      "A cutting-edge mentorship platform that revolutionizes professional development through personalized 1-on-1 guidance. Features include expert mentor matching, interactive learning paths, real-time scheduling, secure video conferencing, progress tracking, and comprehensive resource libraries. Our platform empowers students and professionals to achieve their career goals through structured mentorship programs, skill development workshops, and tailored feedback sessions. With specialized tracks for academic guidance, career transitions, and leadership development, we're transforming how knowledge is shared and careers are built.",
    url: "https://www.thatninjaguy.in/",
    githubUrl: "https://github.com/ThatNinjaGuy/guide",
  },
  {
    title: "Gatishakti",
    description:
      "A comprehensive online construction management platform that streamlines home building projects from ideation to completion. Features include material procurement, expert contractor matching, real-time project tracking, and a merchant interface for service providers. The platform revolutionizes traditional construction processes by bringing homeowners, contractors, and material suppliers together in one digital ecosystem, making home construction simpler and more efficient.",
    url: "https://gatishakti.vercel.app/",
    githubUrl: "https://github.com/ThatNinjaGuy/gatishakti",
    associatedLinks: [
      {
        title: "Data Configuration",
        link: "https://gatishakti.vercel.app/studio",
        icon: "settings",
      },
    ],
  },
  {
    title: "Harmony Initiatives",
    description:
      "A comprehensive platform for managing corporate social responsibility (CSR) initiatives, featuring a public showcase portal and a powerful CMS. Organizations can create, track and showcase their social impact projects, manage stakeholder engagement, generate impact reports, and enable community participation through an intuitive interface. The platform includes real-time analytics, newsletter management, and seamless integration with social media and donation systems.",
    url: "https://harmony-initiatives.vercel.app/",
    githubUrl: "https://github.com/ThatNinjaGuy/harmony-initiatives",
    associatedLinks: [
      {
        title: "Data Configuration",
        link: "https://harmony-initiatives.vercel.app/studio",
        icon: "database",
      },
    ],
  },
];
