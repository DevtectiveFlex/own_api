import { Category } from "~/domain/category";
import { supabase } from "../supabase";

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

export function getCategoryById(id: string) {
  return supabase
    .from('categories')
    .select('*')
    .eq('id', id)
    .single()
    .overrideTypes<Category>();
}