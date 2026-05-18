import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export type ToolCategory = {
  id: number;
  name_ko: string;
  name_en: string;
  desc_ko: string;
  desc_en: string;
  sort_order: number;
  tools: Tool[];
};

export type Tool = {
  id: number;
  category_id: number;
  icon: string;
  name: string;
  desc_ko: string;
  desc_en: string;
  tag_ko: string;
  tag_en: string;
  url: string;
  click_count: number;
  sort_order: number;
};
