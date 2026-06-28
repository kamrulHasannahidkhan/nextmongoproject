import Link from "next/link";

export default function Navber() {
  return (
    <nav className="flex justify-between items-center px-8 py-3 bg-gray-900 text-white">
      <Link href="/">Home</Link>
      <Link href="/addTopic">Add Topic</Link>
    </nav>
  );
}