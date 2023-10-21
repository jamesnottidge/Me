const blog =  {
    name: 'blog',
    title: 'Blog',
    type: 'document',
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
            }
        },
        {
            name: "content",
            title: "Content",
            type: "array",
            of: [{ type: "block" }],
        }

    ],
}

export default blog;