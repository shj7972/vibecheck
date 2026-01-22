
"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ_ITEMS = [
    {
        q: "VibeCheck의 심리테스트는 무료인가요?",
        a: "네, VibeCheck의 모든 심리테스트와 결과 확인은 100% 무료로 제공됩니다. 회원가입 없이 바로 이용하실 수 있습니다."
    },
    {
        q: "새로운 테스트는 언제 업데이트 되나요?",
        a: "매주 새로운 테스트가 업데이트될 예정입니다. 트렌드를 반영한 다양한 주제의 테스트를 준비하고 있으니 자주 방문해주세요!"
    },
    {
        q: "결과가 정확하지 않은 것 같아요.",
        a: "심리테스트 결과는 선택하신 답변을 기반으로 통계적 알고리즘을 통해 도출됩니다. 재미로 즐겨주시고, 더 깊이 있는 분석이 필요하다면 전문적인 상담을 권장해 드립니다."
    },
    {
        q: "내 결과를 친구들과 공유할 수 있나요?",
        a: "물론입니다! 결과 페이지 하단의 공유 버튼을 통해 카카오톡, 링크 복사 등으로 친구들에게 내 결과를 자랑하고 함께 즐길 수 있습니다."
    }
];

export function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-12 px-4 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
                자주 묻는 질문 (FAQ)
            </h2>

            <div className="space-y-4">
                {FAQ_ITEMS.map((item, idx) => (
                    <div
                        key={idx}
                        className="border border-gray-200 rounded-xl overflow-hidden bg-white transition-all duration-200"
                    >
                        <button
                            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                            className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors"
                        >
                            <span className="font-semibold text-gray-700">{item.q}</span>
                            {openIndex === idx ? (
                                <ChevronUp className="text-gray-400 w-5 h-5 flex-shrink-0" />
                            ) : (
                                <ChevronDown className="text-gray-400 w-5 h-5 flex-shrink-0" />
                            )}
                        </button>

                        <div
                            className={`
                text-sm text-gray-600 bg-gray-50 px-5 transition-all duration-300 ease-in-out border-t border-gray-100
                ${openIndex === idx ? 'max-h-40 py-4 opacity-100' : 'max-h-0 py-0 opacity-0 overflow-hidden border-none'}
              `}
                        >
                            {item.a}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
