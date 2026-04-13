"use client"
import { ImStatsDots } from "react-icons/im";
import { IoMdTime } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import NavButton from "./NavButton";
import { TiThMenu } from "react-icons/ti";
import { useState } from "react";

const Navbar = () => {

    const navButtons = [
        {
            path: "/home",
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
    const [menuBtn, setMenuBtn] = useState(false)

    return (

        <div>
            <div className="navbar bg-base-100 shadow-sm px-5  sm:px-20 sm:py-4">
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
                <div className="sm:hidden">
                    <button className="btn" onClick={() => setMenuBtn(!menuBtn)}><TiThMenu /></button>
                </div>
            </div>
            {
                menuBtn && <div className={`sm:hidden flex justify-around bg-gray-100 p-4 absolute top-16 left-0 w-full shadow-md transition-all duration-300 ${menuBtn ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}>
                    {
                        navButtons.map((item, index) => (
                            <div key={index}>
                                <NavButton href={item.path} text={item.text} icon={item.icon}></NavButton>
                            </div>
                        ))
                    }
                </div>
            }

        </div>
    );
};

export default Navbar;