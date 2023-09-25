import icon from "./img/icon.svg";

interface ILayout {
  children: React.ReactNode;
}

export const Layout = ({ children }: ILayout) => {
  return (
    <div className="container mx-auto flex flex-col items-center text-center pt-6">
      <img src={icon.src} width={56} height={62} className="mb-6" alt="icon" />
      <main>{children}</main>
    </div>
  );
};
