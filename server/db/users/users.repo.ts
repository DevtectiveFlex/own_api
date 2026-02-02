import { supabase } from '../supabase';


export async function findUserByTelegramId(telegramId: number) {
  return supabase
    .from('user')
    .select('*')
    .eq('telegram_id', telegramId)
    .single();
}