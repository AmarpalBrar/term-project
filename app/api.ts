"use server";
import { prisma } from "@/database";
import { redirect } from "next/navigation";

export async function createBlock(formData: FormData) {
  const title = formData.get("title") as string;
  const code = formData.get("code") as string;
  const block = await prisma.block.create({ data: { title, code } });
  redirect("/");
}

export async function updateBlock(formData: FormData) {
  const id = Number(formData.get("id"));
  const title = formData.get("title") as string;
  const code = formData.get("code") as string;

  await prisma.block.update({
    where: { id },
    data: { title, code },
  });

 redirect(`/blocks/${id}`);
}


export async function deleteBlock(formData: FormData) {
  const id = Number(formData.get("id"));

  if (isNaN(id)) throw new Error("Invalid ID");

  await prisma.block.delete({
    where: { id }
  });

  redirect("/");
}