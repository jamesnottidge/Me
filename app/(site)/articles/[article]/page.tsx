import { getArticle } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import ViewPortableText from "../../_components/ViewPortableText";
type Props = {
  params: { article: string };
};

const components = {
  block: {
    // Add a custom component for rendering paragraphs with spacing
    normal: ({ children }) => (
      <p className="my-14">{children}</p> // You can adjust the margin (my-4) as needed
    ),
    // Define other block types as needed
  },
};

export default async function Project({ params }: Props) {
  const slug = params.article;
  const article = await getArticle(slug);
  return (
    <div>
      <header className="flex justify-between items-center">
        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 lg:text-5xl text-4xl drop-shadow font-extrabold">
          {article.title}
        </h1>
      </header>
      {/* content  */}

      <div className="text-xl lg:text-3xl mt-8">
        <ViewPortableText value={article.content} />
        
      </div>
    </div>
  );
}
