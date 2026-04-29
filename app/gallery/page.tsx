"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const galleryImages = [
  {
    src: "/images/gallery/gallery-1.jpeg",
    alt: "Team at Seeds Processing Plant - Medchal, Hyderabad",
    category: "Processing Plant",
  },
  {
    src: "/images/gallery/gallery-2.jpeg",
    alt: "Team visit at R&D paddy field - aerial view",
    category: "R&D Fields",
  },
  {
    src: "/images/gallery/gallery-3.jpeg",
    alt: "Team briefing inside Seeds Processing Plant",
    category: "Processing Plant",
  },
  {
    src: "/images/gallery/gallery-4.jpeg",
    alt: "Premium quality Maize cob from Vasudha hybrid variety",
    category: "Maize",
  },
  {
    src: "/images/gallery/gallery-5.jpeg",
    alt: "Hybrid Maize cobs in the field",
    category: "Maize",
  },
  {
    src: "/images/gallery/gallery-6.jpeg",
    alt: "Maharashtra & MP team group photo at Processing Plant",
    category: "Processing Plant",
  },
  {
    src: "/images/gallery/gallery-7.jpeg",
    alt: "Team group photo at R&D farm, Medchal",
    category: "R&D Fields",
  },
  {
    src: "/images/gallery/gallery-8.jpeg",
    alt: "Maize harvest field with golden cobs ready",
    category: "Maize",
  },
  {
    src: "/images/gallery/gallery-9.jpeg",
    alt: "Team at paddy R&D field inspection",
    category: "R&D Fields",
  },
  {
    src: "/images/gallery/gallery-10.jpeg",
    alt: "Team photo with packed seeds stock at warehouse",
    category: "Processing Plant",
  },
  {
    src: "/images/gallery/gallery-11.jpeg",
    alt: "Field inspection of paddy varieties at Medchal",
    category: "R&D Fields",
  },
  {
    src: "/images/gallery/gallery-12.jpeg",
    alt: "Leadership team at paddy trial field",
    category: "R&D Fields",
  },
  {
    src: "/images/gallery/gallery-13.jpeg",
    alt: "New Maize hybrid trial plots at R&D farm",
    category: "Maize",
  },
  {
    src: "/images/gallery/gallery-14.jpeg",
    alt: "Aerial view of paddy trial plots at R&D center",
    category: "R&D Fields",
  },
  {
    src: "/images/gallery/gallery-15.jpeg",
    alt: "Team inspecting Maize plant height in field",
    category: "Maize",
  },
  {
    src: "/images/gallery/gallery-16.jpeg",
    alt: "Maharashtra & MP team at paddy field - group photo",
    category: "R&D Fields",
  },
  {
    src: "/images/gallery/gallery-17.jpeg",
    alt: "Team observing paddy crop performance",
    category: "R&D Fields",
  },
  {
    src: "/images/gallery/gallery-18.jpeg",
    alt: "Paddy variety trial plots with labeled rows",
    category: "R&D Fields",
  },
  {
    src: "/images/gallery/gallery-19.jpeg",
    alt: "Team surrounding paddy & maize mixed trial plots",
    category: "R&D Fields",
  },
  {
    src: "/images/gallery/gallery-20.jpeg",
    alt: "Aerial view of R&D paddy plots at Medchal farm",
    category: "R&D Fields",
  },
  {
    src: "/images/gallery/gallery-21.jpeg",
    alt: "Seeds stock inside warehouse — colorful packed bags",
    category: "Processing Plant",
  },
  {
    src: "/images/gallery/gallery-22.jpeg",
    alt: "Farmer conference session with team members wearing green turbans",
    category: "Events",
  },
  {
    src: "/images/gallery/gallery-23.jpeg",
    alt: "Aerial view of R&D paddy nursery plots at Medchal — Hyderabad",
    category: "R&D Fields",
  },
  {
    src: "/images/gallery/gallery-24.jpeg",
    alt: "Annual conference group photo — 2nd April 2026, Vasudha Agri Biotech",
    category: "Events",
  },
]

const categories = ["All", "R&D Fields", "Processing Plant", "Maize", "Events"]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filtered =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory)

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)
  const prevImage = () =>
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + filtered.length) % filtered.length : null
    )
  const nextImage = () =>
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % filtered.length : null
    )

  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="bg-gradient-to-b from-green-50 to-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block text-sm font-medium text-primary uppercase tracking-widest mb-3">
                Our Gallery
              </span>
              <h1 className="font-serif text-4xl font-bold text-foreground mb-4">
                Vasudha Agri Biotech Pvt. Ltd.
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Medchal, Hyderabad — R&D Seeds Processing &amp; Packing Plants Visits by
                Vasudha Agri Biotech Team Members of Maharashtra &amp; MP.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all border ${
                    activeCategory === cat
                      ? "bg-primary text-white border-primary shadow-sm"
                      : "bg-white text-muted-foreground border-border hover:border-primary hover:text-primary"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
              {filtered.map((image, index) => (
                <div
                  key={image.src}
                  className="break-inside-avoid group relative overflow-hidden rounded-xl cursor-pointer shadow-sm hover:shadow-lg transition-shadow duration-300"
                  onClick={() => openLightbox(index)}
                >
                  <div className="relative w-full">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div>
                      <span className="inline-block bg-primary/90 text-white text-xs font-medium px-2 py-1 rounded-full mb-1">
                        {image.category}
                      </span>
                      <p className="text-white text-sm leading-snug">{image.alt}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 p-2"
            onClick={closeLightbox}
          >
            <X className="h-8 w-8" />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10 p-2 bg-black/40 rounded-full"
            onClick={(e) => { e.stopPropagation(); prevImage() }}
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10 p-2 bg-black/40 rounded-full"
            onClick={(e) => { e.stopPropagation(); nextImage() }}
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          <div
            className="relative max-w-5xl max-h-[90vh] w-full mx-8"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filtered[lightboxIndex].src}
              alt={filtered[lightboxIndex].alt}
              width={1200}
              height={800}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <div className="text-center mt-3">
              <p className="text-white text-sm">{filtered[lightboxIndex].alt}</p>
              <p className="text-gray-400 text-xs mt-1">
                {lightboxIndex + 1} / {filtered.length}
              </p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  )
}
