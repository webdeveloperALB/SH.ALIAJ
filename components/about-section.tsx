import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Clock, MapPin } from "lucide-react"

const features = [
  {
    name: "Quality Assurance",
    description: "Premium products sourced from trusted manufacturers",
    icon: Award,
  },
  {
    name: "Expert Team",
    description: "Professional consultation and installation services",
    icon: Users,
  },
  {
    name: "Fast Delivery",
    description: "Quick and reliable delivery across Albania",
    icon: Clock,
  },
  {
    name: "Local Presence",
    description: "Based in Kamëz, Tiranë - serving all of Albania",
    icon: MapPin,
  },
]

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 sm:py-32 bg-gradient-to-b from-black/90 via-black/95 to-black relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-primary/10" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-primary">About British Home</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl font-serif text-gradient-gold">
                Your Trusted Partner in Home Design
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                At British Home, we specialize in transforming houses into dream homes. With years of experience in the
                Albanian market, we provide premium home improvement solutions that combine quality, style, and
                affordability.
              </p>
              <div className="mt-8">
                <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-black/80 to-black/60 rounded-lg border border-primary/30 shadow-lg">
                  <img
                    className="h-16 w-16 rounded-full object-cover border-2 border-primary/50"
                    src="/placeholder.svg?height=64&width=64"
                    alt="Shkëlqim Aliaj"
                  />
                  <div>
                    <h3 className="font-semibold text-primary text-lg">Shkëlqim Aliaj</h3>
                    <p className="text-sm text-gray-300 font-medium">CEO & Founder</p>
                    <p className="text-sm text-gray-400">Kamëz, Tiranë</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {features.map((feature) => (
              <Card
                key={feature.name}
                className="border-primary/30 shadow-lg bg-gradient-to-br from-black/80 to-black/60 hover:shadow-primary/20 transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-gold shadow-md group-hover:scale-110 transition-transform">
                      <feature.icon className="h-5 w-5 text-black" />
                    </div>
                    <h3 className="font-semibold text-primary">{feature.name}</h3>
                  </div>
                  <p className="text-sm text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
