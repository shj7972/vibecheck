import { TestData } from "@/lib/types";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function TestCard({ test }: { test: TestData }) {
    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="h-40 bg-gradient-to-br from-pink-100 to-orange-100 flex items-center justify-center text-4xl">
                {/* Placeholder for thumbnail */}
                {test.thumbnailUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={test.thumbnailUrl} alt={test.title} className="w-full h-full object-cover" />
                ) : (
                    <span>🔮</span>
                )}
            </div>
            <div className="p-5">
                <h3 className="text-xl font-bold mb-2 text-gray-900">{test.title}</h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">{test.description}</p>
                <Link href={`/test/${test.id}`} className="block">
                    <Button size="lg" className="w-full gap-2">
                        테스트 시작하기 <ArrowRight size={18} />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
