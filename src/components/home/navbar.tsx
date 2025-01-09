"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { smoothScroll } from "@/lib/utils";

export default function Navbar() {
  const navLinks = [
    { href: "#hero-section", label: "Home" },
    { href: "#about-section", label: "About" },
    { href: "#services-section", label: "Services" },
    { href: "/#portfolio-section", label: "Portfolio" },
    { href: "/#tesimonial-section", label: "Testimonials" },
    { href: "/#pricing-section", label: "Pricing" },
    { href: "/#contact-section", label: "Contact" },
  ];

  const renderNavLinks = () =>
    navLinks.map(({ href, label }) => (
      <Link
        key={href}
        href={href}
        className="text-sm text-gray-600 hover:text-gray-900"
        scroll
      >
        {label}
      </Link>
    ));

  return (
    <nav className="fixed top-0 z-50 w-full backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="text-xl font-semibold">
            Cool kids Collective
          </Link>
        </div>

        {/* Main Navigation Links */}
        <div className="hidden space-x-8 md:flex ">
          <div className="flex items-center space-x-1 gap-[1.3rem]">
            {renderNavLinks()}
            {/* <ChevronDown className="h-4 w-4 text-gray-600" /> */}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/login" onClick={smoothScroll}>
              Login
            </Link>
          </Button>
          <Button size="sm" className="bg-gray-900 hover:bg-gray-800" asChild>
            <Link href="/get-started" onClick={smoothScroll}>
              Get started
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
