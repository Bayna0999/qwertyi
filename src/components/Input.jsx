export const Input = ({text,src,temp,temptxt})=>{
    return(<div className="absolute top-[216px] left-[193px] bottom-[143px] w-[414px] h-[828px]">
        <div className="rounded-3xl bg-[#F3F4F6] w-[398px] h-[504px] relative">
            <p className="text-[48px] text-[#111827] absolute left-[40px] top-[81px] right-[184px] bottom-[357px]">{text}</p>
            <img src={src} className="w-[262px] h-[262px] absolute top-[196px] left-[66px] right-[70px] bottom-[46px]"/>
        </div >
        <div className="relative left-[43px] ">
             <p className="text-144px w-[262px] h-[197px] absolute ">{temp}</p>
             <p className="w-[74px] h-[33px] text-[24px] absolute">{temptxt}</p>
        </div>
        <div className="flex justify-between absolute bottom-[40px] left-[48px] right-[48px] w-[318px] h-[32px]"> 
            <img src="Home.svg" alt=""  className="w-8 h-8"/>
            <img src="Pin.svg" alt="" className="w-8 h-8"/>
            <img src="Heart.svg" alt="" className="w-8 h-8"/>
            <img src="User.svg" alt="" className="w-8 h-8"/>
        </div>
    </div>)
}