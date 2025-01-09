import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const pricingTiers = [
  {
    name: "Starter Package",
    description: "Content Strategy + 2 Edits",
    price: "₹10,000/month",
    features: [
      "Content strategy consultation",
      "2 video or graphic edits",
      "Basic analytics report",
    ],
  },
  {
    name: "Growth Package",
    description: "Content Strategy + 5 Edits + Design",
    price: "₹25,000/month",
    features: [
      "Comprehensive content strategy",
      "5 video or graphic edits",
      "Custom graphic design",
      "Detailed analytics and insights",
    ],
  },
  {
    name: "Custom Package",
    description: "Tailored Solutions",
    price: "Contact for pricing",
    features: [
      "Fully customized strategy and services",
      "Priority support",
      "Brand collaboration assistance",
    ],
  },
];

interface Props {
  id: string;
}

export default function PricingSection({ id }: Props) {
  return (
    <section
      className="w-full py-12 md:py-24 lg:py-32 flex justify-center"
      id={id}
    >
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
          Our Pricing
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pricingTiers.map((tier, index) => (
            <Card key={index} className="flex flex-col justify-between">
              <CardHeader>
                <CardTitle>{tier.name}</CardTitle>
                <CardDescription>{tier.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{tier.price}</p>
                <ul className="mt-4 space-y-2">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="/contact">Get a Quote</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
