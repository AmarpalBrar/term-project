"use server";
import { prisma } from "@/database";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

// Create block 
export async function createBlock(formData: FormData) {
  const userId = (await cookies()).get("user_id")?.value;
   if (!userId) {
    throw new Error("Not authenticated");
  }
  const title = formData.get("title") as string;
  const code = formData.get("code") as string;
  const block = await prisma.block.create({
    data: {
    title,
    code,
    userId: Number(userId),
  },
   });
  redirect("/");
}

/// Edit/Update Block
export async function updateBlock(formData: FormData) {
  const userId = Number((await cookies()).get("user_id")?.value);

  if (!userId) {
    throw new Error("Not authenticated");
  }
  const id = Number(formData.get("id"));
  const title = formData.get("title") as string;
  const code = formData.get("code") as string;

  const block = await prisma.block.findUnique({
    where: { id },
  });

  if (!block || block.userId !== userId) {
    throw new Error("Unauthorized — you cannot edit this block");
  }

  await prisma.block.update({
    where: { id },
    data: { title, code },
  });

 redirect(`/blocks/${id}`);
}

/// Delete Block 
export async function deleteBlock(formData: FormData) {
   const userId = Number((await cookies()).get("user_id")?.value);

  if (!userId) {
    throw new Error("Not authenticated");
  }

  const id = Number(formData.get("id"));
 
  if (isNaN(id)) throw new Error("Invalid ID");

  const block = await prisma.block.findUnique({ where: { id } });
  
  if (!block) {
    throw new Error("Block not found");
  }

  if (block.userId !== userId) {
    throw new Error("Unauthorized — you cannot delete this block");
  }
  
  await prisma.block.delete({
    where: { id }
  });

  redirect("/");
}

// Login page
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