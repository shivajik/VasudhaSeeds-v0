"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Building2,
  Users,
  Headphones,
} from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const contactInfo = [
  {
    icon: Building2,
    title: "Head Office",
    details: ["Plot No.955/ Part, NJR & KLR Nagar", "Medchal, Hyderabad - 501401, Telangana"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 8466996092"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["vasudhaagribiotech@gmail.com"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon - Sat: 9:00 AM - 6:00 PM", "Sunday: Closed"],
  },
]

const departments = [
  {
    icon: Users,
    title: "Sales Enquiry",
    email: "vasudhaagribiotech@gmail.com",
    description: "For bulk orders and dealer partnerships",
  },
  {
    icon: Headphones,
    title: "Farmer Support",
    email: "vasudhaagribiotech@gmail.com",
    description: "For crop guidance and technical queries",
  },
  {
    icon: Building2,
    title: "Corporate Office",
    email: "vasudhaagribiotech@gmail.com",
    description: "For business and media inquiries",
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    alert("Thank you for your inquiry. We will get back to you soon!")
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
    setIsSubmitting(false)
  }

  return (
    <>
      <Header />
      <main>
        <section className="relative pt-32 pb-20 bg-secondary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">
                Contact Us
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground leading-tight text-balance">
                Let&apos;s Grow Together
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Have questions about our seeds or need guidance for your farm? Our team of
                agricultural experts is here to help you succeed.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info) => {
                const IconComponent = info.icon
                return (
                  <Card key={info.title} className="bg-card">
                    <CardContent className="p-6 text-center">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground">{info.title}</h3>
                      {info.details.map((detail) => (
                        <p key={detail} className="text-sm text-muted-foreground mt-1">
                          {detail}
                        </p>
                      ))}
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-12">
              <div className="lg:col-span-3">
                <Card className="bg-card">
                  <CardContent className="p-6 lg:p-8">
                    <h2 className="font-serif text-2xl font-bold text-foreground mb-2">
                      Send us a Message
                    </h2>
                    <p className="text-muted-foreground mb-8">
                      Fill out the form below and we&apos;ll get back to you within 24 hours.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="name"
                            className="text-sm font-medium text-foreground mb-2 block"
                          >
                            Full Name *
                          </label>
                          <Input
                            id="name"
                            placeholder="Your name"
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            required
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="text-sm font-medium text-foreground mb-2 block"
                          >
                            Email Address *
                          </label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({ ...formData, email: e.target.value })
                            }
                            required
                          />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="phone"
                            className="text-sm font-medium text-foreground mb-2 block"
                          >
                            Phone Number
                          </label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="+91 84669 96092"
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({ ...formData, phone: e.target.value })
                            }
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="subject"
                            className="text-sm font-medium text-foreground mb-2 block"
                          >
                            Subject *
                          </label>
                          <Input
                            id="subject"
                            placeholder="How can we help?"
                            value={formData.subject}
                            onChange={(e) =>
                              setFormData({ ...formData, subject: e.target.value })
                            }
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="message"
                          className="text-sm font-medium text-foreground mb-2 block"
                        >
                          Your Message *
                        </label>
                        <Textarea
                          id="message"
                          placeholder="Tell us about your requirements..."
                          rows={5}
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({ ...formData, message: e.target.value })
                          }
                          required
                        />
                      </div>
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full sm:w-auto gap-2"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                        <Send className="h-4 w-4" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                    Department Contacts
                  </h3>
                  <div className="space-y-4">
                    {departments.map((dept) => {
                      const IconComponent = dept.icon
                      return (
                        <Card key={dept.title} className="bg-card">
                          <CardContent className="p-4 flex gap-4">
                            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <IconComponent className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-foreground">{dept.title}</h4>
                              <p className="text-sm text-muted-foreground">
                                {dept.description}
                              </p>
                              <a
                                href={`mailto:${dept.email}`}
                                className="text-sm text-primary hover:underline"
                              >
                                {dept.email}
                              </a>
                            </div>
                          </CardContent>
                        </Card>
                      )
                    })}
                  </div>
                </div>

                <Card className="bg-card overflow-hidden">
                  <div className="aspect-[4/3] bg-muted flex items-center justify-center">
                    <div className="text-center p-6">
                      <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                      <p className="font-semibold text-foreground">Visit Our Office</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Plot No.955/ Part, NJR & KLR Nagar
                        <br />
                        Medchal, Hyderabad - 501401, Telangana
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-secondary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
              Looking for a Dealer Near You?
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Find your nearest authorized Vasudha Agri Seeds dealer from our growing
              network of dealers across India.
            </p>
            <Button size="lg" className="mt-6 gap-2">
              Find Dealer
              <MapPin className="h-4 w-4" />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
