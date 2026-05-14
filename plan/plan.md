# Plan — Landing Page "High Performance Campus"

## Contexto

El usuario quiere una landing page informativa para un campus deportivo de fútbol llamado **High Performance Campus**. El objetivo es presentar la propuesta de valor (instalaciones, equipo, metodología, tecnología, horarios) y captar inscripciones a través de un Google Form externo.

**Punto de partida**: repositorio vacío (`/Users/edu/Documents/Edu/high-performance-campus`, solo `.git` inicializado, sin commits previos). Construcción greenfield.

**Decisiones tomadas con el usuario**:
- Stack: **Next.js 15 + App Router + TypeScript + Tailwind CSS**
- Inscripción: **enlace externo a Google Form** (CTA que abre el form en nueva pestaña; sin backend propio)
- Contenido: **placeholders profesionales** (textos demo en español + imágenes Unsplash + marcadores `TODO` para sustituir)
- Estilo visual: **profesional y limpio** — paleta navy + blanco + gris, tipografía Inter, sensación institucional
- Idioma: **español** (`lang="es"`)
- Estructura: **single page** con anchors y smooth scroll (no múltiples rutas)
- Orden de secciones: **reordenado comercialmente** (Inscripción al final como cierre, pero CTA siempre visible en header sticky)

---

## Arquitectura

### Single page, no rutas múltiples

Una landing de 11 secciones es contenido narrativo lineal. Una sola URL canónica con anchors es mejor para SEO, evita complejidad de routing y respeta el flujo de lectura comercial. La única ruta es `/`.

### Orden final de secciones en `app/page.tsx`

1. **Hero** (Inicio)
2. **About** (Sobre el campus / Actividades)
3. **Location** (Lugar donde se realiza)
4. **Team** (Equipo)
5. **IndividualSessions** (Sesiones individualizadas)
6. **GymTraining** (Trabajo de gimnasio)
7. **Technology** (Tecnología aplicada al fútbol)
8. **DailySchedule** (Un día en el campus, con horarios)
9. **Gallery** (Galería de fotos)
10. **Registration** (Inscripción — CTA grande de cierre)
11. **Contact** (Contacto)

Botón "Inscríbete" sticky en el header desde el principio para captura inmediata.

---

## Estructura de carpetas

```
high-performance-campus/
├── .gitignore                       (generado por create-next-app)
├── README.md
├── package.json
├── tsconfig.json
├── next.config.ts                   (añadir remotePatterns para Unsplash)
├── postcss.config.mjs
├── tailwind.config.ts               (tokens custom: navy palette, fuente, spacing)
├── public/
│   └── og-image.jpg                 (TODO: imagen Open Graph real)
└── src/
    ├── app/
    │   ├── layout.tsx               (Inter via next/font + metadata SEO)
    │   ├── page.tsx                 (composición de secciones)
    │   └── globals.css              (Tailwind + smooth-scroll + base)
    ├── components/
    │   ├── layout/
    │   │   ├── Header.tsx           (sticky, logo, nav, CTA inscripción)
    │   │   ├── MobileMenu.tsx       (client component, useState)
    │   │   └── Footer.tsx
    │   ├── sections/
    │   │   ├── Hero.tsx
    │   │   ├── About.tsx
    │   │   ├── Location.tsx
    │   │   ├── Team.tsx
    │   │   ├── IndividualSessions.tsx
    │   │   ├── GymTraining.tsx
    │   │   ├── Technology.tsx
    │   │   ├── DailySchedule.tsx
    │   │   ├── Gallery.tsx
    │   │   ├── Registration.tsx
    │   │   └── Contact.tsx
    │   └── ui/
    │       ├── Section.tsx          (wrapper <section> con id, padding, fondo)
    │       ├── Container.tsx        (max-width + padding horizontal)
    │       ├── Button.tsx           (variants: primary | secondary | ghost)
    │       ├── SectionHeading.tsx   (eyebrow + título + subtítulo)
    │       └── Card.tsx             (card reutilizable)
    ├── data/
    │   ├── site.ts                  (nombre, contacto, registrationUrl)
    │   ├── navigation.ts            (items del menú con anchor hrefs)
    │   ├── team.ts                  (array de miembros con foto/rol/bio)
    │   ├── activities.ts            (lista de actividades)
    │   ├── schedule.ts              (horarios del día tipo)
    │   ├── gallery.ts               (URLs de fotos)
    │   └── technology.ts            (features tecnológicas)
    └── lib/
        └── cn.ts                    (helper clsx + tailwind-merge)
```

---

## Inicialización del proyecto

Desde `/Users/edu/Documents/Edu/high-performance-campus`:

