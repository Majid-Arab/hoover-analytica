"use client"

import { motion } from "framer-motion"
import { Target, Lightbulb, Users, Award } from "lucide-react"
import { Card } from "@/components/ui/card"

const expertise = [
  {
    icon: Target,
    title: "Spatial Analytics",
    description: "Advanced geospatial analysis for strategic decision-making",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Lightbulb,
    title: "Geotagging Solutions",
    description: "Precise location-based data management and validation",
    color: "from-pink-500 to-orange-500",
  },
  {
    icon: Users,
    title: "Pharma Sales Optimization",
    description: "Tailored solutions for pharmaceutical sales excellence",
    color: "from-orange-500 to-purple-500",
  },
  {
    icon: Award,
    title: "Cloud-Based Data Management",
    description: "Secure, scalable infrastructure for your data needs",
    color: "from-purple-500 to-pink-500",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="relative py-32 overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, rgb(148 163 184 / 0.1) 1px, transparent 1px),
                           linear-gradient(to bottom, rgb(148 163 184 / 0.1) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Floating gradient orbs */}
      <motion.div
        className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 mb-6"
            >
              <Award className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium text-purple-900">About Us</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
              Empowering Pharma Businesses with Smart Analytics
            </h2>

            <div className="space-y-6 text-slate-600 leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg"
              >
                <span className="font-semibold text-slate-900">Hoover Analytica</span> is developed by{" "}
                <span className="font-semibold text-purple-600">Exponent Engineers Pvt Ltd</span>, a leading provider of
                spatial planning and analytics solutions.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-purple-600" />
                  Our Mission
                </h3>
                <p className="text-slate-700">
                  To empower pharma businesses with smarter tools for data-driven decision-making, optimized sales force
                  management, and accurate customer insights.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Expertise cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Card className="p-6 h-full hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
                  {/* Gradient background on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  <div className="relative">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 shadow-lg`}
                    >
                      <item.icon className="w-7 h-7 text-white" />
                    </motion.div>

                    <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
