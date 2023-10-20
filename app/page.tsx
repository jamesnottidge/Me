import { getProjects } from "@/sanity/sanity-utils";

export default async function Home() {
    const projects = await getProjects();
    console.log("projects");
    console.log(projects);
  return (
    <div>
        {
            projects.map((project) => {
                return (
                    <div
                    key={project._id}
                    >
                     
                        <h1>{project.name}</h1>
                       
                    </div>
                )
            })
        }
    </div>
  )
}
