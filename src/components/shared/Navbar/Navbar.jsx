import Link from "next/link";
import { ImStatsDots } from "react-icons/im";
import { IoMdTime } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import NavButton from "./NavButton";

const Navbar = () => {

    const navButtons = [
        {
            path: "/",
            text: "Home",
            icon: <IoHomeOutline />
        },
        {
            path: "/timeline",
            text: "Timeline",
            icon: <IoMdTime />
        },
        {
            path: "/stats",
            text: "Stats",
            icon: <ImStatsDots />
        },
    ]
    return (
        <div className="navbar bg-base-100 shadow-sm  sm:px-20 sm:py-4">
            <div className="flex-1">
                <a className="btn btn-ghost font-bold text-[200%] text-green-300"><span className="text-black">Keen</span>Keeper</a>
            </div>
            <div className="flex-none">
                <ul className="hidden  menu menu-horizontal px-1 md:flex lg:flex sm:flex gap-4">
                    {
                        navButtons.map((item, index) =>
                            <NavButton key={index} href={item.path} text={item.text} icon={item.icon}></NavButton>
                        )
                    }
                </ul>
            </div>
        </div>
    );
};

export default Navbar;