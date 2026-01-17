"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "@/lib/meals";
import { revalidatePath } from "next/cache";

function isInvalidText(text) {
  return !text || typeof text !== "string" || !text.trim();
}

export async function shareMeal(_prevState, formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(meal.creator_email) ||
    !meal.image ||
    !meal.image.size
  ) {
    return { message: "Invalid input." };
  }

  await saveMeal(meal);

  revalidatePath("/meals");
  redirect("/meals");
}
