-- =============================================
-- StarDev: 전체 DB 셋업 (한 번만 실행)
-- Supabase Dashboard > SQL Editor에 붙여넣고 실행
-- =============================================

-- 기존 테이블 삭제 (재실행 시 충돌 방지)
DROP TABLE IF EXISTS tools CASCADE;
DROP TABLE IF EXISTS tool_categories CASCADE;
DROP TABLE IF EXISTS results CASCADE;

-- 테이블 생성
CREATE TABLE tool_categories (
  id SERIAL PRIMARY KEY,
  name_ko TEXT NOT NULL,
  name_en TEXT NOT NULL,
  desc_ko TEXT,
  desc_en TEXT,
  sort_order INTEGER DEFAULT 0
);

CREATE TABLE tools (
  id SERIAL PRIMARY KEY,
  category_id INTEGER REFERENCES tool_categories(id) ON DELETE CASCADE,
  icon TEXT DEFAULT '🔧',
  name TEXT NOT NULL,
  desc_ko TEXT,
  desc_en TEXT,
  tag_ko TEXT DEFAULT '무료/유료',
  tag_en TEXT DEFAULT 'Free/Paid',
  url TEXT,
  click_count INTEGER DEFAULT 0,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE results (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  field TEXT NOT NULL,
  reason TEXT NOT NULL,
  roadmap JSONB NOT NULL,
  courses JSONB NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- RLS 활성화
ALTER TABLE tool_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE tools ENABLE ROW LEVEL SECURITY;
ALTER TABLE results ENABLE ROW LEVEL SECURITY;

CREATE POLICY "public read categories" ON tool_categories FOR SELECT USING (true);
CREATE POLICY "public read tools" ON tools FOR SELECT USING (true);
CREATE POLICY "public read results" ON results FOR SELECT USING (true);

-- 클릭 카운트 함수
CREATE OR REPLACE FUNCTION increment_tool_click(tool_id INTEGER)
RETURNS VOID LANGUAGE plpgsql SECURITY DEFINER AS $$
BEGIN
  UPDATE tools SET click_count = click_count + 1 WHERE id = tool_id;
END;
$$;

-- 카테고리 데이터
INSERT INTO tool_categories (name_ko, name_en, desc_ko, desc_en, sort_order) VALUES
('코딩 보조 AI','Coding AI','개발 생산성을 높여주는 AI 코딩 도구','AI coding tools to supercharge your development productivity',0),
('AI 개발 플랫폼 / API','AI Dev Platforms / APIs','AI 기능을 서비스에 직접 통합할 수 있는 API','APIs to integrate AI capabilities directly into your products',1),
('AI 검색 / 리서치','AI Search / Research','개발 공부와 문서 탐색에 유용한 AI 도구','AI tools for learning, documentation, and problem solving',2),
('AI 이미지 / 디자인','AI Image / Design','프론트엔드·UI 개발자에게 유용한 AI 디자인 도구','AI design tools for frontend and UI developers',3),
('AI 영상 / 미디어','AI Video / Media','유튜브·영상 제작·콘텐츠 크리에이터를 위한 AI 도구','AI tools for YouTubers, video creators, and content producers',4),
('AI 생산성 / 문서화','AI Productivity / Docs','개발 문서·협업·노트 작업을 도와주는 AI 도구','AI tools for documentation, collaboration, and note-taking',5);

-- 툴 데이터
INSERT INTO tools (category_id, icon, name, desc_ko, desc_en, tag_ko, tag_en, url, sort_order) VALUES
(1,'⚡','Cursor','AI가 내장된 코드 에디터. Claude·GPT-4 기반으로 코드 작성·수정·디버깅을 대화하듯 처리해요.','AI-powered code editor built on Claude & GPT-4. Write, edit, and debug code through natural conversation.','무료/유료','Free/Paid','https://cursor.sh',0),
(1,'🐙','GitHub Copilot','GitHub + OpenAI가 만든 코드 자동완성 도구. VS Code, JetBrains 등 대부분의 에디터 지원.','Code autocomplete tool by GitHub + OpenAI. Supports VS Code, JetBrains, and most popular editors.','유료','Paid','https://github.com/features/copilot',1),
(1,'🖥️','Claude Code','Anthropic의 Claude를 터미널에서 직접 사용하는 AI 개발 도구. 파일 수정·코드 리뷰·배포까지.','Anthropic''s Claude directly in your terminal. File edits, code reviews, and deployments — all in one.','유료','Paid','https://claude.ai/code',2),
(1,'🌊','Codeium','무료 코드 자동완성 AI. 70개 이상의 언어 지원, VS Code·JetBrains 플러그인 제공.','Free AI code autocomplete supporting 70+ languages. VS Code & JetBrains plugins available.','무료','Free','https://codeium.com',3),
(1,'🧠','Tabnine','로컬 실행 가능한 AI 코딩 어시스턴트. 코드가 외부로 나가지 않아 보안이 중요한 팀에 적합.','AI coding assistant that runs locally. Code stays on your machine — ideal for teams with strict security requirements.','무료/유료','Free/Paid','https://tabnine.com',4),
(2,'🔮','Anthropic Claude API','Claude 모델을 API로 직접 호출. 문서 분석·코딩·RAG·에이전트 등 다양한 AI 기능 구현 가능.','Call Claude models via API. Build document analysis, coding assistants, RAG pipelines, and agents.','유료','Paid','https://anthropic.com',0),
(2,'🤖','OpenAI API','GPT-4o·DALL-E·Whisper 등 OpenAI 모델을 API로 호출. 가장 많은 레퍼런스 보유.','Access GPT-4o, DALL-E, and Whisper via API. The most widely referenced AI platform.','유료','Paid','https://platform.openai.com',1),
(2,'🤗','Hugging Face','오픈소스 AI 모델 허브. 수십만 개의 모델을 무료로 사용하거나 직접 파인튜닝 가능.','Open-source AI model hub with hundreds of thousands of models. Use for free or fine-tune your own.','무료/유료','Free/Paid','https://huggingface.co',2),
(2,'▲','Vercel AI SDK','Next.js·React에서 AI 스트리밍을 쉽게 구현하는 SDK. Claude·GPT·Gemini 모두 지원.','SDK for easy AI streaming in Next.js & React. Supports Claude, GPT, and Gemini out of the box.','무료','Free','https://sdk.vercel.ai',3),
(2,'🔗','LangChain','LLM 기반 애플리케이션 개발 프레임워크. RAG, 에이전트, 체인 구성을 쉽게 만들 수 있어요.','Framework for building LLM-powered apps. Easily compose RAG pipelines, agents, and chains.','무료','Free','https://langchain.com',4),
(3,'🔍','Perplexity AI','웹을 실시간 검색하며 답변하는 AI. 최신 라이브러리 문서·에러 해결에 특히 유용.','AI that searches the web in real-time. Especially useful for finding the latest library docs and debugging errors.','무료/유료','Free/Paid','https://perplexity.ai',0),
(3,'💡','Phind','개발자 전용 AI 검색 엔진. Stack Overflow·GitHub·공식 문서를 종합해 코딩 질문에 답변.','AI search engine built for developers. Combines Stack Overflow, GitHub, and official docs to answer coding questions.','무료','Free','https://phind.com',1),
(3,'🌐','You.com','AI 검색 + 코딩 모드 탑재. 코드 생성·디버깅·설명을 검색하듯 사용 가능.','AI search with a coding mode built in. Generate, debug, and explain code — all from a search interface.','무료/유료','Free/Paid','https://you.com',2),
(4,'🎨','Midjourney','현존 최고 수준의 AI 이미지 생성 도구. 서비스 썸네일·일러스트·브랜딩 소재 제작에 활용.','One of the best AI image generators available. Perfect for thumbnails, illustrations, and branding assets.','유료','Paid','https://midjourney.com',0),
(4,'🖼️','DALL-E 3','OpenAI의 이미지 생성 AI. ChatGPT Plus에서 바로 사용 가능. 텍스트 포함 이미지 강점.','OpenAI''s image generation AI. Available directly in ChatGPT Plus. Strong at generating images with text.','유료','Paid','https://openai.com/dall-e-3',1),
(4,'✦','v0 by Vercel','텍스트로 React UI 컴포넌트를 생성하는 AI. 프론트엔드 개발자의 디자인 작업을 크게 줄여줘요.','Generate React UI components from text descriptions. Dramatically reduces design work for frontend devs.','무료/유료','Free/Paid','https://v0.dev',2),
(4,'🎭','Adobe Firefly','Adobe 생태계에 통합된 AI 이미지 생성. Photoshop·Illustrator와 연동해 실무에서 바로 활용.','AI image generation integrated into the Adobe ecosystem. Works directly in Photoshop & Illustrator.','유료','Paid','https://firefly.adobe.com',3),
(5,'🎬','Runway ML','텍스트·이미지로 영상을 생성하는 AI. Gen-3 모델로 고품질 영상 제작, 크리에이터 필수 도구.','Generate video from text or images using AI. Gen-3 model produces high-quality footage — a must-have for creators.','무료/유료','Free/Paid','https://runwayml.com',0),
(5,'🐦','Pika Labs','텍스트나 이미지를 영상으로 변환하는 AI. 쉬운 사용법으로 유튜브 쇼츠·릴스 제작에 인기.','Convert text or images into video. Easy to use and popular for YouTube Shorts and Instagram Reels.','무료/유료','Free/Paid','https://pika.art',1),
(5,'🗣️','ElevenLabs','AI 음성 생성 도구. 한국어 포함 29개 언어 지원. 내레이션·팟캐스트·유튜브 보이스오버에 활용.','AI voice generation tool. Supports 29 languages including Korean. Great for narration, podcasts, and voiceovers.','무료/유료','Free/Paid','https://elevenlabs.io',2),
(5,'✂️','Descript','영상 편집을 텍스트로 하는 AI 에디터. 자막 자동 생성·불필요한 침묵 자동 제거·클립 정리.','AI video editor that lets you edit video like a text document. Auto captions, silence removal, and clip trimming.','무료/유료','Free/Paid','https://descript.com',3),
(5,'🧑‍💼','HeyGen','AI 아바타가 대신 영상을 찍어주는 도구. 내 목소리·얼굴을 학습해 다양한 언어로 영상 제작.','Create videos with an AI avatar that looks and sounds like you. Produce content in multiple languages effortlessly.','유료','Paid','https://heygen.com',4),
(5,'🌊','Kling AI','중국 Kuaishou가 만든 고품질 AI 영상 생성 도구. Runway 대비 무료 크레딧이 많아 진입장벽 낮음.','High-quality AI video generator by Kuaishou. More free credits than Runway — low barrier to entry.','무료/유료','Free/Paid','https://klingai.com',5),
(5,'📝','Kapwing','온라인 AI 영상 편집 툴. 자막 자동 생성·배경 제거·영상 요약 등 크리에이터 편의 기능 다수.','Online AI video editor. Auto captions, background removal, video summarization — packed with creator features.','무료/유료','Free/Paid','https://kapwing.com',6),
(6,'📓','Notion AI','Notion 안에서 문서 작성·요약·번역을 AI가 도와줘요. 팀 위키·개발 문서화에 최적.','AI-assisted writing, summarization, and translation inside Notion. Ideal for team wikis and dev docs.','유료','Paid','https://notion.so',0),
(6,'💬','Claude.ai','Anthropic의 대화형 AI. 긴 문서 분석·코드 리뷰·기획서 작성 등 복잡한 작업에 탁월.','Anthropic''s conversational AI. Excellent for long document analysis, code reviews, and complex planning tasks.','무료/유료','Free/Paid','https://claude.ai',1),
(6,'📊','Gamma','AI가 프레젠테이션을 자동 생성해주는 도구. 개발 발표자료·투자 피치덱 제작에 활용.','AI that auto-generates presentations. Great for dev talk slides and investor pitch decks.','무료/유료','Free/Paid','https://gamma.app',2);
