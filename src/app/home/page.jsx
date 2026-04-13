import { IoMdAdd } from "react-icons/io";

const page = () => {
    return (
        <div className="max-w-11/12 sm:max-w-10/12 mx-auto mt-20 mb-10">
            <div className="text-center space-y-10">
                <h1 className="text-6xl sm:text-8xl font-bold">Friends to keep close in your life</h1>
                <p className="text-xl sm:text-3xl">Your personal shelf of meaningful connections. Browse, tend, and nurture the <span className="hidden sm:block"><br /></span>  relationships that matter most.</p>
                <button className="btn btn-info text-2xl"><IoMdAdd />Add a Friend</button>
            </div>
        </div>
    );
};

export default page;