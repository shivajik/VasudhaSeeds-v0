"use client"

import Link from "next/link"
import { useState } from "react"
import Image from "next/image"
import {
  Menu,
  X,
  ChevronDown,
  Wheat,
  Sprout,
  Flower2,
  Apple,
  Sun,
  Sparkles,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const productCategories = [
  { name: "Hybrid Maize", href: "/products/hybrid-maize", icon: Wheat, count: "20 varieties" },
  { name: "Hybrid Paddy", href: "/products/hybrid-paddy", icon: Sprout, count: "11 varieties" },
  { name: "Research Paddy", href: "/products/research-paddy", icon: Sprout, count: "15 varieties" },
  { name: "Vegetables", href: "/products/vegetables", icon: Apple, count: "14 varieties" },
  { name: "Pulses", href: "/products/pulses", icon: Flower2, count: "2 varieties" },
  { name: "Sunflower", href: "/products/sunflower", icon: Sun, count: "3 varieties" },
  { name: "Bajra", href: "/products/bajra", icon: Wheat, count: "2 varieties" },
  { name: "Wheat", href: "/products/wheat", icon: Wheat, count: "2 varieties" },
  { name: "Mustard", href: "/products/mustard", icon: Sprout, count: "2 varieties" },
]

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products", hasMega: true },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [megaMenuOpen, setMegaMenuOpen] = useState(false)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/vasudha-logo.png" alt="Vasudha Agri Seeds" width={48} height={48} className="h-12 w-auto" />
            <span className="font-serif text-xl font-bold text-foreground">
              Vasudha Agri Seeds
            </span>
          </Link>

          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {navLinks.map((link) =>
              link.hasMega ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setMegaMenuOpen(true)}
                  onMouseLeave={() => setMegaMenuOpen(false)}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${megaMenuOpen ? "rotate-180" : ""}`}
                    />
                  </Link>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          <div className="hidden lg:block">
            <Button asChild>
              <Link href="/contact">Get Quote</Link>
            </Button>
          </div>

          <button
            type="button"
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open menu</span>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <div
          className={`absolute left-0 right-0 top-full bg-background border-b border-border shadow-lg transition-all duration-300 ${
            megaMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onMouseEnter={() => setMegaMenuOpen(true)}
          onMouseLeave={() => setMegaMenuOpen(false)}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-8">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <h3 className="text-sm font-semibold text-foreground">Product Categories</h3>
                </div>
                <div className="grid grid-cols-3 gap-1">
                  {productCategories.map((category) => {
                    const IconComponent = category.icon
                    return (
                      <Link
                        key={category.name}
                        href={category.href}
                        className="group flex items-center gap-2.5 px-3 py-2.5 rounded-lg hover:bg-muted transition-colors"
                      >
                        <div className="h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                          <IconComponent className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors leading-tight">
                            {category.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {category.count}
                          </p>
                        </div>
                      </Link>
                    )
                  })}
                </div>
                <div className="mt-3 pt-3 border-t border-border">
                  <Link href="/products" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline">
                    View All Products
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              <div className="col-span-4 bg-muted rounded-xl p-4">
                <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-3">
                  <Image
                    src="/images/seeds-variety.jpg"
                    alt="Premium seed varieties"
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="font-serif text-base font-semibold text-foreground">
                  New Arrivals for Kharif Season
                </h4>
                <p className="text-xs text-muted-foreground mt-1.5">
                  Discover our latest high-yielding hybrid varieties developed for Indian climate conditions.
                </p>
                <Button variant="link" className="p-0 h-auto mt-2 gap-1 text-sm" asChild>
                  <Link href="/products">
                    Explore All Products
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border bg-background">
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                className="px-3 py-2 text-base font-medium text-muted-foreground transition-colors hover:text-primary hover:bg-muted rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="px-3 py-2 text-base font-medium text-muted-foreground transition-colors hover:text-primary hover:bg-muted rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>

              <div>
                <button
                  type="button"
                  onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                  className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary hover:bg-muted rounded-lg"
                >
                  Products
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${mobileProductsOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileProductsOpen && (
                  <div className="ml-4 mt-2 space-y-1 border-l-2 border-border pl-4">
                    <Link
                      href="/products"
                      className="block px-3 py-2 text-sm font-medium text-primary hover:bg-muted rounded-lg"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      All Products
                    </Link>
                    {productCategories.map((category) => (
                      <Link
                        key={category.name}
                        href={category.href}
                        className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted rounded-lg"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/services"
                className="px-3 py-2 text-base font-medium text-muted-foreground transition-colors hover:text-primary hover:bg-muted rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="px-3 py-2 text-base font-medium text-muted-foreground transition-colors hover:text-primary hover:bg-muted rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Button className="mt-2 mx-3" asChild>
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Get Quote
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
