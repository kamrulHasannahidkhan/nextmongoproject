import Topiclist from "@/components/Topiclist";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gray-800 flex min-h-screen flex-col items-center justify-between p-24">
     <Topiclist/>
    </main>
  );
}
