"use client";

import { motion } from "framer-motion";
import { Check, Zap, Building2, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useTheme } from "@/contexts/theme-context";
import { colorThemes } from "@/lib/theme-config";

const pricingPlans = [
  {
    name: "Starter",
    icon: Zap,
    price: "$200",
    description: "Perfect for small pharmaceutical teams",
    features: [
      "Up to 50 sales representatives",
      "Basic map visualization",
      "Customer geotagging",
      "Monthly reports",
      "Email support",
      "Mobile app access",
    ],
    popular: false,
  },
  {
    name: "Professional",
    icon: Building2,
    price: "$500",
    description: "Ideal for growing companies",
    features: [
      "Up to 200 sales representatives",
      "Advanced analytics & heatmaps",
      "Territory demarcation (Bricks)",
      "Real-time tracking",
      "API access",
      "Multi-city deployment",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    icon: Rocket,
    price: "$800",
    description: "Comprehensive solution for large organizations",
    features: [
      "Unlimited sales representatives",
      "Full analytics suite",
      "Advanced territory management",
      "Predictive analytics & AI insights",
      "Custom integrations",
      "On-premise deployment option",
      "24/7 premium support",
    ],
    popular: false,
  },
];

export function PricingSection() {
  const { colorTheme } = useTheme();
  const gradientClass = colorThemes[colorTheme].gradient;

  return (
    <section
      id="pricing"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Floating shapes */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <div className="container relative z-10 mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Choose Your Plan
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Select the perfect plan for your pharmaceutical business
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex ${
                  index === pricingPlans.length - 1
                    ? "md:col-span-2 md:justify-center lg:col-span-1"
                    : ""
                }`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <span className="px-4 py-1 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 text-white text-sm font-semibold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                <Card
                  className={`relative overflow-hidden flex flex-col w-full hover:shadow-2xl transition-all duration-500 ${
                    plan.popular ? "border-2 border-pink-500" : ""
                  }`}
                >
                  <div className="relative p-6 flex flex-col flex-1">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-14 h-14 rounded-2xl border-2 bg-gradient-to-br p-[2px] flex items-center justify-center mb-4 shadow-lg`}
                    >
                      <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                    </motion.div>

                    {/* Plan name */}
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {plan.name}
                    </h3>

                    {/* Price */}
                    <div className="mb-3">
                      <span className="text-3xl font-bold ">{plan.price}</span>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                      {plan.description}
                    </p>

                    {/* Features - flex-1 to push button to bottom */}
                    <ul className="space-y-2.5 mb-6 flex-1">
                      {plan.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.05 * featureIndex }}
                          className="flex items-start gap-2.5"
                        >
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mt-0.5">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-foreground text-sm leading-relaxed">
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </ul>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="mt-auto"
                    >
                      <Button
                        className={`bg-gradient-to-r ${gradientClass} w-full hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl`}
                      >
                        Get Started
                      </Button>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Need a custom solution? Contact our sales team.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              variant="outline"
              className={`border-2 border-primary hover:border-none bg-white text-primary hover:text-white hover:bg-gradient-to-r hover:${gradientClass} hover:opacity-90 px-8 rounded-full transition-opacity shadow-lg hover:shadow-xl`}
            >
              Contact Sales
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}
