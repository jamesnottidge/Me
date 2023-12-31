import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";
import { Page } from "@/types/Page";
import { Article } from "@/types/Article";

export async function getProjects(): Promise<Project[]> {
  return createClient(clientConfig).fetch(
    groq`*[ _type == "project"]{
            _id, 
            _createdAt, 
            name, 
            alt,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content, 
            body[] {
                ...,
                markDefs[]{
                    ...,
                    _type == "internalLink" => {
                        "slug": @.reference->slug.current
                    }
                }
            }
        }`
  );
}

export async function getProject(slug: string): Promise<Project> {
  return createClient(clientConfig).fetch(
    groq`*[ _type == "project" && slug.current == $slug][0]{
            _id, 
            _createdAt, 
            name, 
            alt,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content, 
              body[] {
                ...,
                markDefs[]{
                    ...,
                    _type == "internalLink" => {
                        "slug": @.reference->slug.current
                    }
                }
            }
        }`,
    { slug }
  );
}

export async function getPages(): Promise<Page[]> {
  return createClient(clientConfig).fetch(
    groq`*[ _type == "page"]{
            _id, 
            _createdAt, 
            title, 
            "slug": slug.current,
              body[] {
                ...,
                markDefs[]{
                    ...,
                    _type == "internalLink" => {
                        "slug": @.reference->slug.current
                    }
                }
            },
            
        }`
  );
}

export async function getPage(slug: string): Promise<Page> {
  return createClient(clientConfig).fetch(
    groq`*[ _type == "page" && slug.current == $slug][0]{
            _id, 
            _createdAt, 
            title, 
            "slug": slug.current,
            content, 
              body[] {
                ...,
                markDefs[]{
                    ...,
                    _type == "internalLink" => {
                        "slug": @.reference->slug.current
                    }
                }
            }
        }`,
    { slug }
  );
}

export async function getArticles(): Promise<Article[]> {
  return createClient(clientConfig).fetch(
    groq`*[ _type == "article"]{
            _id, 
            _createdAt, 
            title, 
            description,
            "slug": slug.current,
            tags,
            content,
              body[] {
                ...,
                markDefs[]{
                    ...,
                    _type == "internalLink" => {
                        "slug": @.reference->slug.current
                    }
                }
            }
        }`
  );
}

export async function getArticle(slug: string): Promise<Article> {
  return createClient(clientConfig).fetch(
    groq`*[ _type == "article" && slug.current == $slug][0]{
            _id, 
            _createdAt, 
            title, 
            description, 
            "slug": slug.current, 
            tags,
            content ,
              body[] {
                ...,
                markDefs[]{
                    ...,
                    _type == "internalLink" => {
                        "slug": @.reference->slug.current
                    }
                }
            }
        }`,
    { slug }
  );
}
