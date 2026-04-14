"use client"
import { fdsContext } from "@/contaxt/ContextProvider";
import { use } from "react";
const Cont = () => {

const { data } = use(fdsContext)

    return (
        <div>
            
            {data.map((item, index) => (
            <div key={index} className="mb-4 p-4 border rounded-lg">
                <h1 className="text-2xl font-bold">{item.friend.name}</h1>
                <h1 className="text-xl">{item.action}</h1>
            </div>))}
                
        </div>
    );
};

export default Cont;