```bash
# 1. Scaffold Next.js 15 (TS + Tailwind + App Router + src/)
npx create-next-app@latest . \
  --typescript --tailwind --app --src-dir \
  --eslint --import-alias "@/*" --no-turbopack

# 2. Helper de clases (opcional pero útil; ~3KB)
npm install clsx tailwind-merge

# 3. Arrancar dev server
npm run dev
```

**No instalar**: framer-motion, swiper, lightbox libs, react-icons. Microinteracciones con `transition-*` y `hover:scale-*` de Tailwind son suficientes. Iconos con SVG inline.

---

## Sistema de diseño

### Tailwind config (`tailwind.config.ts`)

```ts
import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  "#f2f5f9",
          100: "#e2e8f0",
          200: "#c7d2e0",
          300: "#9eb0c8",
          400: "#6e87a8",
          500: "#4d6889",
          600: "#3a5070",
          700: "#2f4060",
          800: "#1f2d4a",   // navy principal (CTA, headings)
          900: "#0f1a33",   // navy oscuro (CTA hover)
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: { container: "1200px" },
      boxShadow: {
        card: "0 1px 3px rgba(15,26,51,0.06), 0 4px 12px rgba(15,26,51,0.05)",
      },
    },
  },
  plugins: [],
} satisfies Config;
```

