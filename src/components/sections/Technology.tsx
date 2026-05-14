import { techFeatures } from "@/data/technology";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

export function Technology() {
  return (
    <Section id="tecnologia" bg="white">
      <Container>
        <SectionHeading
          eyebrow="Innovación"
          title="Tecnología aplicada al fútbol"
          subtitle="Utilizamos las mismas herramientas tecnológicas que los equipos profesionales de élite para medir, analizar y mejorar el rendimiento de cada jugador."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techFeatures.map((feature) => (
            <Card key={feature.title} className="text-center">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-navy-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
