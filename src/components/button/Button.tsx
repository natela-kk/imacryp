import styles from "./Button.module.css";

interface IButton {
  children: React.ReactNode;
  onSubmit: (event: React.FormEvent<HTMLButtonElement>) => void;
}

export const Button = ({ children, onSubmit }: IButton) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onSubmit(event);
  };

  return (
    <button
      className={`min-w-[188px] max-h-[57px] p-[18px] border rounded-full border-cyan-300 border-opacity-50 leading-tight text-white ${styles["custom-btn-bg"]} hover:border-transparent hover:text-custom-neutral hover:bg-cyan-300 active:bg-opacity-25`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
