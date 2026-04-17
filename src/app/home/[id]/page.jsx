import Buttons from "@/components/shared/Button.jsx/Buttons";
import Cont from "@/context/Cont";
import { Content } from "next/font/google";
import Image from "next/image";
import { BsArchive, BsChatSquareText } from "react-icons/bs";
import { MdOutlineNotificationsActive, MdVideoCall } from "react-icons/md";
import { RiDeleteBin4Line } from "react-icons/ri";


const FdDetails = async ({ params }) => {
    const res = await fetch("http://localhost:3000/fd.json", { cache: "no-store" }
    );
    const fdData = await res.json();
    const { id } = await params
    const fd = fdData.find((f) => f.id == id)

    const statusColor = {
        Overdue: "bg-red-300 rounded-2xl py-1 text-[15px] font-bold",
        "On-Track": "bg-green-300 rounded-2xl py-1 text-[15px] font-bold",
        "Almost Due": "bg-amber-300 rounded-2xl py-1 text-[15px] font-bold",
    }
    return (
        <div className="max-w-11/12 sm:max-w-10/12 mx-auto mt-20 mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 lg:gap-10">
                {/* The Profile section Left */}
                <div className="lg:col-span-2 space-y-3">
                    <div className="card bg-base-100 shadow-md flex items-center justify-center transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
                        <div className="card-body text-center space-y-1 ">
                            <Image src={fd.picture} width={80} height={80} className="rounded-full object-cover w-30 h-30 mx-auto" alt="My friends Photos"></Image>
                            <p className="text-3xl font-semibold">{fd.name}</p>
                            <p className="text-sm sm:text-xl">{fd.bio}</p>
                            <p className="text-sm sm:text-xl border-3 p-2">Email: {fd.email}</p>
                            <p className={`${statusColor[fd.status]} w-5/12 mx-auto`}>{fd.status}</p>
                            <p className="w-5/12 mx-auto sm:text-xl py-1.25 bg-green-700 text-white rounded-full">{fd.tags}</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-md py-5 flex items-center justify-center transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
                        <div className="flex font-bold text-3xl gap-4">
                            <MdOutlineNotificationsActive />
                            <h1>Snooze 2 weeks</h1>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-md py-5 flex items-center justify-center transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
                        <div className="flex font-bold text-2xl gap-4 ">
                            <BsArchive />
                            <h1>Archive</h1>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-md py-5 flex items-center justify-center transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
                        <div className="flex font-bold text-red-500 text-2xl gap-4">
                            <RiDeleteBin4Line />
                            <h1>Delete</h1>
                        </div>
                    </div>
                </div>

                {/* All Days */}
                <div className="w-full lg:col-span-4 space-y-7">
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                        <div className="card bg-base-100 shadow-md sm:py-5 sm:flex items-center justify-center transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
                            <div className="flex flex-col py-4 font-bold text-2xl gap-4 items-center justify-center">
                                <h1 className="text-5xl ">{fd.days_since_contact}</h1>
                                <h1>Days Since Contact</h1>
                            </div>
                        </div>



                        <div className="card bg-base-100 shadow-md py-5 flex items-center justify-center transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
                            <div className="flex flex-col font-bold text-2xl gap-4 items-center justify-center">
                                <h1 className="text-5xl">{fd.goal}</h1>
                                <h1>Goal (Days)</h1>
                            </div>
                        </div>


                        <div className="card bg-base-100 shadow-md py-5 flex items-center justify-center transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
                            <div className="flex flex-col font-bold text-2xl gap-4 items-center justify-center">
                                <h1 className="text-5xl">{fd.next_due_date}</h1>
                                <h1>Next Due</h1>
                            </div>
                        </div>
                    </div>


                    {/* Relationship Goal */}
                    <div className="card bg-base-100 shadow-md transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
                        <div className="font-bold text-2xl p-7 space-y-4">
                            <div className="flex justify-between items-center">
                                <div><h1>Relationship Goal</h1></div>
                                <div><button className="btn">Edit</button></div>
                            </div>
                            <div>
                                <h1>Days Since Contact: {fd.goal}</h1>
                            </div>
                        </div>
                    </div>

                    {/* Audio Call, Video Call */}
                    <div className="card bg-base-100 shadow-md transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl p-7">
                        <p className="text-2xl font-semibold">Quick Check-In</p>

                        <div className="flex gap-5 lg:gap-7 xl:gap-10 justify-center pt-5">
                            <Buttons fdsData={fd} />
                        </div>
                    </div>
                    {/* History */}
                    {/* <div className="card bg-base-100 shadow-md transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
                        <div className="font-bold text-2xl p-7 space-y-4">
                            <div className="flex justify-between items-center">
                                <div><h1>Relationship Goal</h1></div>
                                <div><button className="btn"><FaHistory />Full History</button></div>
                            </div>
                            <Cont></Cont>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default FdDetails;