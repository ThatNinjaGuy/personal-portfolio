"use client";

import Image from "next/image";
import { styles } from "@/styles/Home.styles";

export function Header() {
  return (
    <>
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
    </>
  );
}
