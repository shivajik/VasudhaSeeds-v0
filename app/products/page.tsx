"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  ArrowRight,
  Wheat,
  Sprout,
  Flower2,
  Apple,
  Search,
} from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const categories = [
  {
    id: "hybrid-maize",
    name: "Hybrid Maize",
    icon: Wheat,
    image: "/images/slide-harvest.jpg",
    description: "High-yielding hybrid maize varieties for Kharif & Rabi seasons with wider adaptability.",
    productCount: 12,
  },
  {
    id: "hybrid-paddy",
    name: "Hybrid Paddy",
    icon: Sprout,
    image: "/images/seeds-variety.jpg",
    description: "Premium hybrid paddy seeds with high yield and disease tolerance.",
    productCount: 7,
  },
  {
    id: "research-paddy",
    name: "Research Paddy",
    icon: Sprout,
    image: "/images/farmer-field.jpg",
    description: "Improved paddy varieties with superior grain quality and adaptability.",
    productCount: 10,
  },
  {
    id: "vegetables",
    name: "Vegetables",
    icon: Apple,
    image: "/images/slide-vegetables.jpg",
    description: "Hybrid chilli, tomato, bhendi and bottle gourd seeds for commercial farming.",
    productCount: 10,
  },
  {
    id: "pulses",
    name: "Pulses",
    icon: Flower2,
    image: "/images/hero-seeds.jpg",
    description: "Red gram and pulse varieties for sustainable farming.",
    productCount: 2,
  },
]

const featuredProducts = [
  {
    id: 1,
    name: "GURU-4062",
    category: "hybrid-maize",
    description: "High yield potential maize hybrid with wider adaptability. Tall plants 250-260cm, orange semi flint grains.",
    features: ["High Yield", "Wider Adaptability", "Biotic Stress Tolerant"],
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "KAVERI-111",
    category: "hybrid-paddy",
    description: "120-125 days duration with long bold slender grains. 380-400 grains per panicle. Tolerant to Blast & BPH.",
    features: ["High Yield", "Blast Tolerant", "Long Slender"],
    badge: "Popular",
  },
  {
    id: 3,
    name: "SARKAR-777 Tomato",
    category: "vegetables",
    description: "Semi determinate, flat round type fruits weighing 80-100g. Very firm with good keeping quality.",
    features: ["Heat Tolerant", "Very Firm", "Long Transport"],
    badge: "New",
  },
  {
    id: 4,
    name: "GANAPATHI-111",
    category: "pulses",
    description: "Medium maturity red gram (140-150 days). Pods in clusters of 4-6 per cluster, 3-5 seeds per pod.",
    features: ["Medium Maturity", "Cluster Pods", "Bold Seeds"],
    badge: null,
  },
  {
    id: 5,
    name: "VIJETHA-222 Chilli",
    category: "vegetables",
    description: "Semi erect plant with 9-11cm smooth dark green to dark red fruits. High pungency, dual purpose hybrid.",
    features: ["High Pungency", "Dual Purpose", "Export Quality"],
    badge: "Top Rated",
  },
  {
    id: 6,
    name: "CHAMPION-555",
    category: "hybrid-maize",
    description: "Conico cylindrical cobs with compact grain filling. Erect canopy suitable for Kharif & Rabi.",
    features: ["Erect Canopy", "Compact Filling", "Wide Adaptability"],
    badge: null,
  },
]

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeFilter, setActiveFilter] = useState("all")

  const filteredProducts =
    activeFilter === "all"
      ? featuredProducts
      : featuredProducts.filter((p) => p.category === activeFilter)

  const searchedProducts = searchQuery
    ? filteredProducts.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredProducts

  return (
    <>
      <Header />
      <main>
        <section className="relative pt-32 pb-20 bg-secondary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">
                Our Products
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground leading-tight text-balance">
                Premium Quality Seeds for Every Crop
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Discover our comprehensive range of 50+ certified seeds developed through
                years of research and field trials across India.
              </p>

              <div className="mt-8 max-w-md mx-auto relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search seeds by name or type..."
                  className="pl-10 h-12"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-serif text-3xl font-bold text-foreground">
                Browse by Category
              </h2>
              <p className="mt-4 text-muted-foreground">
                Select a category to explore our specialized seed collections
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {categories.map((category) => {
                const IconComponent = category.icon
                return (
                  <Link
                    key={category.id}
                    href={`/products/${category.id}`}
                    className="group"
                  >
                    <Card className="overflow-hidden h-full bg-card hover:shadow-lg transition-all">
                      <div className="relative aspect-[3/2]">
                        <Image
                          src={category.image || "/placeholder.svg"}
                          alt={category.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-foreground/40 group-hover:bg-foreground/50 transition-colors" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="h-14 w-14 rounded-full bg-card/90 flex items-center justify-center">
                            <IconComponent className="h-7 w-7 text-primary" />
                          </div>
                        </div>
                      </div>
                      <CardContent className="p-4 text-center">
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {category.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {category.productCount} Products
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28 bg-secondary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
              <div>
                <h2 className="font-serif text-3xl font-bold text-foreground">
                  Featured Products
                </h2>
                <p className="mt-2 text-muted-foreground">
                  Our most popular and highest-rated seed varieties
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setActiveFilter("all")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeFilter === "all"
                      ? "bg-primary text-primary-foreground"
                      : "bg-card text-muted-foreground hover:bg-muted"
                  }`}
                >
                  All
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveFilter(cat.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeFilter === cat.id
                        ? "bg-primary text-primary-foreground"
                        : "bg-card text-muted-foreground hover:bg-muted"
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {searchedProducts.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {searchedProducts.map((product) => (
                  <Card
                    key={product.id}
                    className="group hover:shadow-lg transition-shadow bg-card"
                  >
                    <CardContent className="p-6">
                      {product.badge && (
                        <span className="inline-block px-2 py-1 bg-accent text-accent-foreground text-xs font-medium rounded mb-3">
                          {product.badge}
                        </span>
                      )}
                      <h3 className="font-serif text-xl font-semibold text-foreground">
                        {product.name}
                      </h3>
                      <p className="text-sm text-primary capitalize mt-1">
                        {product.category.replace("-", " ")}
                      </p>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                        {product.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {product.features.map((feature) => (
                          <span
                            key={feature}
                            className="px-2 py-1 bg-secondary text-xs font-medium text-secondary-foreground rounded"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                      <Button
                        variant="link"
                        className="mt-4 p-0 h-auto text-primary gap-1 group-hover:gap-2 transition-all"
                      >
                        View Details
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  No products found matching your search.
                </p>
              </div>
            )}

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">
                Can&apos;t find what you&apos;re looking for?
              </p>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Our Experts</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">
                  Why Choose Vasudha Agri Seeds
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground leading-tight text-balance">
                  Quality You Can Trust
                </h2>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  Every seed that leaves our facility undergoes rigorous quality testing to
                  ensure maximum germination rates and healthy crop development.
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    "High germination rate guaranteed",
                    "Quality tested seeds",
                    "Climate-adapted for Indian conditions",
                    "Technical support throughout crop cycle",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button size="lg" className="mt-8 gap-2" asChild>
                  <Link href="/about">
                    Learn More About Us
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden">
                <Image
                  src="/images/quality-lab.jpg"
                  alt="Quality testing laboratory"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
