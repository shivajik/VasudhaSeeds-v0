import Image from "next/image"
import { CheckCircle } from "lucide-react"

const features = [
  "Research-backed seed development",
  "Strict quality control protocols",
  "Climate-resilient varieties",
  "Farmer training programs",
  "Pan-India distribution network",
  "Affordable pricing for all farmers",
]

export function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-background">
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
                <p className="text-sm mt-1 opacity-90">Years of Excellence in Seed Manufacturing</p>
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
              About BharatSeeds
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground leading-tight text-balance">
              Nurturing Indian Agriculture Since 1998
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Founded with a vision to revolutionize Indian agriculture, BharatSeeds has 
              grown from a small seed processing unit in Maharashtra to one of India&apos;s most 
              trusted seed companies. Our commitment to quality and innovation has helped 
              millions of farmers achieve better yields and sustainable livelihoods.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              With state-of-the-art research facilities and a dedicated team of agricultural 
              scientists, we develop seeds that are perfectly suited to India&apos;s diverse 
              climatic conditions and farming practices.
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
  )
}
