import { useRouter } from "next/router";
import { Card, Modal, Nft, NftList } from "../../components";
import { useState } from "react";

export default function Dashboard() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="dashboard pt-[110px] flex justify-center">
      <div className="grid grid-cols-[342px_399px_399px] grid-rows-[448px_382px] gap-5">
        <div className="grid grid-rows-[555px_1fr] row-span-2 gap-5">
          <Card title="12345678" className="text-center">
            <p className="max-w-[500px] self-stretch text-white text-center text-[16px] whitespace-pre-line leading-5">
              doliacat.eth
            </p>
            <div className="w-[100%] h-32 p-4 bg-cyan-300 bg-opacity-20 rounded-lg backdrop-blur-[100px] justify-start items-center gap-2.5 inline-flex">
              <p className="text-[13.3px] text-center text-cyan-300 leading-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi
              </p>
            </div>
          </Card>
          <div
            className="w-[342px] h-[275px]"
            onClick={() => setIsModalOpen(!isModalOpen)}
          >
            <Card title="Gifts" className="text-start w-[100%] h-[100%]" />
          </div>
        </div>
        <Card
          title="Quests"
          buttonText="Explore"
          onButtonClick={() => {
            router.push("/quests");
          }}
          transparent
          className="text-start"
        />
        <Card
          title="Resources"
          buttonText="Explore"
          onButtonClick={() => {
            router.push("/resources");
          }}
          transparent
          className="text-start"
        />
        <NftList title="My NFTs" className="col-span-2">
          <Nft active />
          <Nft />
          <Nft />
          <Nft />
          <Nft />
          <Nft />
          <Nft />
          <Nft />
          <Nft />
          <Nft />
        </NftList>
      </div>
      {isModalOpen && (
        <Modal closeModal={() => setIsModalOpen(!isModalOpen)}>
          <Card
            title="Claim Your Gift!"
            description="What a great job you just did by creating your Soulbound Digital Identity Claim your Naulius NFT welcome gift!"
            buttonText="Claim"
            onButtonClick={() => {
              setIsModalOpen(!isModalOpen);
            }}
            modal
          />
        </Modal>
      )}
    </div>
  );
}
