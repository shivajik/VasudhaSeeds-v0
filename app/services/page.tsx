import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  FlaskConical,
  Truck,
  GraduationCap,
  Headphones,
  Shield,
  Leaf,
  ArrowRight,
  CheckCircle,
} from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Our Services - Vasudha Agri Seeds | Comprehensive Farmer Support",
  description:
    "Discover Vasudha Agri Seeds services - R&D, quality assurance, distribution, farmer training, support, and sustainable farming solutions.",
}

const services = [
  {
    icon: FlaskConical,
    title: "Research & Development",
    description:
      "Continuous innovation in seed technology with our state-of-the-art laboratories and field research stations across India.",
    features: [
      "Advanced seed breeding programs",
      "Climate-resilient variety development",
      "Disease resistance research",
      "Yield optimization studies",
    ],
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description:
      "Every seed batch undergoes rigorous testing for germination rate, purity, and disease resistance before reaching farmers.",
    features: [
      "Advanced quality testing labs",
      "Multi-stage quality testing",
      "Germination rate guarantee",
      "Certified seed processing",
    ],
  },
  {
    icon: Truck,
    title: "Distribution Network",
    description:
      "Growing dealer network and logistics infrastructure ensuring timely delivery to farmers across multiple states in India.",
    features: [
      "Authorized dealer network",
      "Multi-state coverage",
      "Efficient logistics",
      "Timely delivery",
    ],
  },
  {
    icon: GraduationCap,
    title: "Farmer Training",
    description:
      "Regular workshops and field demonstrations to educate farmers on best practices and modern cultivation techniques.",
    features: [
      "Field demonstration plots",
      "Seasonal crop guidance",
      "Modern farming techniques",
      "Expert agronomist support",
    ],
  },
  {
    icon: Headphones,
    title: "Farmer Support",
    description:
      "Dedicated helpline and field support team to assist farmers throughout the crop cycle with expert guidance.",
    features: [
      "Helpline support",
      "WhatsApp support",
      "Field visit on request",
      "Multi-language support",
    ],
  },
  {
    icon: Leaf,
    title: "Sustainable Farming",
    description:
      "Promoting eco-friendly practices and developing seeds that require fewer inputs while delivering higher yields.",
    features: [
      "Eco-friendly bio-organic inputs",
      "Water-efficient seeds",
      "Low-input agriculture",
      "Soil health programs",
    ],
  },
]

const processSteps = [
  {
    step: "01",
    title: "Connect with Us",
    description: "Reach out via our helpline, website, or visit your nearest Vasudha Agri Seeds dealer.",
  },
  {
    step: "02",
    title: "Expert Consultation",
    description: "Our agronomists analyze your soil, climate, and requirements to recommend the best seeds.",
  },
  {
    step: "03",
    title: "Seed Selection",
    description: "Choose from our wide range of certified, high-quality seeds suited to your needs.",
  },
  {
    step: "04",
    title: "Ongoing Support",
    description: "Receive continuous guidance throughout the crop cycle for optimal results.",
  },
]

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative pt-32 pb-20 bg-secondary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">
                  Our Services
                </p>
                <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground leading-tight text-balance">
                  Comprehensive Support for Indian Farmers
                </h1>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                  Beyond providing premium seeds, we offer end-to-end support to ensure
                  every farmer succeeds. Our services are designed to address every aspect
                  of modern agriculture in India.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="gap-2" asChild>
                    <Link href="/contact">
                      Get Started
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="tel:+918466996092">Call Helpline</Link>
                  </Button>
                </div>
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src="/images/quality-lab.jpg"
                  alt="Seed quality testing laboratory"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">
                What We Offer
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground leading-tight text-balance">
                End-to-End Agricultural Solutions
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => {
                const IconComponent = service.icon
                return (
                  <Card
                    key={service.title}
                    className="group hover:shadow-lg transition-shadow bg-card"
                  >
                    <CardContent className="p-6">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-serif text-xl font-semibold text-foreground">
                        {service.title}
                      </h3>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="mt-4 space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="text-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28 bg-secondary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">
                How It Works
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground leading-tight text-balance">
                Your Journey with Vasudha Agri Seeds
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((item, index) => (
                <div key={item.step} className="relative">
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border -translate-y-1/2 z-0" />
                  )}
                  <div className="relative z-10">
                    <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center mb-6">
                      <span className="font-serif text-2xl font-bold text-primary-foreground">
                        {item.step}
                      </span>
                    </div>
                    <h3 className="font-semibold text-foreground text-lg">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28 bg-primary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary-foreground leading-tight text-balance">
              Ready to Transform Your Farm?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              Join thousands of farmers who have achieved better yields with Vasudha Agri Seeds.
              Contact us today for personalized guidance.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="gap-2"
                asChild
              >
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
      </main>
      <Footer />
    </>
  )
}
