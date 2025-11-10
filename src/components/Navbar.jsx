import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItem = (label) => (
    <a href="#features" className="text-sm md:text-[15px] text-zinc-300 hover:text-white transition-colors">
      {label}
    </a>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/60 bg-zinc-900/70 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="relative">
              <span className="absolute inset-0 blur-md bg-gradient-to-tr from-fuchsia-500 to-violet-500 opacity-60" />
              <div className="relative h-8 w-8 rounded-lg bg-zinc-800/80 border border-white/10 grid place-items-center">
                <Sparkles className="h-4 w-4 text-fuchsia-400" />
              </div>
            </div>
            <span className="text-white font-semibold tracking-tight text-lg">Visura</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItem('Features')}
            {navItem('Showcase')}
            {navItem('Pricing')}
            {navItem('Support')}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#download" className="px-4 py-2 rounded-md bg-white text-zinc-900 font-medium hover:bg-zinc-100 transition-colors">Add to Chrome</a>
          </div>

          <button aria-label="Menu" onClick={() => setOpen(!open)} className="md:hidden h-10 w-10 grid place-items-center rounded-md border border-white/10 text-zinc-200">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/5 bg-zinc-900/80 backdrop-blur">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4">
            <a href="#features" className="text-zinc-200">Features</a>
            <a href="#showcase" className="text-zinc-200">Showcase</a>
            <a href="#pricing" className="text-zinc-200">Pricing</a>
            <a href="#support" className="text-zinc-200">Support</a>
            <a href="#download" className="mt-2 px-4 py-2 rounded-md bg-white text-zinc-900 font-medium">Add to Chrome</a>
          </div>
        </div>
      )}
    </header>
  )
}
