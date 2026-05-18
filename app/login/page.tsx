'use client'

import { type FormEvent, useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"
import AnimatedBackground from "../components/AnimatedBackground"

export default function LoginPage() {
  const [error, setError] = useState("")
  const router = useRouter()

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError("")
    const form = new FormData(e.currentTarget)

    const { error: err } = await supabase.auth.signInWithPassword({
      email: form.get("email") as string,
      password: form.get("password") as string,
    })

    if (err) {
      setError("Email o contraseña incorrectos")
      return
    }

    router.push("/dashboard")
  }

  return (
    <>
      <AnimatedBackground />
      <main className="relative z-10 mx-auto flex min-h-screen max-w-sm items-center px-6">
        <div className="w-full rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <h1 className="font-display mb-8 text-center text-2xl font-bold text-white">
            Iniciar Sesión
          </h1>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="mb-1 block text-sm text-white/60">
                Correo Electrónico
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white backdrop-blur-xl placeholder:text-white/30 focus:border-indigo-500 focus:outline-none"
                placeholder="admin@audetino.com"
              />
            </div>
            <div>
              <label htmlFor="password" className="mb-1 block text-sm text-white/60">
                Contraseña
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white backdrop-blur-xl placeholder:text-white/30 focus:border-indigo-500 focus:outline-none"
                placeholder="••••••••"
              />
            </div>
            {error && <p className="text-sm text-red-400">{error}</p>}
            <button
              type="submit"
              className="w-full cursor-pointer rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-3 font-semibold text-white shadow-lg transition-transform hover:scale-105"
            >
              Entrar
            </button>
          </form>
        </div>
      </main>
    </>
  )
}
