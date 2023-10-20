import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";

export default async function Home() {
  const projects = await getProjects();
  return (
    <div className="max-w-5xl mx-auto py-20">
      <h1 className="text-7xl font-extrabold">
        Hello I&apos;m{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-red-500 to-purple-600">
          Nottidge
        </span>
      </h1>

      <p className="mt-3 text-xl text-gray-600">
        {" "}
        Hey Everyone! Thanks for Stopping by
      </p>
      <h2 className="mt-24 font-bold text-gray-700 text-3xl">My Projects</h2>
      <div className="mt-5 grid lg:grid-cols-3 md:grid-cols-2 gap-8">
        {projects.map((project) => {
          return (
            <div
              key={project._id}
              className="border-2 border-gray-500 rounded-lg p-1"
            >
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.name}
                  width={750}
                  height={300}
                  className="object-cover rounded-lg border border-gray-500"
                />
              )}
              <h1 className="mt-2  bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-red-500 to-purple-600">
                {project.name}
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}
