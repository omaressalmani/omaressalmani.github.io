// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "Projects",
          description: "A collection of my creative and technical projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-resume-cv",
          title: "Resume / CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "dropdown-projets",
              title: "Projets",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/projects/";
              },
            },{id: "dropdown-my-resume",
              title: "My resume",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/cv/";
              },
            },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather.html";
            },},{id: "projects-retro-modeling-of-a-tomato-press",
          title: 'Retro-Modeling of a Tomato Press',
          description: "Reverse engineering and 3D modeling of a tomato press using 3DEXPERIENCE and CREO.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project.html";
            },},{id: "projects-modular-wheelchair-design",
          title: 'Modular Wheelchair Design',
          description: "Design and engineering of a configurable modular wheelchair using PLM tools and multidisciplinary collaboration.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project.html";
            },},{id: "projects-utc-back-to-school-poster",
          title: 'UTC Back-to-School Poster',
          description: "Creative poster designed for UTC to welcome students back, created with Adobe Photoshop.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project.html";
            },},{id: "projects-billiard-ball-trajectory-test-bench",
          title: 'Billiard Ball Trajectory Test Bench',
          description: "Design, CAD, and fabrication of a test bench for measuring billiard ball trajectories, including rotation effects.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project.html";
            },},{id: "projects-utc-saint-gobain-event-poster",
          title: 'UTC × Saint-Gobain Event Poster',
          description: "Graphic design for the UTC Career Service event in collaboration with Saint-Gobain, created using Adobe Photoshop.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project.html";
            },},{id: "projects-roboticore-media-experience-ensam-rabat",
          title: 'Roboticore Media Experience — ENSAM Rabat',
          description: "Graphic design and media communication work for the Roboticore club at ENSAM Rabat, created using Adobe Photoshop.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project.html";
            },},{id: "projects-arabeut-moroccan-international-day-poster",
          title: 'ArabeUT – Moroccan International Day Poster',
          description: "Official event poster designed for the ArabeUT association at UTC, celebrating the Moroccan International Day.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project.html";
            },},{id: "projects-dassault-systèmes-certifications",
          title: 'Dassault Systèmes Certifications',
          description: "A collection of Dassault Systèmes certifications earned on the 3DEXPERIENCE and SolidWorks platforms.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/certif-dassault.html";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6F%6D%61%72%65%73%73%61%6C%6D%61%6E%69%30@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/omaressalmani", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/essalmaniomar", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/omar-essalmani", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
