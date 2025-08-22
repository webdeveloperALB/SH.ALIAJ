"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Crown, Award, Users } from "lucide-react"

export function HeroSection() {
  const scrollToProducts = () => {
    const element = document.querySelector("#products")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToContact = () => {
    const element = document.querySelector("#contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative overflow-hidden gradient-black-gold min-h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover opacity-30"
          src="/british-home-logo.png?height=1080&width=1920"
          alt="Luxury modern interior design"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 animate-fade-in-up">
            <h1 className="text-5xl font-bold tracking-tight sm:text-7xl font-serif text-gradient-gold">
              British Home
            </h1>
            <div className="mt-4 text-xl text-primary/90 font-medium">
              Royal Quality • Exceptional Design • Albanian Excellence
            </div>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl font-serif mb-6">
            Transform Your Home with Premium Quality
          </h2>

          <p className="mt-6 text-xl leading-8 text-gray-200 max-w-3xl mx-auto">
            From luxurious bathroom fixtures and premium flooring to elegant lighting and sophisticated furniture - we
            bring royal quality to every corner of your home.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <Award className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary">15+</div>
              <div className="text-sm text-gray-300">Years Experience</div>
            </div>
            <div className="text-center">
              <Users className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary">1000+</div>
              <div className="text-sm text-gray-300">Happy Clients</div>
            </div>
            <div className="text-center">
              <Crown className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary">Premium</div>
              <div className="text-sm text-gray-300">Quality Guaranteed</div>
            </div>
          </div>

          <div className="mt-12 flex items-center justify-center gap-x-6 flex-wrap">
            <Button
              size="lg"
              onClick={scrollToProducts}
              className="group gradient-gold text-black font-semibold hover:opacity-90 transition-all"
            >
              Explore Our Collections
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToContact}
              className="bg-transparent border-primary text-primary hover:bg-primary hover:text-black transition-all"
            >
              Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
