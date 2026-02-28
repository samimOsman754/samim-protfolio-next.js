import React from "react";
import ResumeCard from "./ResumeCard";
import { FaCodepen, FaGraduationCap, FaReact } from "react-icons/fa";
import { BiBadge } from "react-icons/bi";
// import { GrLanguage } from "react-icons/gr";

const Resume = () => {
  return (
    <div className="pt-20 pb-16">
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* Wrok part */}
        <div data-aos="zoom-in" data-aos-anchor-placement="top-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            My Work <span className="text-cyan-200">Experince</span>
          </h1>
          <div className="mt-10">
            <ResumeCard
              Icon={FaReact}
              role="Frontend Developer"
              desc="Specializing in building high-performance, SEO-friendly web
            applications using Next.js and React. I focus on delivering seamless
            user experiences through server-side rendering, static site
            generation, and modern UI/UX principles."
            />
            <ResumeCard
              Icon={FaCodepen}
              role="Next.js Developer"
              desc="Developing scalable and maintainable full-stack web applications using Next.js and TypeScript."
            />
          </div>
        </div>
        {/* Education part */}
        <div
          data-aos="zoom-out"
          data-aos-anchor-placement="top-center"
          data-aos-delay="300"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            My <span className="text-cyan-200">Education</span>
          </h1>
          <div className="mt-10">
            <ResumeCard
              Icon={BiBadge}
              role="As-Sunnah Skil Development Institute"
              date="1 Jan 2024 - 26 Mar 2025"
              desc="Completed a comprehensive 1.5-year intensive training program focused on web development, covering HTML, CSS, Tailwind CSS,JavaScript, TypeScript, React.js, Node.js, Express.js, MongoDB and Next.js. Gained hands-on experience through real-world projects and collaborative team work, preparing for a successful career in the tech industry."
            />
            <ResumeCard
              Icon={FaGraduationCap}
              role="Bachelor of Social Science"
              date="1 Jan 2021 - 30 Jun 2024"
              desc="Graduated with a Bachelor's degree in Social Science, specializing in Sociology, from the National University of Bangladesh. Developed strong analytical and research skills through coursework and projects focused on social dynamics, cultural studies, and community development."
            />
            {/* <ResumeCard
              Icon={GrLanguage}
              role="English Proficiency Course: Level C1 (British Council Online)"
              date="1 Jan 2025 - 30 Feb 2025"
              desc="Successfully completed the British Council's online English Proficiency Course at Level C1, demonstrating advanced language skills in reading, writing, listening, and speaking. This course enhanced my ability to communicate effectively in professional and academic settings."
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
