"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote:
      "Working with Cool Kids Collective transformed my Instagram! The content strategy and editing helped me increase my engagement by 200%.",
    author: "Jane Doe",
    role: "Fashion Influencer",
  },
  {
    quote:
      "The team's expertise in brand collaborations opened up new opportunities for my channel. I'm now working with brands I've always dreamed of!",
    author: "John Smith",
    role: "Tech YouTuber",
  },
  {
    quote:
      "Their graphic design work has given my brand a professional edge. My audience loves the new look!",
    author: "Emily Brown",
    role: "Lifestyle Blogger",
  },
  {
    quote:
      "The video editing service took my content to the next level. My videos are now much more engaging and professional.",
    author: "Alex Johnson",
    role: "Travel Vlogger",
  },
  {
    quote:
      "I've seen a significant increase in my conversion rates since implementing their content strategy. Highly recommended!",
    author: "Sarah Lee",
    role: "E-commerce Entrepreneur",
  },
];

interface Props {
  id: string;
}

export default function TestimonialsSection({ id }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 flex justify-center"
      id={id}
    >
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
          What Our Clients Say
        </h2>
        <div className="relative h-[400px] overflow-hidden">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={cn(
                "absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in-out",
                index === activeIndex
                  ? "opacity-100 translate-x-0"
                  : index === (activeIndex + 1) % testimonials.length
                  ? "opacity-0 translate-x-full"
                  : "opacity-0 -translate-x-full"
              )}
            >
              <CardContent className="flex flex-col justify-center h-full p-6 text-center">
                <blockquote className="text-lg md:text-xl italic mb-4">
                  {testimonial.quote}
                </blockquote>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-3 h-3 rounded-full mx-1 focus:outline-none",
                index === activeIndex ? "bg-primary" : "bg-gray-300"
              )}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
