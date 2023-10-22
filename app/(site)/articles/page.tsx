import { getArticles } from "@/sanity/sanity-utils";
import Link from "next/link";
import { dateFormatter } from "../utils";

export default async function Articles() {
  const articles = await getArticles();
  console.log(articles[0].tags[0].name);
  return (
    <div>
      <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 text-5xl drop-shadow font-extrabold">
        Articles
      </h1>
      <div className="mt-10">
        {articles.map((article) => (
          <div key={article._id} className="mt-8">
            <Link href={`/articles/${article.slug}`}>
            <h2 className="text-gray-300 text-xs font-thin lg:text-sm">
              {dateFormatter(article._createdAt)}
            </h2>
            <h1 className="text-2xl lg:text-4xl font-bold text-white">
              {article.title}
            </h1>
            <p className="text-gray-400 text-sm lg:text-base mt-2">
              {article.description}
            </p>
            </Link>
            <div 
            className="mt-2"
            >
              {article.tags?.map((tag) => (
                <span
                  key={tag._key}
                  className="text-xs lg:text-sm text-gray-300 bg-gray-800 px-2 py-1 rounded-lg mr-1"
                >
                  {tag.name}
                </span>
              ))}
            </div>

            <hr className="mt-10" />
          </div>
        ))}
      </div>
    </div>
  );
}
