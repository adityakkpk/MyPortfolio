import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";

export const HERO_CONTENT = `I am a passionate Web Developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile Web Developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const PROJECTS = [
  {
    title: "Anonymous-Feedback",
    image: project1,
    description:
      "A platform for where you can take feedbacks from anonymous users",
    technologies: ["Typescript", "React", "Tailwind", "Gemini-AI API"],
    demoLink: "https://random-feedback.vercel.app/",
    githubLink: "https://github.com/adityakkpk/random-feedback",
  },
  {
    title: "Real Time Chat App",
    image: project2,
    description: "A chat application for real time communication.",
    technologies: [
      "Node",
      "MongoDB",
      "Express",
      "React",
      "Tailwind",
      "SocketIO",
    ],
    demoLink: "https://chat-realtime-1rqe.onrender.com/",
    githubLink: "https://github.com/adityakkpk/ChatApp",
  },
  {
    title: "Gemini Clone",
    image: project3,
    description:
      "A website like Gemini AI that takes user input and generate the response.",
    technologies: ["TailwindCSS", "React", "Gemini-AI API"],
    demoLink: "https://gemini-clone-akk.vercel.app/",
    githubLink: "https://github.com/adityakkpk/Gemini-Clone",
  },
  {
    title: "MiniBlog-React-Appwrite",
    image: project4,
    description: "A website for Reading and writing Blogs..",
    technologies: [
      "React",
      "React-Router-Dom",
      "Appwrite",
      "Tailwind CSS",
      "Context-API",
    ],
    demoLink: "https://mini-blog-appwrite.vercel.app/",
    githubLink: "https://github.com/adityakkpk/MiniBlog-React-Appwrite/",
  },
  {
    title: "Amazon Clone",
    image: project5,
    description:
      "A fully functional website with features like product listing, shopping cart, and tracking of orders.",
    technologies: ["HTML", "CSS", "Javascript"],
    demoLink: "https://adityakkpk.github.io/AmazoneClone/amazon.html",
    githubLink: "https://github.com/adityakkpk/AmazoneClone",
  },
];

export const CONTACT = {
  address: "Gopalganj, Bihar, India, 841501 ",
  phoneNo: "+91 933 410 6744 ",
  email: "akkpk933@gmail.com",
};
