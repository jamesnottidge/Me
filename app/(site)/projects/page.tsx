import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function ProjectHome() {
    const projects = await getProjects();

    return (
      <div className="mt-5 grid lg:grid-cols-3 md:grid-cols-2 gap-8">
        {projects.map((project) => {
          return (
            <Link
              href={`/projects/${project.slug}`}
              key={project._id}
              className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition"
            >
              {project.image && (
                <div className="w-full h-52 overflow-hidden relative">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill={true}
                    objectFit="cover"
                    className="rounded-lg border border-gray-500"
                  />
                </div>
              )}
              <h1 className="mt-2  bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-red-500 to-purple-600">
                {project.name}
              </h1>
            </Link>
          );
        })}
      </div>
    );
}