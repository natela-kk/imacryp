interface INftList {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const NftList = ({ title, children, className }: INftList) => {
  return (
    <div
      className={`flex flex-col gap-[15px] p-[30px] border rounded-[20px] border-cyan-100 border-opacity-20
       bg-cyan-200 bg-opacity-10  backdrop-blur-[100px] hover:border-opacity-100 ${className}`}
    >
      <h1 className="self-stretch text-cyan-300 text-start text-[27.65px] text-base font-normal leading-5">
        {title}
      </h1>
      <div className="flex flex-wrap gap-x-[19px] gap-y-[15px]">{children}</div>
    </div>
  );
};
