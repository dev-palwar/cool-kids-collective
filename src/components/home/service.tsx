import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Lightbulb, Video, PenTool, Users } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: <Lightbulb className="h-8 w-8" />,
    title: "Content Strategy",
    description:
      "Develop a winning content strategy that resonates with your audience and achieves your goals.",
  },
  {
    icon: <Video className="h-8 w-8" />,
    title: "Video Editing",
    description:
      "High-quality editing for social media, YouTube, and more to make your content stand out.",
  },
  {
    icon: <PenTool className="h-8 w-8" />,
    title: "Graphic Design",
    description:
      "Eye-catching designs for your branding, social media posts, thumbnails, and more.",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Brand Collaborations",
    description:
      "We connect creators with brands and help negotiate partnerships that align with your goals.",
  },
];

interface Props {
  id: string;
}

export default function ServicesSection({ id }: Props) {
  return (
    <section
      className="h-screen w-full py-12 md:py-24 lg:py-32 flex justify-center"
      id={id}
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center gap-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Our Services
          </h2>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Empowering creators and brands with comprehensive solutions to
            elevate their digital presence.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 mt-12">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col justify-between">
              <CardHeader>
                <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
                  {service.icon}
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">{service.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm" className="w-full" asChild>
                  <Link
                    href={`/services/${service.title
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    Learn More
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            asChild
          >
            <Link href="/start">Start Your Journey</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
