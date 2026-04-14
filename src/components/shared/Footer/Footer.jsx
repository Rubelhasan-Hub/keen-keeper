import Link from "next/link";
import { DiGithub } from "react-icons/di";
import { FaDiscord } from "react-icons/fa6";
import { LiaLinkedin } from "react-icons/lia";

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-green-200 text-base-content rounded p-10 ">
            <nav className="">
                <h1 className="text-6xl sm:text-7xl font-bold md:text-9xl">KeenKeeper</h1>
                <p className="text-md pt-5 sm:text-2xl">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <p className="text-4xl font-bold pt-5 sm:text-3xl">Social Links</p>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-7 ">
                    <Link href="https://github.com/Rubelhasan-Hub" className="transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl bg-gray-200 p-2 rounded-3xl">
                        <DiGithub size={40} />
                    </Link >
                    <Link href="https://www.linkedin.com/in/rubelhasan-/" className="transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl bg-gray-200 p-2 rounded-3xl">
                        <LiaLinkedin size={40} />
                    </Link >
                    <Link href="https://discord.com/users/997819259315032129" className="transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl bg-gray-200 p-2 rounded-3xl">
                        <FaDiscord size={35} />
                    </Link >
                </div>
            </nav>
            <hr className="border w-full opacity-35" />
            <div className="flex justify-around w-full  lg:text-xl">
                <div>
                    <p>© 2026 KeenKeeper. All rights reserved.</p>
                </div>
                <div className="flex sm:gap-15 ">
                    <p>Privacy</p>
                    <p>Terms of Service  </p>
                    <p> Cookie</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;