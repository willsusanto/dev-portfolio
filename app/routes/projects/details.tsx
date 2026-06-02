import React from "react";
import type { Project } from "~/types";
import type { Route } from "./+types/details";
import ProjectCard from "~/components/ProjectCard";

export async function loader({
  params,
}: Route.LoaderArgs): Promise<{ projectData: Project }> {
  const projectId = params.projectId;
  const res = await fetch(`http:localhost:8000/projects/${projectId}`);
  const data = await res.json();

  return { projectData: data as Project };
}

const DetailsPage = ({ loaderData }: Route.ComponentProps) => {
  console.log(loaderData);
  return (
    <ProjectCard project={loaderData.projectData}></ProjectCard>
  );
};

export default DetailsPage;
