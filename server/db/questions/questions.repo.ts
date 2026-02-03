import { Question } from "~/domain/question";
import { supabase } from "../supabase";


/**
 * get all not archived questions from the postgresql `questions` table 
 * 
 * `SELECT` * `FROM` question `WHERE` is_archived = false `ORDER BY` created_at DESC
 * @returns 
 */
export function listQuestions() {
  return supabase
    .from('questions')
    .select('*')
    .eq('is_archived', false)
    .order('created_at', {
      ascending: false,
    })
    .overrideTypes<Question[]>();
}

/**
 * get all archived questions from the postgresql `questions` table
 * `SELECT` * `FROM` question `WHERE` is_archived = true `ORDER BY` created_at DESC
 * @returns 
 */
export function listArchivedQuestions() {
  return supabase
    .from('questions')
    .select('*')
    .eq('is_archived', true)
    .order('created_at', {
      ascending: false,
    })
    .overrideTypes<Question[]>();
}

/**
 * gets question by id from the postgresql `questions` table
 * @returns 
 */
export function getQuestionById(id: string) {
  return supabase
    .from('questions')
    .select('*')
    .eq('id', id)
    .single()
    .overrideTypes<Question>()
}