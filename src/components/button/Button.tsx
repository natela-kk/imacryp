interface IButton {
  children: React.ReactNode;
  onButtonClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  transparent?: Boolean | undefined;
}

export const Button = ({ children, onButtonClick, transparent }: IButton) => {
  return (
    <button
      type={onButtonClick ? "button" : "submit"}
      className={`w-[100%] h-[56px] p-[18px] border rounded-full border-cyan-300 border-opacity-50 leading-tight text-white hover:border-transparent hover:text-custom-neutral hover:bg-cyan-300 active:bg-opacity-25 btn ${
        transparent && "transparent"
      }`}
      onClick={onButtonClick}
    >
      {children}
    </button>
  );
};
