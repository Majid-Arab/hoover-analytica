"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { colorThemes } from "@/lib/theme-config";
import { useTheme } from "@/contexts/theme-context";

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { colorTheme } = useTheme();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gradientClass = colorThemes[colorTheme].gradient;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
    }> = [];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
      });
    }

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(124, 58, 237, 0.3)";
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen flex items-center pt-10 md:pt-20 lg:pt-30"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(111.84deg, #FBFBFB 34.62%, rgba(131, 58, 180, 0.22) 66.09%, rgba(252, 176, 69, 0.5) 95.33%)",
        }}
      />

      <motion.div
        style={{ opacity }}
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6 sm:space-y-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm"
            >
              <span className="text-xs sm:text-sm font-medium bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Powered by Exponent Engineers
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-3xl xl:text-5xl font-bold leading-tight text-balance"
            >
              Transform Your Business Sales with{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Smarter Maps
              </span>{" "}
              & Real-Time Analytics
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-md text-muted-foreground leading-relaxed text-pretty"
            >
              Hoover Analytica is a powerful, map-based application designed for
              pharmaceutical companies to analyze customer sales, monitor doctor
              performance, track sales force activities, and make data-driven
              decisions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  className={`bg-gradient-to-r ${gradientClass} hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl`}
                >
                  Request a Demo
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 hover:text-black hover:bg-primary/5 transition-all group w-full sm:w-auto bg-transparent"
                >
                  <Play className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                  Explore Features
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column - Dashboard Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-2xl overflow-hidden backdrop-blur-sm bg-card/50 shadow-2xl hover:shadow-primary/20"
            >
              <img
                src="/pharmaceutical-sales-analytics-dashboard-with-inte.jpg"
                alt="Hoover Analytica Dashboard"
                className="w-full h-auto"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
