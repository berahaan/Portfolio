"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import BirhanImage from "./images/Birhan.jpeg";

export default function HomePage() {
  const [color, setColor] = useState("light");

  useEffect(() => {
    const storedColor = localStorage.getItem("theme");
    if (storedColor) {
      setColor(storedColor);
    } else {
      setColor("light");
    }
  }, []);

  return (
    <section className="hero min-h-screen flex items-center justify-center px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
        <div className="text-center md:text-left">
          <motion.h1
            className="md:text-4xl mt-20 text-2xl font-bold "
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Hey, I'm{" "}
            <span
              className={`${
                color === "dark" ? "text-teal-300" : "text-teal-300"
              }`}
            >
              Birhan
            </span>
          </motion.h1>

          <motion.p
            className="mt-4 text-base md:text-xl"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            A Passionate Full-Stack Developer dedicated to creating impactful
            web solutions.
          </motion.p>
          <motion.p
            className="mt-2 text-base md:text-lg"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Let’s build innovative, scalable, and user-friendly applications
            together.
          </motion.p>

          <motion.div
            className="mt-6 space-x-2 grid grid-cols-2 md:grid-cols-3 gap-2 "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {/* <button className="max-w-36 px-2 py-2 bg-green-500 text-white font-medium rounded-md hover:bg-green-600">
              View My Work
            </button> */}
            {/* <button className="max-w-36 px-2 py-2 bg-teal-400 text-gray-800 font-medium rounded-md hover:bg-green-400">
              <Link href="/contact"> Contact Me</Link>
            </button> */}
            <a
              href="https://drive.google.com/uc?export=download&id=1YKbWu67lDWYFrmKy6h94L0bWOwVML8c4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex text-base w-36 px-2 py-2 bg-teal-400 text-gray-800 font-medium rounded-md hover:bg-green-400">
                <ArrowDownCircleIcon className="w-5 h-5 mt-1" /> Download CV
              </button>{" "}
            </a>
          </motion.div>
        </div>
        <div className="flex justify-center md:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <Image
              src={BirhanImage}
              alt="Birhan's portrait"
              className="rounded-full shadow-lg border-4 border-yellow-300 w-60 h-auto md:w-96 "
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
