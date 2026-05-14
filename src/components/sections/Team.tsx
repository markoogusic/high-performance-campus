import Image from "next/image";
import { team } from "@/data/team";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Team() {
  return (
    <Section id="equipo" bg="gray">
      <Container>
        <SectionHeading
          eyebrow="El equipo"
          title="Profesionales de alto nivel"
          subtitle="Nuestro equipo técnico reúne experiencia profesional, metodología contrastada y una pasión genuina por la formación del futbolista."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.name} className="text-center">
              <div className="relative w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-navy-100">
                {/* TODO: reemplazar con foto real del miembro del equipo */}
                <Image
                  src={member.photo}
                  alt={`Foto de ${member.name}, ${member.role}`}
                  fill
                  sizes="112px"
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-navy-900">{member.name}</h3>
              <p className="text-sm font-medium text-navy-700 mb-2">{member.role}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
