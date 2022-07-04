import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";

export default function Favorites() {
  const router = useRouter();
  const news = useSelector((state) => state.news);
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { id } = router.query;
    const findByID = await news.find((item) => item.id === id);
    setDetail(findByID);
    if (findByID) setLoading(false);
  };

  return (
    <Layout headTitle="Portal News" headDesc="Portal News App">
      <h1 className="text-3xl font-bold underline">Detail</h1>
      {!loading && (
        <>
          <h2>{detail.title}</h2>
          <p>{detail.content}</p>
        </>
      )}
    </Layout>
  );
}
