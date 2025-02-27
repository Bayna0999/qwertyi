export const Card = ({ className, city, src, temp, temptxt, color, date }) => {
  return (
    <div
      className={`absolute  w-[414px] h-[828px] backdrop-[12px] rounded-[48px] ${className}`}
    >
      <div className="rounded-3xl  w-[398px] h-[504px] p-12">
        <div>
          <p className="w-[164px] h-[25px] text-[18px] ">September 10, 2021</p>
          <p className="text-[48px] text-[#111827] left-[40px] top-[81px] right-[184px] bottom-[357px]">
            Ulkk
          </p>
        </div>
        <img
          src={src}
          className="w-[262px] h-[262px]  top-[196px] left-[66px] right-[70px] bottom-[46px]"
        />
      </div>
      <div className=" left-[43px] p-12">
        <p className="text-[144px] w-[262px] h-[197px]  bg-gradient-to-b from-black  to-transparent bg-clip-text  text-transparent bg-text-clip  ">
          {26}
        </p>
        <p className="w-[74px] h-[33px] text-[24px] ">{53}</p>
      </div>
      <div className="flex p-12 justify-between bottom-[40px] left-[48px] right-[48px] w-[318px] h-[32px] ">
        <img src="Home.svg" alt="" className="w-8 h-8 " />
        <img src="Pin.svg" alt="" className="w-8 h-8" />
        <img src="Heart.svg" alt="" className="w-8 h-8" />
        <img src="User.svg" alt="" className="w-8 h-8" />
      </div>
    </div>
  );
};
