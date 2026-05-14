import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

const benefits = [
  "Diagnóstico inicial del nivel técnico individual",
  "Plan de mejora personalizado para cada jugador",
  "Seguimiento diario del progreso con métricas objetivas",
  "Feedback 1 a 1 con el entrenador asignado",
  "Informe final con áreas de mejora y ejercicios para continuar en casa",
];

export function IndividualSessions() {
  return (
    <Section id="sesiones" bg="white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden order-2 md:order-1">
            {/* TODO: reemplazar con foto real de sesión individualizada */}
            <Image
              src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80"
              alt="Entrenador trabajando individualmente con un jugador en el campo"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="order-1 md:order-2">
            <p className="text-sm uppercase tracking-widest font-medium text-navy-700 mb-3">
              Atención personalizada
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-navy-900 mb-4">
              Sesiones individualizadas
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Cada jugador tiene su propio plan de trabajo. No creemos en el
              entrenamiento genérico: el diagnóstico inicial nos permite diseñar
              un recorrido específico para las necesidades de cada uno, maximizando
              el progreso en los días de campus.
            </p>
            <ul className="space-y-3">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-gray-700">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-navy-800 flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
