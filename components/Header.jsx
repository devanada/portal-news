import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="h-16 flex justify-between items-center px-8 py-4 mb-8 border-b border-white bg-zinc-800">
      <Link href="/">
        <a className="text-white text-2xl font-bold">Portal News</a>
      </Link>
    </div>
  );
};

export default Header;
