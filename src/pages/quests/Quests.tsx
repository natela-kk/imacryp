import { useRouter } from "next/router";
import { Button } from "../../components";

export default function Quests() {
  const router = useRouter();

  const onButtonClick = () => {
    router.push("/dashboard");
  };

  return (
    <div className="container flex flex-col items-center">
      <h1 className="text-center text-cyan-300 text-[39.81px] font-bold leading-[49px] mb-[15px]">
        Quests
      </h1>
      <p className="max-w-[642px] text-center text-white text-[27.65px] leading-[34px] mb-[185px]">
        Complete the Quests to unlock new missions and win cool prizes
      </p>
      <div className="w-[640px] h-[170px] px-[60px] py-[30px] bg-cyan-200 bg-opacity-10 rounded-[20px] border border-cyan-100 border-opacity-20 backdrop-blur-[100px] flex-col justify-start items-center gap-5 inline-flex">
        <p className="text-center text-cyan-300 text-[27.65px] font-semibold leading-[34px]">
          Coming Soon
        </p>
        <Button onButtonClick={onButtonClick}>Back to Dashboard</Button>
      </div>
    </div>
  );
}
