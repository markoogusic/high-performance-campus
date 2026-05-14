export interface ScheduleItem {
  time: string;
  title: string;
  description: string;
}

// TODO: ajustar horarios y actividades al programa real del campus
export const schedule: ScheduleItem[] = [
  {
    time: "08:00",
    title: "Llegada y bienvenida",
    description:
      "Recepción de los jugadores en las instalaciones. Distribución de dorsales, equipaciones y documentación del campus.",
  },
  {
    time: "08:30",
    title: "Desayuno y charla nutricional",
    description:
      "Desayuno colectivo en el comedor del campus. La nutricionista presenta las claves de la alimentación del deportista.",
  },
  {
    time: "09:30",
    title: "Sesión técnica matinal",
    description:
      "Primera sesión de entrenamiento: trabajo de técnica individual con balón. Control, conducción, pase y finalización.",
  },
  {
    time: "11:00",
    title: "Preparación física y velocidad",
    description:
      "Trabajo de velocidad, explosividad y movilidad. Los jugadores llevan chalecos GPS para registrar métricas de rendimiento.",
  },
  {
    time: "12:00",
    title: "Partido de aplicación",
    description:
      "Partido reducido donde se aplican los conceptos trabajados durante la mañana. El análisis de vídeo comenzará aquí.",
  },
  {
    time: "13:30",
    title: "Comida y recuperación",
    description:
      "Almuerzo completo diseñado por la nutricionista. Tiempo de descanso activo y cuidado personal post-entrenamiento.",
  },
  {
    time: "15:30",
    title: "Sesión táctica",
    description:
      "Trabajo táctico de posicionamiento y juego colectivo. Ejercicios de presión, salida de balón y transiciones.",
  },
  {
    time: "17:00",
    title: "Análisis de vídeo",
    description:
      "Sesión grupal en sala de análisis. Los entrenadores presentan clips del partido matinal con correcciones individuales y colectivas.",
  },
  {
    time: "17:45",
    title: "Psicología deportiva",
    description:
      "Taller con el psicólogo del campus: concentración, gestión de errores y preparación mental para la competición.",
  },
  {
    time: "18:30",
    title: "Charla tecnológica",
    description:
      "Presentación de las métricas GPS individuales del día. Cada jugador recibe su informe de rendimiento y aprende a interpretarlo.",
  },
  {
    time: "19:30",
    title: "Cena y cierre del día",
    description:
      "Cena colectiva. Reunión de cierre con el equipo técnico para repaso del día y motivación para la jornada siguiente.",
  },
  {
    time: "21:00",
    title: "Descanso",
    description:
      "Tiempo libre supervisado. Los jugadores internos se retiran a los alojamientos para asegurar el descanso óptimo.",
  },
];
