import React from 'react';

const projects = [
  {
    title: 'Devin: AI-Powered Online Code Editor',
    description: 'A web-based code editor that allows users to write, edit, and run code directly in the browser. Integrated with AI assistance, it helps generate and suggest code snippets to help users learn new technologies.',
    tech: ['MongoDB', 'Express','React','Node.js'],
    image: '/devin.png',
    github: 'https://github.com/HimanshuKaswan/Drive',
    live: 'https://drive-production-8cfe.up.railway.app/user/login',
  },
  {
    title: 'Uber: Full-Stack MERN Application',
    description: 'A fully functional Uber clone built with the MERN stack. It includes user authentication, real-time ride booking, driver and rider dashboards, and location tracking, offering a seamless ride-sharing experience from end to end.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    image: '/uber.png',
    github: 'https://github.com/yourname/task-manager',
    live: 'https://yourtaskmanager.live',
  },
  {
    title: 'Uber-Inspired Microservices Architecture',
    description: "A backend-focused project exploring microservices architecture inspired by Uber's system design. It features independently deployable services for user management, ride requests, and payments.",
    tech: [ 'Node.js', 'MongoDB', 'Express'],
    image: '/micro.jpg',
    github: 'https://github.com/yourname/task-manager',
    live: 'https://yourtaskmanager.live',
  },
  {
    title: 'Employee Management System',
    description: 'A React based web app that allows admins to manage employee records,handel tasks, and assign roles with secure login functionality.',
    tech: ['React','TailwindCSS','JWT', 'Bcrypt'],
    image: '/admin.png',
    github: 'https://github.com/HimanshuKaswan/Ems',
    live: 'https://ems-git-main-himanshus-projects-5c25892d.vercel.app/',
  },
  {
    title: 'Drive: A Cloud Storage Solution',
    description: 'A secure and scalable cloud drive application built with MongoDB, Express, and Node.js, enabling file upload, access, and management with RESTful APIs.',
    tech: ['MongoDB', 'Express', 'Node.js'],
    image: '/drive.png',
    github: 'https://github.com/HimanshuKaswan/Drive',
    live: 'https://drive-production-8cfe.up.railway.app/user/login',
  },
  {
    title: 'React: Form Validation',
    description: 'A lightweight React project demonstrating form validation techniques. It includes real-time input checks, error handling, and user-friendly feedback for improved usability.',
    tech: ['React','TailwindCSS','JWT', 'Bcrypt'],
    image: '/form.png',
    github: 'https://github.com/HimanshuKaswan/FormValidation',
    live: 'https://form-validation-himanshus-projects-5c25892d.vercel.app/',
  },
  {
    title: 'Cyberpunk: Themed Gaming Website (Three.js)',
    description: 'A visually immersive gaming website built using Three.js, inspired by cyberpunk aesthetics. This project showcases interactive 3D elements, dynamic lighting, and animated scenes—designed to explore WebGL capabilities and creative storytelling through code.',
    tech: ['Three.js', 'JavaScript','Shaders (GLSL)', 'Post-processing libraries'],
    image: '/three.png',
    github: 'https://github.com/HimanshuKaswan/Drive',
    live: 'https://drive-production-8cfe.up.railway.app/user/login',
  },
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
              <div className="bottom-0 mt-4 flex justify-between gap-4">
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
