interface ICard {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export const Card = ({ title, description, children }: ICard) => {
  return (
    <div
      className="inline-flex flex-col justify-start items-center gap-[15px] p-[30px] 
    border rounded-[20px] border-cyan-100 border-opacity-20
     bg-cyan-200 bg-opacity-10  backdrop-blur-[100px] hover:border-opacity-100"
    >
      <h1 className="self-stretch text-cyan-300 text-base">{title}</h1>
      <p className="self-stretch text-white text-base">{description}</p>
      <div className="min-w-[282px] min-h-[180px] inline-flex relative bg-zinc-900 rounded-[20px] p-[15px]">
        {children}
      </div>
    </div>
  );
};
