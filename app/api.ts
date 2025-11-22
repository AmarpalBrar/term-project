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


export async function handleLogin(formData: FormData) {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;
  const foundUser = await prisma.user.findUnique({
    where: { username, password },
  });
  if (!foundUser) {
    redirect("/login");
  } else {
    (await cookies()).set("user_id", String(foundUser.id));
    redirect("/");
  }
}