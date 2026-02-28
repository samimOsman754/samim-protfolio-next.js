import React from "react";
import Image, { StaticImageData } from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectsCardProps {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: StaticImageData | string;
  liveUrl: string;
  githubUrl: string;
}

const ProjectsCard: React.FC<ProjectsCardProps> = ({
  id,
  title,
  description,
  technologies,
  image,
  liveUrl,
  githubUrl,
}) => {
  return (
    <div className="bg-gray-900/80 border border-gray-800 rounded-xl overflow-hidden group hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
      {/* Project Image */}
      <div className="relative h-52 w-full overflow-hidden bg-gray-800">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="absolute top-4 right-4 bg-cyan-500 text-gray-900 text-xs font-bold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 -translate-y-2.5 group-hover:translate-y-0 transition-all duration-300">
          Project {id}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="text-xs font-medium text-cyan-300 bg-cyan-900/30 px-3 py-1 rounded-md border border-cyan-500/20"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-800">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:text-cyan-400 transition-colors font-semibold text-sm"
          >
            <FaExternalLinkAlt className="w-4 h-4" /> Live Demo
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:text-cyan-400 transition-colors font-semibold text-sm"
          >
            <FaGithub className="w-5 h-5" /> Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
