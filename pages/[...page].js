import Head from "next/head";

const Page = ({ page }) => {
  return (
    <>
      <Head>
        <title>{page.title.rendered} - Proof of Concept for Amanda</title>
      </Head>
      <div
        className="container mx-auto p-4 prose"
        dangerouslySetInnerHTML={{ __html: page.content.rendered }}
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
  const pages = await fetch(
    `https://brcahealthorg-36a326.ingress-daribow.easywp.com/wp-json/wp/v2/pages?slug=${params.page.join(
      "/"
    )}`
  ).then(async (response) => await response.json());

  if (pages.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      page: pages[0],
    },
    revalidate: 1,
  };
};

export default Page;
