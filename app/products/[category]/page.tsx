import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft, Wheat, Sprout, Flower2, TreeDeciduous, Apple } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const categoryData: Record<
  string,
  {
    name: string
    icon: typeof Wheat
    description: string
    longDescription: string
    image: string
    products: Array<{
      id: number
      name: string
      variety: string
      description: string
      features: string[]
      season: string
      duration: string
    }>
  }
> = {
  cereals: {
    name: "Cereals",
    icon: Wheat,
    description: "High-yielding wheat, rice, maize and sorghum seeds for maximum productivity.",
    longDescription:
      "Our cereal seeds are developed through extensive research to deliver maximum yield in Indian agro-climatic conditions. From the wheat fields of Punjab to the rice paddies of West Bengal, BharatSeeds cereals are trusted by millions of farmers.",
    image: "/images/slide-harvest.jpg",
    products: [
      {
        id: 1,
        name: "BharatGold Wheat",
        variety: "HD-3086",
        description: "Premium wheat variety with excellent bread-making quality and high yield potential.",
        features: ["Rust Resistant", "High Protein", "Early Maturity"],
        season: "Rabi",
        duration: "120-125 days",
      },
      {
        id: 2,
        name: "SuperRice-7",
        variety: "Pusa Basmati 1121",
        description: "Long-grain aromatic rice with exceptional cooking quality.",
        features: ["Extra Long Grain", "Aromatic", "Export Quality"],
        season: "Kharif",
        duration: "140-145 days",
      },
      {
        id: 3,
        name: "HybridMaize Pro",
        variety: "BM-9045",
        description: "High-yielding yellow maize hybrid for commercial cultivation.",
        features: ["High Yield", "Drought Tolerant", "Stay Green"],
        season: "Kharif/Rabi",
        duration: "95-100 days",
      },
      {
        id: 4,
        name: "Jowar King",
        variety: "CSH-16",
        description: "Dual-purpose sorghum for grain and fodder production.",
        features: ["Dual Purpose", "Pest Resistant", "Drought Hardy"],
        season: "Kharif",
        duration: "110-115 days",
      },
      {
        id: 5,
        name: "Pearl Bajra",
        variety: "HHB-67",
        description: "Short-duration bajra hybrid ideal for dryland farming.",
        features: ["Water Efficient", "High Iron", "Short Duration"],
        season: "Kharif",
        duration: "75-80 days",
      },
      {
        id: 6,
        name: "Barley Plus",
        variety: "RD-2035",
        description: "Malting quality barley suitable for brewing industry.",
        features: ["Malting Quality", "High Yield", "Cold Tolerant"],
        season: "Rabi",
        duration: "125-130 days",
      },
    ],
  },
  pulses: {
    name: "Pulses",
    icon: Sprout,
    description: "Protein-rich moong, chana, urad, and arhar dal seeds for sustainable farming.",
    longDescription:
      "Pulses are the backbone of Indian nutrition. Our pulse seeds are bred for high protein content, disease resistance, and adaptability to diverse growing conditions across India.",
    image: "/images/seeds-variety.jpg",
    products: [
      {
        id: 1,
        name: "GreenMoong-101",
        variety: "SML-668",
        description: "Short-duration moong bean with high yield and uniform maturity.",
        features: ["Short Duration", "High Protein", "Uniform Maturity"],
        season: "Kharif/Summer",
        duration: "60-65 days",
      },
      {
        id: 2,
        name: "Desi Chana Gold",
        variety: "GNG-2171",
        description: "Bold seeded desi chickpea with excellent cooking quality.",
        features: ["Bold Seed", "Wilt Resistant", "High Yield"],
        season: "Rabi",
        duration: "135-140 days",
      },
      {
        id: 3,
        name: "Black Urad Supreme",
        variety: "PU-31",
        description: "High-yielding black gram variety with good dal recovery.",
        features: ["High Dal Recovery", "YMV Tolerant", "Determinate"],
        season: "Kharif",
        duration: "70-75 days",
      },
      {
        id: 4,
        name: "Arhar Premium",
        variety: "ICPL-87",
        description: "Medium-duration pigeon pea with excellent grain quality.",
        features: ["Medium Duration", "Fusarium Resistant", "High Yield"],
        season: "Kharif",
        duration: "160-170 days",
      },
    ],
  },
  vegetables: {
    name: "Vegetables",
    icon: Apple,
    description: "Premium hybrid vegetable seeds for year-round harvests.",
    longDescription:
      "Our vegetable seeds are developed for Indian kitchen gardens and commercial farms alike. Each variety is selected for taste, yield, and market preference.",
    image: "/images/slide-vegetables.jpg",
    products: [
      {
        id: 1,
        name: "TomatoMax Hybrid",
        variety: "BTS-102",
        description: "Determinate tomato hybrid with firm, red fruits ideal for transport.",
        features: ["High Yield", "Long Shelf Life", "Virus Resistant"],
        season: "Rabi/Summer",
        duration: "65-70 days",
      },
      {
        id: 2,
        name: "ChilliKing Hybrid",
        variety: "BCH-45",
        description: "Pungent chilli variety with excellent color and yield.",
        features: ["High Pungency", "Deep Red Color", "Multiple Harvest"],
        season: "Kharif/Rabi",
        duration: "75-80 days",
      },
      {
        id: 3,
        name: "Brinjal Premium",
        variety: "BBH-78",
        description: "Long purple brinjal hybrid with glossy fruits.",
        features: ["Glossy Fruits", "Less Seeds", "High Yield"],
        season: "All Season",
        duration: "55-60 days",
      },
      {
        id: 4,
        name: "Bhindi Supreme",
        variety: "BOK-09",
        description: "Dark green okra with tender, non-fibrous pods.",
        features: ["Tender Pods", "YVMV Tolerant", "High Yield"],
        season: "Kharif/Summer",
        duration: "45-50 days",
      },
      {
        id: 5,
        name: "Onion Red Globe",
        variety: "BOR-22",
        description: "Dark red onion with excellent storage quality.",
        features: ["Long Storage", "Pungent", "Uniform Size"],
        season: "Rabi",
        duration: "120-130 days",
      },
    ],
  },
  oilseeds: {
    name: "Oilseeds",
    icon: Flower2,
    description: "High oil-content mustard, groundnut, soybean, and sunflower seeds.",
    longDescription:
      "Our oilseed varieties are bred for maximum oil content and yield. From the mustard fields of Rajasthan to the groundnut farms of Gujarat, BharatSeeds oilseeds deliver consistent performance.",
    image: "/images/farmer-field.jpg",
    products: [
      {
        id: 1,
        name: "SarsonGold Mustard",
        variety: "RH-749",
        description: "High oil content mustard with 42% oil yield.",
        features: ["42% Oil Content", "Bold Seed", "Aphid Tolerant"],
        season: "Rabi",
        duration: "125-130 days",
      },
      {
        id: 2,
        name: "Groundnut Premium",
        variety: "GG-20",
        description: "Bold seeded groundnut with excellent shelling percentage.",
        features: ["Bold Kernel", "High Oil", "Drought Tolerant"],
        season: "Kharif",
        duration: "115-120 days",
      },
      {
        id: 3,
        name: "Soybean Star",
        variety: "JS-9560",
        description: "High-yielding soybean variety with good oil and protein content.",
        features: ["High Yield", "Rust Resistant", "Early Maturity"],
        season: "Kharif",
        duration: "95-100 days",
      },
      {
        id: 4,
        name: "Sunflower Hybrid",
        variety: "KBSH-44",
        description: "Sunflower hybrid with large head and high oil content.",
        features: ["Large Head", "High Oil", "Self Fertile"],
        season: "Rabi/Summer",
        duration: "90-95 days",
      },
    ],
  },
  cotton: {
    name: "Cotton",
    icon: TreeDeciduous,
    description: "BT Cotton and premium desi cotton varieties for textile industry.",
    longDescription:
      "Our cotton seeds are developed for the demanding needs of Indian cotton farmers. With built-in pest resistance and high fiber quality, BharatSeeds cotton delivers excellent returns.",
    image: "/images/hero-seeds.jpg",
    products: [
      {
        id: 1,
        name: "BT Cotton Supreme",
        variety: "BCH-316",
        description: "Bollworm resistant BT cotton hybrid with excellent fiber quality.",
        features: ["Bollworm Resistant", "High Ginning", "Long Staple"],
        season: "Kharif",
        duration: "160-170 days",
      },
      {
        id: 2,
        name: "Desi Cotton Gold",
        variety: "G.Cot-21",
        description: "Traditional desi cotton with superior fiber strength.",
        features: ["Strong Fiber", "Organic Suitable", "Drought Hardy"],
        season: "Kharif",
        duration: "150-160 days",
      },
      {
        id: 3,
        name: "Hybrid Cotton Pro",
        variety: "NHH-44",
        description: "High-yielding cotton hybrid with good boll retention.",
        features: ["High Yield", "Good Boll Retention", "Medium Staple"],
        season: "Kharif",
        duration: "165-175 days",
      },
    ],
  },
}

