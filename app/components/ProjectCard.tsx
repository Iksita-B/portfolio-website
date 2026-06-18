export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex flex-col bg-[#294c60]/20 border border-[#294c60]/70 rounded-2xl p-5 gap-4 hover:border-[#ffc49b]/60 hover:bg-[#294c60]/35 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#ffc49b]/8">

      {/* Featured badge */}
      {project.featured && (
        <span className="absolute top-4 right-4 text-[10px] font-semibold px-2 py-0.5 bg-[#ffc49b]/15 text-[#ffc49b] border border-[#ffc49b]/40 rounded-full tracking-wide">
          FEATURED
        </span>
      )}

      {/* Body */}
      <div className="flex-1 min-w-0">
        <h3 className="text-[#ffefd3] text-base sm:text-lg font-bold mb-2 group-hover:text-[#ffc49b] transition-colors duration-200 pr-16">
          {project.title}
        </h3>
        <p className="text-[#adb6c4] text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] px-2.5 py-0.5 bg-[#001b2e]/70 text-[#adb6c4] border border-[#294c60]/80 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Actions */}
      {(project.liveUrl || project.githubUrl) && (
        <div className="flex gap-2.5 pt-1">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2 px-3 bg-[#ffc49b] text-[#001b2e] text-xs sm:text-sm font-bold rounded-xl hover:bg-[#ffefd3] active:scale-[0.97] transition-all duration-200"
            >
              Live Demo ↗
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2 px-3 bg-[#294c60]/60 text-[#ffefd3] text-xs sm:text-sm font-semibold rounded-xl border border-[#294c60] hover:bg-[#294c60] hover:border-[#adb6c4]/40 active:scale-[0.97] transition-all duration-200"
            >
              GitHub
            </a>
          )}
        </div>
      )}
    </article>
  );
}
