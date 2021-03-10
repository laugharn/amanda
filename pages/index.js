import Head from 'next/head'
import Link from "next/link";

const Page = ({ posts }) => (
  <div className="container flex flex-wrap mx-auto">
    <Head>
      <title>Proof of Concept for Amanda</title>
    </Head>
    {posts.map((post) => (
      <div className="p-4 w-full md:w-1/3" key={`post-${post.id}`}>
        <ul>
          <li>
            <Link href={`/blog/${post.slug}`}>
              <a className="text-blue-500 hover:text-yellow-300">
                {post.title.rendered}
              </a>
            </Link>
          </li>
          <li>
            {new Date(post.date_gmt).toLocaleDateString()} -{" "}
            {new Date(post.date_gmt).toLocaleTimeString()}
          </li>
        </ul>
      </div>
    ))}
  </div>
);

export const getStaticProps = async () => {
  const posts = await fetch(
    "https://brcahealthorg-36a326.ingress-daribow.easywp.com/wp-json/wp/v2/posts"
  ).then(async (response) => await response.json());

  return {
    props: {
      posts,
    },
    revalidate: 1,
  };
};

export default Page;
