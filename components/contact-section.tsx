import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    title: "Phone Numbers",
    details: ["+355 69 47 91 138", "+355 69 47 91 197"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["british.home.al@gmail.com"],
  },
  {
    icon: MapPin,
    title: "Location",
    details: ["Kamëz, Tiranë", "Albania"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon - Fri: 8:00 - 18:00", "Sat: 9:00 - 16:00"],
  },
]

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 sm:py-32 bg-gradient-to-b from-black via-black/95 to-black/90 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-bl from-primary/10 via-transparent to-primary/5" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-serif text-gradient-gold">Get in Touch</h2>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            Ready to transform your home? Contact us for a free consultation
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="space-y-6">
            {contactInfo.map((info) => (
              <Card
                key={info.title}
                className="border-primary/30 shadow-lg bg-gradient-to-r from-black/80 to-black/60 hover:shadow-primary/20 transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-gold shadow-md group-hover:scale-110 transition-transform">
                      <info.icon className="h-5 w-5 text-black" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-2">{info.title}</h3>
                      {info.details.map((detail, index) => (
                        <p key={index} className="text-sm text-gray-300 font-medium">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <Card className="border-primary/30 shadow-xl bg-gradient-to-br from-black/80 to-black/60">
            <CardHeader>
              <CardTitle className="font-serif text-primary text-xl">Send us a message</CardTitle>
              <CardDescription className="text-gray-300">
                Fill out the form below and we'll get back to you within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input
                  placeholder="First name"
                  className="bg-black/50 border-primary/30 text-white placeholder:text-gray-400 focus:border-primary"
                />
                <Input
                  placeholder="Last name"
                  className="bg-black/50 border-primary/30 text-white placeholder:text-gray-400 focus:border-primary"
                />
              </div>
              <Input
                type="email"
                placeholder="Email address"
                className="bg-black/50 border-primary/30 text-white placeholder:text-gray-400 focus:border-primary"
              />
              <Input
                type="tel"
                placeholder="Phone number"
                className="bg-black/50 border-primary/30 text-white placeholder:text-gray-400 focus:border-primary"
              />
              <Textarea
                placeholder="Tell us about your project..."
                className="min-h-[120px] bg-black/50 border-primary/30 text-white placeholder:text-gray-400 focus:border-primary"
              />
              <Button className="w-full gradient-gold text-black font-semibold hover:opacity-90 transition-all shadow-lg">
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
