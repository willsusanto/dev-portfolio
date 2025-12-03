import Hero from "~/components/Hero";
import type { Route } from "./+types/index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dev Portfolio | Welcome Page" },
    { name: "description", content: "Dev Portfolio Website!" },
  ];
}

export default function Home() {
  const now = new Date().toISOString();

  // if (typeof window === 'undefined') {
  //   console.log(`Server renders at: ${now}`);
  // } else {
  //   console.log(`Client renders at: ${now}`);
  // }

  return <>This is homepage</>;
}
