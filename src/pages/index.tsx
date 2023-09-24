import React, { useState } from "react";
import { ConnectWallet } from "@thirdweb-dev/react";
import { NextPage } from "next";
import { Button, Card, Modal } from "../components";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <h1 className="self-stretch text-cyan-300 text-base text-[39.81px]">
        Meet the Nautilus Chain
      </h1>
      <p className="self-stretch text-white text-base">
        Gateway to High-Performance Blockchain Solutions
      </p>
      <div className="min-w-[282px] min-h-[180px] inline-flex relative bg-zinc-900 rounded-[20px] p-[15px]"></div>
    <div className="bg-custom-black">
      <Button onSubmit={(): void => setIsOpen(true)}>
        Открыть модальное окно
      </Button>
      <Modal isOpen={isOpen} onClose={(): void => setIsOpen(false)}>
        <Card title="Modal Window" description="some random text for modal">
          Нечто
        </Card>
      </Modal>
    </div>
  </>
  );
};

export default Home;
