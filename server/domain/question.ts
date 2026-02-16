export interface Question {
  id: string;
  text: string;
  media_url: string | null;
  answer: string | null;
  created_by: string | null;
  created_at: string | null;
  updated_at: string | null;
  is_archived: boolean | null;
}

export interface CreateQuestionDto {
  text: string;
  answer: string;
  media_url?: string | null;
  created_by: string;
};
