"use client";

import type React from "react";

import ShoppingCart from "@heroicons/react/24/outline/ShoppingCartIcon";
import ChevronLeft from "@heroicons/react/24/outline/ChevronLeftIcon";
import ChevronRight from "@heroicons/react/24/outline/ChevronRightIcon";
import Globe from "@heroicons/react/24/outline/GlobeAltIcon";
import Bot from "@heroicons/react/24/outline/CommandLineIcon";
import Zap from "@heroicons/react/24/outline/BoltIcon";
import BarChart3 from "@heroicons/react/24/outline/ChartBarIcon";
import Palette from "@heroicons/react/24/outline/SwatchIcon";

// images
import dashboard from "@/assets/img/showcase/dashboard.avif";
import ecommerce from "@/assets/img/showcase/ecommerce.avif";
import landing from "@/assets/img/showcase/landing.avif";
import chatbot from "@/assets/img/showcase/chatbot.jpg";
import integration from "@/assets/img/showcase/integration.jpg";
import automation from "@/assets/img/showcase/automation.jpg";

import { useEffect, useState } from "react";
import SpotlightCard from "./SpotlightCard";
import { Button } from "@/components/ui/button";

interface ServiceSlide {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

const services = {
  "web-development": {
    title: "Web Development",
    slides: [
      {
        id: "ecommerce",
        title: "E-commerce Websites",
        description:
          "Full-featured online stores with secure payments, inventory management, and seamless user experiences.",
        icon: <ShoppingCart className="w-8 h-8" />,
        image: ecommerce.src,
        href: "services/web-development",
      },
      {
        id: "dashboard",
        title: "Dashboard & Admin Panels",
        description:
          "Powerful admin interfaces with real-time analytics, user management, and intuitive data visualization.",
        icon: <BarChart3 className="w-8 h-8" />,
        image: dashboard.src,
        href: "services/web-development",
      },
      {
        id: "landing",
        title: "Landing Page Design",
        description:
          "High-converting landing pages optimized for performance, SEO, and user engagement.",
        icon: <Palette className="w-8 h-8" />,
        image: landing.src,
        href: "services/web-development",
      },
    ],
  },
  "ai-automation": {
    title: "AI Agents & Automations",
    slides: [
      {
        id: "chatbot",
        title: "Customer Support Chatbots",
        description:
          "Intelligent AI chatbots that provide 24/7 customer support with natural language understanding.",
        icon: <Bot className="w-8 h-8" />,
        image: chatbot.src,
        href: "/services/ai-integration",
      },
      {
        id: "workflow",
        title: "Workflow Automation",
        description:
          "Streamline business processes with smart automation that saves time and reduces manual errors.",
        icon: <Zap className="w-8 h-8" />,
        image: automation.src,
        href: "/services/ai-integration",
      },
      {
        id: "integrations",
        title: "AI-Powered Integrations",
        description:
          "Connect your systems with intelligent APIs that adapt and learn from your business patterns.",
        icon: <Globe className="w-8 h-8" />,
        image: integration.src,
        href: "/services/ai-integration",
      },
    ],
  },
};

export function ServicesShowcase() {
  const [activeService, setActiveService] =
    useState<keyof typeof services>("web-development");
  const [currentSlide, setCurrentSlide] = useState(0);

  const currentServiceData = services[activeService];
  const totalSlides = currentServiceData.slides.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleServiceChange = (service: keyof typeof services) => {
    setActiveService(service);
    setCurrentSlide(0);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval)
  }, [activeService])
  return (
    <section className="min-h-screen text-foreground py-20 px-8 md:px-14 lg:px-40 xl:px-50 relative z-1">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-zinc-100">
            What We Can Do
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Discover our comprehensive range of services designed to transform
            your digital presence
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
          {/* Left Sidebar Menu */}
          <div className="lg:col-span-3">
            <div className="rounded-xl p-6 sticky top-8">
              {/* <h3 className="text-lg font-semibold mb-6 text-sidebar-foreground">Our Services</h3> */}
              <nav className="space-y-3">
                {Object.entries(services).map(([key, service]) => (
                  <button
                    key={key}
                    onClick={() =>
                      handleServiceChange(key as keyof typeof services)
                    }
                    className={`w-full text-left cursor-pointer p-4 rounded-lg transition-all duration-300 text-secondary ${
                      activeService === key
                        ? "background-theme !text-zinc-100 shadow-lg"
                        : "text-sidebar-foreground hover:translate-x-1"
                    }`}
                  >
                    <div className="font-medium">{service.title}</div>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Right Carousel */}
          <div className="lg:col-span-9">
            <div className="relative">
              {/* Carousel Header */}
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-3xl font-bold text-zinc-100">
                  {currentServiceData.title}
                </h3>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prevSlide}
                    className="hover:text-zinc-100 hover:bg-sky-500 border-none cursor-pointer transition-colors bg-zinc-100"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextSlide}
                    className="hover:text-zinc-100 hover:bg-sky-500 border-none cursor-pointer transition-colors bg-zinc-100"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Carousel Content */}
              <div className="relative overflow-hidden rounded-xl">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {currentServiceData.slides.map((slide, index) => (
                    <div key={slide.id} className="w-full flex-shrink-0">
                      <SpotlightCard
                        spotlightColor="#00b4fb0f"
                        className="bg-zinc-800 border-zinc-100/10 overflow-hidden"
                      >
                        <div className="grid md:grid-cols-2 gap-0">
                          {/* Image */}
                          <div className="relative h-80 md:h-96">
                            <img
                              src={slide.image || "/placeholder.svg"}
                              alt={slide.title}
                              className="w-full h-full object-cover rounded-xl"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                          </div>

                          {/* Content */}
                          <div className="mt-3 md:mt-auto md:p-8 flex flex-col justify-center">
                            <div className="flex items-center gap-4 mb-6">
                              <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                {slide.icon}
                              </div>
                              <h4 className="text-2xl font-bold text-zinc-100">
                                {slide.title}
                              </h4>
                            </div>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-8 text-pretty">
                              {slide.description}
                            </p>
                            <a href={slide.href} className="!cursor-pointer *:w-full md:w-auto">
                              <Button className="self-start bg-primary hover:bg-primary/90 text-primary-foreground">
                                Learn More
                              </Button>
                            </a>
                          </div>
                        </div>
                      </SpotlightCard>
                    </div>
                  ))}
                </div>
              </div>

              {/* Slide Indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {currentServiceData.slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "background-theme scale-110"
                        : "bg-muted hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
