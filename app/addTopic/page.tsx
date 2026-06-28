export default function AddTopic() {
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
             type="submit">Add Topic</button>
        </form>

    );
}
