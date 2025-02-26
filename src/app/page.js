import Image from "next/image";
import { Circle } from "@/components";
export default function Home() {
  const data = ["140px", "340px", "540px", "940px", "1340px"];
  return (
    <div className="flex w-full h-screen justify-center items-center relative">
      <div className="bg-[#F3F4F6] w-full h-full relative"></div>
      <div className="bg-[#F3F4F6] w-full h-full relative flex flex-col box-border ">
        <div className="bg-black w-full h-full rounded-bl-3xl rounded-tr-3xl"></div>
        <div className="bg-black w-full h-[312px] "></div>
        <div className="bg-black w-full h-full rounded-tl-3xl rounded-bl-3xl rounded-br-3xl"></div>
        <div className="bg-[#F3F4F6] rounded-br-full rounded-tr-full w-[71px] h-[142px] absolute z-10 top-[460px]">
          <img
            className="absolute top-[24px] right-[16px]"
            src="Vector.svg"
          ></img>
        </div>
      </div>
      {/* {data.map((value, index) => {
        return <Circle key={index} classname={`w-[${value}] h-[${value}] `} />;
      })} */}
      <Circle classname={"w-[140px] h-[140px] absolute z-1"}>
        <img className="absolute z-10 " src="PineIcon.svg"></img>
      </Circle>
      <Circle classname={"w-[340px] h-[340px] z-1"} />
      <Circle classname={"w-[540px] h-[540px] z-1"} />
      <Circle classname={"w-[940px] h-[940px] z-1"} />
      <Circle classname={"w-[1340px] h-[1340px] z-1"} />
    </div>
  );
}
