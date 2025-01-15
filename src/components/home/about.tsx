import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, PenTool, Lightbulb } from "lucide-react";

export default function AboutSection() {
  const services = [
    {
      icon: <PenTool className="h-6 w-6" />,
      title: "Content Strategy",
      description:
        "Strategic planning and execution of content that resonates with your audience",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Brand Collaborations",
      description:
        "Connecting creators with brands for meaningful partnerships",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Video Editing",
      description: "Professional video editing to enhance your content quality",
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Graphic Design",
      description: "Eye-catching visuals that strengthen your brand identity",
    },
  ];

  return (
    <section
      className="scroll-smooth h-screen w-full py-12 md:py-24 lg:py-32 flex justify-center items-center"
      id="about-section"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 flex flex-col gap-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Who We Are
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              At Cool Kids Collective, were passionate about helping creators
              and brands unlock their full potential. We specialize in content
              strategy, video editing, graphic design, and brand collaborations.
              Whether youre a new creator or an established influencer, well
              help you grow and succeed in the digital space.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-5xl text-center">
          <blockquote className="border-l-4 border-primary pl-4 italic text-xl text-gray-600">
            Were here to empower creators and brands to connect with audiences
            through impactful content that tells a story.
          </blockquote>
        </div>

        <div className="mx-auto mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card key={index} className="bg-white">
              <CardContent className="flex flex-col items-center space-y-4 p-6">
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-center text-sm text-gray-500">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* <div className="mt-16 flex justify-center">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Learn More About Us
          </Button>
        </div> */}
      </div>
    </section>
  );
}
