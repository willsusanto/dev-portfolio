import type { Route } from "./+types/index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dev Portfolio | Welcome Page" },
    { name: "description", content: "Dev Portfolio Website!" },
  ];
}

export default function Home() {
  return <section>Welcome Home!!!</section>
}
