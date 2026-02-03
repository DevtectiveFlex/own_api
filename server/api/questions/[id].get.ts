import { defineEventHandler, getRouterParam } from "h3";
import { getQuestionById } from "~/db/questions/questions.repo";
import errorBuilder from "~/utils/errorBuilder";

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id');

  if (!id) {
    return errorBuilder(400, `Id must be a number`);
  }

  const { data, error } = await getQuestionById(id);

  if (error) {
    return errorBuilder(500, `Failed to GET api/questions/${id} - ${error.message}`);
  }

  return data;

})