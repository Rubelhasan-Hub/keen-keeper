import Link from "next/link";
import { ImStatsDots } from "react-icons/im";
import { IoMdTime } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm px-20 py-4">
            <div className="flex-1">
                <a className="btn btn-ghost font-bold text-[200%] text-green-300"><span className="text-black">Keen</span>Keeper</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 flex gap-4">
                    <Link href="/home" className="btn"><IoHomeOutline/> Home</Link>
                    <Link href="/timeline" className="btn"><IoMdTime/> Timeline</Link>
                    <Link href="/stats" className="btn"><ImStatsDots />Stats</Link>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;