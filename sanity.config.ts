import { defineConfig } from "sanity";
import {deskTool} from "sanity/desk";

const config = defineConfig({
  projectId: "ngwkfhf6",
  dataset: "production",
  title: "Me",
  apiVersion: "2023-10-20",
  basePath: "/admin",
  plugins: [deskTool()],
});

export default config;
