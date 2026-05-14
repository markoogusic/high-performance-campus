export interface Activity {
  icon: string;
  title: string;
  description: string;
}

export const activities: Activity[] = [
  {
    icon: "⚽",
    title: "Técnica individual",
    description:
      "Trabajo específico de control, conducción, pase y tiro. Ejercicios diseñados para mejorar el dominio del balón en situaciones reales de juego.",
  },
  {
    icon: "🏃",
    title: "Táctica y juego posicional",
    description:
      "Metodología basada en el juego de posición. Desarrollo de la inteligencia táctica y la comprensión colectiva del juego.",
  },
  {
    icon: "💪",
    title: "Preparación física",
    description:
      "Trabajo de fuerza, velocidad, resistencia y movilidad adaptado a la edad. Todo controlado con métricas GPS en tiempo real.",
  },
  {
    icon: "🧠",
    title: "Psicología deportiva",
    description:
      "Sesiones de fortaleza mental, gestión de la presión y liderazgo. Herramientas para rendir al máximo en competición.",
  },
  {
    icon: "🥗",
    title: "Nutrición deportiva",
    description:
      "Charlas y talleres sobre alimentación óptima para el rendimiento. Menús diseñados por la nutricionista del campus.",
  },
  {
    icon: "📊",
    title: "Análisis de vídeo",
    description:
      "Cada jugador recibe un informe personalizado con clips de sus actuaciones y áreas de mejora identificadas por los analistas.",
  },
];
