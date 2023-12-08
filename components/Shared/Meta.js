import Head from "next/head";
import React from "react";

const Meta = ({ children }) => {
  return (
    <>
      <Head>
        <title>{children}</title>
        <meta name="description" content={children} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
    </>
  );
};

export default Meta;
