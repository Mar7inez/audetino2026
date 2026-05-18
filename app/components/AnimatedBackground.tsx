export default function AnimatedBackground() {
  return (
    <>
      <div
        className="fixed inset-0 -z-10 animate-gradient-x bg-gradient-to-br from-indigo-500/30 via-purple-500/20 to-pink-500/30"
        style={{ backgroundSize: "200% 200%" }}
      />
      <div
        className="pointer-events-none fixed inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "256px 256px",
        }}
      />
    </>
  )
}
