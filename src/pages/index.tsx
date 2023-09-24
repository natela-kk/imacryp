import React, { useState } from "react";
import { ConnectWallet } from "@thirdweb-dev/react";
import { NextPage } from "next";
import { Button, Card, Modal } from "../components";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
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
  );
};

export default Home;
