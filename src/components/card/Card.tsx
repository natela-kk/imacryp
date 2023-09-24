import { Button } from "../button";

interface ICard {
  title: string;
  titleBold: boolean;
  children: React.ReactNode;
  description?: string;
  buttonText?: string;
  onSubmit?: () => void;
}

export const Card = ({
  title,
  titleBold,
  children,
  description,
  buttonText,
  onSubmit,
}: ICard) => {
  return (
    <div
      className="inline-flex flex-col justify-start items-center gap-[15px] p-[30px] 
    border rounded-[20px] border-cyan-100 border-opacity-20
     bg-cyan-200 bg-opacity-10  backdrop-blur-[100px] hover:border-opacity-100"
    >
      <h1
        className={`self-stretch text-cyan-300 ${
          titleBold
            ? "text-center text-[27.65px] font-semibold"
            : "text-base font-normal"
        }`}
      >
        {title}
      </h1>
      <p className="self-stretch text-white text-center text-[16px] whitespace-pre-line">
        {description}
      </p>
      <div className="self-stretch min-w-[282px] min-h-[180px] inline-flex relative bg-zinc-900 rounded-[20px] p-[15px]">
        {children}
      </div>
      {buttonText && onSubmit && (
        <Button onSubmit={onSubmit}>{buttonText}</Button>
      )}
    </div>
  );
};
