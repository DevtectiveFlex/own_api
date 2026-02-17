import { QuestionDto, Question } from "~/domain/question";
import { supabase } from "../supabase";


const TABLE = 'questions'


//==============================
// CREATE
//==============================

/**
 * creates question in the postgresql `questions` table  
 *
 * @returns 
 */
export function createQuestion(question: QuestionDto) {
  return supabase
    .from(TABLE)
    .insert(question)
    .select()
    .single()
}


//==============================
// READ
//==============================

/**
 * Returns question selected by id
 */
export function getQuestionById(id: string) {
  return supabase
    .from(TABLE)
    .select()
    .eq('id', id)
    .single()
    .overrideTypes<Question>()
}


/**
 * Returns all active questions ordered by creation date (DESC)
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
 * Returns all unactive questions ordered by creation date (DESC)
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

//==============================
// UPDATE
//==============================

/**
 * Updates question selected by id
 */
export function updateQuestion(id: string, value: QuestionDto) {
  return supabase
    .from(TABLE)
    .update(value)
    .eq('id', id)
    .select()
    .single()
}

/**
 * Updates the is_archived flag for a question.
 * Soft delete for question while is_archived = true
 */
export function setArchiveStatus(id: string, value: boolean) {
  return supabase
    .from(TABLE)
    .update({ is_archived: value })
    .eq('id', id)
    .select()
    .single()
}


//==============================
// DELETE
//==============================
