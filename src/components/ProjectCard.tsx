import { Project } from '@/data/projects';
import Card from './Card';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="flex flex-col h-full group relative overflow-hidden glass break-words hyphens-auto">
      <div className="mb-6 flex justify-between items-start">
        <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-secondary bg-secondary/10 border border-secondary/20 px-2 py-1 rounded-full">{project.category}</span>
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-xl">open_in_new</span>
          </a>
        )}
      </div>
      <h3 className="text-xl font-bold mb-4 text-white group-hover:text-primary transition-colors">{project.title}</h3>
      <p className="text-sm text-white/60 mb-8 flex-grow leading-relaxed font-light">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-8">
        {project.techStack.map(tech => (
          <span key={tech} className="px-2 py-1 bg-white/5 border border-white/5 text-[10px] font-mono font-bold rounded text-white/40 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
            {tech}
          </span>
        ))}
      </div>
      {project.link && (
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-[11px] font-bold uppercase tracking-widest flex items-center text-primary group-hover:translate-x-2 transition-transform">
          View Project <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
        </a>
      )}
    </Card>
  );
}
