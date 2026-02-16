import { Question } from "~/domain/question";
import { supabase } from "../supabase";


const TABLE = 'questions'
/**
 * get all not archived questions from the postgresql `questions` table 
 * 
 * `SELECT` * `FROM` question `WHERE` is_archived = false `ORDER BY` created_at DESC
 * @returns 
 */
export function listQuestions() {
  return supabase
    .from(TABLE)
    .select('*')
    .eq('is_archived', false)
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
    .from(TABLE)
    .select('*')
    .eq('id', id)
    .single()
    .overrideTypes<Question>()
}


/**
 * get all archived questions from the postgresql `questions` table
 * `SELECT` * `FROM` question `WHERE` is_archived = true `ORDER BY` created_at DESC
 * @returns 
 */
export function listArchivedQuestions() {
  return supabase
    .from(TABLE)
    .select('*')
    .eq('is_archived', true)
    .order('created_at', {
      ascending: false,
    })
    .overrideTypes<Question[]>();
}



