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
      of: [{ type: "block" }],
    },
  ],
};


export default article;
