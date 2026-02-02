import { defineEventHandler, getRouterParam } from 'h3';
import { getUserByTelegramId } from '../../services/users.service';

export default defineEventHandler(async (event) => {
  const telegramIdParam = getRouterParam(event, 'telegramId');
  if (!telegramIdParam) {
    return {
      statusCode: 400,
      message: 'telegramId is required',
    };
  }

  const telegramId = Number(telegramIdParam);

  if (!Number.isInteger(telegramId)) {
    return {
      statusCode: 400,
      message: 'telegramId must be a number',
    };
  }

  const user = await getUserByTelegramId(telegramId);

  return user;
});
