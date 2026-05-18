-- StarDev: results 테이블
-- Supabase Dashboard > SQL Editor에서 실행하세요.

create table if not exists results (
  id uuid default gen_random_uuid() primary key,
  field text not null,
  reason text not null,
  roadmap jsonb not null,
  courses jsonb not null,
  created_at timestamp with time zone default now()
);

-- RLS 활성화
alter table results enable row level security;

-- 누구나 읽기 가능 (공유 URL 접근)
create policy "Public read results"
  on results for select
  using (true);

-- 쓰기는 service role(API)만 가능 (anon은 불가)
-- (별도 policy 없으면 anon write 차단됨)
