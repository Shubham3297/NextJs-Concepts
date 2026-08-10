import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Blog",
  },
};

// export const metadata: Metadata = {
//   title: "Blog",
// };

export default async function page() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Internal Delay");
    }, 2000);
  });
  return <h1>Blog</h1>;
}
