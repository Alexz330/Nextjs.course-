import Head from "next/head";

import { FC, ReactNode } from "react";

import { Navbar } from "../ui";

type props = {
  children?: ReactNode;
  title?: String;
};

export const Layout: FC<props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "PokemonAPP"}</title>
        <meta name="author" content="Alexis lopez"></meta>
        <meta
          name="description"
          content={`Informacion sobre el pokemon ${title}`}
        ></meta>
        <meta name="keywords" content={`${title}, pokemon, pokedex`}></meta>
      </Head>

      {/* navbar */}
      <Navbar />

      <main
        style={{
          padding: "0px 20px"
        }}
      >
        {children}
      </main>
    </>
  );
};
