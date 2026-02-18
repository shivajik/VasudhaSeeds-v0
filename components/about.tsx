import Image from "next/image"
import { CheckCircle } from "lucide-react"

const features = [
  "Research-backed seed development",
  "State-of-the-art R&D facilities",
  "Climate-resilient varieties",
  "Advanced seed processing units",
  "Dedicated breeding programs",
  "Quality seeds with high germination",
]

export function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-background">
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

          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">
              About Vasudha Agri Seeds
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground leading-tight text-balance">
              Enhancing Agricultural Productivity Since 2015
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Vasudha Agri Biotech Pvt. Ltd. is a pioneering seed company dedicated to 
              enhancing agricultural productivity through innovative and quality seed solutions. 
              Established in 2015 in Hyderabad, we have been at the forefront of developing 
              hybrid and open-pollinated seeds.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our state-of-the-art R&D facilities, processing plants, and advanced laboratories 
              produce seeds that meet global standards of purity, quality, and germination.
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
  )
}
