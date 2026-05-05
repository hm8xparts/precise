import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.shortName,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#1B2C5C",
    icons: [
      {
        src: "/logo/precise-logo-master.png",
        sizes: "1254x1254",
        type: "image/png",
      },
    ],
  };
}
