import { ConnectWallet } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import { NextPage } from "next";
import { Button, Card } from "../components";

const Home: NextPage = () => {
  return (
    <>
      <h1 className="self-stretch text-cyan-300 text-base text-[39.81px]">
        Meet the Nautilus Chain
      </h1>
      <p className="self-stretch text-white text-base">
        Gateway to High-Performance Blockchain Solutions
      </p>
      <div className="min-w-[282px] min-h-[180px] inline-flex relative bg-zinc-900 rounded-[20px] p-[15px]"></div>
    </>
  );
};

export default Home;
