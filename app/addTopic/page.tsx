"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTopic() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!title || !description) {
            alert("Please fill in both title and description");
            return;
        }
        try {
            const res = await fetch("http://localhost:3000/api/topics", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ title, description }),
            });

            if (res.ok) {
                router.push("/");
            } else {
                throw new Error("Failed to add topic");
            }
        } catch (error) {
            console.error("Error adding topic:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-6 rounded-lg shadow-md">
            <input
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className="border border-gray-300 rounded-md p-2 w-full mb-4"
                type="text"
                placeholder="Topic Title"
            />
            <input
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                className="border border-gray-300 rounded-md p-2 w-full mb-4"
                type="text"
                placeholder="Topic Description"
            />
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                type="submit">
                Add Topic
            </button>
        </form>
    );
}