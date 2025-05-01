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
  { label: "Contacto", href: "#contact" },
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
    title: "Blog del Cafe",
    description: "Sitio web responsivo con HTML, CSS, JavaScript y Bootstrap, enfocado en una experiencia de usuario fluida.",
    image: "cafe.png",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    github: "https://github.com/johndoe/ecommerce",
    link: "https://comfy-cactus-ede1e4.netlify.app"
  },
  {
    id: "project2",
    title: "Administrador de PAcientes de Veterinaria, Fullstack MERN",
    description: "Aplicación fullstack para la gestión de pacientes veterinarios utilizando el stack MERN (MongoDB, Express, React y Node.js) Permite a veterinarios registrar, editar y eliminar pacientes, con autenticación segura y manejo de sesiones. Login con JWT y CRUD completo de pacientes.",
    image: "MERN.png",
    tags: ["React", "MongoDB", "Express", "Node.js", "Tailwind CSS", "JavaScript", "HTML", "Responsive Design" ],
    github: "https://github.com/JesusPineda29/apv_backend_deploy",
    link: "https://fullstack-admin-pacientes-mern.netlify.app"
  },
  {
    id: "project3",
    title: "Buscador de Clima FETCH API",
    description: "Sitio web responsivo para obtener clima de ciudades usando Fetch API y API externa.",
    image: "clima.png",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    github: "https://github.com/JesusPineda29/Buscador-de-Clima-FETCH-API",
    link: "https://buscador-clima-fetch-api-8582e9.netlify.app"
  },
  {
    id: "project3",
    title: "Cotizador de Prestamos - React",
    description: "El cotizador de precios permite a los usuarios ingresar los detalles de un préstamo (como el monto, plazo) y calcular el costo total con sus respectivos intereses. El proyecto está diseñado para ser simple, rápido y fácil de usar.",
    image: "prestamo.png",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "React", "Vite"],
    github: "https://github.com/JesusPineda29/cotizados_prestamos_react",
    link: "https://cotizador-prestamos-react-c7ba9a.netlify.app"
  }
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/JesusPineda29", icon: "github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/jesús-pineda-630a3b300", icon: "linkedin" },
];

