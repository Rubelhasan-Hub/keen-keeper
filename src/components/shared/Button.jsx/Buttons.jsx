"use client"
import { fdsContext } from "@/context/ContextProvider";
import { use } from "react";
import { BiPhoneCall } from "react-icons/bi";
import { BsChatSquareText } from "react-icons/bs";
import { MdVideoCall } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";

const Buttons = ({ fdsData }) => {
    const { setData } = use(fdsContext)


    const notify = () => toast.success(`📞 Call ${fdsData.name}`);
    const notify2 = () => toast.success(`💬 Text ${fdsData.name}`);
    const notify3= () => toast.success(`🎥 Video Call ${fdsData.name}`);
    const currentTime = new Date().toLocaleString();

    return <>
        <div onClick={() => setData((data) => [...data, { friend: fdsData, action: "Call" , icon: <BiPhoneCall /> , time: currentTime}], notify())
        } className="btn text-xl p-3 lg:p-8 xl:p-[5%] xl:text-6xl lg:text-2xl bg-green-300">
            <BiPhoneCall />
            <p className="text-xl lg:text-2xl xl:text-[30px] font-semibold">Call</p>
        </div >
        <div onClick={() => setData((data) => [...data, { friend: fdsData, action: "Text" , icon: <BsChatSquareText />, time: currentTime}], notify2())
        } className="btn text-xl p-3 lg:p-8 xl:p-[5%] xl:text-[30px] lg:text-2xl bg-blue-300">
            <BsChatSquareText />
            <p className="text-xl  lg:text-2xl xl:text-5xl font-semibold">Text</p>
        </div>
        <div onClick={() => setData((data) => [...data, { friend: fdsData, action: "Video Call" ,icon: <MdVideoCall /> , time: currentTime}], notify3())
        } className="btn text-xl p-3 lg:p-8 xl:p-[5%] xl:text-6xl lg:text-2xl bg-purple-300">
            <MdVideoCall />
            <p className="text-xl  lg:text-2xl xl:text-[30px] font-semibold">Video</p>
        </div>

    </>
};

export default Buttons;