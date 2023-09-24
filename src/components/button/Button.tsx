import styles from "./Button.module.css";

interface IButton {
  children: React.ReactNode;
  onSubmit?: (event: React.FormEvent<HTMLButtonElement>) => void;
}

export const Button = ({ children, onSubmit }: IButton) => {
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(e);
    }
  };
  return (
    <button
      type="submit"
      className={`min-w-[188px] max-h-[57px] py-[18px] border rounded-full border-cyan-300 border-opacity-50 leading-tight text-white ${styles["custom-btn-bg"]} hover:border-transparent hover:text-custom-neutral hover:bg-cyan-300 active:bg-opacity-25`}
      onSubmit={handleSubmit}
    >
      {children}
    </button>
  );
};
