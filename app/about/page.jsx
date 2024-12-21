"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  
  return (
    <section className="about-page min-h-screen flex flex-col items-center justify-center px-6">
      <motion.div
        className="max-w-6xl mx-auto text-center space-y-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Introduction */}
        <motion.p
          className="text-lg md:text-xl leading-relaxed mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hi, I’m{" "}
          <span className="font-bold text-teal-400">Birhan Kabtamu</span>, a
          Full-Stack Developer and Computer Engineer based in Addis Ababa. My
          mission is to create scalable, user-centric web solutions that solve
          real-world problems. With a foundation in Electrical and Computer
          Engineering at Addis Ababa University, I bring a blend of technical
          expertise, creativity, and problem-solving skills to deliver impactful
          results.
        </motion.p>

        <motion.p
          className="text-lg md:text-xl leading-relaxed"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          My journey began with curiosity—exploring how systems work and how I
          could build my own. Over time, this curiosity evolved into a deep
          commitment to{" "}
          <span className="font-semibold">
            developing software that positively impacts lives
          </span>
          , from automating processes to enhancing user experiences. My
          philosophy? Every line of code is a step toward solving a challenge.
        </motion.p>

        {/* What Sets Me Apart */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-teal-400">
            What Sets Me Apart
          </h2>
          <motion.p
            className="text-lg md:text-xl mt-4 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            I believe that being a developer isn't just about writing code—it's
            about providing meaningful solutions to real-world challenges. I
            thrive in fast-paced, collaborative environments, bringing more than
            just technical skills to the table. Here’s what sets me apart:
          </motion.p>
          <ul className="list-disc list-inside mt-4 text-left mx-auto text-lg">
            <motion.li
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring" }}
            >
              Turning complex problems into elegant, scalable solutions.
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring" }}
            >
              Crafting systems with attention to both performance and
              maintainability.
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring" }}
            >
              Communicating effectively with cross-functional teams to deliver
              projects on time.
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring" }}
            >
              Continuously learning and integrating new tools and technologies
              to stay ahead of industry trends.
            </motion.li>
          </ul>
        </motion.div>

        {/* Professional Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h2 className="text-2xl font-bold text-teal-400">
            Professional Highlights
          </h2>
          <p className="text-lg md:text-xl mt-4 leading-relaxed">
            Here’s a snapshot of my key accomplishments and experiences:
          </p>
          <ul className="list-disc list-inside mt-4 text-left mx-auto text-lg">
            <motion.li
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring" }}
            >
              Built a cinema ticketing platform with secure payment integration
              using Nuxt 3, Golang, Hasura, and Chapa, enhancing user experience
              and reliability.
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring" }}
            >
              Developed a real-time chat application with WebSocket integration
              for seamless and secure communication.
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring" }}
            >
              Excelled as a Web Development Intern, delivering scalable web
              applications with React.js, MongoDB, and Tailwind CSS.
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring" }}
            >
              Designed a hospital management system for streamlined patient
              management, EMR handling, and appointment scheduling.
            </motion.li>
          </ul>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="cta-section  p-6 rounded-lg shadow-lg mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <p className="text-lg md:text-xl leading-relaxed mb-6">
            Whether you're looking for an independent developer to bring your
            ideas to life or a collaborative team player, I’m ready to help.
            Let’s create something amazing together!
          </p>
          <Link
            href="/contact"
            className="inline-block bg-teal-400  px-6 py-3 rounded shadow hover:bg-teal-500"
          >
            Get in Touch
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
