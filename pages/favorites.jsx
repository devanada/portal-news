import { useEffect } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import Layout from "../components/Layout";

export default function Favorites() {
  const news = useSelector((state) => state.news);

  useEffect(() => {
    console.log(news);
  }, [news]);

  return (
    <Layout headTitle="Portal News" headDesc="Portal News App">
      <h1 className="text-3xl font-bold underline">Favorite</h1>
      {/* {news.map((item) => (
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
      ))} */}
    </Layout>
  );
}
