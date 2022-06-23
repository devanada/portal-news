import React, { useEffect, useState } from "react";
import Image from "next/image";
import Layout from "../components/Layout";

// -=server side rendering=-
// export async function getServerSideProps() {
//   const res = await fetch("https://inshorts.deta.dev/news?category=all");
//   const data = await res.json();

//   return {
//     props: { news: data.data },
//   };
// }

// -=static site generation=-
// export async function getStaticProps() {
//   const res = await fetch("https://inshorts.deta.dev/news?category=all");
//   const data = await res.json();

//   return {
//     props: { news: data.data },
//   };
// }

// -=incremental site regeneration=-
export async function getStaticProps() {
  const res = await fetch("https://inshorts.deta.dev/news?category=all");
  const data = await res.json();

  return {
    props: { news: data.data },
    revalidate: 1,
  };
}

export default function Home({ news }) {
  const [newsList, setNewsList] = useState([]);

  // -=client side rendering=-
  useEffect(() => {
    // fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch("https://inshorts.deta.dev/news?category=all");
    const data = await res.json();
    setNewsList(data.data);
  };

  return (
    <Layout headTitle="Portal News" headDesc="Portal News App">
      <h1 className="text-3xl font-bold underline">Latest News</h1>
      {news.map((item) => (
        <div className="flex w-full my-5" key={item.id}>
          <Image
            src={item.imageUrl}
            alt={item.title}
            width={200}
            height={200}
          />
          <div className="ml-5 w-full">
            <h2 className="text-xl font-bold">{item.title}</h2>
            <p className="font-thin text-neutral-500">
              {item.author} | {item.date}
            </p>
            <p className="text-neutral-500">
              {item.content.substring(0, 250) + "..."}
            </p>
          </div>
        </div>
      ))}
    </Layout>
  );
}
