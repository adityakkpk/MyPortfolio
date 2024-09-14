import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, Spring, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const PROJECTS = [
  {
    title: "Blogging Application",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles. Using Appwrite as Backend",
    technologies: ["HTML", "CSS", "React", "Appwrite",],
    demoLink: 'https://mini-blog-appwrite.vercel.app/',
    githubLink: 'https://github.com/adityakkpk/MiniBlog-React-Appwrite'
  },

  {
    title: "Github Information",
    image: project1,
    description:
      "A website where you will get some of your Github profile's public informations.",
    technologies: ["React", "React-Router-Dom", "Github API", "Tailwind CSS", "Context-API"],
    demoLink: 'https://github-info-dusky.vercel.app/',
    githubLink: 'https://github.com/adityakkpk/ReactRouter-GithubAPI'
  },

  {
    title: "React News Application",
    image: project4,
    description: "A fully functional web application with features like showing Latest News, Filtering News based on categories, Pagination etc",
    technologies: ["React.js", "React-Router", "Custom-Hooks", "NEWS API", "Tailwind CSS"],
    demoLink: "",
    githubLink: "https://github.com/adityakkpk/React-News-App",
  },

  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
    demoLink: 'https://my-portfolio-git-main-aditya-kumar-kushwahas-projects.vercel.app/',
    githubLink: 'https://github.com/adityakkpk/MyPortfolio'
  },
  
  {
    title: "Amazon Clone",
    image: project2,
    description:
      "A fully functional website with features like product listing, shopping cart, and tracking of orders.",
    technologies: ["HTML", "CSS", "Javascript"],
    demoLink: 'https://adityakkpk.github.io/AmazoneClone/amazon.html',
    githubLink: 'https://github.com/adityakkpk/AmazoneClone'
  },

];

export const CONTACT = {
  address: "Gopalganj, Bihar, India, 841501 ",
  phoneNo: "+91 933 410 6744 ",
  email: "akkpk933@gmail.com",
};
