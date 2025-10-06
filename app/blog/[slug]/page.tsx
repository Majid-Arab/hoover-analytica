"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Calendar, Clock, Share2, BookOpen, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { notFound } from "next/navigation"

// Blog post data (in a real app, this would come from a CMS or database)
const blogPosts: Record<
  string,
  {
    title: string
    excerpt: string
    date: string
    readTime: string
    category: string
    author: string
    gradient: string
    image: string
    content: {
      intro: string
      sections: Array<{
        heading: string
        paragraphs: string[]
      }>
      conclusion: string
    }
  }
> = {
  "future-of-pharmaceutical-sales-analytics": {
    title: "The Future of Pharmaceutical Sales Analytics",
    excerpt:
      "Discover how map-based analytics is revolutionizing the pharmaceutical industry and driving data-driven decisions.",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Industry Insights",
    author: "Dr. Sarah Johnson",
    gradient: "from-purple-500 to-pink-500",
    image: "modern pharmaceutical analytics dashboard with interactive maps and data visualizations",
    content: {
      intro:
        "The pharmaceutical industry is undergoing a digital transformation, and at the heart of this revolution lies advanced sales analytics. Map-based analytics platforms are changing how pharmaceutical companies understand their markets, optimize their sales strategies, and make critical business decisions.",
      sections: [
        {
          heading: "The Power of Geospatial Intelligence",
          paragraphs: [
            "Traditional sales analytics often miss the crucial spatial dimension of pharmaceutical sales. Where your customers are located, how they cluster, and how territories overlap are all critical factors that can make or break a sales strategy.",
            "Modern map-based analytics platforms like Hoover Analytica bring this spatial intelligence to the forefront, allowing sales managers to visualize their entire operation on an interactive map. This bird's-eye view reveals patterns and opportunities that would be invisible in traditional spreadsheets or charts.",
          ],
        },
        {
          heading: "Real-Time Decision Making",
          paragraphs: [
            "In today's fast-paced pharmaceutical market, decisions need to be made quickly. Real-time analytics enable sales managers to respond to market changes as they happen, rather than weeks or months later when reviewing historical data.",
            "With live tracking of sales representative activities, doctor engagement, and prescription patterns, managers can identify issues and opportunities immediately and take corrective action before small problems become major setbacks.",
          ],
        },
        {
          heading: "Predictive Analytics and AI",
          paragraphs: [
            "The future of pharmaceutical sales analytics isn't just about understanding what happened or what's happening now—it's about predicting what will happen next. Advanced AI algorithms can analyze historical patterns, seasonal trends, and market dynamics to forecast future sales performance.",
            "These predictive insights allow pharmaceutical companies to allocate resources more effectively, identify high-potential territories before competitors do, and optimize their sales strategies for maximum impact.",
          ],
        },
      ],
      conclusion:
        "As we look to the future, map-based analytics will become increasingly essential for pharmaceutical companies that want to stay competitive. The combination of geospatial intelligence, real-time data, and predictive AI creates a powerful toolkit for driving sales growth and operational efficiency. Companies that embrace these technologies today will be the market leaders of tomorrow.",
    },
  },
  "optimizing-territory-management-with-geotagging": {
    title: "Optimizing Territory Management with Geotagging",
    excerpt:
      "Learn how precise geotagging can transform your sales territory strategy and improve resource allocation.",
    date: "March 10, 2024",
    readTime: "7 min read",
    category: "Best Practices",
    author: "Michael Chen",
    gradient: "from-pink-500 to-orange-500",
    image: "sales territory map with color-coded regions and location pins",
    content: {
      intro:
        "Territory management is one of the most critical yet challenging aspects of pharmaceutical sales. Poor territory design leads to wasted resources, missed opportunities, and frustrated sales teams. Geotagging technology offers a solution by bringing precision and data-driven insights to territory planning.",
      sections: [
        {
          heading: "What is Geotagging?",
          paragraphs: [
            "Geotagging is the process of adding geographical identification metadata to various media such as customer records, pharmacy locations, and doctor offices. In pharmaceutical sales, this means knowing the exact location of every customer, prospect, and point of interest in your market.",
            "This precise location data becomes the foundation for intelligent territory design, allowing you to create boundaries based on actual geography, customer density, and market potential rather than arbitrary lines on a map.",
          ],
        },
        {
          heading: "Benefits of Geotagged Territory Management",
          paragraphs: [
            "When every customer and prospect is accurately geotagged, you can design territories that balance workload, minimize travel time, and maximize face-to-face selling time. Sales representatives spend less time driving and more time engaging with healthcare professionals.",
            "Geotagging also enables dynamic territory adjustment. As your customer base grows or market conditions change, you can quickly redraw territory boundaries to maintain balance and efficiency across your sales force.",
          ],
        },
        {
          heading: "Implementation Best Practices",
          paragraphs: [
            "Successful geotagging implementation starts with data quality. Invest time in cleaning and validating your customer database before beginning the geotagging process. Inaccurate addresses lead to inaccurate geotags, which undermine the entire system.",
            "Engage your sales team in the geotagging process. They have valuable on-the-ground knowledge about customer locations and can help validate and correct geotag data. Mobile apps that allow field teams to update geotags in real-time are essential for maintaining data accuracy.",
          ],
        },
      ],
      conclusion:
        "Geotagging transforms territory management from an art into a science. By leveraging precise location data, pharmaceutical companies can create more efficient territories, reduce costs, and improve sales performance. The investment in geotagging technology pays dividends through better resource allocation and happier, more productive sales teams.",
    },
  },
  "real-time-sales-tracking-game-changer": {
    title: "Real-Time Sales Tracking: A Game Changer",
    excerpt:
      "Explore the benefits of real-time sales monitoring and how it empowers field teams to make instant decisions.",
    date: "March 5, 2024",
    readTime: "6 min read",
    category: "Technology",
    author: "Emily Rodriguez",
    gradient: "from-orange-500 to-purple-500",
    image: "real-time sales dashboard with live data updates and performance metrics",
    content: {
      intro:
        "In the pharmaceutical industry, timing is everything. A doctor's prescribing habits can change overnight, a competitor can launch a new product, or a regulatory change can shift market dynamics. Real-time sales tracking gives pharmaceutical companies the agility to respond to these changes as they happen.",
      sections: [
        {
          heading: "The Limitations of Traditional Reporting",
          paragraphs: [
            "Traditional sales reporting operates on a delay—weekly, monthly, or quarterly reports that show what happened in the past. By the time managers see the data, analyze it, and make decisions, the market has already moved on.",
            "This lag creates blind spots where problems can grow unnoticed and opportunities can slip away. Real-time tracking eliminates this delay, giving managers a live view of their sales operation.",
          ],
        },
        {
          heading: "Empowering Field Teams",
          paragraphs: [
            "Real-time tracking isn't just for managers—it empowers sales representatives too. With instant access to their performance metrics, territory data, and customer information, reps can make better decisions in the field.",
            "They can see which doctors they haven't visited recently, which products are performing well in their territory, and how they're tracking against their goals—all from their mobile device while on the road.",
          ],
        },
        {
          heading: "Immediate Course Correction",
          paragraphs: [
            "Perhaps the most valuable benefit of real-time tracking is the ability to course-correct immediately. If a sales rep is falling behind on their call targets, their manager can reach out the same day to offer support. If a particular product is underperforming in a region, marketing can adjust their strategy immediately.",
            "This agility transforms sales management from reactive to proactive. Instead of analyzing what went wrong last month, managers can prevent problems before they impact results.",
          ],
        },
      ],
      conclusion:
        "Real-time sales tracking represents a fundamental shift in how pharmaceutical companies manage their sales operations. The ability to see what's happening now, rather than what happened weeks ago, enables faster decisions, better support for field teams, and ultimately, better sales results. In an increasingly competitive market, this real-time visibility isn't just nice to have—it's essential for success.",
    },
  },
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug]

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 opacity-50" />
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <div className="container relative z-10 mx-auto px-4 max-w-4xl">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link href="/blog">
              <Button variant="ghost" className="group hover:bg-purple-100 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Blog
              </Button>
            </Link>
          </motion.div>

          {/* Category badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6"
          >
            <span
              className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${post.gradient} text-white text-sm font-semibold shadow-lg`}
            >
              {post.category}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent leading-tight"
          >
            {post.title}
          </motion.h1>

          {/* Meta information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-6 text-slate-600 mb-8"
          >
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </motion.div>

          {/* Share button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              variant="outline"
              className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition-all bg-transparent"
            >
              <Share2 className="w-4 h-4 mr-2" />
              Share Article
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="relative pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-20`} />
            <img
              src={`/.jpg?height=600&width=1200&query=${encodeURIComponent(post.image)}`}
              alt={post.title}
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="relative pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card className="p-8 md:p-12 shadow-xl">
              {/* Introduction */}
              <p className="text-lg text-slate-700 leading-relaxed mb-8">{post.content.intro}</p>

              {/* Sections */}
              {post.content.sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="mb-10"
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                    <div className={`w-2 h-8 rounded-full bg-gradient-to-b ${post.gradient}`} />
                    {section.heading}
                  </h2>
                  {section.paragraphs.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-slate-700 leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </motion.div>
              ))}

              {/* Conclusion */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mt-12 p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 border-l-4 border-purple-600"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-purple-600" />
                  Conclusion
                </h3>
                <p className="text-slate-700 leading-relaxed">{post.content.conclusion}</p>
              </motion.div>
            </Card>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 text-center"
          >
            <Card className="p-8 md:p-12 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 text-white shadow-2xl">
              <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Sales Analytics?</h3>
              <p className="text-lg mb-8 opacity-90">
                Discover how Hoover Analytica can help your pharmaceutical company make data-driven decisions
              </p>
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-slate-100 px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Request a Demo
              </Button>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
