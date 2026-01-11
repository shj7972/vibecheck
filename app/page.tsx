import { Metadata } from 'next';
import { tests } from "@/data/tests";
import { TestCard } from "@/components/TestCard";
import { Footer } from "@/components/layout/Footer";
import { Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "심테공장 | 심리테스트 모음",
  description: "나를 알아보는 가장 빠른 방법, 심테공장",
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-6 py-6 pb-2">
        <h1 className="text-2xl font-extrabold flex items-center gap-2">
          <Sparkles className="text-primary" />
          <span className="text-gradient font-black tracking-tight" style={{ fontFamily: 'var(--font-inter)' }}>VibeCheck</span>
        </h1>
        <p className="text-gray-400 text-sm mt-1">나를 찾는 트렌디한 심리테스트</p>
      </header>

      <div className="flex-1 px-4 py-6 overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-min">
          {tests.map((test) => (
            <TestCard key={test.id} test={test} />
          ))}

          {/* Empty state / Promo Card */}
          <div className="p-6 text-center text-gray-400 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center min-h-[300px] hover:bg-gray-100 transition-colors cursor-default">
            <Sparkles className="mb-2 opacity-50" />
            <p className="text-sm font-medium">New Tests Coming Soon</p>
            <p className="text-xs mt-1">매주 새로운 테스트가 업데이트 됩니다!</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
