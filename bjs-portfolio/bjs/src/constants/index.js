import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

// export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const HERO_CONTENT = {
  eng: `I am a skilled site engineer with experience in construction, project estimation, and site management. I specialize in creating accurate designs, supervising construction projects, and ensuring quality work. My goal is to deliver reliable and efficient solutions that meet project needs.`,

  ban: `আমি নির্মাণ, প্রকল্প অনুমান এবং সাইট পরিচালনার অভিজ্ঞতা সহ একজন দক্ষ সাইট ইঞ্জিনিয়ার। আমি সঠিক নকশা তৈরি করতে, নির্মাণ প্রকল্পগুলির তত্ত্বাবধান করতে এবং কাজের মান নিশ্চিত করতে বিশেষজ্ঞ। আমার লক্ষ্য হল নির্ভরযোগ্য এবং দক্ষ সমাধান প্রদান করা যা প্রকল্পের চাহিদা পূরণ করে।`,
}


// export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const ABOUT_TEXT = {
  eng: `My name is Bijoy Shangkor Sarker, and I am a passionate site engineer with experience in project estimation, construction supervision, and quality control. I specialize in designing accurate plans, managing construction sites, and ensuring high-quality results. Over the years, I have worked on various civil and industrial projects, focusing on precision, efficiency, and teamwork. My skills include BOQ preparation, project coordination, technical drawing, AutoCAD, construction supervision, site planning, and quality control. My goal is to use my expertise to deliver sustainable and impactful projects while continuously improving and learning in my field.`,

  ban: `আমার নাম বিজয় সাংকর সরকার, এবং আমি প্রকল্প অনুমান, নির্মাণ তদারকি এবং মান নিয়ন্ত্রণের অভিজ্ঞতার সাথে একজন উত্সাহী সাইট ইঞ্জিনিয়ার। আমি সঠিক পরিকল্পনা তৈরি করতে, নির্মাণ সাইটগুলি পরিচালনা করতে এবং উচ্চমানের ফলাফল নিশ্চিত করতে বিশেষজ্ঞ। বছরের পর বছর ধরে, আমি নির্ভুলতা, দক্ষতা এবং দলগত কাজের উপর দৃষ্টি নিবদ্ধ করে বিভিন্ন বেসামরিক ও শিল্প প্রকল্পে কাজ করেছি। আমার দক্ষতার মধ্যে রয়েছে বিওকিউ প্রস্তুতি, প্রকল্প সমন্বয়, প্রযুক্তিগত অঙ্কন, অটোক্যাড, নির্মাণ তদারকি, সাইট পরিকল্পনা এবং মান নিয়ন্ত্রণ। আমার লক্ষ্য হল আমার দক্ষতা ব্যবহার করে আমার ক্ষেত্রে ক্রমাগত উন্নতি এবং শেখার পাশাপাশি টেকসই এবং প্রভাবশালী প্রকল্পগুলি প্রদান করা।`,
}

export const EXPERIENCES = [
  {
    year: "Jan,2024 - Dec,2024",
    role: "Site Engineer",
    company: "Punditasar Bazar Jame Mosque",
    location: "Punditasar Bazar, Punditasar, Naria, Shariatpur",
    // description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    // technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "Feb,2021 - Jul,2021",
    role: "Site Engineer",
    company: "Rangpur House Builders (RHB)",
    location: "Road #6, House #2, Shalbon Mistripara, Rangpur",
    // description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    // technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "Jan,2020 - Jun,2024",
    role: "Site Engineer",
    company: "Civil Tech & Civil Engineering Services Provider",
    location: "House-269, RMC Shopping Complex, Central Road, Rangpur",
    // description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    // technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  }
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+880 1751-034689",
  email: "test@gmail.com",
};
