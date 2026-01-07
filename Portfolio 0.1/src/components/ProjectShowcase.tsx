import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  year: string;
  image: string;
  tags: string[];
}

interface ProjectShowcaseProps {
  project: Project;
  index: number;
}

export function ProjectShowcase({ project, index }: ProjectShowcaseProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="grid md:grid-cols-12 gap-8 items-center">
        {/* Image */}
        <div className={`md:col-span-7 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-200">
            <img
              src={project.image}
              alt={project.title}
              className={`w-full h-full object-cover transition-transform duration-700 ${
                isHovered ? 'scale-105' : 'scale-100'
              }`}
            />
            <div
              className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${
                isHovered ? 'opacity-0' : 'opacity-100'
              }`}
            ></div>
            
            {/* Hover Overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center transition-opacity duration-300 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center transform transition-transform duration-300">
                <ArrowUpRight className="w-8 h-8 text-black" />
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className={`md:col-span-5 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-sm text-gray-500">
              <span>{project.category}</span>
              <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
              <span>{project.year}</span>
            </div>

            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
              {project.title}
            </h3>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 bg-white border border-gray-300 rounded-full text-xs font-medium text-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="pt-4">
              <button className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:gap-3 transition-all group">
                View case study
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
