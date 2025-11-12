import Link from "next/link";

export default function CreateBlock() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">      
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <header className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-semibold text-gray-800">Create Code</h1>
        </header>

        {/* Form */}
        <form className="flex flex-col gap-y-4">
          <input
            type="text"
            placeholder="Block Title"
            className="bg-white rounded-lg shadow-sm hover:shadow-md w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          <textarea 
            rows={6} 
            placeholder="Your code goes here..."
            className="bg-white rounded-lg shadow-sm hover:shadow-md w-full p-4 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
          </textarea>

          {/* <button
            type="submit"
            className="self-end px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
          >
            Create
          </button> */}
          <div className="flex justify-center">
          <Link
            href="/"
            className="px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition flex items-center justify-center "
          >
            Create
          </Link>
          </div>
        </form>
      </div>
    </main>
  );
}
