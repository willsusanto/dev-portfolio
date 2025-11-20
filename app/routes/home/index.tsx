import type { Route } from "./+types/index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dev Portfolio | Welcome Page" },
    { name: "description", content: "Dev Portfolio Website!" },
  ];
}

export default function Home() {
  console.log("test!");
  return <section>Welcome Home!!!</section>
}
