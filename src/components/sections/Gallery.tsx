import Image from "next/image";
import { galleryImages } from "@/data/gallery";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Gallery() {
  return (
    <Section id="galeria" bg="white">
      <Container>
        <SectionHeading
          eyebrow="Galería"
          title="El campus en imágenes"
          subtitle="Instalaciones, entrenamientos y momentos que hacen del High Performance Campus una experiencia única."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {galleryImages.map((img) => (
            <div
              key={img.src}
              className="relative aspect-square overflow-hidden rounded-lg"
            >
              {/* TODO: reemplazar con fotos reales del campus */}
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
