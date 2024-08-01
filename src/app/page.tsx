import Links from "@/components/Links";
import Link from "next/link";

interface listLinks {
  title: string;
  route: string;
}

const routes: listLinks[] = [
  { title: "animate props", route: "/animateprops" },
  { title: "drag", route: "/drag" },
  { title: "variants", route: "/variants" },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Links listLinks={routes} />
    </main>
  );
}
