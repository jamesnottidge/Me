import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";

export async function getProjects(): Promise<Project[]> {
  const client = createClient({
    projectId: "ngwkfhf6",
    dataset: "production",
    apiVersion: "2023-10-20",
  });
  return client.fetch(
    groq`*[ _type == "project"]{
            _id, 
            _createdAt, 
            name, 
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`
  );
}
