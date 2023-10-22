import { PortableTextBlock } from "sanity";

export type Article = {
  _id: string;
  _createdAt: string;
  title: string;
  description: string;
  slug: string;
  content: PortableTextBlock[];
};
