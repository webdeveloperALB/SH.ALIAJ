"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bath, Lightbulb, Sofa, Square, Droplets, Zap, Home, TreePine } from "lucide-react"

const productCategories = [
  {
    title: "Bathroom Excellence",
    description:
      "Premium bathroom tiles, elegant mirrors, sophisticated mixers, and complete bathroom furniture solutions",
    icon: Bath,
    image: "/bathroom.jpeg?height=400&width=600",
    items: ["Bathroom Tiles", "Bathroom Mirrors", "Premium Mixers", "Bathroom Furniture"],
    accent: Droplets,
  },
  {
    title: "Premium Flooring",
    description: "High-quality PVC flooring, elegant laminate, and sophisticated wall panels for every space",
    icon: Square,
    image: "/floor.jpg?height=400&width=600",
    items: ["PVC Flooring", "Laminate Flooring", "PVC Wall Panels"],
    accent: Home,
  },
  {
    title: "Lighting Solutions",
    description: "Indoor and outdoor lighting, designer lampshades, and complete illumination systems",
    icon: Lightbulb,
    image: "/lighting.jpg?height=400&width=600",
    items: ["Indoor Lighting", "Outdoor Lighting", "Designer Lampshades"],
    accent: Zap,
  },
  {
    title: "Furniture & Outdoor",
    description: "Professional office furniture and premium outdoor furniture solutions for complete home design",
    icon: Sofa,
    images: ["/office.jpg?height=400&width=600", "/outdoor.jpg?height=400&width=600"],
    items: ["Office Furniture", "Outdoor Furniture"],
    accent: TreePine,
  },
]

export function ProductsSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? 1 : 0))
    }, 3000) // Switch every 3 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="products"
      className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-black via-black/95 to-black/90 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-primary/10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 sm:mb-6">
            <div className="inline-flex items-center gap-2 gradient-gold px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4 shadow-lg">
              <span className="text-black font-semibold text-sm sm:text-base">Premium Collections</span>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight font-serif text-gradient-gold mb-4 sm:mb-6 px-2">
            Royal Quality Products
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-xl leading-7 sm:leading-8 text-gray-300 px-4">
            Discover our comprehensive range of premium home improvement solutions, each crafted with the finest
            materials and royal attention to detail.
          </p>
        </div>

        <div className="mx-auto mt-12 sm:mt-20 lg:mt-24 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {productCategories.map((category, index) => (
            <Card
              key={category.title}
              className="group overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all duration-700 border-primary/30 hover:border-primary bg-gradient-to-br from-black/90 via-black/95 to-black/80 backdrop-blur-sm"
            >
              <div className="aspect-[16/9] overflow-hidden relative">
                <img
                  src={category.images ? category.images[currentImageIndex] : category.image || "/placeholder.svg"}
                  alt={category.title}
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/60 transition-all duration-500" />
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 gradient-gold backdrop-blur-sm rounded-full p-2 sm:p-3 shadow-lg">
                  <category.accent className="h-4 w-4 sm:h-5 sm:w-5 text-black" />
                </div>
              </div>
              <CardHeader className="pb-3 sm:pb-4 px-4 sm:px-6">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl gradient-gold shadow-lg">
                    <category.icon className="h-5 w-5 sm:h-6 sm:w-6 text-black" />
                  </div>
                  <div>
                    <CardTitle className="font-serif text-lg sm:text-xl text-white group-hover:text-gradient-gold transition-all duration-300">
                      {category.title}
                    </CardTitle>
                    <div className="h-0.5 w-12 gradient-gold mt-2 group-hover:w-20 transition-all duration-300 rounded-full" />
                  </div>
                </div>
                <CardDescription className="text-sm sm:text-base leading-relaxed mt-3 sm:mt-4 text-gray-300">
                  {category.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="px-4 sm:px-6">
                <div className="mb-4 sm:mb-6">
                  <ul className="grid grid-cols-1 gap-2 sm:gap-3 text-sm">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-center group/item">
                        <div className="mr-3 h-2 w-2 rounded-full gradient-gold group-hover/item:scale-125 transition-transform shadow-sm" />
                        <span className="text-gray-400 group-hover/item:text-primary transition-colors font-medium">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button
                  variant="outline"
                  className="w-full bg-transparent border-primary/50 text-primary hover:gradient-gold hover:text-black hover:border-transparent transition-all group-hover:shadow-lg hover:shadow-primary/20 font-semibold text-sm sm:text-base py-2 sm:py-3"
                >
                  View Collection
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
