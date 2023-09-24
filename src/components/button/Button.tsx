import styles from "./Button.module.css";

interface IButton {
  children: React.ReactNode;
  onSubmit?: (e: React.FormEvent<HTMLButtonElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({ children, onSubmit, onClick }: IButton) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      type={onSubmit ? "submit" : "button"}
      className={`min-w-[188px] max-h-[57px] p-[18px] border rounded-full border-cyan-300 border-opacity-50 leading-tight text-white ${styles["custom-btn-bg"]}  hover:border-transparent hover:text-custom-neutral hover:bg-cyan-300 active:bg-opacity-25`}
      onSubmit={onSubmit}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
