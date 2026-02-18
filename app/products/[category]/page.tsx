import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft, Wheat, Sprout, Flower2, Apple } from "lucide-react"
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
  "hybrid-maize": {
    name: "Hybrid Maize",
    icon: Wheat,
    description: "High-yielding hybrid maize varieties for Kharif & Rabi seasons with wider adaptability.",
    longDescription:
      "Our hybrid maize seeds are developed through extensive research to deliver maximum yield in Indian agro-climatic conditions. Vasudha Agri Seeds maize hybrids are known for their wider adaptability, biotic stress tolerance, and excellent grain quality suitable for both Kharif and Rabi seasons.",
    image: "/images/slide-harvest.jpg",
    products: [
      {
        id: 1,
        name: "GURU-4062",
        variety: "Hybrid Maize",
        description: "High yield potential maize hybrid with wider adaptability. Tall plants 250-260cm with orange semi flint grains. Excellent biotic stress tolerance.",
        features: ["High Yield", "Wider Adaptability", "Biotic Stress Tolerant"],
        season: "Kharif & Rabi",
        duration: "Kharif 110-115, Rabi 115-120 days",
      },
      {
        id: 2,
        name: "ASKAR-111",
        variety: "Hybrid Maize",
        description: "Tall plants 254-264cm with orange yellow semi flint grains. Suitable for high density planting with erect canopy and compact grain filling.",
        features: ["High Density Planting", "Erect Canopy", "Compact Filling"],
        season: "Kharif & Rabi",
        duration: "Kharif 110-115, Rabi 115-120 days",
      },
      {
        id: 3,
        name: "CHAMPION-555",
        variety: "Hybrid Maize",
        description: "Conico cylindrical cobs with compact grain filling. Tall plants 252-268cm with medium to dark orange semi dent grains and erect canopy.",
        features: ["Erect Canopy", "Compact Filling", "Wide Adaptability"],
        season: "Kharif & Rabi",
        duration: "Kharif 110-115, Rabi 120-125 days",
      },
      {
        id: 4,
        name: "ARJUN-111",
        variety: "Hybrid Maize",
        description: "Medium tall plants 220-230cm with medium to dark orange semi flint grains. High yield potential with excellent erect canopy structure.",
        features: ["High Yield", "Erect Canopy", "Biotic Stress Tolerant"],
        season: "Kharif & Rabi",
        duration: "Kharif 110-120, Rabi 120-125 days",
      },
      {
        id: 5,
        name: "VIRAT-777",
        variety: "Hybrid Maize",
        description: "Tall plants 250-260cm with orange semi flint grains. Excellent moisture stress tolerance with stay green character. Suitable for cattle feed.",
        features: ["Moisture Stress Tolerant", "Stay Green", "Cattle Feed Suitable"],
        season: "Kharif & Rabi",
        duration: "Kharif 110-115, Rabi 115-120 days",
      },
      {
        id: 6,
        name: "CHATRAPATHI-555",
        variety: "Hybrid Maize",
        description: "Tall plants 250-260cm with orange yellow semi flint grains. Suitable for high density planting with compact grain filling and wide adaptability.",
        features: ["High Density Planting", "Compact Filling", "Wide Adaptability"],
        season: "Kharif & Rabi",
        duration: "Kharif 110-115, Rabi 115-120 days",
      },
      {
        id: 7,
        name: "POWER-4055",
        variety: "Hybrid Maize",
        description: "Tall plants 250-260cm with medium to dark orange semi dent grains. High yield potential with erect canopy and biotic stress tolerance.",
        features: ["High Yield", "Erect Canopy", "Biotic Stress Tolerant"],
        season: "Kharif & Rabi",
        duration: "Kharif 110-115, Rabi 120-125 days",
      },
      {
        id: 8,
        name: "BIG BOSS-009",
        variety: "Hybrid Maize",
        description: "Medium tall plants 220-230cm with wide adaptability. Erect canopy structure with excellent biotic stress tolerance for diverse conditions.",
        features: ["Wide Adaptability", "Erect Canopy", "Biotic Stress Tolerant"],
        season: "Kharif & Rabi",
        duration: "Kharif 110-120, Rabi 120-125 days",
      },
      {
        id: 9,
        name: "BUNNY-999",
        variety: "Hybrid Maize",
        description: "Tall plants 250-260cm with orange semi flint grains. Moisture stress tolerant with stay green character. Suitable for cattle feed purpose.",
        features: ["Moisture Stress Tolerant", "Stay Green", "Cattle Feed"],
        season: "Kharif & Rabi",
        duration: "Kharif 110-115, Rabi 115-120 days",
      },
      {
        id: 10,
        name: "GARUDA-666",
        variety: "Hybrid Maize",
        description: "Tall plants 250-260cm with orange yellow semi flint grains. Suitable for high density planting with erect canopy and wide adaptability.",
        features: ["High Density Planting", "Erect Canopy", "Wide Adaptability"],
        season: "Kharif & Rabi",
        duration: "Kharif 110-115, Rabi 115-120 days",
      },
      {
        id: 11,
        name: "ADITYA-369",
        variety: "Hybrid Maize",
        description: "Tall plants 250-260cm with high yield potential. Erect canopy structure with excellent biotic stress tolerance for both seasons.",
        features: ["High Yield", "Erect Canopy", "Biotic Stress Tolerant"],
        season: "Kharif & Rabi",
        duration: "Kharif 110-115, Rabi 120-125 days",
      },
      {
        id: 12,
        name: "RUDHRA-888",
        variety: "Hybrid Maize",
        description: "Tall plants 250-260cm with orange semi flint grains. Moisture stress tolerant with stay green character. Excellent for cattle feed.",
        features: ["Moisture Stress Tolerant", "Stay Green", "Cattle Feed"],
        season: "Kharif & Rabi",
        duration: "Kharif 110-115, Rabi 115-120 days",
      },
    ],
  },
  "hybrid-paddy": {
    name: "Hybrid Paddy",
    icon: Sprout,
    description: "Premium hybrid paddy seeds with high yield and disease tolerance.",
    longDescription:
      "Vasudha Agri Seeds hybrid paddy varieties are developed for high yield potential, disease tolerance, and excellent grain quality. Our paddy hybrids are suitable for diverse soil and climatic conditions across India.",
    image: "/images/seeds-variety.jpg",
    products: [
      {
        id: 1,
        name: "KAVERI-111",
        variety: "Long Bold Slender Paddy",
        description: "120-125 days duration with long bold slender grains. Medium plant height 100-110cm with 380-400 grains per panicle. Tolerant to Blast & BPH. Suitable for boiled rice.",
        features: ["High Yield", "Blast Tolerant", "Long Slender"],
        season: "Kharif",
        duration: "120-125 days",
      },
      {
        id: 2,
        name: "AISHWARYA-444",
        variety: "Medium Bold Paddy",
        description: "128-130 days duration with medium bold grains. Medium plant height 110-120cm with 380-400 grains per panicle. Tolerant to BLB disease.",
        features: ["High Yield", "BLB Tolerant", "Medium Bold"],
        season: "Kharif",
        duration: "128-130 days",
      },
      {
        id: 3,
        name: "GANGOTHRI-333",
        variety: "Short Bold Paddy",
        description: "140-145 days duration with short bold grains. Medium plant height 120-125cm with 380-400 grains per panicle. Suitable for boiled rice preparation.",
        features: ["Short Bold", "Blast Tolerant", "Boiled Rice"],
        season: "Kharif",
        duration: "140-145 days",
      },
      {
        id: 4,
        name: "AARADHYA-555",
        variety: "Long Bold Paddy",
        description: "130-135 days duration with long bold grains. Medium plant height 125-130cm with 380-400 grains per panicle. High yield with blast tolerance.",
        features: ["High Yield", "Long Bold", "Blast Tolerant"],
        season: "Kharif",
        duration: "130-135 days",
      },
      {
        id: 5,
        name: "GODAVARI-666",
        variety: "Long Slender Paddy",
        description: "130-135 days duration with long slender grains. Medium plant height 120-125cm with 400-420 grains per panicle. Strong tillers suitable for all soils.",
        features: ["All Soils", "Strong Tillers", "High Yield"],
        season: "Kharif",
        duration: "130-135 days",
      },
      {
        id: 6,
        name: "ISHA-777",
        variety: "Long Bold Slender Paddy",
        description: "100-110 days duration with long bold slender grains. Medium plant height 120-125cm with 400-420 grains per panicle. Early maturity variety.",
        features: ["Early Maturity", "All Soils", "High Yield"],
        season: "Kharif",
        duration: "100-110 days",
      },
    ],
  },
  "research-paddy": {
    name: "Research Paddy",
    icon: Sprout,
    description: "Improved paddy varieties with superior grain quality and adaptability.",
    longDescription:
      "Our research paddy varieties are developed through dedicated breeding programs at Vasudha Agri Biotech. These improved varieties offer superior grain quality, disease tolerance, and adaptability to diverse growing conditions.",
    image: "/images/farmer-field.jpg",
    products: [
      {
        id: 1,
        name: "MAHA LAKSHMI-2233",
        variety: "Long Slender Paddy",
        description: "130-135 days duration with long slender grains. Medium plant height 100-110cm with 230-250 grains per panicle. Tolerant to blast and suitable for all soils.",
        features: ["Long Slender", "All Soils", "Blast Tolerant"],
        season: "Kharif",
        duration: "130-135 days",
      },
      {
        id: 2,
        name: "BHARATHI-777",
        variety: "Long Slender Paddy",
        description: "120-125 days duration with long slender grains. Medium plant height 110-120cm with 350-400 grains per panicle. High yield potential for all soils.",
        features: ["High Yield", "All Soils", "Long Slender"],
        season: "Kharif",
        duration: "120-125 days",
      },
      {
        id: 3,
        name: "VAISHNAVI-111",
        variety: "Long Slender Paddy",
        description: "120-125 days duration with long slender grains. Short plant height 85-90cm with 340-400 grains per panicle. Blast tolerant for all soils.",
        features: ["Short Plant", "All Soils", "Blast Tolerant"],
        season: "Kharif",
        duration: "120-125 days",
      },
      {
        id: 4,
        name: "LEPAKSHI-555",
        variety: "Short Bold Paddy",
        description: "145-150 days duration with short bold grains. Medium plant height 120-125cm with 275-320 grains per panicle. Long duration variety for all soils.",
        features: ["Short Bold", "Long Duration", "All Soils"],
        season: "Kharif",
        duration: "145-150 days",
      },
      {
        id: 5,
        name: "SARASWATHI-888",
        variety: "Short Bold Paddy",
        description: "130-135 days duration with short bold grains. Medium plant height 125-130cm with 275-320 grains per panicle. High yield for all soils.",
        features: ["Short Bold", "All Soils", "High Yield"],
        season: "Kharif",
        duration: "130-135 days",
      },
      {
        id: 6,
        name: "VIJAY-222",
        variety: "Long Slender Paddy",
        description: "115-120 days duration with long slender grains. Short plant height 85-90cm with 220-230 grains per panicle. Early maturity variety.",
        features: ["Early Maturity", "Long Slender", "All Soils"],
        season: "Kharif",
        duration: "115-120 days",
      },
      {
        id: 7,
        name: "SRI KRISHNA-1122",
        variety: "Medium Slender Paddy",
        description: "130-135 days duration with medium slender grains. Medium plant height 95-100cm with 350-370 grains per panicle. Blast tolerant for all soils.",
        features: ["Medium Slender", "All Soils", "Blast Tolerant"],
        season: "Kharif",
        duration: "130-135 days",
      },
      {
        id: 8,
        name: "VASUDHA-555",
        variety: "Super Fine Paddy",
        description: "130-135 days duration with super fine grains. Medium plant height 95-100cm with 400-450 grains per panicle. High yield potential for all soils.",
        features: ["Super Fine", "High Yield", "All Soils"],
        season: "Kharif",
        duration: "130-135 days",
      },
      {
        id: 9,
        name: "SWATHI-444",
        variety: "Medium Long Bold Paddy",
        description: "115-120 days duration with medium long bold grains. Medium plant height 125-130cm with 320-360 grains per panicle. Early maturity with blast tolerance.",
        features: ["Early Maturity", "All Soils", "Blast Tolerant"],
        season: "Kharif",
        duration: "115-120 days",
      },
      {
        id: 10,
        name: "DHRUVA-333",
        variety: "Medium Bold Paddy",
        description: "140-145 days duration with medium bold grains. Medium plant height 125-130cm with 275-320 grains per panicle. High yield for all soils.",
        features: ["Medium Bold", "All Soils", "High Yield"],
        season: "Kharif",
        duration: "140-145 days",
      },
    ],
  },
  vegetables: {
    name: "Vegetables",
    icon: Apple,
    description: "Hybrid chilli, tomato, bhendi and bottle gourd seeds for commercial farming.",
    longDescription:
      "Vasudha Agri Seeds offers a wide range of hybrid vegetable seeds including chilli, tomato, bhendi (okra), and bottle gourd varieties. Our vegetable seeds are developed for high yield, disease resistance, and excellent market quality.",
    image: "/images/slide-vegetables.jpg",
    products: [
      {
        id: 1,
        name: "VIJETHA-222 (Chilli)",
        variety: "Hybrid Chilli",
        description: "Semi erect plant with 9-11cm smooth dark green to dark red fruits. High pungency, dual purpose hybrid with good colour retention. Suitable for export quality.",
        features: ["High Pungency", "Dual Purpose", "Export Quality"],
        season: "Kharif/Rabi",
        duration: "65-75 days to first picking",
      },
      {
        id: 2,
        name: "KARTHIKEYA-111 (Chilli)",
        variety: "Hybrid Chilli",
        description: "12-14cm long fruits with medium pungency. Fresh green chilli variety with good keeping quality and high yield potential.",
        features: ["Fresh Green", "Good Keeping", "High Yield"],
        season: "Kharif/Rabi",
        duration: "65-75 days to first picking",
      },
      {
        id: 3,
        name: "MUKUNDA-555 (Chilli)",
        variety: "Hybrid Chilli",
        description: "8-10cm fruits with heat set capability. Fresh green chilli variety with good keeping quality for commercial cultivation.",
        features: ["Heat Set", "Fresh Green", "Good Keeping"],
        season: "Kharif/Rabi",
        duration: "60-70 days to first picking",
      },
      {
        id: 4,
        name: "MEERA-222 (Chilli)",
        variety: "Hybrid Chilli",
        description: "7-9cm fruits with high pungency. Suitable for both fresh and dry purpose with excellent colour retention and good keeping quality.",
        features: ["Fresh & Dry", "High Pungency", "Good Keeping"],
        season: "Kharif/Rabi",
        duration: "65-70 days to first picking",
      },
      {
        id: 5,
        name: "SARKAR-777 (Tomato)",
        variety: "Hybrid Tomato",
        description: "Semi determinate, flat round type fruits weighing 80-100g. Very firm with good keeping quality, suitable for long distance transport. Heat tolerant.",
        features: ["Heat Tolerant", "Very Firm", "Long Transport"],
        season: "Rabi/Summer",
        duration: "70-75 days to first harvest",
      },
      {
        id: 6,
        name: "DHONI-555 (Tomato)",
        variety: "Hybrid Tomato",
        description: "Square round type fruits weighing 90-100g. Very firm with good keeping quality and high yield potential. Heat tolerant variety.",
        features: ["Heat Tolerant", "Very Firm", "High Yield"],
        season: "Rabi/Summer",
        duration: "70-75 days to first harvest",
      },
      {
        id: 7,
        name: "PAVANI-888 (Bhendi)",
        variety: "Hybrid Bhendi",
        description: "Medium to tall plant with 12-14cm dark green pods. Resistance to YVMV and ELCV. High yielding with long shelf life for market.",
        features: ["YVMV Resistant", "High Yield", "Long Shelf Life"],
        season: "Kharif/Summer",
        duration: "45-48 days to first harvest",
      },
      {
        id: 8,
        name: "TEJA-666 (Bhendi)",
        variety: "Hybrid Bhendi",
        description: "12-14cm dark green pods with short internodal distance. Resistance to YVMV. High yielding variety with excellent market quality.",
        features: ["YVMV Resistant", "High Yield", "Short Internodal"],
        season: "Kharif/Summer",
        duration: "45-48 days to first harvest",
      },
      {
        id: 9,
        name: "BHAVANI-888 (Bottle Gourd)",
        variety: "Bottle Gourd",
        description: "Long cylindrical fruits 30-40cm weighing 800g-1kg. Early harvest variety with excellent yield potential for commercial cultivation.",
        features: ["Long Cylindrical", "High Weight", "Early Harvest"],
        season: "Kharif/Summer",
        duration: "45-50 days to first harvest",
      },
      {
        id: 10,
        name: "SHASHI-666 (Bottle Gourd)",
        variety: "Bottle Gourd",
        description: "Bulb shaped fruits weighing 900g-1kg. Powdery mildew tolerant variety with excellent weight and market quality.",
        features: ["Powdery Mildew Tolerant", "Bulb Shape", "High Weight"],
        season: "Kharif/Summer",
        duration: "45-50 days to first harvest",
      },
    ],
  },
  pulses: {
    name: "Pulses",
    icon: Flower2,
    description: "Red gram and pulse varieties for sustainable farming.",
    longDescription:
      "Vasudha Agri Seeds offers high-quality red gram (pigeon pea) varieties developed for medium maturity, cluster pod formation, and bold seed quality. Our pulse varieties are suitable for diverse growing conditions across India.",
    image: "/images/hero-seeds.jpg",
    products: [
      {
        id: 1,
        name: "GANAPATHI-111",
        variety: "Red Gram",
        description: "Medium maturity red gram variety (140-150 days). Medium tall plants 150-160cm. Pods in clusters of 4-6 per cluster with 3-5 seeds per pod. Medium bold ovoid shaped seeds.",
        features: ["Cluster Pods", "Medium Maturity", "Bold Seeds"],
        season: "Kharif",
        duration: "140-150 days",
      },
      {
        id: 2,
        name: "SHIVAJI-444",
        variety: "Red Gram",
        description: "Medium maturity red gram variety (140-150 days). Medium tall plants 150-160cm. Pods in clusters of 4-6 per cluster with 3-5 seeds per pod. Medium bold ovoid shaped seeds.",
        features: ["Cluster Pods", "Medium Maturity", "Bold Seeds"],
        season: "Kharif",
        duration: "140-150 days",
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
    title: `${data.name} Seeds - Vasudha Agri Seeds | Premium Quality Agricultural Seeds`,
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
                      <Link href={`/products/${category}/${product.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`}>
                        More Info
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

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
