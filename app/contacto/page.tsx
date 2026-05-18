import type { Metadata } from "next"
import AnimatedBackground from "../components/AnimatedBackground"
import AnimatedSection from "../components/AnimatedSection"
import ContactForm from "../components/ContactForm"

export const metadata: Metadata = {
  title: "Contacto — Audetino",
  description: "Contactanos para recibir una demo personalizada de Audetino.",
}

export default function Contacto() {
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
            Contacto
          </h1>
          <p className="mt-4 text-lg text-white/50">
            Dejanos tus datos y te contactamos a la brevedad
          </p>
        </AnimatedSection>

        <AnimatedSection className="pb-32 pt-16">
          <ContactForm />
        </AnimatedSection>
      </main>
    </>
  )
}
