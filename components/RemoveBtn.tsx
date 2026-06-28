import { HiOutlineTrash } from "react-icons/hi";

export default function RemoveBtn() {
  return (
  <div >
    <button>
        <HiOutlineTrash size={24} className="text-red-500 hover:text-red-700" />
    </button>
  </div>

  );
}