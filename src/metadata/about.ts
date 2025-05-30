import type { Metadata } from "next";

const about: Metadata = {
  title: "About",
  description:
    "just a little about myself. a dedicated and curious software engineer who loves solving problems and writing about it too.",

  openGraph: {
    title: "About",
    description:
      "just a little about myself. a dedicated and curious software engineer who loves solving problems and writing about it too.",

    type: "website",
    url: "https://sather.ws/about",
    images: ["/og"],
  },
  twitter: {
    images: ["/og"],
  },
  alternates: {
    canonical: "/about",
  },
};

export default about;
