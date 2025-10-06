"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, ArrowLeft, Search, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

const allBlogPosts = [
  {
    title: "The Future of Pharmaceutical Sales Analytics",
    excerpt:
      "Discover how map-based analytics is revolutionizing the pharmaceutical industry and driving data-driven decisions. Learn about the latest trends and technologies shaping the future.",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Industry Insights",
    gradient: "from-purple-500 to-pink-500",
    image: "modern pharmaceutical analytics dashboard with interactive maps and data visualizations",
    tags: ["Analytics", "Pharma", "Technology"],
  },
  {
    title: "Optimizing Territory Management with Geotagging",
    excerpt:
      "Learn how precise geotagging can transform your sales territory strategy and improve resource allocation. Discover best practices for implementing location-based solutions.",
    date: "March 10, 2024",
    readTime: "7 min read",
    category: "Best Practices",
    gradient: "from-pink-500 to-orange-500",
    image: "sales territory map with color-coded regions and location pins",
    tags: ["Geotagging", "Sales", "Strategy"],
  },
  {
    title: "Real-Time Sales Tracking: A Game Changer",
    excerpt:
      "Explore the benefits of real-time sales monitoring and how it empowers field teams to make instant decisions. See how leading companies are leveraging this technology.",
    date: "March 5, 2024",
    readTime: "6 min read",
    category: "Technology",
    gradient: "from-orange-500 to-purple-500",
    image: "real-time sales dashboard with live data updates and performance metrics",
    tags: ["Real-Time", "Tracking", "Innovation"],
  },
  {
    title: "Data-Driven Decision Making in Pharma Sales",
    excerpt:
      "Understanding how to leverage analytics for strategic planning and execution. A comprehensive guide to transforming raw data into actionable insights.",
    date: "February 28, 2024",
    readTime: "8 min read",
    category: "Strategy",
    gradient: "from-purple-500 to-pink-500",
    image: "business executives analyzing pharmaceutical sales data on large screens",
    tags: ["Data", "Strategy", "Analytics"],
  },
  {
    title: "Mobile Solutions for Field Sales Teams",
    excerpt:
      "How mobile applications are empowering pharmaceutical sales representatives with on-the-go access to critical information and real-time updates.",
    date: "February 20, 2024",
    readTime: "5 min read",
    category: "Technology",
    gradient: "from-pink-500 to-orange-500",
    image: "sales representative using mobile app in the field",
    tags: ["Mobile", "Field Sales", "Apps"],
  },
  {
    title: "The Role of AI in Sales Analytics",
    excerpt:
      "Artificial intelligence is transforming how pharmaceutical companies analyze sales data and predict market trends. Discover the possibilities.",
    date: "February 15, 2024",
    readTime: "9 min read",
    category: "Innovation",
    gradient: "from-orange-500 to-purple-500",
    image: "AI-powered analytics interface with predictive models and insights",
    tags: ["AI", "Machine Learning", "Future"],
  },
]

const categories = ["All", "Industry Insights", "Best Practices", "Technology", "Strategy", "Innovation"]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navigation />

      {/* Hero section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 20px 20px, rgb(124 58 237 / 0.15) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <div className="container relative z-10 mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link href="/">
              <Button variant="ghost" className="mb-8 hover:bg-purple-100">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
              Insights & Resources
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mb-12">
              Explore our latest articles, guides, and industry insights to stay ahead in pharmaceutical sales analytics
            </p>

            {/* Search and filter */}
            <div className="flex flex-col md:flex-row gap-4 max-w-4xl">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input
                  placeholder="Search articles..."
                  className="pl-12 h-14 bg-white shadow-lg border-slate-200 focus:border-purple-400"
                />
              </div>
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 hover:from-purple-700 hover:via-pink-700 hover:to-orange-700 text-white h-14 px-8 shadow-lg"
              >
                Search
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="relative py-8 border-y border-slate-200 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-3 justify-center"
          >
            {categories.map((category, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  index === 0
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog posts grid */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {allBlogPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -12 }}
              >
                <Card className="overflow-hidden h-full hover:shadow-2xl transition-all duration-500 group">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-90`} />
                    <img
                      src={`/.jpg?height=350&width=500&query=${encodeURIComponent(post.image)}`}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />

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

                    <p className="text-slate-600 mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-slate-100 text-xs text-slate-600"
                        >
                          <Tag className="w-3 h-3" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Button
                      variant="ghost"
                      className="w-full justify-center group-hover:bg-purple-50 group-hover:text-purple-600 transition-all duration-300"
                    >
                      Read Full Article
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Load more */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-16"
          >
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-transparent"
            >
              Load More Articles
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
