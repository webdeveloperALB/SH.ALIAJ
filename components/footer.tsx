import { Phone, Mail, MapPin } from "lucide-react"

const navigation = {
  products: [
    { name: "Bathroom Fixtures", href: "#" },
    { name: "Premium Flooring", href: "#" },
    { name: "Lighting Solutions", href: "#" },
    { name: "Furniture & Outdoor", href: "#" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Our Products", href: "#products" },
    { name: "Contact", href: "#contact" },
    { name: "Gallery", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">BH</span>
              </div>
              <span className="font-serif font-bold text-xl text-foreground">British Home</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6 max-w-md">
              Transform your home with our premium selection of bathroom fixtures, flooring, lighting, and furniture
              solutions.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+355 69 47 91 138 / +355 69 47 91 197</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>british.home.al@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Kamëz, Tiranë, Albania</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Products</h3>
            <ul className="space-y-2">
              {navigation.products.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8">
          <p className="text-xs text-muted-foreground text-center">
            © 2025 British Home. All rights reserved. | CEO: Shkëlqim Aliaj
          </p>
        </div>
      </div>
    </footer>
  )
}
