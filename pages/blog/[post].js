import Head from "next/head";

const Page = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title.rendered} - Proof of Concept for Amanda</title>
      </Head>
      <div
        className="container mx-auto p-4 prose"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />
    </>
  );
};

export const getStaticPaths = () => {
  return {
    fallback: "blocking",
    paths: [],
  };
};

export const getStaticProps = async ({ params }) => {
  const posts = await fetch(
    `https://brcahealthorg-36a326.ingress-daribow.easywp.com/wp-json/wp/v2/posts?slug=${params.post}`
  ).then(async (response) => await response.json());

  if (posts.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: posts[0],
    },
    revalidate: 1,
  };
};

export default Page;
