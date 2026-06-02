import type { Project } from "~/types";
import type { Route } from "./+types/details";
import ProjectCard from "~/components/ProjectCard";

export async function clientLoader({
  params,
}: Route.ClientLoaderArgs): Promise<Project> {
  const projectId = params.projectId;
  const res = await fetch(`http://localhost:8000/projects/${projectId}`);

  if (!res.ok) throw new Response("Project not found", { status: 404 })
  const project: Project = await res.json();

  return project; 
}

export function HydrateFallback() {
  return <div>Loading...</div>
}

const DetailsPage = ({ loaderData }: Route.ComponentProps) => {
  console.log(loaderData);
  return (
    <ProjectCard project={loaderData}></ProjectCard>
  );
};

export default DetailsPage;
