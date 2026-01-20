import type { Route } from "./+types";
import type { Project } from "~/types"

export async function loader({ request }: Route.LoaderArgs): Promise<{ projects: Project[] }> {
  const res = await fetch("http:localhost:8000/projects");
  const data = await res.json();

  return { projects: data };
}

const ProjectPage = ({ loaderData }: Route.ComponentProps) => {
  const { projects } = loaderData as { projects: Project[] };

  console.log(projects);

  return (
    <>
      <h2 className="text-3xl font-bold text-white mb-8">Project Page!!</h2>

      <div className="flex gap-4">
        {projects.map((project) => {
          return <div className="bg-white rounded-lg shadow-2xl p-3 aspect-square">
            <h1 className="text-black">{project.title}</h1>
            <h3>{project.description}</h3>
          </div>;
        })}
      </div>
    </>
  );
};

export default ProjectPage;
