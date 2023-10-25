import { getProjects, getArticles } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@sanity/icons";
import avatar from "@/public/assets/images/avatar.jpeg";
import Ticker from "./_components/Ticker";
import { dateFormatter } from "./utils";

export default async function Home() {
  const projects = await getProjects();
  const articles = await (await getArticles()).slice(0, 3);
  return (
    <div>
      <h1 className="md:text-7xl sm:text-6xl text-5xl lg:text-8xl font-extrabold">
        Hello, I&apos;m{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-red-500 to-purple-600">
          Nottidge
        </span>
      </h1>

      <p className="mt-3 text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-600">
        {" "}
        Technician and All Round Nice Guy
      </p>

      <div className="flex justify-end mt-4">
        <Link
          href="/about"
          className="hover:scale-105 border p-2 md:p-4 flex items-center md:text-xl text-gray-600  hover:text-transparent
          w-full justify-around sm:w-max 
          "
        >
          {/* <Ticker> */}
          <div className="w-12 h-12 overflow-hidden rounded-full relative">
            <Image
              src={avatar}
              alt="avatar"
              fill={true}
              className="rounded-lg border border-blue-500"
            />
          </div>
          <div className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-2xl ml-1">
            {" "}
            Get to know me {/* <ArrowRightIcon />{" "} */}
          </div>
          {/* </Ticker> */}
        </Link>
      </div>

      <h2 className="mt-24 font-bold text-gray-700 text-3xl">
        Recent Articles
      </h2>
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
            <div className="mt-2">
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

        <div className="flex">
          <Link
            href={`/articles`}
            className="flex  items-center mt-4 text-3xl hover:scale-105 underline "
          >
            Read All Articles <ArrowRightIcon />
          </Link>
        </div>
      </div>
      <div>
        <h2 className="mt-24 font-bold text-gray-700 text-3xl">My Projects</h2>
        <div className="mt-5 grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project) => {
            return (
              <Link
                href={`/projects/${project.slug}`}
                key={project._id}
                className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition"
              >
                {project.image && (
                  <div className="w-full h-52 overflow-hidden relative">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill={true}
                      className="rounded-lg border border-gray-500"
                    />
                  </div>
                )}
                <h1 className="mt-2  bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-red-500 to-purple-600">
                  {project.name}
                </h1>
              </Link>
            );
          })}
        </div>
        <div className="flex">
          <Link
            href={`/projects`}
            className="flex  items-center mt-4 text-3xl hover:scale-105 underline "
          >
            View More Projects <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </div>
  );
}
