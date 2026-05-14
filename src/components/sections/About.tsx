import { activities } from "@/data/activities";
import { site } from "@/data/site";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

export function About() {
  return (
    <Section id="sobre" bg="gray">
      <Container>
        <SectionHeading
          eyebrow="El campus"
          title="Metodología de élite, formación integral"
          subtitle={site.description}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {activities.map((activity) => (
            <Card key={activity.title}>
              <div className="text-4xl mb-4">{activity.icon}</div>
              <h3 className="text-xl font-semibold text-navy-900 mb-2">
                {activity.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {activity.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
