import Link from "next/link";
import { Button } from "../ui/button";

interface Props {
  id: string;
}

export default function Hero({ id }: Props) {
  return (
    <div
      className="h-screen mx-auto max-w-7xl px-4 pt-32 text-center sm:px-6 sm:pt-40"
      id={id}
    >
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
        Empowering Creators.
        <span className="block">Connecting Brands.</span>
        <span className="block">Amplifying Content.</span>
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
        From strategy to collaborations, we provide content solutions that help
        creators and brands grow in the digital world.
      </p>
      <div className="mt-8 flex justify-center space-x-4">
        <Button size="lg" className="bg-gray-900 hover:bg-gray-800" asChild>
          <Link href="/trial">Work With Us 🚀</Link>
        </Button>
      </div>

      {/* Avatar group */}
      <div className="mt-16">
        {/* <div className="flex justify-center -space-x-2">
            {avatars.map((avatar, i) => (
              <div
                key={i}
                className="relative inline-block h-10 w-10 rounded-full border-2 border-white"
              >
                <Image
                  src={avatar}
                  alt={`User avatar ${i + 1}`}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
            ))}
          </div> */}
        <p className="mt-4 text-sm text-gray-600">
          Join{" "}
          <span className="font-semibold">
            175+ creators, and new-age startups
          </span>
          <br />
          and start publishing your content today
        </p>
      </div>
    </div>
  );
}
