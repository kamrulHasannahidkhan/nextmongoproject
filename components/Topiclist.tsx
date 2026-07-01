import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

interface Topic {
    _id: string;
    title: string;
    description: string;
}

const getTopics = async (): Promise<{ topics: Topic[] }> => {
    try {
        const res = await fetch('http://localhost:3000/api/topics', {
            cache: "no-store"
        });
        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }
        return res.json();
    } catch (error) {
        console.log("error", error);
        return { topics: [] }; // safe fallback so .map() never crashes
    }
};

export default async function Topiclist() {
    const { topics } = await getTopics();
    return ( 
        <>
        {topics.map((t: Topic) => (
        <div key={t._id} className="p-4 border margin-10 border-slate-400 my-3 flex justify-between gap-20 rounded-md items-start">
            <div>
                <h2>{t.title}</h2>
                <div>{t.description}</div>
            </div>
            <div className="flex gap-4">
                <RemoveBtn/>
                <Link href={'/editTopic/' + t._id}><HiPencilAlt/></Link>
            </div>
        </div>
        ))}
        </>
    )
}