"use client";

import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  imagePath: string;
  description: string;
  tech: string[];
  liveLink?: string;
  githubLink?: string;
}

export default function ProjectCard({
  title,
  imagePath,
  description,
  tech,
  liveLink,
  githubLink,
}: ProjectCardProps) {
  return (
    <div className="group bg-slate-900 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Image */}
      <div className="relative overflow-hidden">
        <Image
          src={imagePath}
          alt={title}
          width={800}
          height={600}
          className="transition-transform duration-500 group-hover:scale-110"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
          {liveLink && (
            <Link
              href={liveLink}
              target="_blank"
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 transition"
            >
              Live
            </Link>
          )}

          {githubLink && (
            <Link
              href={githubLink}
              target="_blank"
              className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition"
            >
              Code
            </Link>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>

        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {tech.map((item, index) => (
            <span
              key={index}
              className="text-xs bg-indigo-500/10 text-indigo-400 px-3 py-1 rounded-full"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
