"use client"
import { fdsContext } from "@/contaxt/ContextProvider";
import { use } from "react";
import { BiPhoneCall } from "react-icons/bi";
import { BsChatSquareText } from "react-icons/bs";
import { MdVideoCall } from "react-icons/md";

const Buttons = ({ fdsData }) => {
    const { setData } = use(fdsContext)

    return <>
        <div onClick={() => setData((prev) => [...prev, { friend: fdsData, action: "Call" }])
        } className="btn lg:p-8 xl:p-15 xl:text-6xl lg:text-2xl bg-green-300">
            <BiPhoneCall />
            <p className="text-xl lg:text-2xl xl:text-5xl font-semibold">Call</p>
        </div >
        <div onClick={() => setData((prev) => [...prev, { friend: fdsData, action: "Text" }])
        } className="btn lg:p-8 xl:p-15 xl:text-5xl lg:text-2xl bg-blue-300">
            <BsChatSquareText />
            <p className="text-xl lg:text-2xl xl:text-5xl font-semibold">Text</p>
        </div>
        <div onClick={() => setData((prev) => [...prev, { friend: fdsData, action: "Video" }])
        } className="btn lg:p-8 xl:p-15 xl:text-6xl lg:text-2xl bg-purple-300">
            <MdVideoCall />
            <p className="text-xl lg:text-2xl xl:text-5xl font-semibold">Video</p>
        </div>

    </>
};

export default Buttons;