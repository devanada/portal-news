import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useDispatch } from "react-redux";
import { reduxAction } from "../redux/actions/action";
import Header from "./Header";

const Layout = ({ children, headTitle, headDesc }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://inshorts.deta.dev/news?category=all")
      .then((res) => res.json())
      .then((result) => {
        dispatch(reduxAction("SET_NEWS", result.data));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <Head>
        <title>{headTitle}</title>
        <meta name="description" content={headDesc} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full h-screen flex flex-col overflow-auto">
        <Header />
        {!loading && <div className="px-8">{children}</div>}
      </div>
    </div>
  );
};

export default Layout;
