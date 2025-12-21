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
          description: "A collection of my technical achievements and creative explorations.",
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
            },},{id: "projects-conception-d-39-un-fauteuil-roulant-modulaire",
          title: 'Conception d&amp;#39;un Fauteuil Roulant Modulaire',
          description: "Design et ingénierie d&#39;un fauteuil roulant configurable via les outils PLM et une collaboration multidisciplinaire.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project_fr.html";
            },},{id: "projects-utc-back-to-school-poster",
          title: 'UTC Back-to-School Poster',
          description: "Creative poster designed for UTC to welcome students back, created with Adobe Photoshop.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project.html";
            },},{id: "projects-affiche-de-rentrée-utc",
          title: 'Affiche de Rentrée UTC',
          description: "Affiche créative conçue pour l&#39;UTC afin d&#39;accueillir les étudiants, réalisée avec Adobe Photoshop.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project_fr.html";
            },},{id: "projects-billiard-ball-trajectory-test-bench",
          title: 'Billiard Ball Trajectory Test Bench',
          description: "Design, CAD, and fabrication of a test bench for measuring billiard ball trajectories, including rotation effects.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project.html";
            },},{id: "projects-banc-d-39-essai-de-trajectoires-de-billard",
          title: 'Banc d&amp;#39;Essai de Trajectoires de Billard',
          description: "Conception, CAO et fabrication d&#39;un banc d&#39;essai pour mesurer les trajectoires de billes de billard, incluant les effets de rotation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project_fr.html";
            },},{id: "projects-utc-saint-gobain-event-poster",
          title: 'UTC × Saint-Gobain Event Poster',
          description: "Graphic design for the UTC Career Service event in collaboration with Saint-Gobain, created using Adobe Photoshop.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project.html";
            },},{id: "projects-affiche-événement-utc-saint-gobain",
          title: 'Affiche Événement UTC × Saint-Gobain',
          description: "Conception graphique pour le Service Carrière de l&#39;UTC en collaboration avec Saint-Gobain, réalisée avec Adobe Photoshop.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project_fr.html";
            },},{id: "projects-roboticore-media-experience-ensam-rabat",
          title: 'Roboticore Media Experience — ENSAM Rabat',
          description: "Graphic design and media communication work for the Roboticore club at ENSAM Rabat, created using Adobe Photoshop.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project.html";
            },},{id: "projects-expérience-média-roboticore-ensam-rabat",
          title: 'Expérience Média Roboticore — ENSAM Rabat',
          description: "Travaux de conception graphique et communication média pour le club Roboticore à l&#39;ENSAM Rabat, réalisés avec Adobe Photoshop.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project_fr.html";
            },},{id: "projects-arabeut-moroccan-international-day-poster",
          title: 'ArabeUT – Moroccan International Day Poster',
          description: "Official event poster designed for the ArabeUT association at UTC, celebrating the Moroccan International Day.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project.html";
            },},{id: "projects-affiche-arabeut-journée-internationale-du-maroc",
          title: 'Affiche ArabeUT – Journée Internationale du Maroc',
          description: "Affiche officielle conçue pour l&#39;association ArabeUT à l&#39;UTC, célébrant la Journée Internationale du Maroc.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project_fr.html";
            },},{id: "projects-design-and-fabrication-of-an-active-and-instrumented-arm-prosthesis",
          title: 'Design and Fabrication of an Active and Instrumented Arm Prosthesis',
          description: "Development of a functional prosthetic arm integrating mechanical design, sensors, actuators, and embedded electronics.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project.html";
            },},{id: "projects-conception-et-fabrication-d-une-prothèse-de-bras-active-et-instrumentée",
          title: 'Conception et Fabrication d’une Prothèse de Bras Active et Instrumentée',
          description: "Développement d&#39;une prothèse fonctionnelle intégrant conception mécanique, capteurs, actionneurs et électronique embarquée.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project_fr.html";
            },},{id: "projects-sap-systems-amp-digital-integration",
          title: 'SAP Systems &amp;amp; Digital Integration',
          description: "Validation of core competencies in ABAP environment and SAP Business Data Cloud.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/SAP_project.html";
            },},{id: "projects-systèmes-sap-amp-intégration-numérique",
          title: 'Systèmes SAP &amp;amp; Intégration Numérique',
          description: "Validation des compétences clés dans l&#39;environnement ABAP et SAP Business Data Cloud.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/SAP_project_fr.html";
            },},{id: "projects-dassault-systèmes-certifications",
          title: 'Dassault Systèmes Certifications',
          description: "A collection of Dassault Systèmes certifications earned on the 3DEXPERIENCE and SolidWorks platforms.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/certif-dassault.html";
            },},{id: "projects-certifications-dassault-systèmes",
          title: 'Certifications Dassault Systèmes',
          description: "Une collection de certifications Dassault Systèmes obtenues sur les plateformes 3DEXPERIENCE et SolidWorks.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/certif-dassault_fr.html";
            },},{id: "projects-rétro-conception-d-39-un-presse-tomates",
          title: 'Rétro-conception d&amp;#39;un Presse-Tomates',
          description: "Ingénierie inverse et modélisation 3D d&#39;un presse-tomates industriel via 3DEXPERIENCE et CREO.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/presse-tomates-fr.html";
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
