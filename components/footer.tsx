import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

const footerLinks = {
  products: [
    { label: "All Products", href: "/products" },
    { label: "Hybrid Maize", href: "/products/hybrid-maize" },
    { label: "Hybrid Paddy", href: "/products/hybrid-paddy" },
    { label: "Research Paddy", href: "/products/research-paddy" },
    { label: "Vegetables", href: "/products/vegetables" },
    { label: "Pulses", href: "/products/pulses" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Services", href: "/services" },
    { label: "Careers", href: "/about" },
    { label: "News", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  support: [
    { label: "Dealer Locator", href: "/contact" },
    { label: "Farmer Helpline", href: "/contact" },
    { label: "Training Programs", href: "/services" },
    { label: "FAQs", href: "/contact" },
    { label: "Downloads", href: "/products" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/vasudha-logo.png" alt="Vasudha Agri Seeds" width={48} height={48} className="h-12 w-auto" />
              <span className="font-serif text-xl font-bold">Vasudha Agri Seeds</span>
            </Link>
            <p className="mt-4 text-card/70 leading-relaxed max-w-sm">
              Empowering Indian farmers with premium quality seeds since 2015. Together, 
              we grow India&apos;s future.
            </p>
            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="h-10 w-10 rounded-full bg-card/10 flex items-center justify-center hover:bg-primary transition-colors"
                    aria-label={social.label}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-card mb-4">Products</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-card/70 hover:text-primary transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-card mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-card/70 hover:text-primary transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-card mb-4">Farmer Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-card/70 hover:text-primary transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-card/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-card/60">
            © {new Date().getFullYear()} Vasudha Agri Biotech Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-card/60 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-card/60 hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
