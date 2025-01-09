import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Instagram, Linkedin, Twitter } from "lucide-react";

interface Props {
  id: string;
}

export default function ContactSection({ id }: Props) {
  return (
    <section
      className="w-full py-12 md:py-24 lg:py-32 flex justify-center"
      id={id}
    >
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
          Lets Connect
        </h2>
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
              <CardDescription>
                Well get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <label htmlFor="name">Name</label>
                    <Input id="name" placeholder="Enter your name" />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="email">Email</label>
                    <Input
                      id="email"
                      placeholder="Enter your email"
                      type="email"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="service">Service Interested In</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="content-strategy">
                          Content Strategy
                        </SelectItem>
                        <SelectItem value="video-editing">
                          Video Editing
                        </SelectItem>
                        <SelectItem value="graphic-design">
                          Graphic Design
                        </SelectItem>
                        <SelectItem value="brand-collaborations">
                          Brand Collaborations
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="message">Message</label>
                    <Textarea id="message" placeholder="Enter your message" />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Send Message</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>
                Reach out to us directly or connect on social media.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>
                  <strong>Email:</strong> info@digitalcreatorhub.com
                </p>
                <div>
                  <p className="font-semibold mb-2">Social Media:</p>
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
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
