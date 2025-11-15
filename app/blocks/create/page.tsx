import { createBlock } from "@/app/api";
import { prisma } from "@/database";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function CreateBlock() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">      
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <header className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-semibold text-gray-800">Create Code</h1>
           <Link href="/" className="inline-block px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition">Go back Home</Link>
        </header>
       
        {/* Form */}
        <form action={createBlock} className="flex flex-col gap-y-4">
          <input
            name="title"
            type="text"
            placeholder="Block Title"
            className="bg-white rounded-lg shadow-sm hover:shadow-md w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          <textarea 
            rows={6} 
            name="code"
            placeholder="Your code goes here..."
            className="bg-white rounded-lg shadow-sm hover:shadow-md w-full p-4 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
          </textarea>

         <button
            type="submit"
            className="self-end px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
          >
            Create  
          </button>
        
        </form>
      </div>
    </main>
  );
}
