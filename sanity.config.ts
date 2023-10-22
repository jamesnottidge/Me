import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { codeInput } from "@sanity/code-input";
import schemas from "./sanity/schemas";
import imageUrlBuilder from "@sanity/image-url";

const config = defineConfig({
  projectId: "ngwkfhf6",
  dataset: "production",
  title: "Me",
  apiVersion: "2023-10-20",
  basePath: "/admin",
  plugins: [deskTool(), codeInput()],
  schema: { types: schemas },
});

export const builder = imageUrlBuilder(config);

export default config;
