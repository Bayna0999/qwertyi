import Image from "next/image";
import { Circle, Input } from "@/components";
export default function Home() {
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <div className="bg-[#F3F4F6] w-full h-full relative">
        <Input text={"hello"} src={"icon.png"}/>
      </div>
      <div className="bg-black w-full h-full relative">
      <Input/>
      </div>
      <Circle classname="w-[140px] h-[140px]" />
    </div>
  );
}
