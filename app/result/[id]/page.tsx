import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabase";
import SharedResult from "./SharedResult";
import type { Metadata } from "next";

type Props = { params: Promise<{ id: string }> };

async function getResult(id: string) {
  const { data, error } = await supabase
    .from("results")
    .select("*")
    .eq("id", id)
    .single();
  if (error || !data) return null;
  return data;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const result = await getResult(id);
  if (!result) return { title: "StarDev" };

  return {
    title: `나는 ${result.field} 개발자 유형! | StarDev`,
    description: result.reason,
    openGraph: {
      title: `나는 ${result.field} 개발자 유형! | StarDev`,
      description: result.reason,
      url: `${process.env.NEXT_PUBLIC_APP_URL ?? "https://devmatch-gilt.vercel.app"}/result/${id}`,
      siteName: "StarDev",
      type: "website",
    },
    twitter: {
      card: "summary",
      title: `나는 ${result.field} 개발자 유형! | StarDev`,
      description: result.reason,
    },
  };
}

export default async function ResultPage({ params }: Props) {
  const { id } = await params;
  const result = await getResult(id);
  if (!result) notFound();

  return <SharedResult result={result} resultId={id} />;
}
