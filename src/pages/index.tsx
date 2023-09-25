import React, { useState } from "react";
import { NextPage } from "next";
import { MAIN_MODAL_TEXT as MAIN_MODAL_TEXT } from "./constants";
import { Button, Card, Modal, Form } from "../components";

const Home: NextPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [isMinted, setIsMinted] = useState(false);

  return (
    <div className="container flex flex-col items-center">
      <h1 className="text-center text-cyan-300 text-[39.81px] font-bold font-['Montserrat']">
        Meet the Nautilus Chain
      </h1>
      <p className="text-center text-neutral-200 text-[27.65px] font-normal font-['Montserrat']">
        Gateway to High-Performance Blockchain Solutions
      </p>
      <div className="w-[1180px] h-[581px] relative bg-neutral-400 bg-opacity-5 rounded-[20px] my-[30px]" />
      <p className="text-center text-neutral-200 text-[27.65px] font-normal font-['Montserrat'] mb-[30px] leading-[34px]">
        Claim Your free DCLDI
      </p>
      <div className="w-[188px]">
        {isWalletConnected ? (
          <Button onButtonClick={() => setIsModalOpen(!isModalOpen)}>
            Mint
          </Button>
        ) : (
          <Button
            onButtonClick={() => setIsWalletConnected(!isWalletConnected)}
          >
            Connect Wallet
          </Button>
        )}
      </div>
      {isModalOpen && !isMinted && (
        <div
          onClick={() => {
            setIsMinted(!isMinted);
          }}
        >
          <Modal closeModal={() => setIsModalOpen(!isModalOpen)}>
            <Card
              title={MAIN_MODAL_TEXT.title}
              description={MAIN_MODAL_TEXT.description}
              modal
            />
          </Modal>
        </div>
      )}
      {isModalOpen && isMinted && (
        <Modal
          closeModal={() => {
            setIsModalOpen(!isModalOpen);
            setIsMinted(!isMinted);
          }}
        >
          <Form />
        </Modal>
      )}
    </div>
  );
};

export default Home;
