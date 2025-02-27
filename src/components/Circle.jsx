export const Circle = ({ classname ,src}) => {
  return (
    <div
      className={`rounded-full  border-black border-[1px] border-solid  absolute   + ${classname}`}
    > <img src={src} className="absolute top-[27px] left-[20px]"   /></div>
  );
};
