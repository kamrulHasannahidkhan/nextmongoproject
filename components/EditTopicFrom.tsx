import { HiPencilAlt } from "react-icons/hi";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";

export default function EditTopicForm() {
    return (
        <form className="max-w-md mx-auto mt-10 p-6  rounded-lg shadow-md">
            <input
            className="border border-gray-300 rounded-md p-2 w-full mb-4"
             type="text" placeholder="Topic Title" />
           <input
            className="border border-gray-300 rounded-md p-2 w-full mb-4"
             type="text" placeholder="Topic Description" />

             <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
             type="submit">Update Topic</button>
        </form>
    );
}