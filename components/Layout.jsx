import React from "react";
import Head from "next/head";

import Header from "./Header";

const Layout = ({ children, headTitle, headDesc }) => {
  return (
    <div>
      <Head>
        <title>{headTitle}</title>
        <meta name="description" content={headDesc} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full h-screen flex flex-col overflow-auto">
        <Header />
        <div className="px-8">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
