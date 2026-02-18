import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Phone, Mail } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { allProductData, getProductBySlug, getAllProductSlugs } from "@/lib/product-data"

export function generateStaticParams() {
  return getAllProductSlugs()
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; product: string }>
}) {
  const { category, product: productSlug } = await params
  const result = getProductBySlug(category, productSlug)
  if (!result) return { title: "Product Not Found" }

  return {
    title: `${result.product.name} - ${result.categoryData.name} | Vasudha Agri Seeds`,
    description: result.product.description,
  }
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ category: string; product: string }>
}) {
  const { category, product: productSlug } = await params
  const result = getProductBySlug(category, productSlug)

  if (!result) {
    notFound()
  }

  const { product, categoryData } = result

  return (
    <>
      <Header />
      <main>
        <section className="relative pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Button
              variant="ghost"
              size="sm"
              className="mb-6 text-muted-foreground hover:text-foreground"
              asChild
            >
              <Link href={`/products/${category}`}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to {categoryData.name}
              </Link>
            </Button>

            <div className="bg-card rounded-2xl shadow-lg overflow-hidden border border-border">
              <div className="bg-primary px-6 py-4 sm:px-8 sm:py-5">
                <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-foreground">
                  {product.name}
                </h1>
                <p className="text-primary-foreground/80 text-sm mt-1">{product.variety}</p>
              </div>

              <div className="p-6 sm:p-8 lg:p-10">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {product.description}
                    </p>

                    <div className="overflow-hidden rounded-xl border border-border">
                      <table className="w-full">
                        <tbody>
                          {Object.entries(product.specs).map(([key, value], index) => (
                            <tr
                              key={key}
                              className={index % 2 === 0 ? "bg-secondary/50" : "bg-card"}
                            >
                              <td className="px-4 py-3 sm:px-6 sm:py-4 text-sm font-semibold text-foreground whitespace-nowrap align-top w-1/3 border-r border-border">
                                {key}
                              </td>
                              <td className="px-4 py-3 sm:px-6 sm:py-4 text-sm text-muted-foreground leading-relaxed">
                                {value}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {product.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1.5 bg-primary/10 text-sm font-medium text-primary rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="rounded-xl overflow-hidden border border-border">
                      <Image
                        src={product.image || categoryData.image}
                        alt={product.name}
                        width={600}
                        height={800}
                        className="w-full h-auto object-contain"
                      />
                    </div>

                    <div className="rounded-xl border border-border overflow-hidden">
                      <div className="bg-secondary/50 px-5 py-3 border-b border-border">
                        <h3 className="font-semibold text-foreground text-sm uppercase tracking-wider">Quick Info</h3>
                      </div>
                      <div className="p-5 space-y-4">
                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Season</p>
                          <p className="text-sm font-medium text-foreground">{product.season}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Duration</p>
                          <p className="text-sm font-medium text-foreground">{product.duration}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Category</p>
                          <p className="text-sm font-medium text-foreground">{categoryData.name}</p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-xl border border-border overflow-hidden">
                      <div className="bg-primary/10 px-5 py-3 border-b border-border">
                        <h3 className="font-semibold text-foreground text-sm uppercase tracking-wider">Contact Us</h3>
                      </div>
                      <div className="p-5 space-y-4">
                        <p className="text-sm text-muted-foreground">
                          For pricing, availability, and bulk orders, reach out to our team.
                        </p>
                        <div className="space-y-3">
                          <a
                            href="tel:+918466996092"
                            className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition-colors"
                          >
                            <Phone className="h-4 w-4 text-primary" />
                            +91 8466996092
                          </a>
                          <a
                            href="mailto:vasudhaagribiotech@gmail.com"
                            className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition-colors"
                          >
                            <Mail className="h-4 w-4 text-primary" />
                            vasudhaagribiotech@gmail.com
                          </a>
                        </div>
                        <Button className="w-full mt-2" asChild>
                          <Link href="/contact">Get Quote</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-secondary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-xl font-bold text-foreground mb-6">
              Other {categoryData.name} Varieties
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {categoryData.products
                .filter((p) => p.slug !== productSlug)
                .slice(0, 4)
                .map((otherProduct) => (
                  <Link
                    key={otherProduct.slug}
                    href={`/products/${category}/${otherProduct.slug}`}
                    className="bg-card rounded-lg p-4 border border-border hover:shadow-md hover:border-primary/30 transition-all"
                  >
                    <h3 className="font-semibold text-foreground text-sm">{otherProduct.name}</h3>
                    <p className="text-xs text-primary mt-1">{otherProduct.variety}</p>
                    <p className="text-xs text-muted-foreground mt-2 line-clamp-2">
                      {otherProduct.description}
                    </p>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
