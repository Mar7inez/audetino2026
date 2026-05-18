import type { Metadata } from "next"
import AnimatedBackground from "../components/AnimatedBackground"
import AnimatedSection from "../components/AnimatedSection"

export const metadata: Metadata = {
  title: "Acerca de — Audetino",
  description:
    "Conocé la historia de Audetino. Simplificando la gestión de proyectos desde 2015.",
}

export default function AcercaDe() {
  return (
    <>
      <AnimatedBackground />
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-black/30 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="/" className="text-xl font-bold tracking-tight text-white">
            Audetino
          </a>
          <a
            href="/"
            className="text-sm text-white/50 transition-colors hover:text-white"
          >
            ← Volver
          </a>
        </div>
      </nav>
      <main className="relative z-10 mx-auto max-w-4xl px-6 pt-32">
        <AnimatedSection>
          <h1 className="font-display text-5xl font-bold text-white">
            Acerca de Audetino
          </h1>
          <p className="mt-4 text-lg text-white/50">
            Simplificando la gestión de proyectos desde 2015
          </p>
        </AnimatedSection>

        <AnimatedSection className="mt-20 space-y-6 pb-32">
          <p className="text-base leading-relaxed text-white/70">
            Audetino nació en 2015 con una misión clara: simplificar la forma en que
            las personas y empresas gestionan sus proyectos y recursos. Desde entonces,
            hemos evolucionado para ofrecer soluciones adaptativas que se ajustan a
            las necesidades de cada cliente.
          </p>
          <p className="text-base leading-relaxed text-white/70">
            Nuestra plataforma combina tecnología moderna con un diseño intuitivo,
            permitiendo a equipos de todos los tamaños colaborar en tiempo real,
            analizar datos y tomar decisiones informadas.
          </p>
          <p className="text-base leading-relaxed text-white/70">
            Hoy ofrecemos tres productos principales: Audetino Inmobiliario para el
            sector inmobiliario, Audetino Web Institucional para la gestión
            institucional, y Audetino API para integraciones externas.
          </p>
        </AnimatedSection>
      </main>
    </>
  )
}
