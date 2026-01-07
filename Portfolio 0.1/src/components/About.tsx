export function About() {
  return (
    <section id="about" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl mb-6">About me</h2>
            <div className="space-y-4 text-gray-600 text-lg">
              <p>
                I'm a creative developer with a passion for building digital products
                that make a difference. With over 5 years of experience, I've worked
                with startups and established companies to bring their visions to life.
              </p>
              <p>
                My expertise spans across modern web technologies including React,
                TypeScript, and Node.js. I believe in writing clean, maintainable code
                and creating user experiences that are both beautiful and accessible.
              </p>
              <p>
                When I'm not coding, you can find me exploring new design trends,
                contributing to open source, or sharing knowledge through blog posts
                and talks.
              </p>
            </div>

            {/* Skills */}
            <div className="mt-8">
              <h3 className="text-lg font-medium mb-4">Core Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Next.js', 'UI/UX Design', 'GraphQL', 'PostgreSQL'].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gray-200">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-black rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
