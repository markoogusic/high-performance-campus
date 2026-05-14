import { navItems } from "@/data/navigation";
import { site } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm bg-white/90 border-b border-gray-100">
      <Container>
        <div className="flex items-center justify-between h-[65px]">
          <a
            href="#inicio"
            className="font-semibold text-navy-900 text-lg leading-tight"
          >
            <span className="block">High Performance</span>
            <span className="block text-sm font-normal text-navy-600 -mt-0.5">Campus</span>
          </a>

          <nav className="hidden md:flex items-center gap-6" aria-label="Navegación principal">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-600 hover:text-navy-800 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <Button href={site.registrationUrl} external size="md">
              Inscríbete
            </Button>
          </div>

          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
