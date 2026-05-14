import Image from "next/image";
import { site } from "@/data/site";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* TODO: reemplazar con foto real del campus */}
      <Image
        src="https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&w=1920&q=80"
        alt="Jugadores entrenando en un campo de fútbol al atardecer"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-navy-900/65" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 md:px-8 text-center text-white">
        <p className="text-sm uppercase tracking-widest font-medium text-navy-200 mb-4">
          Campus deportivo de alto rendimiento
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          {site.name}
        </h1>
        <p className="text-xl md:text-2xl text-navy-100 font-light mb-4 max-w-2xl mx-auto">
          {site.tagline}
        </p>
        <p className="text-base text-navy-200 mb-10 max-w-xl mx-auto">
          {site.dates} · {site.targetAge}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href={site.registrationUrl} external size="lg" variant="white">
            Inscríbete ahora
          </Button>
          <Button href="#programa" size="lg" variant="secondary" className="border-white text-white hover:bg-white/10">
            Ver el programa
          </Button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/70 animate-bounce">
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
