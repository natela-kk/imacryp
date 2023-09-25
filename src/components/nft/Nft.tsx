interface INft {
  active?: boolean;
}

export const Nft = ({ active }: INft) => {
  return (
    <div
      className={`w-[135px] h-[136px] rounded-[20px]
  ${active ? "bg-zinc-900" : "bg-slate-600 bg-opacity-30"}`}
    />
  );
};
