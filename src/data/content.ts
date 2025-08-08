import { Project, Skill, SocialLink, NavItem } from '../types';


export const personalInfo = {
  name: "Jesús Pineda",
  title: "Full Stack Developer",
  description: "Desarrollo soluciones funcionales utilizando tecnologías modernas, mientras continúo fortaleciendo mis habilidades en programación.",
  email: "jesuspineda1429@gmail.com",
  location: "Ciudad de México, México",
  availability: "Abierto a oportunidades que impulsen mi crecimiento profesional.",
};

export const navItems: NavItem[] = [
  { label: "Inicio", href: "#home" },
  { label: "Sobre mí ", href: "#about" },
  { label: "Habilidades", href: "#skills" },
  { label: "Proyectos", href: "#projects" },
  // { label: "Contacto", href: "#contact" },
];

export const aboutContent = {
  headline: "Creando experiencias digitales útiles y centradas en las personas",
  paragraphs: [
    "Soy un desarrollador full-stack apasionado por la tecnología y la programación, siempre aprendiendo nuevas herramientas y enfoques.",
    "Disfruto trabajando en equipo, compartiendo ideas y aprendiendo de los demás. Siempre busco mejorar mis habilidades y resolver problemas de manera creativa, manteniendo un enfoque práctico y orientado a resultados.",
    "Cuando no estoy programando, puedes encontrarme leyendo filosofía clásica o practicando algún instrumento musical."
  ]
};

export const skills: Skill[] = [
  { name: "JavaScript", icon: "code", level: 85 },
  { name: "HTML", icon: "file-type", level: 90 },
  { name: "React", icon: "react", level: 80 },
  { name: "Node.js", icon: "server", level: 70 },
  { name: "CSS/Tailwind", icon: "paintbrush", level: 85 },
  { name: "Figma", icon: "figma", level: 75 },
  { name: "Git", icon: "git-branch", level: 75 },
  { name: "Express", icon: "cloud", level: 65 },
];

export const projects: Project[] = [
  {
    id: "project1",
    title: "Administrador de Pacientes de Veterinaria, Fullstack MERN",
    description: "Para poder iniciar sesión email: email@email.com, contraseña: password. Aplicación fullstack para la gestión de pacientes veterinarios utilizando el stack MERN (MongoDB, Express, React y Node.js) Permite a veterinarios registrar, editar y eliminar pacientes, con autenticación segura y manejo de sesiones. Login con JWT y CRUD completo de pacientes.",
    image: "MERN.png",
    tags: ["React", "MongoDB", "Express", "Node.js", "Tailwind CSS", "JavaScript", "HTML", "Responsive Design", "MERN", "JWT", "CRUD", "Autenticación", "Sesiones"],
    github: "https://github.com/JesusPineda29/apv_backend_deploy",
    link: "https://fullstack-admin-pacientes-mern.netlify.app"
  },
  {
    id: "project2",
    title: " Web Profesional para Distribuidora de Materias Primas",
    description: "Esta página fue creada para una distribuidora especializada en el suministro de materias primas para diferentes sectores industriales. Su objetivo es comunicar confianza, profesionalismo y facilitar el contacto directo con clientes potenciales. La estructura está optimizada para destacar los productos y generar conversiones a través de  medios de comunicación y contacto directo por WhatsApp.",
    image: "pat.png",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "JavaScript", "HTML"],
    github: "https://github.com/JesusPineda29/Patyuba",
    link: "https://patyuba.netlify.app"
  },

  {
    id: "project3",
    title: " video juego Snake",
    description: "Una versión web del clásico Snake, desarrollada completamente desde cero con JavaScript puro y HTML5, sin librerías ni frameworks. Inspirado en la estética de los arcades ochenteros, el juego ofrece una interfaz retro con colores neón, sombras brillantes y efectos visuales que evocan las antiguas pantallas CRT. Es jugable directamente desde el navegador, sin necesidad de instalación.",
    image: "snake.png",
    tags: ["JavaScript", "HTML", "Tailwind CSS"],
    github: "https://github.com/JesusPineda29/snakeGame",
    link: "https://snake-jp.netlify.app"
  },





  {
    id: "project4",
    title: "Cotizador Cripto API",
    description: "App web responsiva que permite consultar y comparar precios de criptomonedas en tiempo real. Desarrollada con React, TypeScript y Vite, utiliza Zustand para el manejo de estado y Zod para validar datos obtenidos desde dos APIs externas. Rápida, precisa y con arquitectura limpia.",
    image: "cripto.png",
    tags: ["React", "TypeScript", "Vite", "Zustand", "Zod", "Consumo de API", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/johndoe/ecommerce",
    link: "https://cotizador-typescript-react.netlify.app"
  },



  {
    id: "project5",
    title: "Buscador de Clima",
    description: "Una aplicación web intuitiva que permite a los usuarios consultar el clima actual de cualquier ciudad del mundo. Simplemente se selecciona un país, se escribe el nombre de la ciudad y la aplicación muestra la temperatura actual, la máxima, la mínima y la sensación térmica.",
    image: "clima.png",
    tags: ["React", "TypeScript", "Vite", "HTML", "CSS Modules", "JavaScript", "Zod", "Consumo de API"],
    github: "https://github.com/JesusPineda29/Buscador-de-Clima-FETCH-API",
    link: "https://buscador-clima-api-ts-react.netlify.app"
  },

  {
    id: "project6",
    title: "Cotizador de Prestamos - React",
    description: "El cotizador de precios permite a los usuarios ingresar los detalles de un préstamo (como el monto, plazo) y calcular el costo total con sus respectivos intereses. El proyecto está diseñado para ser simple, rápido y fácil de usar.",
    image: "prestamo.png",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "React", "Vite"],
    github: "https://github.com/JesusPineda29/cotizados_prestamos_react",
    link: "https://cotizador-prestamos-react-c7ba9a.netlify.app"
  },

  {
    id: "project7",
    title: "Festival de música",
    description: "Sitio web para festival con diseño moderno y responsivo.",
    image: "festival.png",
    tags: ["HTML", "SCSS", "JavaScript", "Gulp"],
    github: "https://github.com/JesusPineda29/festivalMusica",
    link: "https://magical-pie-b0bb57.netlify.app"
  },

  {
    id: "project8",
    title: "Blog del Cafe",
    description: "Sitio web responsivo con HTML, CSS, JavaScript y Bootstrap, enfocado en una experiencia de usuario fluida.",
    image: "cafe.png",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    github: "https://github.com/johndoe/ecommerce",
    link: "https://comfy-cactus-ede1e4.netlify.app"
  }
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/JesusPineda29", icon: "github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/jesús-pineda-630a3b300", icon: "linkedin" },
];

