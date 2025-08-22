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
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
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
          {/*<div className="flex items-center gap-2 text-lg text-black">
            <Phone className="h-5 w-5" />
            <span>+355 69 47 91 138</span>
          </div> */}
          <Button onClick={() => scrollToSection("#contact")} className="gradient-gold hover:opacity-90">
            Get Free Consultation
          </Button>
        </div>
      </nav>
      {/* Mobile menu */}
      <div className={`lg:hidden ${mobileMenuOpen ? "block" : "hidden"}`} role="dialog" aria-modal="true">
        <div
          className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ease-in-out ${mobileMenuOpen ? "opacity-100" : "opacity-0"
            }`}
          onClick={() => setMobileMenuOpen(false)}
        ></div>
        <div
          className={`fixed top-0 right-0 z-50 w-full overflow-y-auto gradient-black-gold px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-primary/20 h-auto transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">British Home</span>
              <div className="flex items-center space-x-3">
                <img src="/2.png" alt="British Home Logo" className="h-12 w-auto" />
              </div>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-primary hover:bg-primary/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-8">
            <div className="space-y-4 py-6">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="-mx-3 block rounded-lg px-3 py-4 text-lg font-semibold leading-7 text-primary hover:bg-primary/10 w-full text-left transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </div>
            <div className="py-6 border-t border-primary/20">
              {/*<div className="flex items-center gap-2 text-base text-primary mb-6">
                <Phone className="h-5 w-5" />
                <span>+355 69 47 91 138</span>
              </div> */}
              <Button onClick={() => scrollToSection("#contact")} className="w-full gradient-gold text-lg py-3">
                Get Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
