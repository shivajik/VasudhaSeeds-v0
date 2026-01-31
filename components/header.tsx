"use client"

import Link from "next/link"
import { useState } from "react"
import Image from "next/image"
import {
  Menu,
  X,
  Leaf,
  ChevronDown,
  Wheat,
  Sprout,
  Flower2,
  TreeDeciduous,
  Apple,
  Sparkles,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const productCategories = [
  {
    name: "Cereals",
    href: "/products/cereals",
    icon: Wheat,
    description: "High-yielding wheat, rice, maize and more",
    featured: [
      { name: "Premium Wheat Seeds", href: "/products/cereals/wheat" },
      { name: "Hybrid Rice Seeds", href: "/products/cereals/rice" },
      { name: "Maize Seeds", href: "/products/cereals/maize" },
    ],
  },
  {
    name: "Pulses",
    href: "/products/pulses",
    icon: Sprout,
    description: "Protein-rich moong, chana, urad dal seeds",
    featured: [
      { name: "Moong Dal Seeds", href: "/products/pulses/moong" },
      { name: "Chana Seeds", href: "/products/pulses/chana" },
      { name: "Urad Dal Seeds", href: "/products/pulses/urad" },
    ],
  },
  {
    name: "Vegetables",
    href: "/products/vegetables",
    icon: Apple,
    description: "Fresh vegetable seeds for year-round harvest",
    featured: [
      { name: "Tomato Hybrid Seeds", href: "/products/vegetables/tomato" },
      { name: "Chilli Seeds", href: "/products/vegetables/chilli" },
      { name: "Brinjal Seeds", href: "/products/vegetables/brinjal" },
    ],
  },
  {
    name: "Oilseeds",
    href: "/products/oilseeds",
    icon: Flower2,
    description: "High oil-content mustard, groundnut, soybean",
    featured: [
      { name: "Mustard Seeds", href: "/products/oilseeds/mustard" },
      { name: "Groundnut Seeds", href: "/products/oilseeds/groundnut" },
      { name: "Soybean Seeds", href: "/products/oilseeds/soybean" },
    ],
  },
  {
    name: "Cotton",
    href: "/products/cotton",
    icon: TreeDeciduous,
    description: "BT cotton and premium cotton varieties",
    featured: [
      { name: "BT Cotton Seeds", href: "/products/cotton/bt-cotton" },
      { name: "Desi Cotton Seeds", href: "/products/cotton/desi" },
    ],
  },
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
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
              <Leaf className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-serif text-xl font-bold text-foreground">
              Vasudha Agri Biotech
            </span>
          </Link>

          {/* Desktop Navigation */}
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

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button asChild>
              <Link href="/contact">Get Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open menu</span>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mega Menu */}
        <div
          className={`absolute left-0 right-0 top-full bg-background border-b border-border shadow-xl transition-all duration-300 ${
            megaMenuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
          }`}
          onMouseEnter={() => setMegaMenuOpen(true)}
          onMouseLeave={() => setMegaMenuOpen(false)}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-12 gap-8">
              {/* Categories */}
              <div className="col-span-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-foreground">Product Categories</h3>
                  </div>
                  <Link
                    href="/products"
                    className="text-sm font-medium text-primary hover:underline flex items-center gap-1"
                  >
                    View All
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {productCategories.map((category) => {
                    const IconComponent = category.icon
                    return (
                      <div
                        key={category.name}
                        className="group rounded-xl border border-border bg-card p-4 hover:border-primary/40 hover:shadow-md transition-all duration-200"
                      >
                        <Link
                          href={category.href}
                          className="flex items-center gap-3 mb-3"
                        >
                          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-105 transition-all duration-200">
                            <IconComponent className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                          </div>
                          <div>
                            <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                              {category.name}
                            </p>
                            <p className="text-xs text-muted-foreground line-clamp-1">
                              {category.description}
                            </p>
                          </div>
                        </Link>
                        <div className="space-y-1 pt-3 border-t border-border/60">
                          {category.featured.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all group/item"
                            >
                              <span className="h-1.5 w-1.5 rounded-full bg-primary/40 group-hover/item:bg-primary group-hover/item:scale-125 transition-all" />
                              {item.name}
                            </Link>
                          ))}
                        </div>
                        <Link
                          href={category.href}
                          className="flex items-center gap-1 mt-3 pt-2 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          View all {category.name.toLowerCase()}
                          <ArrowRight className="h-3 w-3" />
                        </Link>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Featured Section */}
              <div className="col-span-4 bg-gradient-to-br from-primary/5 to-accent/10 rounded-xl p-6 border border-primary/10">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4 shadow-md">
                  <Image
                    src="/images/seeds-variety.jpg"
                    alt="Premium seed varieties"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="inline-block px-2 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                      New Season
                    </span>
                  </div>
                </div>
                <h4 className="font-serif text-lg font-semibold text-foreground">
                  Kharif Season Specials
                </h4>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  Discover our latest high-yielding hybrid varieties developed for Indian
                  climate conditions.
                </p>
                <Button className="w-full mt-4 gap-2" asChild>
                  <Link href="/products">
                    Explore All Products
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
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

              {/* Mobile Products Accordion */}
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
