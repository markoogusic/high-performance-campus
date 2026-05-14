import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

const benefits = [
  "Circuitos de fuerza funcional adaptados a la edad del jugador",
  "Trabajo de prevención de lesiones y estabilidad articular",
  "Ejercicios de explosividad y potencia para el rendimiento en campo",
  "Movilidad y flexibilidad para la recuperación activa",
  "Control de cargas con análisis de datos GPS",
];

export function GymTraining() {
  return (
    <Section id="gimnasio" bg="gray">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm uppercase tracking-widest font-medium text-navy-700 mb-3">
              Preparación física
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-navy-900 mb-4">
              Trabajo de gimnasio
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              El trabajo en sala complementa el trabajo de campo. En el High
              Performance Campus contamos con un gimnasio de 300 m² con
              equipamiento de nivel profesional. La preparadora física diseña
              los circuitos específicamente para el fútbol, adaptados a cada
              rango de edad y nivel físico.
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

          <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
            {/* TODO: reemplazar con foto real del gimnasio del campus */}
            <Image
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80"
              alt="Sala de gimnasio con equipamiento profesional para la preparación física del futbolista"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
