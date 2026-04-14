import Link from "next/link";
import { RiSignalWifiErrorLine } from "react-icons/ri";

const NotFound = () => {
    return (
        <div className="bg-gray-200 text-center p-10 md:p-30 space-y-3">
            <h1 className="text-7xl sm:text-9xl font-semibold text-red-700"><RiSignalWifiErrorLine className="text-red-700"/> 404 ?</h1>
            <h1 className="text-7xl font-semibold">There in noting</h1>
            <Link href="/">
            <button className="btn btn-info text-2xl">Go Back</button>
            </Link>
        </div>
    );
};

export default NotFound;