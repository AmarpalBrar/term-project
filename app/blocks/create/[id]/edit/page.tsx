import { prisma } from "@/database";
import { Cossette_Texte } from "next/font/google";
import Link from "next/link";

interface Props {
  params: { id: string };
}

export default async function EditBlock(props: Props) {
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
          <h1 className="text-3xl font-semibold text-gray-800">
            Edit Block
          </h1>
        </header>

        <form action="update" className="space-y-4">
          <label className="block">
            <span className="text-gray-700">Title</span>
            <input
              type="text"
              defaultValue={block.title}
              className="bg-white rounded-lg shadow-sm hover:shadow-md w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </label>

          <label className="block">
            <span className="text-gray-700">Code</span>
            <textarea
            rows={6} 
            defaultValue={block.code}
            className="bg-white rounded-lg shadow-sm hover:shadow-md w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </label>
           <Link
            href= {`/blocks/${block.id}`}
            className="inline-block px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
           >
            Save
          </Link>
        </form>
      </div>
    </main>
  );
}
