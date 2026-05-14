export interface TechFeature {
  icon: string;
  title: string;
  description: string;
}

export const techFeatures: TechFeature[] = [
  {
    icon: "📡",
    title: "GPS de rendimiento",
    description:
      "Chalecos con sensores GPS que registran distancia recorrida, sprints, aceleraciones y carga física de cada jugador en tiempo real.",
  },
  {
    icon: "🎬",
    title: "Análisis de vídeo",
    description:
      "Grabación de todos los entrenamientos y partidos. Los analistas generan clips individualizados con correcciones técnicas y tácticas.",
  },
  {
    icon: "📈",
    title: "Métricas de rendimiento",
    description:
      "Cada jugador recibe un dashboard con sus datos físicos y técnicos a lo largo del campus. Seguimiento de la evolución diaria.",
  },
  {
    icon: "🖥️",
    title: "Software de scouting",
    description:
      "Plataforma profesional para la identificación de patrones de juego. La misma tecnología utilizada en academias de élite de Europa.",
  },
];
