export const Circle = ({ classname }) => {
  return (
    <div
      className={`rounded-full bg-[#F3F4F6] absolute flex flex-shrink-0 opacity-[0.1] storke-black + ${classname}`}
    ></div>
  );
};
