import { ProjectCard } from './ProjectCard';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce solution with real-time inventory management and seamless checkout experience.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
    tags: ['React', 'Node.js', 'Stripe'],
    link: '#',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative task management tool with drag-and-drop interface and team collaboration features.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
    tags: ['TypeScript', 'React', 'Firebase'],
    link: '#',
  },
  {
    id: 3,
    title: 'Design System',
    description: 'Comprehensive design system with reusable components and comprehensive documentation.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
    tags: ['React', 'Storybook', 'Tailwind'],
    link: '#',
  },
  {
    id: 4,
    title: 'Analytics Dashboard',
    description: 'Real-time analytics dashboard with interactive charts and data visualization.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    tags: ['Next.js', 'D3.js', 'PostgreSQL'],
    link: '#',
  },
  {
    id: 5,
    title: 'Social Media Platform',
    description: 'Community-focused social platform with real-time messaging and content sharing.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
    tags: ['React', 'GraphQL', 'WebSocket'],
    link: '#',
  },
  {
    id: 6,
    title: 'Portfolio Builder',
    description: 'Drag-and-drop portfolio builder with customizable themes and templates.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
    tags: ['React', 'TypeScript', 'CSS'],
    link: '#',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Selected work</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A collection of projects I've worked on, ranging from web applications
            to design systems and everything in between.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
