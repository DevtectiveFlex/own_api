import { defineEventHandler } from "h3";
import { listCategories } from "~/db/categories/categories.repo";
import errorBuilder from "~/utils/errorBuilder";

export default defineEventHandler(async () => {
  const { data, error } = await listCategories();

  if (error) {
    return errorBuilder(500, 'Failed to get api/categories', error);
  }

  return data;
})