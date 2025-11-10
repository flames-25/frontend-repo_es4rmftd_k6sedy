import { Menu } from 'lucide-react'

export default function MinimalNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mt-4 flex h-12 items-center justify-between rounded-full border border-white/10 bg-zinc-900/60 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/40 px-3">
          <a href="#" className="flex items-center gap-2 text-sm font-medium text-white/90 hover:text-white">
            <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_24px_rgba(34,211,238,0.7)]" />
            Visura
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-300">
            <a href="#manifesto" className="hover:text-white">Manifesto</a>
            <a href="#labs" className="hover:text-white">Labs</a>
            <a href="#gallery" className="hover:text-white">Gallery</a>
            <a href="#cta" className="px-3 py-1 rounded-full bg-white text-zinc-900 font-medium hover:bg-zinc-100">Get Early Access</a>
          </nav>
          <button className="md:hidden grid place-items-center h-8 w-8 rounded-md border border-white/10 text-white/80">
            <Menu size={16} />
          </button>
        </div>
      </div>
    </header>
  )
}
