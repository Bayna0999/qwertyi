import Image from "next/image";
import { Circle, Input } from "@/components";
export default function Home() {
  // top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
  return (
    <div className="flex bg-white w-full h-screen relative justify-center items-center">
      
      <div className="bg-[#F3F4F6] w-full h-full relative">
      
      
      </div>
      <div className="bg-[#F3F4F6] w-full h-full relative flex flex-col ">
      <div className="bg-black w-full h-full rounded-bl-3xl rounded-tr-3xl"></div>
      <div className="bg-black w-full h-[312px]  rounded-bl-3xl rounded-tl-3xl relative ">
      </div>
      <div className="bg-black w-full h-full  rounded-bl-3xl rounded-tl-3xl rounded-br-3xl "></div>
      
      </div>
      <Circle classname="w-[140px] h-[140px]" src={"pineL.svg"} z-1/>
      <Circle classname="w-[340px] h-[340px] absolute z-1" />
      <Circle classname="w-[540px] h-[540px] absolute z-1" />
      <Circle classname="w-[940px] h-[940px] absolute z-1" />
      <Circle classname="w-[1340px] h-[1340px] absolute z-1" />
      <div className="rounded-r-full w-[70px] h-[144px] bg-[#F3F4F6] absolute left-[50%]">
        <img src="pineR.svg" className="absolute top-[30px] right-[10px]"></img>
        </div>
        <Input text={"hello"} src={"moon.png"} temptxt={"Brigth"} temp={"25"} />
        <Input text={"hello"} src={"icon.png"} temptxt={"Brigth"} temp={"25"} />
        
    </div>
  );
}
