import {
  LuGraduationCap,
  LuBookOpen,
  LuAward,
  LuServer,
  LuPackage,
} from "react-icons/lu";

import { RiNextjsFill } from "react-icons/ri";

import ResumeCard from "@/components/resume/ResumeCard";
import Header from "@/components/general/Header";

export default function ResumeSection() {
  return (
    <section id="resume" className="my-12">
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* education section */}
        <div>
          <Header title="My Education" as="h2" />
          <div className="space-y-6">
            <ResumeCard
              icon={LuGraduationCap}
              role="Information Science Degree"
              description="Bachelor of Science in Information Science in  Addis Ababa University  Focused on algorithms, data structures, software engineering principles, and web technologies."
              date="Dec 2023- june 2027"
            />
            <ResumeCard
              icon={LuBookOpen}
              role="Relevant Coursework"
              description="Web Development, Database Systems, Data Structures & Algorithms, Software Engineering, Computer Networks, Operating Systems, Cloud Computing"
            />

            <ResumeCard
              icon={LuAward}
              role="Academic Achievements"
              description="Dean's List | Graduated Magna Cum Laude | Best Senior Project Award | President of Computer Science Club"
              date="March 2022 - Dec 2023"
            />
          </div>
        </div>
        {/* work experience */}
        <div>
          <Header title="My Work Experience" as="h2" />
          <div className="space-y-6">
            <ResumeCard
              icon={RiNextjsFill}
              role="Frontend Developer"
              description="Crafting responsive, accessible interfaces with modern frameworks like React & Next.js. Focus on performance, UX, and pixel-perfect implementation."
            />
            <ResumeCard
              icon={LuServer}
              role="Backend Developer"
              description="Building scalable APIs, databases, and server infrastructure. Experienced with Node.js, Python, cloud services, and microservices architecture."
            />

            <ResumeCard
              icon={LuPackage}
              role="Fullstack Developer"
              description="End-to-end web application development. Bridging frontend interfaces with backend systems for cohesive, full-featured digital solutions."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
