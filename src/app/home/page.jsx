import { IoMdAdd } from "react-icons/io";

const page = () => {
    return (
        <div className="max-w-11/12 sm:max-w-10/12 mx-auto mt-20">

            {/* Add friends section */}
            <div className="text-center space-y-5 sm:space-y-10">
                <h1 className="text-6xl sm:text-8xl font-bold">Friends to keep close in your life</h1>
                <p className="text-xl sm:text-3xl">Your personal shelf of meaningful connections. Browse, tend, and nurture the <span className="hidden sm:block"><br /></span>  relationships that matter most.</p>
                <button className="btn btn-info text-2xl"><IoMdAdd />Add a Friend</button>
            </div>


            {/* 4 cards section */}
            <div className="grid grid-cols-2 gap-7 sm:grid-cols-4 pt-20 sm:gap-20">
                <div className="card bg-base-100 shadow-md py-5 flex items-center">
                    <div className="card-body text-center ">
                        <h2 className="text-5xl font-bold">10</h2>
                        <p className="text-xl font-semibold">Total Friends</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-sm py-5 flex items-center">
                    <div className="card-body text-center">
                        <h2 className="text-5xl font-bold">3</h2>
                        <p className="text-xl font-semibold">On Track</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-sm py-5 flex items-center">
                    <div className="card-body text-center">
                        <h2 className="text-5xl font-bold">6</h2>
                        <p className="text-xl font-semibold">Need Attention</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-sm py-5 flex items-center">
                    <div className="card-body text-center">
                        <h2 className="text-5xl font-bold">12</h2>
                        <p className="text-xl font-semibold">Interactions This Month</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;