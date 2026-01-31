import Image from "next/image"
import { CheckCircle, Users, Award, Globe, Target } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "About Us - BharatSeeds | Leading Seed Manufacturer in India",
  description:
    "Learn about BharatSeeds - India's trusted seed manufacturing company since 1998. Our mission, vision, and commitment to Indian agriculture.",
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
  { value: "25+", label: "Years of Excellence", icon: Award },
  { value: "500+", label: "Seed Varieties", icon: Target },
  { value: "10M+", label: "Farmers Served", icon: Users },
  { value: "28", label: "States Covered", icon: Globe },
]

const milestones = [
  {
    year: "1998",
    title: "Foundation",
    description: "BharatSeeds was founded in Nashik, Maharashtra with a vision to revolutionize Indian agriculture.",
  },
  {
    year: "2005",
    title: "R&D Center",
    description: "Established our first state-of-the-art research and development facility for seed technology.",
  },
  {
    year: "2010",
    title: "Pan-India Expansion",
    description: "Expanded operations to all major agricultural states with a network of 5000+ dealers.",
  },
  {
    year: "2015",
    title: "International Recognition",
    description: "Received ISO 9001:2015 certification and multiple national awards for seed quality.",
  },
  {
    year: "2020",
    title: "Digital Transformation",
    description: "Launched digital platforms for farmer support and online seed ordering across India.",
  },
  {
    year: "2024",
    title: "Sustainable Future",
    description: "Committed to 100% sustainable packaging and climate-resilient seed development.",
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
                About BharatSeeds
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground leading-tight text-balance">
                Nurturing Indian Agriculture Since 1998
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                From a small seed processing unit in Maharashtra to one of India&apos;s most
                trusted seed companies, our journey has been driven by a singular mission -
                empowering farmers for a prosperous future.
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
                    <p className="font-serif text-3xl font-bold">25+</p>
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
                  A Legacy of Trust & Quality
                </h2>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  Founded with a vision to revolutionize Indian agriculture, BharatSeeds has
                  grown from a small seed processing unit in Maharashtra to one of India&apos;s
                  most trusted seed companies. Our commitment to quality and innovation has
                  helped millions of farmers achieve better yields and sustainable
                  livelihoods.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  With state-of-the-art research facilities and a dedicated team of
                  agricultural scientists, we develop seeds that are perfectly suited to
                  India&apos;s diverse climatic conditions and farming practices.
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
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    To empower every Indian farmer with access to premium quality seeds,
                    cutting-edge agricultural knowledge, and sustainable farming practices
                    that ensure food security and economic prosperity for generations to
                    come.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card">
                <CardContent className="p-8">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-foreground">Our Vision</h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    To be India&apos;s most trusted partner in agriculture by 2030, leading the
                    transformation towards sustainable, climate-resilient farming while
                    doubling farmer incomes and contributing to global food security.
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

              <div className="space-y-8 md:space-y-12">
                {milestones.map((milestone, index) => (
                  <div
                    key={milestone.year}
                    className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div
                      className={`md:w-1/2 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}
                    >
                      <Card className="bg-card inline-block">
                        <CardContent className="p-6">
                          <span className="text-sm font-bold text-primary">{milestone.year}</span>
                          <h3 className="font-serif text-xl font-semibold text-foreground mt-2">
                            {milestone.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                            {milestone.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                    {/* Dot */}
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
                Driven by passion and expertise, our leadership team guides BharatSeeds
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
