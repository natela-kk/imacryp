import React, { useState } from "react";
import { ConnectWallet } from "@thirdweb-dev/react";
import { NextPage } from "next";
import { MAIN_MODAL_TEXT as MAIN_MODAL_TEXT } from "./constants";
import { Button, Card, Modal, Form } from "../components";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [isModalOpen, setModalIsOpen] = useState(false);

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
        <Form />
        <Button onClick={(): void => setIsOpen(true)}>
          Открыть модальное окно
        </Button>
        <Button onClick={(): void => setModalIsOpen(true)}>
          Открыть модальное окно
        </Button>
        <Modal isOpen={isModalOpen} onClose={(): void => setModalIsOpen(false)}>
          <Card title={MAIN_MODAL_TEXT.title}
            description={MAIN_MODAL_TEXT.description}
            titleBold />
        </Modal>
      </div>
    </>
  );
};

export default Home;
