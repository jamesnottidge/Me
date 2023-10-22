import { PortableTextBlock } from "sanity";

type Tag = {
    _key: string;
    name: string;
}

export type Article = {
  _id: string;
  _createdAt: string;
  title: string;
  description: string;
  tags: Tag[];
  slug: string;
  content: PortableTextBlock[];
};
