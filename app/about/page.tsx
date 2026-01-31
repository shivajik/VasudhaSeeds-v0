import Image from "next/image"
import { CheckCircle, Users, Award, Globe, Target } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "About Us - Vasudha Agri Biotech Pvt. Ltd. | Leading Seed Manufacturer in India",
  description:
    "Learn about Vasudha Agri Biotech - India's trusted seed manufacturing company since 2015. Our mission, vision, and commitment to Indian agriculture.",
}

const features = [
  "Research-backed seed development",
  "Strict quality control protocols",
  "Climate-resilient varieties",
  "Farmer training programs",
  "Pan-India distribution network",
  "Affordable pricing for all farmers",
]

const stats = [
  { value: "10+", label: "Years of Excellence", icon: Award },
  { value: "500+", label: "Seed Varieties", icon: Target },
  { value: "1M+", label: "Farmers Served", icon: Users },
  { value: "28", label: "States Covered", icon: Globe },
]

const milestones = [
  {
    year: "2015",
    title: "Foundation",
    description: "Vasudha Agri Biotech was established with a vision to transform agriculture through high-quality seeds.",
  },
  {
    year: "2017",
    title: "R&D Excellence",
    description: "Established state-of-the-art research facilities led by qualified breeders and technocrats.",
  },
  {
    year: "2019",
    title: "Product Expansion",
    description: "Expanded product portfolio to include Field crops, Vegetable Seeds, Pulses, and more.",
  },
  {
    year: "2021",
    title: "Advanced Infrastructure",
    description: "Upgraded to cutting-edge seed processing units ensuring superior physical and genetic purity.",
  },
  {
    year: "2023",
    title: "Pan-India Reach",
    description: "Expanded distribution network across major agricultural states of India.",
  },
  {
    year: "2025",
    title: "Sustainable Future",
    description: "Committed to sustainable farming practices and climate-resilient seed development.",
  },
]

const team = [
  {
    name: "Dr. Rajesh Sharma",
    role: "Founder & Chairman",
    image: "/images/farmer-field.jpg",
  },
  {
    name: "Priya Patel",
    role: "Managing Director",
    image: "/images/quality-lab.jpg",
  },
  {
    name: "Dr. Anil Kumar",
    role: "Head of R&D",
    image: "/images/seeds-variety.jpg",
  },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-secondary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">
                About Vasudha Agri Biotech
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground leading-tight text-balance">
                Transforming Agriculture Since 2015
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Since our establishment in 2015, we have been dedicated to transforming 
                agriculture through the production of high-quality seeds, consistently 
                focused on empowering farmers and supporting the agricultural sector.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-primary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat) => {
                const IconComponent = stat.icon
                return (
                  <div key={stat.label} className="text-center">
                    <IconComponent className="h-8 w-8 text-primary-foreground/80 mx-auto mb-2" />
                    <p className="font-serif text-3xl sm:text-4xl font-bold text-primary-foreground">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm text-primary-foreground/80">{stat.label}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Our Story */}
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
                  Our Story
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground leading-tight text-balance">
                  Director&apos;s Message
                </h2>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  Since our establishment in 2015, Vasudha Agri Biotech has been dedicated 
                  to transforming agriculture through the production of high-quality Seeds. 
                  With a diverse product portfolio that includes Field crops, Vegetable Seeds, 
                  Pulse, and more, we have consistently focused on empowering farmers and 
                  supporting the agricultural sector.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Our state-of-the-art infrastructure, equipped with advanced seed processing 
                  units and cutting-edge technologies, ensures the delivery of superior quality 
                  seeds with excellent physical and genetic purity. Our strong R&D foundation, 
                  led by qualified breeders and technocrats, enables us to develop high-yielding, 
                  pest-resistant varieties that promote sustainable farming practices.
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
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 lg:py-28 bg-secondary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-card">
                <CardContent className="p-8">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-foreground">Our Mission</h3>
                  <div className="mt-4 text-muted-foreground leading-relaxed space-y-3">
                    <p>To create an environment that focuses on &apos;Need based Research&apos; for the 
                    development of friendly bio seeds of various crops and eco organic inputs 
                    required by the farming community across India.</p>
                    <p>Build &apos;state of the art&apos; high tech infrastructural facilities of 
                    international standards to support the Research Mandate.</p>
                    <p>Continual Human Resource Development to meet the challenges in the 
                    agriculture sector with the concept of &quot;Parallel Wheel, Common Goal&quot;.</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-card">
                <CardContent className="p-8">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-foreground">Our Vision</h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    To become the market leader in the seed industry by catering to the 
                    needs of Indian farmers. We remain committed to delivering mutual value 
                    to our farmers, customers, and stakeholders while contributing to the 
                    nation&apos;s agricultural growth.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">
                Our Journey
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground leading-tight text-balance">
                Milestones of Excellence
              </h2>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

              <div className="space-y-6 md:space-y-12">
                {milestones.map((milestone, index) => (
                  <div
                    key={milestone.year}
                    className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Mobile: Timeline dot on left */}
                    <div className="md:hidden absolute left-0 top-0 h-full w-0.5 bg-border">
                      <div className="absolute top-2 -left-1.5 h-4 w-4 rounded-full bg-primary border-4 border-background" />
                    </div>
                    <div
                      className={`pl-8 md:pl-0 md:w-1/2 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}
                    >
                      <Card className="bg-card md:inline-block w-full md:w-auto">
                        <CardContent className="p-4 sm:p-6">
                          <span className="text-sm font-bold text-primary">{milestone.year}</span>
                          <h3 className="font-serif text-lg sm:text-xl font-semibold text-foreground mt-2">
                            {milestone.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">
                            {milestone.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                    {/* Desktop: Dot in center */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-primary border-4 border-background" />
                    <div className="md:w-1/2" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20 lg:py-28 bg-secondary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">
                Leadership
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground leading-tight text-balance">
                Meet Our Team
              </h2>
              <p className="mt-4 text-muted-foreground">
                Driven by passion and expertise, our leadership team guides Vasudha Agri Biotech
                towards a sustainable agricultural future.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member) => (
                <Card key={member.name} className="bg-card overflow-hidden">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6 text-center">
                    <h3 className="font-serif text-xl font-semibold text-foreground">
                      {member.name}
                    </h3>
                    <p className="text-sm text-primary mt-1">{member.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
