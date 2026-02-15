
import { Sparkles, Heart, Brain, Zap } from "lucide-react";

export function IntroSection() {
    return (
        <section className="py-12 bg-white/50 backdrop-blur-sm rounded-3xl my-8 border border-white/60 shadow-sm">
            <div className="px-6 md:px-12">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-indigo-600 mb-6">
                        Why VibeCheck?
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-lg">
                        나를 알아가는 과정은 언제나 흥미롭습니다. <br className="hidden md:block" />
                        VibeCheck는 단순한 재미를 넘어, 당신의 숨겨진 성향과 잠재력을 발견하도록 돕습니다.
                    </p>
                    <p className="text-gray-500 max-w-2xl mx-auto mt-4 text-sm">
                        우리는 매일 수많은 선택의 갈림길에 섭니다. 그 선택들의 집합이 바로 '나'라는 사람을 정의합니다.
                        바이브체크의 다양한 심리 테스트를 통해 무의식 속의 나를 만나고, 더 나은 삶의 방향을 찾아보세요.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center text-center p-4">
                        <div className="w-12 h-12 bg-violet-100 rounded-2xl flex items-center justify-center mb-4 text-violet-600">
                            <Brain size={24} />
                        </div>
                        <h3 className="font-bold text-gray-800 mb-2">심리 분석 기반</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            MBTI와 심리학 이론을 바탕으로 설계된 질문들로 당신의 성향을 정밀하게 분석합니다.
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center p-4">
                        <div className="w-12 h-12 bg-pink-100 rounded-2xl flex items-center justify-center mb-4 text-pink-600">
                            <Heart size={24} />
                        </div>
                        <h3 className="font-bold text-gray-800 mb-2">공감과 힐링</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            결과 페이지에서 제공되는 따뜻한 조언과 공감 멘트로 지친 마음에 위로를 건넵니다.
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center p-4">
                        <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center mb-4 text-amber-600">
                            <Zap size={24} />
                        </div>
                        <h3 className="font-bold text-gray-800 mb-2">트렌디한 인사이트</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            좀비 아포칼립스, 퍼스널 컬러 등 최신 트렌드를 반영한 재밌는 상황 설정을 제공합니다.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
