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

  const sectionDescriptions = {
    marketplace:
      "Discover the ultimate travel essentials at our one-stop shop for adventurers and globetrotters! Explore our curated collection of top-quality travel goods, from stylish travel bags to innovative accessories that make your journeys effortless. Stay ahead of the curve with our trending travel items, carefully selected to enhance your experiences on the road. Whether you're a weekend warrior or a long-term explorer, find everything you need to pack smart and travel in style.",
    websites:
      "Create your dream website or app with ease! Our expert team in India offers top-notch web and mobile app development services. From stunning designs to powerful functionality, we'll bring your vision to life. Get started on your digital journey today!",
    news: "Stay ahead of the curve with our cutting-edge coverage of artificial intelligence breakthroughs, semiconductor advancements, and supercomputer developments. Our news hub delivers the latest AI news, expert analysis, and in-depth reports on the technologies shaping our future. From groundbreaking research to industry innovations, we bring you timely, authoritative insights into the world of AI and high-performance computing.",
    blogs: `Discover cutting-edge insights on our comprehensive blog platform featuring the latest AI blogs, supercomputer advancements, and semiconductor innovations. Dive into a world of artificial intelligence exploration with expert-curated content that keeps you at the forefront of technological breakthroughs. From in-depth analyses to industry trends, our AI blogs offer unparalleled coverage of the rapidly evolving tech landscape. Stay informed, inspired, and ahead of the curve with our diverse collection of thought-provoking articles on AI, supercomputing, and semiconductor developments.`,
  };

  const sectionDetailedDescriptions = {
    marketplace: `Why Choose Us
Unmatched Quality: Our good quality travel items are built to last, ensuring your gear keeps up with your wanderlust.
Curated Selection: We handpick the best travel things online, saving you time and guaranteeing satisfaction.
Ultimate Travel Packs: Find perfectly bundled sets for any type of trip, from city breaks to wilderness adventures.
Featured Products
Innovative Travel Bags: From sleek carry-ons to spacious backpacks, find the perfect companion for your journey1.
Smart Travel Accessories: Discover gadgets and organizers that make packing and traveling a breeze5.
Trending Travel Gear: Stay ahead with the latest travel innovations and must-have items7.
Don't settle for ordinary travel gear. Elevate your adventures with our premium selection of travel essentials. Shop now and transform the way you travel!`,
    websites: `Why Choose Us
Professional Expertise: Our skilled developers in India craft high-quality websites and apps tailored to your needs3.
Affordable Solutions: Get a premium website or app without breaking the bank4.
Quick Turnaround: We deliver your project on time, helping you launch faster5.
Our Services
Custom Website Development: From simple landing pages to complex e-commerce platforms6
Mobile App Creation: Native and cross-platform apps for iOS and Android7
Web Application Development: Scalable and feature-rich web apps for your business8
Don't wait to establish your online presence. Let's make your website or app a reality today!`,
    news: `Why Choose Us
Comprehensive Coverage: Get the most up-to-date AI news and semiconductor industry updates.
Expert Analysis: Our team of tech journalists provides in-depth insights into complex AI and supercomputer topics.
Timely Reporting: Be the first to know about breakthroughs in artificial intelligence and semiconductor technology.
Don't miss a beat in the fast-paced world of AI. Bookmark our site for daily updates on the future of technology!`,
    blogs: `Why Choose Our Blog
Cutting-Edge Content: Access the most recent and relevant information on artificial intelligence, supercomputers, and semiconductors.
Expert Insights: Benefit from articles written by industry professionals and thought leaders.
Comprehensive Coverage: Explore a wide range of topics, from AI applications to semiconductor breakthroughs.
Fuel your passion for technology and stay ahead in the AI revolution. Bookmark our blog for daily doses of innovation!`,
  };

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

        <div className="max-w-3xl mx-auto mb-2 px-4">
          <p className="text-gray-700 text-lg text-center leading-relaxed">
            {sectionDescriptions[activeSection]}
          </p>
        </div>

        <div className={styles.grid}>{renderContent()}</div>

        <div className="max-w-3xl mx-auto mb-2 px-4">
          <p className="text-gray-700 text-lg text-center leading-relaxed">
            {sectionDetailedDescriptions[activeSection]}
          </p>
        </div>
      </div>
    </main>
  );
}
