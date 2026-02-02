import { createClient } from '@supabase/supabase-js';

const supabaseURL = process.env.SUPABASE_URL;
const supabaseRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseRoleKey && !supabaseURL) {
  throw new Error('Supabase env vars are not set');
}

export const supabase = createClient(supabaseURL!, supabaseRoleKey!, {
  auth: {
    persistSession: false,
  },
});
