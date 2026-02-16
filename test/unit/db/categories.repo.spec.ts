import { PostgrestSingleResponse } from "@supabase/supabase-js";
import { describe, expect, it, vi } from "vitest";
import * as repo from "~/db/categories/categories.repo";
import { Category } from "~/domain/category";


const mockResponse: PostgrestSingleResponse<Category> = {
  count: 1,
  data: {
    id: '666',
    title: 'Test category',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
    is_archived: false,
  },
  error: null,
  status: 200,
  statusText: 'OK',
};

vi.mock(`./server/db/categories/categories.repo`);
describe('getCategoriesById', () => {
  it('calls getCategoryById with correct id', async () => {
    vi.spyOn(repo, 'getCategoryById').mockResolvedValue(mockResponse);
    const result = await repo.getCategoryById('666');

    expect(repo.getCategoryById).toBeCalledWith('666');
    expect(result).toBe(mockResponse);
  });
});