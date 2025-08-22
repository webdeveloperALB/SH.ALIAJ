"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navigation = [
  { name: "Home", href: "#home" },
  { name: "Products", href: "#products" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  return (
    <header className="gradient-black-gold backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b border-primary/20">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-2 lg:px-6" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">British Home</span>
            <div className="flex items-center space-x-3">
              <img src="/2.png" alt="British Home Logo" className="h-12 w-auto" />
            </div>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Toggle main menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="text-sm font-semibold leading-6 text-primary hover:text-accent transition-colors"
            >
              {item.name}
            </button>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4">
          <Button onClick={() => scrollToSection("#contact")} className="gradient-gold hover:opacity-90">
            Get Free Consultation
          </Button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 z-40 gradient-black-gold border-b border-primary/20 shadow-lg animate-in slide-in-from-top-2 duration-300">
          <div className="px-4 py-3 space-y-1">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full rounded-md px-3 py-2 text-left text-sm font-medium text-primary hover:bg-primary/10 transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
            <div className="pt-2 border-t border-primary/20">
              <Button onClick={() => scrollToSection("#contact")} className="w-full gradient-gold text-sm" size="sm">
                Get Free Consultation
              </Button>
            </div>
          </div>
        </div>
      )}

      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 lg:hidden animate-in fade-in duration-300"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </header>
  )
}
