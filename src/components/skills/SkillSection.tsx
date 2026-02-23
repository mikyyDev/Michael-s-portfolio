import Header from "../general/Header";
import { DiJavascript, DiReact } from "react-icons/di";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: DiJavascript, level: 85 },
  { name: "React JS", icon: DiReact, level: 95 },
  { name: "Next JS", icon: RiNextjsFill, level: 90 },
  { name: "Node JS", icon: FaNodeJs, level: 80 },
  { name: "TypeScript", icon: SiTypescript, level: 75 },
  { name: "Tailwind CSS", icon: RiTailwindCssFill, level: 90 },
];

export default function SkillSection() {
  return (
    <section id="skills" className="py-16 scroll-mt-16">
      <Header title="My Skills" />

      <div className="flex flex-wrap justify-center gap-6 mt-10">
        {skills.map((skill) => {
          const Icon = skill.icon;

          return (
            <div
              key={skill.name}
              className="bg-slate-900 text-center w-40 h-48 rounded-3xl flex flex-col items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-cyan-500/20"
            >
              <Icon className="text-5xl text-gray-300" />

              <p className="text-2xl font-semibold my-4 text-gray-200">
                {skill.level}%
              </p>

              <p className="text-indigo-400 font-semibold">{skill.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