### `globals.css` mínimo

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html { scroll-behavior: smooth; scroll-padding-top: 5rem; }
  body { @apply bg-white text-navy-900 antialiased; }
  h1, h2, h3, h4 { @apply font-semibold tracking-tight; }
}
```

### Escala tipográfica

- H1 (Hero): `text-4xl md:text-6xl font-bold`
- H2 (Sección): `text-3xl md:text-4xl font-semibold`
- H3 (Card): `text-xl font-semibold`
- Body: `text-base md:text-lg text-gray-700 leading-relaxed`
- Eyebrow: `text-sm uppercase tracking-widest text-navy-700 font-medium`

### Espaciado estándar

- Padding vertical sección: `py-20 md:py-28`
- Gap grid: `gap-6 md:gap-8`
- Container: `max-w-container mx-auto px-4 md:px-8`

### Tipografía (Inter via next/font)

En `src/app/layout.tsx`:

```ts
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
// <html lang="es" className={inter.variable}>
```

---

## Componentes UI reutilizables

| Componente | Props | Responsabilidad |
|---|---|---|
| `Section` | `id`, `bg?: 'white'\|'gray'\|'navy'`, `children` | `<section id> py-20 md:py-28` con fondo alternable |
| `Container` | `children`, `className?` | `max-w-container mx-auto px-4 md:px-8` |
| `Button` | `variant`, `size`, `href?`, `external?`, `children` | Renderiza `<a>` o `<button>`. Variants: primary (navy-800), secondary (border navy), ghost (link) |
| `SectionHeading` | `eyebrow?`, `title`, `subtitle?`, `align?` | Bloque header consistente por sección |
| `Card` | `children`, `className?` | `bg-white rounded-lg shadow-card border border-gray-100 p-6` |

---

## Navegación

### `Header.tsx` (server component)

- Sticky: `sticky top-0 z-50 backdrop-blur bg-white/90 border-b border-gray-100`
- Logo textual "High Performance Campus" a la izquierda
- Desktop (`md:flex`): links de `data/navigation.ts` como `<a href="#anchor">`
- Botón primario "Inscríbete" → `site.registrationUrl` en nueva pestaña
- Móvil (`md:hidden`): hamburguesa que abre `MobileMenu`

### `MobileMenu.tsx` (client component)

- `"use client"` con `useState` para abierto/cerrado
- Panel pantalla completa con links + CTA
- Cierra al hacer click en un link
- Bloquea scroll body cuando abierto (`useEffect` que toca `document.body.style.overflow`)

### Smooth scroll

- CSS puro: `html { scroll-behavior: smooth }`
- `scroll-padding-top: 5rem` para compensar header sticky

### `data/navigation.ts`

```ts
export const navItems = [
  { label: "El campus", href: "#sobre" },
  { label: "Lugar",     href: "#lugar" },
  { label: "Equipo",    href: "#equipo" },
  { label: "Programa",  href: "#programa" },   // ancla a DailySchedule
  { label: "Galería",   href: "#galeria" },
  { label: "Contacto",  href: "#contacto" },
];
```

"Inscripción" NO va como link interno; es el CTA destacado del header.

---

## Secciones — layout y datos

| Sección | Layout | Datos |
|---|---|---|
| `Hero` | Full-bleed con imagen Unsplash + overlay `bg-navy-900/60`. H1, subtítulo, 2 CTAs (Inscríbete / Ver programa) | `data/site.ts` |
| `About` | H2 + grid `md:grid-cols-3` de actividades con icono SVG + título + descripción | `data/activities.ts` |
| `Location` | `md:grid-cols-2`: texto + dirección + dotación / imagen | `data/site.ts` (dirección) |
| `Team` | Grid `md:grid-cols-3 lg:grid-cols-4` de cards con foto, nombre, rol, bio | `data/team.ts` |
| `IndividualSessions` | `md:grid-cols-2` (imagen izq, texto der) | inline |
| `GymTraining` | `md:grid-cols-2` (imagen + texto + bullets) | inline |
| `Technology` | Grid `md:grid-cols-3` con features (GPS, vídeo análisis, métricas, etc.) | `data/technology.ts` |
| `DailySchedule` | Timeline vertical (ver detalle abajo) | `data/schedule.ts` |
| `Gallery` | Grid `grid-cols-2 md:grid-cols-3 lg:grid-cols-4` aspect-square + hover scale | `data/gallery.ts` |
| `Registration` | Fondo navy-800, H2 blanco, párrafo, botón blanco grande → Google Form | `data/site.ts` |
| `Contact` | Lista centrada o `md:grid-cols-2`: email, teléfono, redes, dirección | `data/site.ts` |

### Galería — simple, sin librerías

```tsx
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
  {galleryImages.map((img) => (
    <div key={img.src} className="relative aspect-square overflow-hidden rounded-md">
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
```

8-12 imágenes en `aspect-square`. Sin lightbox (se puede añadir más tarde si hace falta).

### "Un día en el campus" — timeline vertical

Más legible en móvil que una tabla. Estructura:

```ts
// data/schedule.ts
{ time: "08:30", title: "Llegada y desayuno", description: "..." }
```

Render con línea vertical y dots:

```tsx
<ol className="relative border-l-2 border-navy-200 ml-4 space-y-8">
  {schedule.map((item) => (
    <li key={item.time} className="pl-8 relative">
      <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-navy-800" />
      <div className="text-sm font-mono text-navy-700">{item.time}</div>
      <h3 className="text-xl font-semibold mt-1">{item.title}</h3>
      <p className="text-gray-700 mt-1">{item.description}</p>
    </li>
  ))}
</ol>
```

---

## Imágenes — next/image + Unsplash

### `next.config.ts`

```ts
import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};
export default nextConfig;
```

### Reglas

- `<Image>` con `fill` dentro de parent `relative` con `aspect-*`
- `sizes` siempre presente
- `priority` solo en Hero
- `alt` descriptivo en español
- Sufijo Unsplash: `?auto=format&fit=crop&w=1600&q=80`
- Comentario `{/* TODO: sustituir por foto real */}` en cada `<Image>` de placeholder

### Lista sugerida (URLs base de Unsplash)

- **Hero**: `photo-1551958219-acbc608c6377` — fútbol al atardecer
- **Location**: `photo-1459865264687-595d652de67e` — instalaciones
- **IndividualSessions**: `photo-1574629810360-7efbbe195018` — entrenador 1-a-1
- **GymTraining**: `photo-1534438327276-14e5300c3a48` — gimnasio
- **Team**: retratos varios (`photo-1507003211169-0a1dd7228f2d`, etc.)
- **Galería**: 8-12 fotos variadas (acción, equipo, instalaciones)
- **OG image**: reutilizar Hero

---

## Datos placeholder — `src/data/`

### `site.ts`

```ts
export const site = {
  name: "High Performance Campus",
  tagline: "Formación de élite para el futbolista del mañana",
  description: "Campus deportivo intensivo con metodología profesional, sesiones individualizadas y tecnología aplicada.",
  url: "https://highperformancecampus.com", // TODO
  registrationUrl: "https://forms.gle/TODO", // TODO: URL real del Google Form
  contact: {
    email: "info@highperformancecampus.com", // TODO
    phone: "+34 600 000 000",                // TODO
    address: "Calle Ejemplo, 00 — Ciudad",   // TODO
    instagram: "https://instagram.com/TODO",
  },
};
```

- `team.ts`: 4-6 miembros con `name`, `role`, `bio`, `photo`
- `activities.ts`: 3-6 actividades con `icon` (SVG inline), `title`, `description`
- `schedule.ts`: 10-12 entradas con `time`, `title`, `description`
- `gallery.ts`: 8-12 entradas con `src`, `alt`
- `technology.ts`: 3-4 features (GPS, análisis de vídeo, métricas, plataforma de seguimiento)

Todos los textos en español con `// TODO` claros para sustituir.

---

## SEO — `app/layout.tsx`

```ts
export const metadata: Metadata = {
  metadataBase: new URL("https://highperformancecampus.com"), // TODO
  title: {
    default: "High Performance Campus — Campus de fútbol de alto rendimiento",
    template: "%s | High Performance Campus",
  },
  description: "Campus intensivo de fútbol con metodología profesional, sesiones individualizadas, trabajo de gimnasio y tecnología aplicada.",
  keywords: ["campus fútbol", "alto rendimiento", "entrenamiento", "formación deportiva"],
  openGraph: {
    type: "website",
    locale: "es_ES",
    title: "High Performance Campus",
    description: "Formación de élite para el futbolista del mañana.",
    url: "https://highperformancecampus.com",
    siteName: "High Performance Campus",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};
```

- `<html lang="es">` obligatorio
- Una sola `<h1>` (Hero), `<h2>` por sección
- `<section aria-labelledby="...">` ideal

---

## Orden de implementación

1. `npx create-next-app` con flags indicados
2. `tailwind.config.ts` — añadir tokens custom
3. `src/app/globals.css` — directivas + base
4. `src/app/layout.tsx` — Inter + metadata + `lang="es"`
5. `src/data/site.ts`, `src/data/navigation.ts`
6. `src/lib/cn.ts`
7. UI primitives: `Container` → `Section` → `Button` → `SectionHeading` → `Card`
8. `Header.tsx` + `MobileMenu.tsx` + `Footer.tsx`
9. `next.config.ts` — `remotePatterns` Unsplash
10. `Hero.tsx` (primera sección, valida design system)
11. Resto de secciones en el orden final (About → Contact)
12. `src/app/page.tsx` — composición completa
13. `public/og-image.jpg` placeholder + `README.md` mínimo

Tras el paso 10 ya se puede ver en `npm run dev` e iterar visualmente.

---

## Archivos críticos a crear

- `/Users/edu/Documents/Edu/high-performance-campus/src/app/layout.tsx`
- `/Users/edu/Documents/Edu/high-performance-campus/src/app/page.tsx`
- `/Users/edu/Documents/Edu/high-performance-campus/tailwind.config.ts`
- `/Users/edu/Documents/Edu/high-performance-campus/next.config.ts`
- `/Users/edu/Documents/Edu/high-performance-campus/src/components/layout/Header.tsx`
- `/Users/edu/Documents/Edu/high-performance-campus/src/components/sections/Hero.tsx`
- `/Users/edu/Documents/Edu/high-performance-campus/src/data/site.ts`

---

## Verificación end-to-end

### Comandos
```bash
npm run dev      # localhost:3000
npm run build    # build sin errores TS
npm run start    # servir build
```

### Visual / layout
- [ ] Hero ocupa pantalla, imagen carga con `priority`
- [ ] Cada sección tiene `id` correcto; anchors no quedan tapados por el header
- [ ] Alternancia blanco/gris entre secciones coherente
- [ ] Inter cargada (DevTools → Network → Fonts)
- [ ] CTAs primary en navy-800, hover oscurece a navy-900

### Responsive (DevTools)
- [ ] **375px**: menú hamburguesa funciona, grids 1 col, sin overflow horizontal
- [ ] **768px**: grids 2 cols, header inline
- [ ] **1280px+**: container max-w 1200px, contenido centrado

### Funcional
- [ ] "Inscríbete" abre Google Form en pestaña nueva (`target="_blank" rel="noopener noreferrer"`)
- [ ] Menú móvil cierra al click en link
- [ ] Galería: lazy loading en todas las imágenes menos Hero

### Accesibilidad
- [ ] Tab recorre header → CTAs → secciones; focus visible (`focus-visible:ring-2 ring-navy-700`)
- [ ] Todas las imágenes con `alt`
- [ ] Contraste texto sobre Hero ≥ 4.5:1 (overlay `bg-navy-900/60`)
- [ ] 1 `<h1>`, jerarquía correcta de `<h2>` por sección
- [ ] Lighthouse: Performance ≥ 90, A11y ≥ 95, SEO ≥ 95

---

## Notas sobre simplicidad

- Sin animaciones JS (Tailwind `transition-*` + `hover:scale-*` bastan)
- Sin estado global (única interactividad: menú móvil con `useState` local)
- Sin formularios propios (Google Form externo, URL en `site.registrationUrl`)
- Sin tests automatizados (verificación visual + Lighthouse)
- Sin CMS, sin i18n
- Editar contenido = editar `src/data/*.ts` (versionable con git)
