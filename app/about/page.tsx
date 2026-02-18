import Image from "next/image"
import { CheckCircle, Users, Award, Globe, Target, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "About Us - Vasudha Agri Seeds | Leading Seed Manufacturer in India",
  description:
    "Learn about Vasudha Agri Biotech Pvt. Ltd. - India's trusted seed manufacturing company since 2015. Our mission, vision, and commitment to Indian agriculture.",
}

const features = [
  "Research-backed seed development",
  "State-of-the-art R&D facilities",
  "Climate-resilient varieties",
  "Advanced seed processing units",
  "Dedicated breeding programs",
  "Quality seeds with high germination",
]

const stats = [
  { value: "10+", label: "Years of Excellence", icon: Award },
  { value: "50+", label: "Seed Varieties", icon: Target },
  { value: "1000+", label: "Farmers Served", icon: Users },
  { value: "10+", label: "States Covered", icon: Globe },
]

const milestones = [
  {
    year: "2015",
    title: "Foundation",
    description: "Vasudha Agri Biotech Pvt. Ltd. was established in Hyderabad, Telangana with a vision to become the market leader in the seed industry.",
  },
  {
    year: "2017",
    title: "R&D Expansion",
    description: "Established state-of-the-art R&D facilities and advanced laboratories for seed breeding and quality testing.",
  },
  {
    year: "2019",
    title: "Product Portfolio Growth",
    description: "Expanded product portfolio to include Hybrid Maize, Paddy, Vegetables, and Pulses with multiple high-performing varieties.",
  },
  {
    year: "2021",
    title: "Processing Plant",
    description: "Set up modern seed processing units and packaging facilities at our factory in Medchal, Hyderabad.",
  },
  {
    year: "2023",
    title: "Market Expansion",
    description: "Expanded dealer and distributor network across multiple states in India.",
  },
  {
    year: "2025",
    title: "Innovation & Growth",
    description: "Continuing to develop high-yielding, pest-resistant varieties that address environmental concerns and promote sustainable farming.",
  },
]

const team = [
  {
    name: "B. Sreenivasula Reddy",
    role: "Managing Director",
    image: "/images/farmer-field.jpg",
  },
  {
    name: "B. Vasudha",
    role: "Director",
    image: "/images/quality-lab.jpg",
  },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative pt-32 pb-20 bg-secondary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">
                About Vasudha Agri Seeds
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground leading-tight text-balance">
                Enhancing Agricultural Productivity Since 2015
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Vasudha Agri Biotech Pvt. Ltd. is a pioneering seed company dedicated to
                enhancing agricultural productivity through innovative and quality seed
                solutions, empowering Indian farmers from Hyderabad, Telangana.
              </p>
            </div>
          </div>
        </section>

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

        <section className="py-20 lg:py-28 bg-secondary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">
                From the Directors
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground leading-tight text-balance">
                Director&apos;s Message
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="bg-card border-primary/20">
                <CardContent className="p-8 sm:p-10">
                  <Quote className="h-10 w-10 text-primary/20 mb-6" />
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Since our establishment in 2015, our company has been dedicated to transforming
                      agriculture through the production of high-quality seeds. With a diverse product
                      portfolio that includes Field crops, Vegetable seeds, Pulses, and more, we have
                      consistently focused on empowering farmers and supporting the agricultural sector.
                    </p>
                    <p>
                      Our state-of-the-art infrastructure, equipped with advanced seed processing units
                      and cutting-edge technologies, ensures the delivery of superior-quality seeds with
                      excellent Physical and Genetic Purity. Our strong R&amp;D foundation, led by qualified
                      breeders and technocrats, enables us to develop high-yielding, pest-resistant
                      varieties that address environmental concerns and promote sustainable farming practices.
                    </p>
                    <p>
                      We remain committed to delivering mutual value to our farmers, customers, and
                      stakeholders while contributing to the nation&apos;s agricultural growth. Together,
                      let us continue building a sustainable and prosperous future for the agriculture industry.
                    </p>
                    <p className="text-foreground font-medium italic">
                      Greatly thankful to all our Farmers, Distributors, Dealers for tremendous support.
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row gap-6 sm:gap-12">
                    <div>
                      <p className="font-serif text-lg font-semibold text-foreground">
                        B. Sreenivasula Reddy
                      </p>
                      <p className="text-sm text-primary font-medium">Managing Director</p>
                      <p className="text-xs text-muted-foreground mt-0.5">Vasudha Agri Biotech Pvt. Ltd.</p>
                    </div>
                    <div>
                      <p className="font-serif text-lg font-semibold text-foreground">
                        B. Vasudha
                      </p>
                      <p className="text-sm text-primary font-medium">Director</p>
                      <p className="text-xs text-muted-foreground mt-0.5">Vasudha Agri Biotech Pvt. Ltd.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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

              <div>
                <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">
                  Our Story
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground leading-tight text-balance">
                  A Legacy of Trust & Quality
                </h2>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  Vasudha Agri Biotech Pvt. Ltd. is a pioneering seed company dedicated to
                  enhancing agricultural productivity through innovative and quality seed
                  solutions. Established in 2015 in Hyderabad, Telangana, we have been at the
                  forefront of developing hybrid and open-pollinated seeds for Indian farmers.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Our state-of-the-art R&D facilities, processing plants, and advanced
                  laboratories produce seeds that meet global standards of purity, quality,
                  and germination.
                </p>

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

        <section className="py-20 lg:py-28 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-card">
                <CardContent className="p-8">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-foreground">Our Mission</h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    To create an environment that focuses on &apos;Need based Research&apos; for
                    the development of seeds of various crops and eco-friendly bio-organic
                    inputs, empowering Indian farmers with premium quality seeds and
                    sustainable farming practices.
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
                    To become the market leader in the seed industry by catering the needs
                    of Indian farmers, leading the transformation towards sustainable,
                    climate-resilient farming while contributing to food security.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

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
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-primary border-4 border-background" />
                    <div className="md:w-1/2" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

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
                Driven by passion and expertise, our leadership team guides Vasudha Agri
                Biotech towards a sustainable agricultural future.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
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
