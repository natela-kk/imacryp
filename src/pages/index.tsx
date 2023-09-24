import { ConnectWallet } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import { NextPage } from "next";
import { Button, Card } from "../components";

const Home: NextPage = () => {
  return (
    <div className="bg-custom-black">
      <Button>Button</Button>
      <Card title="Card" description="some random text">
        <Button>Button</Button>
      </Card>
    </div>
  );
};

export default Home;
