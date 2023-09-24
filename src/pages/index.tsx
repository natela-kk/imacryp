import { ConnectWallet } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import { NextPage } from "next";
import { Button } from "../components/ui/button";

const Home: NextPage = () => {
  return (
    <div className="bg-custom-black">
      <Button>Button</Button>
    </div>
  );
};

export default Home;
