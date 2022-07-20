import type { NextPage } from "next";
import Head from "next/head";
import { BuilderView } from "../views";

const Builder: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Solana Scaffold</title>
        <meta
          name="description"
          content="Basic Functionality"
        />
      </Head>
      <BuilderView />
    </div>
  );
};

export default Builder;
