"use client"

import { motion } from "framer-motion"
import { ArrowRight, Calendar, Clock, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

const blogPosts = [
  {
    slug: "future-of-pharmaceutical-sales-analytics",
    title: "The Future of Pharmaceutical Sales Analytics",
    excerpt:
      "Discover how map-based analytics is revolutionizing the pharmaceutical industry and driving data-driven decisions.",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Industry Insights",
    gradient: "from-purple-500 to-pink-500",
    image: "modern pharmaceutical analytics dashboard with interactive maps and data visualizations",
  },
  {
    slug: "optimizing-territory-management-with-geotagging",
    title: "Optimizing Territory Management with Geotagging",
    excerpt:
      "Learn how precise geotagging can transform your sales territory strategy and improve resource allocation.",
    date: "March 10, 2024",
    readTime: "7 min read",
    category: "Best Practices",
    gradient: "from-pink-500 to-orange-500",
    image: "sales territory map with color-coded regions and location pins",
  },
  {
    slug: "real-time-sales-tracking-game-changer",
    title: "Real-Time Sales Tracking: A Game Changer",
    excerpt:
      "Explore the benefits of real-time sales monitoring and how it empowers field teams to make instant decisions.",
    date: "March 5, 2024",
    readTime: "6 min read",
    category: "Technology",
    gradient: "from-orange-500 to-purple-500",
    image: "real-time sales dashboard with live data updates and performance metrics",
  },
]

export function BlogSection() {
  return (
    <section id="blog" className="relative py-32 overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20px 20px, rgb(124 58 237 / 0.1) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Floating gradient orb */}
      <motion.div
        className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <div className="container relative z-10 mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 mb-6"
          >
            <BookOpen className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium text-purple-900">Insights & Updates</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
            Latest from Our Blog
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Stay updated with the latest trends, insights, and best practices in pharmaceutical sales analytics
          </p>
        </motion.div>

        {/* Blog posts grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -12 }}
            >
              <Link href={`/blog/${post.slug}`}>
                <Card className="overflow-hidden h-full hover:shadow-2xl transition-all duration-500 group cursor-pointer">
                  {/* Image with gradient overlay */}
                  <div className="relative h-48 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-90`} />
                    <img
                      src={`/.jpg?height=300&width=400&query=${encodeURIComponent(post.image)}`}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold text-slate-900">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                      {post.title}
                    </h3>

                    <p className="text-slate-600 mb-4 leading-relaxed">{post.excerpt}</p>

                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2 text-purple-600 font-semibold group-hover:gap-3 transition-all duration-300"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View all button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Link href="/blog">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-transparent"
            >
              View All Articles
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
