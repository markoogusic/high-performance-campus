export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  photo: string;
}

// TODO: reemplazar con datos y fotos reales del equipo
export const team: TeamMember[] = [
  {
    name: "Carlos Martínez",
    role: "Director Deportivo",
    bio: "Exjugador profesional con 15 años de experiencia en formación de jóvenes talentos en clubes de Primera División.",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Laura Sánchez",
    role: "Preparadora Física",
    bio: "Especialista en fisiología del deporte con máster en alto rendimiento y 10 años entrenando equipos de élite.",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Miguel Torres",
    role: "Entrenador Técnico",
    bio: "Licencia UEFA Pro. Exentrenador de academias de LaLiga con especialización en metodología de juego posicional.",
    photo:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Ana García",
    role: "Analista de Rendimiento",
    bio: "Experta en tecnología aplicada al fútbol. Responsable del análisis de vídeo y métricas GPS del campus.",
    photo:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Roberto Díaz",
    role: "Psicólogo Deportivo",
    bio: "Doctor en psicología del deporte. Trabaja la fortaleza mental, concentración y gestión de la presión competitiva.",
    photo:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Elena Navarro",
    role: "Nutricionista",
    bio: "Nutricionista deportiva con experiencia en selecciones nacionales. Diseña los planes alimentarios del campus.",
    photo:
      "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=400&q=80",
  },
];
