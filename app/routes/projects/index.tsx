import ProjectCard from "~/components/ProjectCard";
import type { Route } from "./+types";
import type { Project } from "~/types";

export async function loader({
  request
}: Route.LoaderArgs): Promise<{ projects: Project[] }> {
  const res = await fetch("http://localhost:8000/projects");
  const data = await res.json();

  return { projects: data };
}

const ProjectPage = ({ loaderData }: Route.ComponentProps) => {
  const { projects } = loaderData as { projects: Project[] };

  console.log(projects);

  return (
    <>
      <h2 className="text-3xl font-bold text-white mb-8">Project Page!!</h2>

      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project) => {
          return (
            <ProjectCard project={project}></ProjectCard>
          );
        })}
      </div>
    </>
  );
};

export default ProjectPage;
