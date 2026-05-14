import Image from "next/image";
import { site } from "@/data/site";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const facilities = [
  "Campo de fútbol 11 con césped natural", // TODO: actualizar con instalaciones reales
  "Campo de fútbol 7 con césped artificial",
  "Sala de gimnasio de 300 m² totalmente equipada",
  "Sala de análisis de vídeo con proyector 4K",
  "Vestuarios y zonas de recuperación",
  "Comedor y áreas de descanso",
  "Alojamiento disponible (régimen interno/externo)", // TODO
];

export function Location() {
  return (
    <Section id="lugar" bg="white">
      <Container>
        <SectionHeading
          eyebrow="Instalaciones"
          title="Un entorno diseñado para el alto rendimiento"
          subtitle="Contamos con unas instalaciones de primer nivel que nos permiten ofrecer una experiencia de entrenamiento completa y de calidad profesional."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm uppercase tracking-widest font-medium text-navy-700 mb-4">
              Dónde nos encontramos
            </p>
            <p className="text-2xl font-semibold text-navy-900 mb-2">
              {site.contact.address}
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Las instalaciones están a escasos minutos del centro de la ciudad,
              con fácil acceso en transporte público y aparcamiento gratuito para
              los participantes con régimen externo. {/* TODO: actualizar descripción */}
            </p>

            <h3 className="text-lg font-semibold text-navy-900 mb-4">Dotación</h3>
            <ul className="space-y-2">
              {facilities.map((facility) => (
                <li key={facility} className="flex items-start gap-2 text-gray-700">
                  <svg
                    className="w-5 h-5 text-navy-700 mt-0.5 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {facility}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
            {/* TODO: reemplazar con foto real de las instalaciones */}
            <Image
              src="https://images.unsplash.com/photo-1459865264687-595d652de67e?auto=format&fit=crop&w=1200&q=80"
              alt="Instalaciones deportivas con campo de césped natural"
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
