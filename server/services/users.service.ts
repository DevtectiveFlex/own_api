import { findUserByTelegramId } from '../db/users/users.repo'

export async function getUserByTelegramId(telegramId: number) {
  if (!Number.isInteger(telegramId)) {
    throw new Error('Invalid telegramId');
  }

  const user = await findUserByTelegramId(telegramId);

  if (!user) {
    throw new Error('User not found');
  }

  return user;
}