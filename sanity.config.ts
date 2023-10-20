import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "ngwkfhf6",
  dataset: "production",
  title: "Me",
  apiVersion: "2023-10-20",
  useCdn: false,
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
