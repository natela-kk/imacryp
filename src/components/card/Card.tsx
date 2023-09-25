import { Button } from "../button";

interface ICard {
  title: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  modal?: Boolean;
  transparent?: Boolean;
  children?: React.ReactNode;
  className?: string;
}

export const Card = ({
  title,
  description,
  buttonText,
  onButtonClick,
  modal,
  transparent,
  children,
  className,
}: ICard) => {
  return (
    <div
      className={`inline-flex flex-col justify-start items-center p-[30px] 
    border rounded-[20px] border-cyan-100 border-opacity-20
     bg-cyan-200 bg-opacity-10  backdrop-blur-[100px] hover:border-opacity-100
     ${modal ? "px-[60px] gap-[20px] w-[640px]" : "gap-[15px]"} 
     ${className}`}
    >
      <h1
        className={`self-stretch text-cyan-300 ${
          modal
            ? "text-center text-[27.65px] font-semibold leading-[34px]"
            : "text-base font-normal leading-5"
        }`}
      >
        {title}
      </h1>
      {description && (
        <p className="max-w-[500px] self-stretch text-white text-center text-[16px] whitespace-pre-line leading-5">
          {description}
        </p>
      )}
      <div
        className={`relative bg-zinc-900 ${
          modal
            ? "w-[520px] h-[375px] rounded-[40px]"
            : "w-[100%] h-[100%] rounded-[20px]"
        }`}
      />
      {children}
      {buttonText && (
        <Button onButtonClick={onButtonClick} transparent={transparent}>
          {buttonText}
        </Button>
      )}
    </div>
  );
};
