import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reduxAction } from "../redux/actions/action";
import Image from "next/image";
import Link from "next/link";
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
// export async function getStaticProps() {
//   const res = await fetch("https://inshorts.deta.dev/news?category=all");
//   const data = await res.json();

//   return {
//     props: { news: data.data },
//     revalidate: 1,
//   };
// }

// export default function Home({ news }) {
export default function Home() {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news);
  const [newsList, setNewsList] = useState([]);

  // -=client side rendering=-
  useEffect(() => {
    console.log(news);
    // fetchData();
    // dispatch(reduxAction("SET_NEWS", news));
  }, [news]);

  const fetchData = async () => {
    const res = await fetch("https://inshorts.deta.dev/news?category=all");
    const data = await res.json();
    setNewsList(data.data);
  };

  return (
    <Layout headTitle="Portal News" headDesc="Portal News App">
      <h1 className="text-3xl font-bold underline">Latest News</h1>
      {news &&
        news.map((item) => (
          <div className="flex w-full my-5" key={item.id}>
            <Image
              src={item.imageUrl}
              alt={item.title}
              width={200}
              height={200}
            />
            <div className="ml-5 w-full">
              <Link href={`/detail/${item.id}`}>
                <h2 className="text-xl font-bold">{item.title}</h2>
              </Link>
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
