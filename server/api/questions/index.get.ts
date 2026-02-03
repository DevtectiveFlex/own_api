import { defineEventHandler } from "h3";
import { listQuestions } from "~/db/questions/questions.repo";
import errorBuilder from "~/utils/errorBuilder";


export default defineEventHandler(async () => {
  const { data, error } = await listQuestions();

  if (error) {
    return errorBuilder(500, 'Failed to get /api/questions')
  }

  return data;
})