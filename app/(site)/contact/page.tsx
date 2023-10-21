import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";


export default async function Page() {
  const page = await getPage('contact');

  return (
    <div>
      <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 text-5xl drop-shadow font-extrabold">
        {page.title}
      </h1>

      <div className="text-lg text-gray-700 mt-10">
        <PortableText value={page.content} />
      </div>
    </div>
  );
}
