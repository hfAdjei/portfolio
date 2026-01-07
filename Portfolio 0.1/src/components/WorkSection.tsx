import { ProjectShowcase } from './ProjectShowcase';

const projects = [
  {
    id: 1,
    title: 'Mojo Payments Dashboard',
    description: 'Complete redesign of payment processing dashboard for B2B clients',
    category: 'Product Design',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
    tags: ['UI/UX', 'B2B', 'Fintech'],
  },
  {
    id: 2,
    title: 'Ecosystem Management Tool',
    description: 'Enterprise tool for managing digital payment ecosystems across Africa',
    category: 'Product Design',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
    tags: ['Enterprise', 'B2B', 'Systems'],
  },
  {
    id: 3,
    title: 'Consumer Wallet App',
    description: 'Mobile-first digital wallet for everyday transactions',
    category: 'Mobile Design',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=800&fit=crop',
    tags: ['Mobile', 'B2C', 'Fintech'],
  },
  {
    id: 4,
    title: 'Design System',
    description: 'Comprehensive design system for payment products',
    category: 'System Design',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop',
    tags: ['Design System', 'Components', 'Documentation'],
  },
];

export function WorkSection() {
  return (
    <section id="work" className="px-6 md:px-12 lg:px-20 py-20 md:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Selected Work
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl">
            A curated selection of projects spanning payment systems, B2B platforms,
            and consumer applications.
          </p>
        </div>

        <div className="grid gap-12 md:gap-16">
          {projects.map((project, index) => (
            <ProjectShowcase key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
