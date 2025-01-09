import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const portfolioItems = [
  {
    title: "Cool Kids Collective Campaign",
    description:
      "Increased engagement by 150% through strategic content planning and video editing.",
    imageBefore: "/placeholder.svg?height=300&width=400",
    imageAfter: "/placeholder.svg?height=300&width=400",
    clientLogo: "/placeholder.svg?height=50&width=100",
  },
  {
    title: "Eco Warriors Brand Collaboration",
    description:
      "Negotiated and executed a successful partnership, resulting in a 200% increase in followers.",
    imageBefore: "/placeholder.svg?height=300&width=400",
    imageAfter: "/placeholder.svg?height=300&width=400",
    clientLogo: "/placeholder.svg?height=50&width=100",
  },
  {
    title: "Tech Innovators Video Series",
    description:
      "Produced and edited a viral video series, garnering over 1 million views across platforms.",
    imageBefore: "/placeholder.svg?height=300&width=400",
    imageAfter: "/placeholder.svg?height=300&width=400",
    clientLogo: "/placeholder.svg?height=50&width=100",
  },
];

interface Props {
  id: string;
}

export default function PortfolioSection({ id }: Props) {
  return (
    <section
      className="w-full py-12 md:py-24 lg:py-32 flex justify-center"
      id={id}
    >
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
          Our Work
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-500 mb-4">{item.description}</p>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium mb-1">Before</p>
                      <Image
                        src={item.imageBefore}
                        alt={`Before image for ${item.title}`}
                        width={400}
                        height={300}
                        className="rounded-lg"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-1">After</p>
                      <Image
                        src={item.imageAfter}
                        alt={`After image for ${item.title}`}
                        width={400}
                        height={300}
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <Image
                      src={item.clientLogo}
                      alt={`Client logo for ${item.title}`}
                      width={100}
                      height={50}
                      className="rounded"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            asChild
          >
            <Link href="/portfolio">See Full Portfolio</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
