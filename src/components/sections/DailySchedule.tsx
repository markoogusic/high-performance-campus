import { schedule } from "@/data/schedule";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function DailySchedule() {
  return (
    <Section id="programa" bg="gray">
      <Container>
        <SectionHeading
          eyebrow="Día a día"
          title="Un día en el campus"
          subtitle="Cada jornada está diseñada para maximizar el aprendizaje y la recuperación. Esta es la estructura de un día tipo del campus."
        />

        <div className="max-w-2xl mx-auto">
          <ol className="relative border-l-2 border-navy-200 ml-4 space-y-8">
            {schedule.map((item, index) => (
              <li key={index} className="pl-8 relative">
                <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-navy-800 border-2 border-white" />
                <div className="text-sm font-mono font-semibold text-navy-700 mb-1">
                  {item.time}
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
