
export function MbtiGuideSection() {
    const traits = [
        {
            pair: "E vs I",
            title: "에너지 방향의 차이",
            desc: "외향형(E)은 사람들과 어울리며 에너지를 얻고, 내향형(I)은 혼자만의 시간에 에너지를 충전합니다.",
            keywords: ["사교성", "활동적", "vs", "신중함", "내면집중"]
        },
        {
            pair: "S vs N",
            title: "인식 기능의 차이",
            desc: "감각형(S)은 오감과 실제 경험을 중시하며, 직관형(N)은 영감과 미래의 가능성에 초점을 둡니다.",
            keywords: ["현실적", "꼼꼼함", "vs", "창의적", "미래지향"]
        },
        {
            pair: "T vs F",
            title: "판단 기능의 차이",
            desc: "사고형(T)은 논리와 객관적 사실을 근거로 판단하고, 감정형(F)은 사람 관계와 상황을 고려합니다.",
            keywords: ["논리적", "분석적", "vs", "공감적", "관계지향"]
        },
        {
            pair: "J vs P",
            title: "생활 양식의 차이",
            desc: "판단형(J)은 계획적이고 체계적인 생활을 선호하며, 인식형(P)은 자율적이고 유동적인 생활을 즐깁니다.",
            keywords: ["계획적", "정리정돈", "vs", "즉흥적", "융통성"]
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
