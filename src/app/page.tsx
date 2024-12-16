import contentfulClient from "@/contentful/contentfulClient";
import {
  TypeBlogPostSkeleton,
  IContentfulAsset,
} from "@/contentful/types/blogPost.types";
import Image from "next/image";
import Link from "next/link";

const getBlogPostsContentful = async () => {
  try {
    const data = await contentfulClient.getEntries<TypeBlogPostSkeleton>();
    console.log(data.items[0].fields.image);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default async function Home() {
  const posts = await getBlogPostsContentful();
  return (
    <div>
      <div>HOME</div>
      {posts &&
        posts.items?.map((blog, idx) => (
          <div key={idx}>
            <Link href={`article/${blog.fields.slug}`}>
              <div className="card">
                <Image
                  src={`https:${
                    (blog.fields.image as IContentfulAsset)?.fields.file.url
                  }`}
                  alt="gambar"
                  width={240}
                  height={240}
                />
                <p>{blog.fields.title}</p>
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
}
