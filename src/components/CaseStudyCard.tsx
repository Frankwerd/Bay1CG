import { CaseStudy } from '@/data/case-studies';
import Card from './Card';
import Link from 'next/link';

export default function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <Card className="flex flex-col h-full group">
      <div className="mb-4">
        <span className="text-[10px] font-bold tracking-widest uppercase text-accent">{caseStudy.category}</span>
      </div>
      <h3 className="text-xl font-bold mb-4 text-deep">{caseStudy.title}</h3>
      <div className="space-y-4 mb-6">
        <div>
          <span className="text-[10px] font-bold uppercase text-deep/40 block mb-1">Problem</span>
          <p className="text-sm text-deep/70 line-clamp-2">{caseStudy.problem}</p>
        </div>
        <div>
          <span className="text-[10px] font-bold uppercase text-deep/40 block mb-1">Solution</span>
          <p className="text-sm text-deep/70 line-clamp-2">{caseStudy.solution}</p>
        </div>
      </div>
      <div className="pt-6 border-t border-deep/5 mt-auto">
        <Link href={`/case-studies#${caseStudy.id}`} className="text-xs font-bold uppercase flex items-center text-secondary hover:text-primary transition-colors">
          Read Full Case Study <span className="material-symbols-outlined ml-1 text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </Link>
      </div>
    </Card>
  );
}
