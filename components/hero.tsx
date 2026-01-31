"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import { useState, useEffect, useCallback } from "react"

const slides = [
  {
    id: 1,
    image: "/images/hero-seeds.jpg",
    subtitle: "Trusted by Indian Farmers Since 2015",
    title: "Transforming Agriculture Through Quality Seeds",
    description:
      "Vasudha Agri Biotech is dedicated to empowering farmers with high-quality seeds featuring excellent physical and genetic purity, delivering exceptional yield and sustainable growth.",
    cta: "Explore Our Seeds",
    ctaLink: "#products",
  },
  {
    id: 2,
    image: "/images/slide-research.jpg",
    subtitle: "Innovation & Research",
    title: "State-of-the-Art Seed Technology",
    description:
      "Our advanced infrastructure with cutting-edge seed processing units develops high-yielding, pest-resistant varieties that address environmental concerns and promote sustainable farming.",
    cta: "Our Research",
    ctaLink: "#about",
  },
  {
    id: 3,
    image: "/images/slide-harvest.jpg",
    subtitle: "Abundant Harvests",
    title: "From Our Labs to Your Fields",
    description:
      "Our strong R&D foundation, led by qualified breeders and technocrats, ensures biotic and abiotic stress tolerance for better harvests across India.",
    cta: "Success Stories",
    ctaLink: "#services",
  },
  {
    id: 4,
    image: "/images/slide-vegetables.jpg",
    subtitle: "Complete Seed Solutions",
    title: "Quality Seeds for Every Crop",
    description:
      "From field crops to vegetables, pulses and more - we offer a diverse product portfolio tailored to India's farming community needs.",
    cta: "View Products",
    ctaLink: "#products",
  },
]

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "500+", label: "Seed Varieties" },
  { value: "1M+", label: "Farmers Served" },
]

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isAnimating, setIsAnimating] = useState(false)
  const [direction, setDirection] = useState<"left" | "right">("right")

  const goToSlide = useCallback(
    (index: number, dir: "left" | "right" = "right") => {
      if (isAnimating) return
      setIsAnimating(true)
      setDirection(dir)
      setCurrentSlide(index)
      setTimeout(() => setIsAnimating(false), 800)
    },
    [isAnimating]
  )

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length, "right")
  }, [currentSlide, goToSlide])

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length, "left")
  }, [currentSlide, goToSlide])

  useEffect(() => {
    if (!isPlaying) return
    const interval = setInterval(nextSlide, 6000)
    return () => clearInterval(interval)
  }, [isPlaying, nextSlide])

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-700 ease-out ${
            index === currentSlide
              ? "opacity-100 z-10"
              : "opacity-0 z-0"
          }`}
        >
          {/* Background Image with Ken Burns Effect */}
          <div
            className={`absolute inset-0 transition-transform duration-[8000ms] ease-out ${
              index === currentSlide ? "scale-110" : "scale-100"
            }`}
          >
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />

          {/* Content with Staggered Animations */}
          <div className="relative z-10 flex items-center min-h-screen">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 w-full">
              <div className="max-w-2xl">
                {/* Subtitle */}
                <p
                  className={`text-sm font-medium uppercase tracking-widest text-accent mb-4 transition-all duration-500 ${
                    index === currentSlide
                      ? "opacity-100 translate-y-0 delay-300"
                      : direction === "right"
                        ? "opacity-0 -translate-y-4"
                        : "opacity-0 translate-y-4"
                  }`}
                >
                  {slide.subtitle}
                </p>

                {/* Title */}
                <h1
                  className={`font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-card leading-tight text-balance transition-all duration-500 ${
                    index === currentSlide
                      ? "opacity-100 translate-y-0 delay-500"
                      : direction === "right"
                        ? "opacity-0 -translate-y-8"
                        : "opacity-0 translate-y-8"
                  }`}
                >
                  {slide.title}
                </h1>

                {/* Description */}
                <p
                  className={`mt-4 sm:mt-6 text-sm sm:text-lg text-card/90 leading-relaxed max-w-xl transition-all duration-500 ${
                    index === currentSlide
                      ? "opacity-100 translate-y-0 delay-700"
                      : direction === "right"
                        ? "opacity-0 -translate-y-6"
                        : "opacity-0 translate-y-6"
                  }`}
                >
                  {slide.description}
                </p>

                {/* CTA Buttons */}
                <div
                  className={`mt-8 flex flex-col sm:flex-row gap-4 transition-all duration-500 ${
                    index === currentSlide
                      ? "opacity-100 translate-y-0 delay-[900ms]"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  <Button size="lg" className="gap-2" asChild>
                    <a href={slide.ctaLink}>
                      {slide.cta}
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-card/10 text-card border-card/30 hover:bg-card/20 hover:text-card"
                    asChild
                  >
                    <a href="#contact">Contact Us</a>
                  </Button>
                </div>

                {/* Stats */}
                <div
                  className={`mt-8 sm:mt-12 grid grid-cols-3 gap-4 sm:gap-8 border-t border-card/20 pt-6 sm:pt-8 transition-all duration-500 ${
                    index === currentSlide
                      ? "opacity-100 translate-y-0 delay-[1100ms]"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  {stats.map((stat, i) => (
                    <div key={i}>
                      <p className="font-serif text-2xl sm:text-4xl font-bold text-card">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-xs sm:text-sm text-card/70">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-card/10 backdrop-blur-sm border border-card/20 text-card hover:bg-card/20 transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-card/10 backdrop-blur-sm border border-card/20 text-card hover:bg-card/20 transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Bottom Controls */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 sm:gap-6">
        {/* Play/Pause Button */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="p-2 rounded-full bg-card/10 backdrop-blur-sm border border-card/20 text-card hover:bg-card/20 transition-all duration-300"
          aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
        >
          {isPlaying ? (
            <Pause className="h-3 w-3 sm:h-4 sm:w-4" />
          ) : (
            <Play className="h-3 w-3 sm:h-4 sm:w-4" />
          )}
        </button>

        {/* Slide Indicators with Progress */}
        <div className="flex items-center gap-2 sm:gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() =>
                goToSlide(index, index > currentSlide ? "right" : "left")
              }
              className="relative h-1 w-6 sm:w-12 rounded-full bg-card/30 overflow-hidden group"
              aria-label={`Go to slide ${index + 1}`}
            >
              <div
                className={`absolute inset-y-0 left-0 bg-accent transition-all ${
                  index === currentSlide && isPlaying
                    ? "animate-progress"
                    : index === currentSlide
                      ? "w-full"
                      : "w-0"
                }`}
              />
              <div className="absolute inset-0 bg-card/50 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          ))}
        </div>

        {/* Slide Counter */}
        <div className="text-card text-xs sm:text-sm font-medium">
          <span className="text-accent">{String(currentSlide + 1).padStart(2, "0")}</span>
          <span className="mx-1">/</span>
          <span>{String(slides.length).padStart(2, "0")}</span>
        </div>
      </div>

      {/* Side Progress Dots (Desktop) */}
      <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 z-20 flex-col gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() =>
              goToSlide(index, index > currentSlide ? "right" : "left")
            }
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-accent scale-125"
                : "bg-card/40 hover:bg-card/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
        .animate-progress {
          animation: progress 6s linear;
        }
      `}</style>
    </section>
  )
}
