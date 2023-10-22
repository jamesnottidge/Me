import { ExternalLinkRenderer } from "@/app/(site)/_components/ViewPortableText";
const project = {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 100 },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: false },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "url",
      title: "URL",
      type: "url",
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

export default project;
