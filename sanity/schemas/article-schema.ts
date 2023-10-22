import { ExternalLinkRenderer } from "@/app/(site)/_components/ViewPortableText";

const article = {
  name: "article",
  title: "Articles",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "description",
      content: "Description",
      type: "string",
      options: {
        maxLength: 200,
      },
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "tag" }], // Define a reference to another type (e.g., 'tag')
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
          marks: {
            annotations: [
              {
                name: "internalLink",
                type: "object",
                title: "Internal link",
                fields: [
                  {
                    name: "reference",
                    type: "reference",
                    title: "Reference",
                    to: [
                      { type: "article" },
                      { type: "project" },
                      // other types you may want to link to
                    ],
                  },
                ],
                components: {
                  annotation: ExternalLinkRenderer,
                },
              },
              {
                name: "link",
                type: "object",
                title: "External link",
                fields: [
                  {
                    name: "href",
                    type: "url",
                    title: "URL",
                  },
                  {
                    title: "Open in new tab",
                    name: "blank",
                    description:
                      "Read https://css-tricks.com/use-target_blank/",
                    type: "boolean",
                  },
                ],
                components: {
                  annotation: ExternalLinkRenderer,
                },
              },
            ],
          },
        },
        {
          type: "image",
        },
        {
          type: "code",
        },
      ],
    },
  ],
};

export default article;
