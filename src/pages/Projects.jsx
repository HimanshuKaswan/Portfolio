import React from 'react';

const projects = [
  {
    title: 'Task Manager App',
    description: 'A full-stack task manager with user authentication, CRUD operations, and real-time updates.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHHgXyMvIDs5DllS0EUmDXNkR3f8QcGZFigQ&s',
    github: 'https://github.com/yourname/task-manager',
    live: 'https://yourtaskmanager.live',
  },
  {
    title: 'Portfolio Website',
    description: 'This personal portfolio site built with Vite + React showcases my skills and projects.',
    tech: ['Vite', 'React', 'TailwindCSS'],
    image: 'https://repository-images.githubusercontent.com/616351992/41fb4d77-8bcc-4f2f-a5af-56c0e41e07c4',
    github: 'https://github.com/yourname/portfolio',
    live: 'https://yourportfolio.live',
  },
  {
    title: 'Task Manager App',
    description: 'A full-stack task manager with user authentication, CRUD operations, and real-time updates.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHHgXyMvIDs5DllS0EUmDXNkR3f8QcGZFigQ&s',
    github: 'https://github.com/yourname/task-manager',
    live: 'https://yourtaskmanager.live',
  },
  {
    title: 'Task Manager App',
    description: 'A full-stack task manager with user authentication, CRUD operations, and real-time updates.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHHgXyMvIDs5DllS0EUmDXNkR3f8QcGZFigQ&s',
    github: 'https://github.com/yourname/task-manager',
    live: 'https://yourtaskmanager.live',
  },
  // Add more project objects here
];

const Projects = () => {
  return (
    <section className="bg-[#0F0F0F] py-16 px-6 md:px-12 lg:px-24">
      <h2 className="text-4xl font-bold text-white font-orbitron tracking-wide uppercase mb-4">Featured Projects</h2>
      <p className="text-gray-400 mb-12">Real-world web apps built using the MERN stack and modern development practices.</p>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#1A1A1A] rounded-2xl overflow-hidden shadow-md hover:shadow-purple-500/20 transition duration-300"
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl text-white font-semibold">{project.title}</h3>
              <p className="text-gray-400 text-sm mt-2">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-black bg-gray-300 text-xs px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex justify-between gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-200 text-sm"
                >
                  GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-200 text-sm"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
