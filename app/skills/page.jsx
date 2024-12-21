"use client";
import { motion } from "framer-motion";
import {
  ServerIcon,
  WrenchIcon,
  AcademicCapIcon,
  CodeBracketIcon,
  ShieldCheckIcon,
  LifebuoyIcon,
  ServerStackIcon,
} from "@heroicons/react/24/outline";

const Skills = () => {
  const Skill = [
    {
      title: "Frontend",
      skills:
        "React, Next.js, Vue, Nuxt 3, Tailwind CSS, Apollo Client, GraphQL",
      icon: <CodeBracketIcon className="md:h-6 md:w-6 h-4 w-4 text-teal-500" />,
    },
    {
      title: "Backend",
      skills: "Golang, Node.js, Hasura",
      icon: <ServerIcon className="md:h-6 md:w-6 h-4 w-4 text-teal-500" />,
    },
    {
      title: "Database",
      skills: "MongoDB, SQL, Docker, PostgreSQL",
      icon: <ServerStackIcon className="md:h-6 md:w-6 h-4 w-4 text-teal-500" />,
    },
    {
      title: "Tools",
      skills: "Git, GitHub, Figma, Postman API",
      icon: <WrenchIcon className="md:h-6 md:w-6 h-4 w-4 text-teal-500" />,
    },
    {
      title: "Programming",
      skills: "Python, Java, C++",
      icon: <AcademicCapIcon className="md:h-6 md:w-6 h-4 w-4 text-teal-500" />,
    },
    {
      title: "Concepts",
      skills: "Scalable System Design, RESTful APIs",
      icon: <ShieldCheckIcon className="md:h-6 md:w-6 h-4 w-4 text-teal-500" />,
    },
  ];

  return (
    <>
      <motion.div
        className="text-center mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <h2 className="md:text-3xl text-xl font-bold mt-20">
          My Skills and Achievements
        </h2>
        <p className="mt-4 md:text-lg">
          I specialize in crafting robust applications and solving challenging
          problems. I have solved over{" "}
          <span className="text-teal-400 font-semibold">200+</span> problems on{" "}
          <span className="font-semibold text-teal-400">LeetCode</span> and
          participated in numerous coding challenges.
        </p>
        <p className="mt-2 md:text-lg text-base flex items-center space-x-2 md:mx-32">
          <LifebuoyIcon className="md:h-6 md:w-6 h-4 w-4 text-teal-500 sm:block hidden" />
          <span>
            Here are some of the technologies, tools, and concepts currently I
            have and use.
          </span>
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        {Skill.map(({ title, skills, icon }) => (
          <motion.div
            key={title}
            className="flex items-center px-4 py-3 rounded-md shadow-md "
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="mr-3">{icon}</div>
            <div>
              <span className="text-base sm:text-xl">{title}:</span> {skills}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default Skills;
