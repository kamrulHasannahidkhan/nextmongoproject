import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import {HiPencilAlt} from "react-icons/hi";

export default function Topiclist() {
    return ( 
        <>
        <div className="p-4 border margin-10 border-slate-400 my-3 flex justify-between gap-20 rounded-md items-start">
            <div>
                <h2>Topic Title</h2>
                <div>Topic Description</div>
            </div>
            <div className="flex gap-4">
                <RemoveBtn/>
                <Link href={'/editTopic/123'}><HiPencilAlt/></Link>
            </div>
        </div>
        </>
    )
}