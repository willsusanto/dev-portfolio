import React from "react";
import type { Project } from "~/types";

const ProjectDetails = ({ project }: { project: Project }) => {
  return (
    <div
      key={project.id}
      className="bg-white rounded-lg shadow-sm p-3 border-gray-400 overflow-hidden transition hover:shadow-md shadow-yellow-400"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-40 object-cover"
      ></img>

      <div className="p-5">
        <h1 className="text-blue-500 font-semibold">{project.title}</h1>
        <h4 className="text-sm text-gray-500">{project.description}</h4>
      </div>

      <div className="flex justify-between text-gray-400 text-sm px-5 pb-2 py-0">
        <span>{project.category}</span>
        <span>{new Date(project.date).toLocaleDateString()}</span>
      </div>
    </div>
  );
};

export default ProjectDetails;
