"use client";

type Section = "websites" | "marketplace" | "news" | "blogs";

interface SwitcherProps {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
}

export function Switcher({ activeSection, setActiveSection }: SwitcherProps) {
  return (
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
  );
}
