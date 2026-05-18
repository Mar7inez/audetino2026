'use client'

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { getSupabase } from "@/lib/supabase"
import AnimatedBackground from "../components/AnimatedBackground"
import type { User } from "@supabase/supabase-js"

interface Contacto {
  id: number
  nombre: string
  email: string
  mensaje: string
  created_at: string
}

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null)
  const [contactos, setContactos] = useState<Contacto[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    getSupabase().auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        router.push("/login")
        return
      }
      setUser(session.user)
      fetchContactos()
    })
  }, [router])

  async function fetchContactos() {
    const { data } = await getSupabase()
      .from("contactos")
      .select("*")
      .order("created_at", { ascending: false })

    if (data) setContactos(data)
    setLoading(false)
  }

  async function handleLogout() {
    await getSupabase().auth.signOut()
    router.push("/login")
  }

  if (loading) {
    return (
      <>
        <AnimatedBackground />
        <main className="relative z-10 mx-auto flex min-h-screen max-w-4xl items-center justify-center px-6">
          <p className="animate-pulse text-white/50">Cargando...</p>
        </main>
      </>
    )
  }

  return (
    <>
      <AnimatedBackground />
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-black/30 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-xl font-bold tracking-tight text-white">
            Panel de gestión
          </span>
          <div className="flex items-center gap-4 text-sm text-white/60">
            <span className="text-white/40">{user?.email}</span>
            <button
              onClick={handleLogout}
              className="cursor-pointer rounded-full border border-white/20 px-4 py-1.5 transition-colors hover:bg-white/10 hover:text-white"
            >
              Cerrar sesión
            </button>
          </div>
        </div>
      </nav>

      <main className="relative z-10 mx-auto max-w-4xl px-6 pt-32">
        <h1 className="font-display mb-10 text-3xl font-bold text-white">
          Mensajes recibidos
        </h1>

        {contactos.length === 0 ? (
          <p className="text-white/40">Todavía no hay mensajes.</p>
        ) : (
          <div className="space-y-4">
            {contactos.map((c) => (
              <div
                key={c.id}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
              >
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="font-semibold text-white">{c.nombre}</span>
                  <span className="text-white/30">
                    {new Date(c.created_at).toLocaleString("es-AR")}
                  </span>
                </div>
                <p className="text-sm text-indigo-400">{c.email}</p>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {c.mensaje}
                </p>
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  )
}
