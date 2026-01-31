"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Wheat, Sprout, Flower2, TreeDeciduous } from "lucide-react"

const categories = [
  { id: "all", label: "All Products" },
  { id: "cereals", label: "Cereals" },
  { id: "pulses", label: "Pulses" },
  { id: "vegetables", label: "Vegetables" },
  { id: "oilseeds", label: "Oilseeds" },
]

const products = [
  {
    id: 1,
    name: "Premium Wheat Seeds",
    category: "cereals",
    description: "High-yielding wheat variety suitable for Rabi season across Northern India.",
    icon: Wheat,
    features: ["Disease Resistant", "High Yield", "Premium Quality"],
  },
  {
    id: 2,
    name: "Hybrid Rice Seeds",
    category: "cereals",
    description: "Aromatic rice variety with excellent grain quality and water efficiency.",
    icon: Sprout,
    features: ["Water Efficient", "Aromatic", "Early Maturity"],
  },
  {
    id: 3,
    name: "Moong Dal Seeds",
    category: "pulses",
    description: "Short-duration variety perfect for summer cultivation with high protein content.",
    icon: Flower2,
    features: ["High Protein", "Short Duration", "Heat Tolerant"],
  },
  {
    id: 4,
    name: "Tomato Hybrid Seeds",
    category: "vegetables",
    description: "Determinate variety producing firm, red tomatoes ideal for transport.",
    icon: TreeDeciduous,
    features: ["High Yield", "Long Shelf Life", "Virus Resistant"],
  },
  {
    id: 5,
    name: "Mustard Seeds",
    category: "oilseeds",
    description: "High oil content variety suitable for diverse soil conditions.",
    icon: Flower2,
    features: ["High Oil Content", "Drought Tolerant", "Early Maturity"],
  },
  {
    id: 6,
    name: "Chilli Hybrid Seeds",
    category: "vegetables",
    description: "Pungent variety with excellent color and uniform fruit size.",
    icon: Sprout,
    features: ["High Pungency", "Uniform Size", "Disease Resistant"],
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
        {/* Header */}
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

        {/* Category Filter */}
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

        {/* Products Grid */}
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

        {/* CTA */}
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
