
export function MbtiGuideSection() {
    const traits = [
        {
            pair: "E vs I",
            title: "에너지 방향의 차이 (Energy Orientation)",
            desc: "외향형(E)은 폭넓은 대인관계를 유지하며 외부 활동에서 활력을 얻습니다. 말을 하면서 생각을 정리하고 글로 표현하는 것보다 말로 하는 것을 선호합니다. 반면 내향형(I)은 깊이 있는 대인관계를 선호하며 조용히 혼자 있는 시간에서 에너지를 충전합니다. 말보다는 글로 표현하는 것에 더 편안함을 느낍니다.",
            keywords: ["사교성", "활동적", "외부로 발산", "vs", "신중함", "내면집중", "자기성찰"]
        },
        {
            pair: "S vs N",
            title: "인식 기능의 차이 (Perception)",
            desc: "감각형(S)은 오감에 의존하여 실제 경험을 중시합니다. 지금 현재 일어나는 일에 초점을 맞추며, 정확하고 철저한 일처리를 선호합니다. 직관형(N)은 육감과 영감에 의존하며 미래의 가능성과 의미를 추구합니다. 비유적이고 암시적인 묘사를 즐기며 아이디어 싸움에 강합니다.",
            keywords: ["현실적", "실용적", "사실중심", "vs", "창의적", "미래지향", "아이디어"]
        },
        {
            pair: "T vs F",
            title: "판단 기능의 차이 (Judgment)",
            desc: "사고형(T)은 진실과 사실에 주된 관심을 갖고 논리적이고 분석적으로 판단합니다. 과정보다 결과를 중시하며 ‘맞다, 틀리다’의 판단을 선호합니다. 감정형(F)은 사람과 관계에 주된 관심을 갖고 상황적, 포괄적으로 판단합니다. ‘좋다, 나쁘다’의 감정적 판단을 중요시하며 공감을 잘합니다.",
            keywords: ["논리적", "객관적", "원리원칙", "vs", "공감적", "주관적", "사람중심"]
        },
        {
            pair: "J vs P",
            title: "생활 양식의 차이 (Lifestyle)",
            desc: "판단형(J)은 분명한 목적과 방향을 선호하며 기한을 엄수하고 철저히 계획하여 체계적으로 행동합니다. 정리정돈을 잘하며 결론을 내리는 것을 좋아합니다. 인식형(P)은 목적과 방향은 변화 가능하고, 상황에 따라 자율적이고 융통성 있게 행동합니다. 과정 자체를 즐기며 결말을 열어두는 것을 편해합니다.",
            keywords: ["계획적", "체계적", "결론중시", "vs", "자율적", "유동적", "과정중시"]
        }
    ];

    return (
        <section className="py-10 px-4">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
                    성격 유형 지표 가이드
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {traits.map((trait, idx) => (
                        <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-center mb-3">
                                <span className="font-black text-xl text-indigo-600 bg-indigo-50 px-3 py-1 rounded-lg">
                                    {trait.pair}
                                </span>
                                <span className="text-sm font-medium text-gray-500">
                                    {trait.title}
                                </span>
                            </div>

                            <p className="text-gray-600 text-sm leading-relaxed mb-4 min-h-[40px]">
                                {trait.desc}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {trait.keywords.map((k, kIdx) => (
                                    <span key={kIdx} className={`text-xs px-2 py-1 rounded-full ${k === 'vs' ? 'text-gray-400' : 'bg-gray-100 text-gray-600'}`}>
                                        {k}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center">
                    <p className="text-xs text-center text-gray-400 bg-gray-50 py-3 rounded-lg">
                        * 본 가이드는 MBTI 이론의 일반적인 경향성을 설명하며, 개인마다 차이가 있을 수 있습니다.
                    </p>
                </div>
            </div>
        </section>
    );
}
