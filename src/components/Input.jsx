export const Input = ({ onchange }) => {
  return (
    <div className="flex gap-[16px] p-4 rounded-full bg-white w-[] h-[80px] ">
      <img src="search.svg" alt="" />
      <input type="text" onChange={onchange} />;
    </div>
  );
};
