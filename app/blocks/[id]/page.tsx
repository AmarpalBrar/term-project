import { createBlock } from "@/app/api";
import {deleteBlock} from"@/app/api"
import { prisma } from "@/database";
import Link from "next/link";
import { redirect } from "next/navigation";

interface Props {
  params: { id: string };
}

export default async function BlockIDPage(props: Props) {
  const params = await props.params; // <-- unwrap the promise

  console.log("Params object:", params); // should now be { id: "2" }

  const id = parseInt(params.id, 10);
  console.log("Parsed ID:", id);

  if (isNaN(id)) return <p>Invalid ID</p>;

  const block = await prisma.block.findUnique({ where: { id } });
  if (!block) return <p>Block not found</p>;

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto">
          <header className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-semibold text-gray-800">CodeBlocks</h1>

          <div className="flex gap-4">
            <form action="javascript:void(0)">
            <input type="hidden" name="id" value="2" />
            <button
            type="submit"
            className="px-5 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition"
            >
            Delete
            </button>
            </form>

            <a
            href="/blocks/2/edit"
            className="px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition inline-block text-center"
            >
            Edit
            </a>
          </div>

        </header>

        <form className="space-y-4">
          <label className="block">
            <span className="text-gray-700">Title</span>
            <input
              name="title"
              type="text"
              defaultValue={block.title}
              className="bg-white rounded-lg shadow-sm hover:shadow-md w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </label>

          <label className="block">
            <span className="text-gray-700">Code</span>
            <textarea
            rows={6} 
            name="code"
            defaultValue={block.code}
            className="bg-white rounded-lg shadow-sm hover:shadow-md w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </label>

        </form>
      </div>
    </main>
  );
}
