import { Category } from "~/domain/category";
import { supabase } from "../supabase";
import { PostgrestSingleResponse } from "@supabase/supabase-js";

export function listCategories() {
  return supabase
    .from('categories')
    .select('*')
    .eq('is_archived', false)
    .order('created_at', {
      ascending: false,
    })
    .overrideTypes<Category[]>();
}

export async function getCategoryById(id: string): Promise<PostgrestSingleResponse<Category>> {
  return await supabase
    .from('categories')
    .select('id, title, created_at, updated_at, is_archived')
    .eq('id', id)
    .single()
}