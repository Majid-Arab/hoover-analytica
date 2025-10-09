"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { useTheme } from "@/contexts/theme-context";
import { colorThemes } from "@/lib/theme-config";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { colorTheme } = useTheme();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolled(window.scrollY > 20);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  const gradientClass = colorThemes[colorTheme].gradient;

  return (
    <>
      <nav
        className={`top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link href="/" className="flex items-center gap-2 group">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br ${gradientClass}`}
              />
              <span
                className={`text-lg sm:text-xl font-bold bg-gradient-to-r ${gradientClass} bg-clip-text text-transparent`}
              >
                Hoover Analytica
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                href="#features"
                className="text-sm font-medium hover:text-primary transition-colors relative group"
              >
                Features
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r ${gradientClass} group-hover:w-full transition-all duration-300`}
                />
              </Link>
              <Link
                href="#pricing"
                className="text-sm font-medium hover:text-primary transition-colors relative group"
              >
                Pricing
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r ${gradientClass} group-hover:w-full transition-all duration-300`}
                />
              </Link>
              <Link
                href="#about"
                className="text-sm font-medium hover:text-primary transition-colors relative group"
              >
                About
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r ${gradientClass} group-hover:w-full transition-all duration-300`}
                />
              </Link>
              <Link
                href="/blog"
                className="text-sm font-medium hover:text-primary transition-colors relative group"
              >
                Blog
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r ${gradientClass} group-hover:w-full transition-all duration-300`}
                />
              </Link>
              <Link
                href="#contact"
                className="text-sm font-medium hover:text-primary transition-colors relative group"
              >
                Contact
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r ${gradientClass} group-hover:w-full transition-all duration-300`}
                />
              </Link>
              <ThemeSwitcher />
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  className={`bg-gradient-to-r ${gradientClass} hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl`}
                >
                  Request a Demo
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <ThemeSwitcher />
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden py-4 border-t border-border"
            >
              <div className="flex flex-col gap-4">
                <Link
                  href="#features"
                  className="text-sm font-medium hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Features
                </Link>
                <Link
                  href="#pricing"
                  className="text-sm font-medium hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  href="#about"
                  className="text-sm font-medium hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/blog"
                  className="text-sm font-medium hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  href="#contact"
                  className="text-sm font-medium hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <Button
                  className={`bg-gradient-to-r ${gradientClass} hover:opacity-90 transition-opacity w-full`}
                >
                  Request a Demo
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </nav>
    </>
  );
}
