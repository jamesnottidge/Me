"use client";
import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "sanity";
import { LaunchIcon } from "@sanity/icons";
import Image from "next/image";
import urlBuilder from "@sanity/image-url";
import { builder } from "@/sanity.config";

function urlFor(source) {
  return builder.image(source);
}

const components = {
  block: {
    // Add a custom component for rendering paragraphs with spacing
    normal: ({ children }) => (
      <p className="my-14">{children}</p> // You can adjust the margin (my-4) as needed
    ),
    // Define other block types as needed
  },
  types: {
    image: ImageBlock,
  },
  marks: {
    internalLink: ({ value, children }) => {
      const { slug = {} } = value;
      const href = `/${slug.current}`;
      return (
        <a
          href={href}
          target="_blank"
          className="hover:bg-yellow-500 no-underline font-bold text-blue-800"
        >
          {children}
          <span className="inline-block mx-[0.1px] -mb-1 font-bold">
            <LaunchIcon className="text-2xl lg:text-3xl" />
          </span>
        </a>
      );
    },
    link: ({ value, children }) => {
      // Read https://css-tricks.com/use-target_blank/
      const { blank, href } = value;
      return blank ? (
        <a
          href={href}
          target="_blank"
          rel="noopener"
          className="hover:bg-yellow-500 no-underline font-bold text-blue-800"
        >
          {children}
          <span className="inline-block mx-[0.5px] mx-[0.1px] -mb-1 font-bold">
            <LaunchIcon className="text-4xl lg:text-5xl " />
          </span>
        </a>
      ) : (
        <a
          href={href}
          className="hover:bg-yellow-500 no-underline font-bold text-blue-800 mx-[0.1px] -mb-1"
        >
          {children}
        </a>
      );
    },
  },
};

type Props = {
  value: PortableTextBlock[];
};

export default function ViewPortableText({ value }: Props) {
  return <PortableText value={value} components={components} />;
}

export function ExternalLinkRenderer(props) {
  return (
    <span>
      <a
        contentEditable={false}
        href={props.value.href}
        target="_blank"
        className="hover:bg-slate-500"
      >
        {props.renderDefault(props)} <LaunchIcon />
      </a>
    </span>
  );
}

function ImageBlock({ value }) {
  return (
    <div className="mx-auto" >
      <Image
        src={urlFor(value).width(500).url()}
        alt="Custom Image"
        width={500}
        height={300}
        className="mx-auto"
      />
    </div>
  );
}
