import { defineEventHandler, getRouterParam } from "h3";
import { getCategoryById } from "~/db/categories/categories.repo";
import errorBuilder from "~/utils/errorBuilder";


export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id');

  if (!id) {
    return errorBuilder(400, 'Category id is required');
  }

  const { data, error } = await getCategoryById(id);

  if (error) {
    return errorBuilder(500, `Failed to get api/categories/${id} - ${error.message}`);
  }

  return data;
})