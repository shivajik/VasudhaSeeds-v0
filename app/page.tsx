import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  CheckCircle,
  ArrowRight,
  Wheat,
  Sprout,
  Flower2,
  TreeDeciduous,
  Apple,
  FlaskConical,
  Shield,
  Truck,
  GraduationCap,
} from "lucide-react"

const features = [
  "Research-backed seed development",
  "Strict quality control protocols",
  "Climate-resilient varieties",
  "Farmer training programs",
  "Pan-India distribution network",
  "Affordable pricing for all farmers",
]

const categories = [
  { name: "Cereals", icon: Wheat, href: "/products/cereals", count: "45+" },
  { name: "Pulses", icon: Sprout, href: "/products/pulses", count: "32+" },
  { name: "Vegetables", icon: Apple, href: "/products/vegetables", count: "120+" },
  { name: "Oilseeds", icon: Flower2, href: "/products/oilseeds", count: "28+" },
  { name: "Cotton", icon: TreeDeciduous, href: "/products/cotton", count: "18+" },
]

const services = [
  {
    icon: FlaskConical,
    title: "Research & Development",
    description: "Continuous innovation in seed technology with state-of-the-art laboratories.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Every seed batch undergoes rigorous testing for germination and purity.",
  },
  {
    icon: Truck,
    title: "Pan-India Distribution",
    description: "Extensive dealer network ensuring timely delivery across all states.",
  },
  {
    icon: GraduationCap,
    title: "Farmer Training",
    description: "Regular workshops and field demonstrations for modern cultivation.",
  },
]

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />

      {/* About Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
                  <Image
                    src="/images/seeds-variety.jpg"
                    alt="Various agricultural seeds"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-primary text-primary-foreground p-6 rounded-lg">
                  <p className="font-serif text-3xl font-bold">10+</p>
                  <p className="text-sm mt-1 opacity-90">
                    Years of Excellence in Seed Manufacturing
                  </p>
                </div>
              </div>
              <div className="pt-8">
                <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
                  <Image
                    src="/images/farmer-field.jpg"
                    alt="Indian farmer in field"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">
                About Vasudha Agri Biotech
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground leading-tight text-balance">
                Transforming Agriculture Since 2015
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                With state-of-the-art infrastructure equipped with advanced seed processing 
                units and cutting-edge technologies, we ensure the delivery of superior 
                quality seeds with excellent physical and genetic purity.
              </p>

              {/* Features Grid */}
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Button size="lg" className="mt-8 gap-2" asChild>
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Categories */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">
              Our Products
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground leading-tight text-balance">
              Premium Quality Seeds for Every Crop
            </h2>
            <p className="mt-4 text-muted-foreground">
              Discover our wide range of 500+ certified seeds developed through years of
              research and field trials across India.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {categories.map((category) => {
              const IconComponent = category.icon
              return (
                <Link key={category.name} href={category.href} className="group">
                  <Card className="h-full bg-card hover:shadow-lg hover:border-primary/50 transition-all">
                    <CardContent className="p-6 text-center">
                      <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="h-7 w-7 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {category.count} Varieties
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" className="gap-2" asChild>
              <Link href="/products">
                View All Products
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Content */}
            <div className="lg:sticky lg:top-24">
              <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">
                Our Services
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground leading-tight text-balance">
                Comprehensive Support for Indian Farmers
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Beyond providing premium seeds, we offer end-to-end support to ensure every
                farmer succeeds.
              </p>
              <div className="mt-8 relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="/images/quality-lab.jpg"
                  alt="Seed quality testing laboratory"
                  fill
                  className="object-cover"
                />
              </div>
              <Button size="lg" variant="outline" className="mt-6 gap-2 bg-transparent" asChild>
                <Link href="/services">
                  Explore All Services
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Services Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {services.map((service) => {
                const IconComponent = service.icon
                return (
                  <Card
                    key={service.title}
                    className="group hover:border-primary/50 transition-colors bg-card"
                  >
                    <CardContent className="p-5">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground">{service.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary-foreground leading-tight text-balance">
            Ready to Transform Your Farm?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Join thousands of farmers who have achieved better yields with Vasudha Agri Biotech.
            Contact us today for personalized guidance.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="gap-2" asChild>
              <Link href="/contact">
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10 hover:text-primary-foreground"
              asChild
            >
              <Link href="/products">Explore Products</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
