import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { FlaskConical, Truck, GraduationCap, Headphones, Shield, Leaf } from "lucide-react"

const services = [
  {
    icon: FlaskConical,
    title: "Research & Development",
    description: "Continuous innovation in seed technology with our state-of-the-art laboratories and field research stations across India.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Every seed batch undergoes rigorous testing for germination rate, purity, and disease resistance before reaching farmers.",
  },
  {
    icon: Truck,
    title: "Pan-India Distribution",
    description: "Extensive dealer network and logistics infrastructure ensuring timely delivery to farmers in every corner of India.",
  },
  {
    icon: GraduationCap,
    title: "Farmer Training",
    description: "Regular workshops and field demonstrations to educate farmers on best practices and modern cultivation techniques.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Dedicated helpline and field support team to assist farmers throughout the crop cycle with expert guidance.",
  },
  {
    icon: Leaf,
    title: "Sustainable Farming",
    description: "Promoting eco-friendly practices and developing seeds that require fewer inputs while delivering higher yields.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-background">
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
              farmer succeeds. Our services are designed to address every aspect of modern 
              agriculture in India.
            </p>
            <div className="mt-8 relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/quality-lab.jpg"
                alt="Seed quality testing laboratory"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {services.map((service) => {
              const IconComponent = service.icon
              return (
                <Card key={service.title} className="group hover:border-primary/50 transition-colors bg-card">
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
  )
}
