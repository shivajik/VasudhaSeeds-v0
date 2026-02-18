"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Wheat, Sprout, Flower2, Apple, Sun } from "lucide-react"

const categories = [
  { id: "all", label: "All Products" },
  { id: "hybrid-maize", label: "Hybrid Maize" },
  { id: "hybrid-paddy", label: "Hybrid Paddy" },
  { id: "research-paddy", label: "Research Paddy" },
  { id: "vegetables", label: "Vegetables" },
  { id: "pulses", label: "Pulses" },
  { id: "sunflower", label: "Sunflower" },
  { id: "bajra", label: "Bajra" },
  { id: "wheat", label: "Wheat" },
  { id: "mustard", label: "Mustard" },
]

const products = [
  {
    id: 1,
    name: "GURU-4062",
    category: "hybrid-maize",
    description: "High yield potential maize hybrid with wider adaptability. Tall plants 250-260cm, orange semi flint grains. Suitable for both Kharif & Rabi seasons.",
    icon: Wheat,
    features: ["High Yield", "Wider Adaptability", "Biotic Stress Tolerant"],
  },
  {
    id: 2,
    name: "CHAMPION-555",
    category: "hybrid-maize",
    description: "Conico cylindrical cobs with compact grain filling. Medium to dark orange semi dent grains. Erect canopy suitable for Kharif & Rabi.",
    icon: Wheat,
    features: ["Erect Canopy", "Compact Filling", "Kharif & Rabi"],
  },
  {
    id: 3,
    name: "KAVERI-111",
    category: "hybrid-paddy",
    description: "120-125 days duration with long bold slender grains. 380-400 grains per panicle. Tolerant to Blast & BPH. Suitable for boiled rice.",
    icon: Sprout,
    features: ["High Yield", "Blast Tolerant", "Long Slender"],
  },
  {
    id: 4,
    name: "GODAVARI-666",
    category: "hybrid-paddy",
    description: "130-135 days duration, long slender grains. 400-420 grains per panicle with strong tillers. Suitable for all soils.",
    icon: Sprout,
    features: ["All Soils", "Strong Tillers", "High Yield"],
  },
  {
    id: 5,
    name: "VIJETHA-222 Chilli",
    category: "vegetables",
    description: "Semi erect plant with 9-11cm smooth dark green to dark red fruits. High pungency, dual purpose hybrid with good colour retention.",
    icon: Apple,
    features: ["High Pungency", "Dual Purpose", "Export Quality"],
  },
  {
    id: 6,
    name: "SARKAR-777 Tomato",
    category: "vegetables",
    description: "Semi determinate, flat round type fruits weighing 80-100g. Very firm with good keeping quality, suitable for long distance transport.",
    icon: Apple,
    features: ["Heat Tolerant", "Very Firm", "Long Transport"],
  },
  {
    id: 7,
    name: "VASUDHA-555",
    category: "research-paddy",
    description: "130-135 days duration with super fine grains. 400-450 grains per panicle. Suitable for both Kharif & Rabi and all soil types.",
    icon: Sprout,
    features: ["Super Fine Grains", "High Yield", "All Soils"],
  },
  {
    id: 9,
    name: "GANAPATHI-111",
    category: "pulses",
    description: "Medium maturity red gram (140-150 days). Pods in clusters of 4-6 per cluster, 3-5 seeds per pod. Medium bold ovoid shaped seeds.",
    icon: Flower2,
    features: ["Medium Maturity", "Cluster Pods", "Bold Seeds"],
  },
  {
    id: 10,
    name: "PAVANI-888 Bhendi",
    category: "vegetables",
    description: "Medium to tall plant with 12-14cm dark green pods. Resistance to YVMV and ELCV. High yielding with long shelf life.",
    icon: Apple,
    features: ["YVMV Resistant", "High Yield", "Long Shelf Life"],
  },
  {
    id: 11,
    name: "BINDAAS-444",
    category: "sunflower",
    description: "High oil content hybrid sunflower with excellent yield potential. Strong plant structure with wide adaptability and good disease tolerance.",
    icon: Sun,
    features: ["High Oil Content", "High Yield", "Wide Adaptability"],
  },
  {
    id: 12,
    name: "MAHI-999",
    category: "bajra",
    description: "High yielding hybrid bajra with excellent drought tolerance. Strong plant structure with good grain filling and wide adaptability.",
    icon: Wheat,
    features: ["High Yield", "Drought Tolerant", "Wide Adaptability"],
  },
]

export function Products() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProducts = activeCategory === "all"
    ? products
    : products.filter((product) => product.category === activeCategory)

  return (
    <section id="products" className="py-20 lg:py-28 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">
            Our Products
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground leading-tight text-balance">
            Premium Quality Seeds for Every Crop
          </h2>
          <p className="mt-4 text-muted-foreground">
            Discover our wide range of certified seeds developed through years of research 
            and field trials across India.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground hover:bg-muted"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => {
            const IconComponent = product.icon
            return (
              <Card key={product.id} className="group hover:shadow-lg transition-shadow bg-card">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
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
                  <Button variant="link" className="mt-4 p-0 h-auto text-primary gap-1 group-hover:gap-2 transition-all">
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" className="gap-2">
            View All Products
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
