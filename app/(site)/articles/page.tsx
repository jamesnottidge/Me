import { getArticles } from "@/sanity/sanity-utils";
import { dateFormatter } from "../utils";

export default async function Articles() {
  const articles = await getArticles();
  return (
    <div>
      <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 text-5xl drop-shadow font-extrabold">
        Articles
      </h1>
      <div className="mt-10">
      {articles.map((article) => (
        <div
        key={article._id}
        className="mt-8"
        >
          <h2
          className="text-gray-300 text-xs font-thin lg:text-sm"
          >{dateFormatter(article._createdAt)}</h2>
          <h1
          className="text-2xl lg:text-4xl font-bold text-white"
          >{article.title}</h1>
          <p
          className="text-gray-400 text-sm lg:text-base mt-2"
          >{article.description}</p>

          <hr className="mt-10" />
        </div>
      ))}
      </div>
    </div>
  );
}
