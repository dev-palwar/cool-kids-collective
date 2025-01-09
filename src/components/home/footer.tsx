import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import { Input } from "../ui/input";

export default function Footer() {
  return (
    <footer className="w-full py-6 flex justify-center">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about-section" className="hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:underline">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/content-strategy"
                  className="hover:underline"
                >
                  Content Strategy
                </Link>
              </li>
              <li>
                <Link
                  href="/services/video-editing"
                  className="hover:underline"
                >
                  Video Editing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/graphic-design"
                  className="hover:underline"
                >
                  Graphic Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services/brand-collaborations"
                  className="hover:underline"
                >
                  Brand Collaborations
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-primary">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Start Your Project</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur, excepturi.
            </p>
            <Input placeholder="enter your email here" />
            <Button className="w-full" asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center">
          <p>&copy; 2025 Cool kids Collective. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
