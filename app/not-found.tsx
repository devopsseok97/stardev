import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-8">
      <div className="text-center">
        <p className="text-[10rem] font-black text-white/5 leading-none mb-0 select-none">404</p>
        <h1 className="text-3xl font-black text-white mb-3 -mt-4">페이지를 찾을 수 없어요</h1>
        <p className="text-white/30 mb-10">주소를 다시 확인하거나, 홈으로 돌아가세요.</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-10 py-4 bg-white text-black font-black text-lg hover:bg-gray-100 active:scale-95 transition-all duration-200"
        >
          홈으로 →
        </Link>
      </div>
    </div>
  );
}
