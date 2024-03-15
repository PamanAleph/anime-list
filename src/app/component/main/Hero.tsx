"use client";
import Link from "next/link";
import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto pt-56 pb-10 ">
      <div className="flex items-center flex-1">
        <div className="flex flex-col w-full ">
          <h1 className="text-5xl font-extrabold text-center lg:text-7xl 2xl:text-8xl">
            <span className="text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 dark:from-teal-200 dark:via-indigo-300 dark:to-sky-500">
              P-
            </span>

            <span className="text-transparent bg-gradient-to-tr bg-clip-text from-blue-500 via-pink-500 to-red-500 dark:from-sky-300 dark:via-pink-300 dark:to-red-500">
              AnimeList
            </span>
          </h1>

          <p className="max-w-7xl mx-auto mt-6 text-lg text-center text-[#76ABAE] capitalize dark:text-white md:text-xl">
            <TypeAnimation
              preRenderFirstString={true}
              sequence={[
                500,
                "Temukan anime favorit Anda bersama kami!",
                1000,
                "Jelajahi petualangan anime baru!",
                1000,
                "Temukan obsesi anime Anda berikutnya!",
                1000,
                "Mulailah perjalanan anime bersama kami!",
                500,
              ]}
              speed={50}
              style={{ fontSize: "2em" }}
              repeat={Infinity}
            />
          </p>
        </div>
      </div>
    </section>
  );
}
