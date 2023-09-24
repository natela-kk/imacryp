import { ConnectWallet } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import { NextPage } from "next";
import { Button, Card, Form } from "../components";

const Home: NextPage = () => {
  const handleSubmit = () => {
    console.log("hi");
  };
  return (
    <div className="bg-custom-black">
      <Form />
    </div>
  );
};

export default Home;
