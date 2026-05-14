import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="bg-navy-900 text-navy-200 py-10">
      <Container>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="font-semibold text-white text-lg">
              High Performance Campus
            </p>
            <p className="text-sm mt-1">{site.tagline}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 text-sm">
            <a
              href={`mailto:${site.contact.email}`}
              className="hover:text-white transition-colors"
            >
              {site.contact.email}
            </a>
            <a
              href={`tel:${site.contact.phone}`}
              className="hover:text-white transition-colors"
            >
              {site.contact.phone}
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-navy-700 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm">
          <p>© {new Date().getFullYear()} High Performance Campus. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a
              href={site.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Instagram
            </a>
            <a
              href={site.contact.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Twitter
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
