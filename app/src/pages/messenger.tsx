import type { NextPage } from "next";
import Head from "next/head";
import { MessengerView } from "../views";

const Messenger: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Solana Scaffold</title>
        <meta
          name="description"
          content="Basic Functionality"
        />
      </Head>
      <MessengerView />
    </div>
  );
};

export default Messenger;
