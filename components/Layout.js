import React from "react";
import Head from "next/head";
import Header from "./Header";

export default function Layout({ children, menu }) {
  console.log("menu:", menu);
  return (
    <div>
      <Head>
        <title>Prismic Next.js Multi Page Website</title>
      </Head>
      <Header menu={menu} />
      <main>{children}</main>
    </div>
  );
}
