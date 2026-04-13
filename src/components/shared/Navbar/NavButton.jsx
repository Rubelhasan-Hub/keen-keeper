"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";


const NavButton = ({ href, text, icon }) => {
    const pathName = usePathname()
    return (
        <Link href={href} className={pathName == href ? "btn btn-info" : "btn"}>{icon} {text}</Link>
    );
};

export default NavButton;