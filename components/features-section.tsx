"use client";

import { Card } from "@/components/ui/card";
import { MapIcon, Database, LayoutGrid, Shield } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const features = [
  {
    icon: MapIcon,
    title: "Map-Based Application",
    description:
      "Interactive maps to track sales performance, doctor engagement, and sales team activity with intuitive data visualization tools.",
    details: [
      "Real-time alerts",
      "Quick keys for fast decisions",
      "Charts, filters & heatmaps",
    ],
    gradient: "from-primary to-secondary",
    image:
      "interactive map dashboard with sales data points and heatmap overlay showing pharmaceutical territory coverage",
  },
  {
    icon: Database,
    title: "Geotagging of Customers",
    description:
      "Complete geo-database of pharmacies, customers, and healthcare centers with mobile app integration.",
    details: [
      "Instant geotag updates",
      "Mobile validation",
      "Seamless data integration",
    ],
    gradient: "from-secondary to-accent",
    image:
      "mobile app interface showing pharmacy geotagging with map pins and customer database",
  },
  {
    icon: LayoutGrid,
    title: "Sales Territory Demarcation",
    description:
      "Customized sales territories aligned with your operational strategy for optimal resource allocation.",
    details: [
      "Visual area representation",
      "Easy restructuring",
      "Optimized allocation",
    ],
    gradient: "from-accent to-primary",
    image:
      "sales territory map with color-coded regions and boundary demarcation for pharmaceutical sales areas",
  },
  {
    icon: Shield,
    title: "Admin Panel & Reporting",
    description:
      "Secure, role-based access with detailed reporting module and automated performance summaries.",
    details: ["Export to Excel/PDF", "Automated alerts", "Role-based security"],
    gradient: "from-primary via-secondary to-accent",
    image:
      "admin dashboard showing reports, charts, and export options for pharmaceutical sales analytics",
  },
];

export function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeCard, setActiveCard] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    return scrollYProgress.on("change", () => {
      const viewportCenter = window.innerHeight / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      cardRefs.current.forEach((card, index) => {
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const distance = Math.abs(rect.top - viewportCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveCard(closestIndex);
    });
  }, [scrollYProgress]);

  return (
    <section id="features" ref={sectionRef} className="py-20 bg-background">
      <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* <div className= ""> */}
      <div className="relative z-10 container mx-auto flex flex-col lg:flex-row px-4 sm:px-6 lg:px-8">
        <div className="text-center lg:text-start w-full lg:w-2/4">
          <motion.div className="lg:sticky lg:top-50 lg:pb-32 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-center lg:text-left max-w-xl w-full">
                <span className="whitespace-nowrap">
                  Powerful{" "}
                  <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                    Features
                  </span>
                </span>{" "}
                <span className="whitespace-nowrap">for Your Success</span>
              </h2>

              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need to manage pharmaceutical sales operations
                efficiently
              </p>
            </motion.div>

            {/* Feature navigation dots */}
            <div className="hidden lg:flex flex-col gap-4">
              {features.map((feature, index) => (
                <button
                  key={index}
                  className={`text-left transition-all duration-300 ${
                    activeCard === index
                      ? "opacity-100"
                      : "opacity-40 hover:opacity-70"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`h-1 rounded-full transition-all duration-300 ${
                        activeCard === index
                          ? "w-12 bg-gradient-to-r from-primary to-secondary"
                          : "w-6 bg-border"
                      }`}
                    />
                    <span className="text-sm font-medium">{feature.title}</span>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="space-y-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            const targetScale = 1 - (features.length - index) * 0.05;
            const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
            const scale = useTransform(
              scrollYProgress,
              [index * 0.25, 1],
              [1, targetScale]
            );

            return (
              <motion.div
                key={index}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                data-index={index}
                style={{
                  scale,
                  top: `calc(-5vh + ${100 + index * 25}px)`,
                }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="sticky top-24"
              >
                <Card className="group relative p-6 border-2 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20">
                  {/* Animated Gradient Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}
                  />

                  <div className="relative z-10">
                    <div className="flex flex-col gap-6">
                      {/* Icon & Content */}
                      <div className="flex-1">
                        <div
                          className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} p-[2px] mb-4 group-hover:scale-110 transition-transform duration-300`}
                        >
                          <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                            <Icon className="w-7 h-7 text-primary" />
                          </div>
                        </div>

                        <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-base text-muted-foreground mb-4 leading-relaxed">
                          {feature.description}
                        </p>

                        <ul className="space-y-2 mb-6">
                          {feature.details.map((detail, i) => (
                            <li
                              key={i}
                              className="flex items-center gap-2 text-sm"
                            >
                              <div
                                className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${feature.gradient}`}
                              />
                              <span className="text-muted-foreground">
                                {detail}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Feature Image */}
                      <div className="w-full max-h-60 rounded-xl overflow-hidden border border-border group-hover:border-primary/50 transition-all duration-500">
                        <motion.img
                          src="/pharmaceutical-sales-analytics-dashboard-with-inte.jpg"
                          alt={feature.title}
                          style={{
                            scale: imageScale,
                            transformOrigin: "center center",
                          }}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
      {/* </div> */}

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}
