import Image from "next/image";
import { Circle, Input } from "@/components";
export default function Home() {
  const data = ["140px", "340px", "540px", "940px", "1340px"];
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <div className="bg-[#F3F4F6] w-full h-full relative"></div>
      <div className="bg-black w-full h-full relative"></div>
      <Circle classname="w-[140px] h-[140px]" />
    </div>
  );
}
