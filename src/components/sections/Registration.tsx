import { site } from "@/data/site";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Registration() {
  return (
    <Section id="inscripcion" bg="navy">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm uppercase tracking-widest font-medium text-navy-200 mb-4">
            Plazas limitadas
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
            Reserva tu plaza en el campus
          </h2>
          <p className="text-navy-200 text-lg leading-relaxed mb-8">
            El High Performance Campus tiene plazas limitadas para garantizar
            la máxima atención personalizada. No dejes pasar la oportunidad de
            vivir una experiencia de formación de élite.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              href={site.registrationUrl}
              external
              size="lg"
              variant="white"
            >
              Inscríbete ahora →
            </Button>
            <a
              href={`mailto:${site.contact.email}`}
              className="text-navy-200 hover:text-white text-sm transition-colors"
            >
              ¿Tienes dudas? Escríbenos
            </a>
          </div>

          <p className="mt-8 text-sm text-navy-300">
            {site.dates} · {site.targetAge}
          </p>
        </div>
      </Container>
    </Section>
  );
}
