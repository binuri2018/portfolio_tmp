// ========================================
// WIF PORTFOLIO TEMPLATE - EDITABLE DATA
// ========================================
// 
// INSTRUCTIONS FOR NON-TECHNICAL USERS:
// 1. Replace all the information below with your personal details
// 2. Update profile images in the public/images folder
// 3. Save the file and your portfolio will automatically update
// 4. No coding knowledge required!

export const portfolioData = {
  // ===== HERO SECTION =====
  hero: {
    name: "Binuri Manodya",
    title: "Software Developer | Web Designer ",
    description: "Passionate developer creating innovative digital solutions with a focus on user experience and clean code.",
    profileImage: "/images/profile.jpg", 
    ctaButton: {
      text: "Get In Touch",
      link: "imbinuri@gmail.com"
    }
  },

  // ===== ABOUT SECTION =====
  about: {
    shortBio: "I'm a dedicated developer with a passion for creating meaningful digital experiences.",
    longDescription: "With several years of experience in software development, I specialize in building responsive web applications and user-friendly interfaces. I believe in writing clean, maintainable code and staying up-to-date with the latest technologies and best practices. When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community."
  },

  // ===== EDUCATION SECTION =====
  education: [
    {
      degree: "Bachelor of Computer Science",
      institution: "Sri Lanka Institute of Information Technology (SLIIT)",
      year: "2022 - present",
      details: "Specialized in Information Technology with focus on web development"
    },
    {
      degree: "Advanced Level",
      institution: "Ananda Maithreya Central College (AMCC)",
      year: "2021",
      details: "2Bs, 1S in ICT,SFT,ET"
    }
  ],

  // ===== SKILLS SECTION =====
  skills: {
    technical: [
      "JavaScript ",
      "React.js",
      "Node.js",
      "HTML5 & CSS3",
      "Python",
      "Git & GitHub",
      "Responsive Design",
      "React"
    ],
    professional: [
      "Problem Solving",
      "Team Collaboration",
      "Technical Writing",
      "Project Management",
      "Continuous Learning"
    ]
  },

  // ===== PROJECTS SECTION =====
  projects: [
    {
      title: "Crystal Chandelier",
      description: "A full-stack e-commerce application built with React and Node.js, featuring user authentication, product management, and payment integration.",
      image: "/images/ecom.png", // Place your image link here
      tags: ["React", "Node.js", "MongoDB", "CSS3"],
      github: "https://github.com/binuri2018/E-commerce"
    },
    {
      title: "Blog Me",
      description: "A modern, responsive blogging platform built with React and Firebase, offering a seamless experience for both writers and readers. Blog Me combines elegant design with powerful features to create an engaging blogging environment.",
      image: "/images/blogme.png", // Place your image link here
      tags: ["React", "Firebase", "Tailwind CSS"],
      github: "https://github.com/binuri2018/blog-me.git"
    },
    {
      title: "Deep Work",
      description: "Custom countdown timer with real-time updates and a built-in alarm notification system, ideal for productivity and time-bound activities.",
      image: "/images/deepwork.png", // Place your image link here
      tags: ["React", "Vite", "CSS3" ],
      github: "https://github.com/binuri2018/Deep_Work"
    }
  ],

  // ===== FOOTER SECTION =====
  footer: {
    copyright: "© 2024 Your Name. All rights reserved.",
    socialLinks: [
      {
        name: "GitHub",
        url: "https://github.com/binuri2018",
        icon: "github"
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/binuri-manodya/",
        icon: "linkedin"
      }
    ]
  },

  // ===== CONTACT INFORMATION =====
  contact: {
    email: "imbinuri@gmail.com",
    phone: "+94 74 044 3712",
    location: "Isurupura, Malabe, Sri Lanka",
    availableForWork: true,
    
    // Additional contact information users can customize
    responseTime: "24-48 hours",
    workingHours: "Monday - Friday, 9 AM - 6 PM (GMT+5:30)",
    timezone: "Sri Lanka Standard Time (GMT+5:30)",
    availabilityStatus: "Available for new opportunities",
    
    // Social media and additional contact methods
    linkedin: "https://www.linkedin.com/in/binuri-manodya/",
    github: "https://github.com/binuri2018",
    twitter: "https://twitter.com/your-handle",
    
    // Contact form customization
    formTitle: "Get in Touch",
    formSubtitle: "Have a question or want to work together? Feel free to reach out!",
    namePlaceholder: "Your Name",
    emailPlaceholder: "Your Email", 
    messagePlaceholder: "Your Message",
    submitButtonText: "Send Message",
    sendingText: "Sending...",
    
    // Success and error messages
    successMessage: "Message sent successfully! I'll get back to you soon.",
    errorMessage: "Failed to send message. Please try again later.",
    nameValidationMessage: "Name should be at least 2 characters long",
    emailValidationMessage: "Please enter a valid email address",
    messageValidationMessage: "Message should be at least 10 characters long"
  }
};

export default portfolioData;