export function generateStaticParams() {
  return Object.keys(categoryData).map((category) => ({
    category,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const { category } = await params
  const data = categoryData[category]
  if (!data) return { title: "Category Not Found" }

  return {
    title: `${data.name} Seeds - BharatSeeds | Premium Quality Agricultural Seeds`,
    description: data.description,
  }
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const { category } = await params
  const data = categoryData[category]

  if (!data) {
    notFound()
  }

  const IconComponent = data.icon

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20">
          <div className="absolute inset-0 z-0">
            <Image src={data.image || "/placeholder.svg"} alt={data.name} fill className="object-cover" />
            <div className="absolute inset-0 bg-foreground/70" />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Button
              variant="ghost"
              size="sm"
              className="mb-6 text-card/80 hover:text-card hover:bg-card/10"
              asChild
            >
              <Link href="/products">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to All Products
              </Link>
            </Button>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-14 w-14 rounded-xl bg-card/20 backdrop-blur-sm flex items-center justify-center">
                <IconComponent className="h-7 w-7 text-card" />
              </div>
              <div>
                <p className="text-sm font-medium uppercase tracking-widest text-accent">
                  Product Category
                </p>
                <h1 className="font-serif text-4xl sm:text-5xl font-bold text-card">
                  {data.name} Seeds
                </h1>
              </div>
            </div>
            <p className="text-lg text-card/90 max-w-2xl leading-relaxed mt-6">
              {data.longDescription}
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="font-serif text-3xl font-bold text-foreground">
                  Available Varieties
                </h2>
                <p className="mt-2 text-muted-foreground">
                  {data.products.length} products in this category
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.products.map((product) => (
                <Card
                  key={product.id}
                  className="group hover:shadow-lg transition-shadow bg-card"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-serif text-xl font-semibold text-foreground">
                          {product.name}
                        </h3>
                        <p className="text-sm text-primary">{product.variety}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
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

                    <div className="mt-4 pt-4 border-t border-border flex justify-between text-sm">
                      <div>
                        <span className="text-muted-foreground">Season: </span>
                        <span className="text-foreground font-medium">{product.season}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Duration: </span>
                        <span className="text-foreground font-medium">{product.duration}</span>
                      </div>
                    </div>

                    <Button
                      variant="link"
                      className="mt-4 p-0 h-auto text-primary gap-1 group-hover:gap-2 transition-all"
                      asChild
                    >
                      <Link href="/contact">
                        Request Quote
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-secondary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
              Need Help Choosing the Right Seeds?
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Our agricultural experts are ready to help you select the best varieties for
              your farm&apos;s specific conditions and requirements.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2" asChild>
                <Link href="/contact">
                  Contact Experts
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/products">Browse All Categories</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
