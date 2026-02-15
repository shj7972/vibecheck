import { TestData } from "@/lib/types";

export const tests: TestData[] = [
    {
        id: "standard-mbti",
        title: "성격 유형 검사 (MBTI)",
        description: "전 세계에서 가장 유명한 성격 검사! 12문항으로 알아보는 나의 타고난 성향 분석.",
        thumbnailUrl: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=600&auto=format&fit=crop",
        content: [
            {
                title: "MBTI란 무엇인가?",
                paragraphs: [
                    "MBTI(Myers-Briggs Type Indicator)는 카를 융(Carl Jung)의 심리 유형론을 바탕으로 개발된 성격 유형 검사입니다. 전 세계적으로 가장 널리 사용되는 심리 검사 중 하나로, 개인의 타고난 선호 경향을 4가지 척도로 분류하여 총 16가지의 성격 유형으로 설명합니다.",
                    "이 검사는 자신이 세상을 어떻게 인식하고 판단하는지, 그리고 에너지를 어디에서 얻는지에 대한 깊이 있는 통찰을 제공합니다. 자신의 성격을 이해함으로써 대인관계를 개선하고, 진로를 탐색하며, 자기 계발의 방향성을 설정하는 데 큰 도움을 줄 수 있습니다."
                ]
            },
            {
                title: "4가지 선호 지표",
                paragraphs: [
                    "**외향(E) vs 내향(I)**: 에너지를 얻는 방향의 차이입니다. 외향형은 외부 세계와 사람들과 어울리며 에너지를 얻는 반면, 내향형은 혼자만의 시간을 통해 내면의 에너지를 충전합니다.",
                    "**감각(S) vs 직관(N)**: 정보 수집 방식의 차이입니다. 감각형은 오감과 실제 경험을 중시하며 현실적이고 구체적인 사실에 주목합니다. 반면 직관형은 육감과 영감을 중시하며 미래의 가능성과 아이디어에 초점을 맞춥니다.",
                    "**사고(T) vs 감정(F)**: 판단과 결정 방식의 차이입니다. 사고형은 논리와 객관적 사실을 근거로 분석적인 판단을 내리지만, 감정형은 사람과의 관계와 상황을 고려하여 공감적인 결정을 선호합니다.",
                    "**판단(J) vs 인식(P)**: 생활 양식의 차이입니다. 판단형은 계획적이고 체계적인 생활을 선호하며 기한을 엄수하는 것을 중요하게 생각합니다. 인식형은 자율적이고 융통성 있는 생활을 선호하며 상황에 따라 유연하게 대처하는 것을 즐깁니다."
                ]
            },
            {
                title: "이 테스트의 활용법",
                paragraphs: [
                    "VibeCheck의 성격 유형 검사는 빠르고 간편하게 자신의 성향을 파악할 수 있도록 설계되었습니다. 12개의 핵심 문항을 통해 당신의 MBTI 유형을 도출하고, 각 유형에 맞는 상세한 해석과 특징을 제공합니다.",
                    "직관적으로 떠오르는 답변을 선택하는 것이 가장 정확도가 높습니다. 혹시 결과가 평소 생각하던 유형과 다르더라도, 현재 당신의 심리 상태나 환경의 변화를 반영한 것일 수 있으므로 새로운 관점에서 자신을 바라보는 기회로 삼아보세요."
                ]
            }
        ],
        questions: [
            // E vs I
            {
                id: "mbti_q1",
                text: "주말에 시간이 생겼을 때 나는?",
                options: [
                    { id: "E", text: "친구들을 만나 에너지를 충전한다.", score: { E: 1 } },
                    { id: "I", text: "집에서 혼자만의 시간을 가지며 쉰다.", score: { I: 1 } },
                ],
            },
            {
                id: "mbti_q2",
                text: "파티나 모임에서 나는?",
                options: [
                    { id: "E", text: "많은 사람들과 어울리며 대화의 중심에 선다.", score: { E: 1 } },
                    { id: "I", text: "친한 소수와 깊은 대화를 나누거나 조용히 관찰한다.", score: { I: 1 } },
                ],
            },
            {
                id: "mbti_q3",
                text: "새로운 사람을 만나는 것은?",
                options: [
                    { id: "E", text: "흥미롭고 자극적인 일이다.", score: { E: 1 } },
                    { id: "I", text: "조금 피곤하고 에너지가 소모되는 일이다.", score: { I: 1 } },
                ],
            },
            // S vs N
            {
                id: "mbti_q4",
                text: "나는 평소에?",
                options: [
                    { id: "S", text: "현재의 상황과 실제적인 경험에 집중한다.", score: { S: 1 } },
                    { id: "N", text: "미래의 가능성과 아이디어를 상상한다.", score: { N: 1 } },
                ],
            },
            {
                id: "mbti_q5",
                text: "설명서를 읽을 때 나는?",
                options: [
                    { id: "S", text: "꼼꼼하게 처음부터 끝까지 읽고 따라한다.", score: { S: 1 } },
                    { id: "N", text: "대충 훑어보거나 감으로 먼저 시도해본다.", score: { N: 1 } },
                ],
            },
            {
                id: "mbti_q6",
                text: "나무보다는 숲을 보는 편인가?",
                options: [
                    { id: "S", text: "아니오, 나무 하나하나의 디테일이 중요합니다.", score: { S: 1 } },
                    { id: "N", text: "네, 전체적인 큰 그림을 먼저 봅니다.", score: { N: 1 } },
                ],
            },
            // T vs F
            {
                id: "mbti_q7",
                text: "친구가 고민을 털어놓을 때 나는?",
                options: [
                    { id: "T", text: "문제의 원인을 분석하고 해결책을 제시한다.", score: { T: 1 } },
                    { id: "F", text: "친구의 감정에 공감하고 위로해준다.", score: { F: 1 } },
                ],
            },
            {
                id: "mbti_q8",
                text: "의사결정을 내릴 때 더 중요한 것은?",
                options: [
                    { id: "T", text: "논리적인 인과관계와 객관적 사실", score: { T: 1 } },
                    { id: "F", text: "나와 타인의 감정, 그리고 가치관", score: { F: 1 } },
                ],
            },
            {
                id: "mbti_q9",
                text: "나를 더 화나게 하는 사람은?",
                options: [
                    { id: "T", text: "앞뒤가 안 맞는 비논리적인 사람", score: { T: 1 } },
                    { id: "F", text: "배려심 없고 무례한 사람", score: { F: 1 } },
                ],
            },
            // J vs P
            {
                id: "mbti_q10",
                text: "여행 계획을 세울 때 나는?",
                options: [
                    { id: "J", text: "시간 단위로 꼼꼼하게 계획표를 짠다.", score: { J: 1 } },
                    { id: "P", text: "왕복 티켓만 끊고 가서 생각한다.", score: { P: 1 } },
                ],
            },
            {
                id: "mbti_q11",
                text: "책상 위나 방 상태는?",
                options: [
                    { id: "J", text: "항상 정돈되어 있고 물건이 제자리에 있다.", score: { J: 1 } },
                    { id: "P", text: "다소 어지러워 보이지만 나름의 질서가 있다.", score: { P: 1 } },
                ],
            },
            {
                id: "mbti_q12",
                text: "일이 계획대로 안 풀리면?",
                options: [
                    { id: "J", text: "스트레스를 받고 빠르게 대안을 찾으려 한다.", score: { J: 1 } },
                    { id: "P", text: "그럴 수도 있지! 유연하게 대처한다.", score: { P: 1 } },
                ],
            },
        ],
        results: [
            {
                type: "ESTJ", title: "엄격한 관리자 (ESTJ)", traits: ["E", "S", "T", "J"],
                description: "사물과 사람을 관리하는 데 뛰어난 능력을 지닌 관리자입니다. 현실적이며 구체적인 사실을 중시합니다.",
                imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop"
            },
            {
                type: "INFP", title: "열정적인 중재자 (INFP)", traits: ["I", "N", "F", "P"],
                description: "최악의 상황이나 악한 사람에게서도 긍정적인 면을 찾아내는 진정한 이상주의자입니다.",
                imageUrl: "https://images.unsplash.com/photo-1493612276216-9c59019558f7?q=80&w=800&auto=format&fit=crop"
            },
            {
                type: "ENFP", title: "재기발랄한 활동가 (ENFP)", traits: ["E", "N", "F", "P"],
                description: "창의적이며 항상 웃을 거리를 찾아다니는 활발한 성격으로 사람들과 어울리기를 좋아합니다.",
                imageUrl: "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?q=80&w=800&auto=format&fit=crop"
            },
            {
                type: "ISTJ", title: "청렴결백한 논리주의자 (ISTJ)", traits: ["I", "S", "T", "J"],
                description: "사실에 근거하여 사고하며 이들의 행동이나 결정 사항에 한 치의 의심을 사지 않는 현실주의자입니다.",
                imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop"
            },
            {
                type: "ENTP", title: "뜨거운 논쟁을 즐기는 변론가 (ENTP)", traits: ["E", "N", "T", "P"],
                description: "지적인 도전을 두려워하지 않는 똑똑한 호기심형입니다.",
                imageUrl: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=800&auto=format&fit=crop"
            },
            {
                type: "ESFJ", title: "사교적인 외교관 (ESFJ)", traits: ["E", "S", "F", "J"],
                description: "타인을 향한 세심한 관심과 사교적인 성향으로 인기가 많으며, 타인을 돕는데 열성적입니다.",
                imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop"
            },
            {
                type: "INFJ", title: "선을 옹호하는 제창자 (INFJ)", traits: ["I", "N", "F", "J"],
                description: "조용하고 신비로우며 샘솟는 영감으로 타인에게 영향을 줍니다.",
                imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop"
            },
            {
                type: "ISFJ", title: "용감한 수호자 (ISFJ)", traits: ["I", "S", "F", "J"],
                description: "조용하고 차분하며 다정합니다. 주변 사람들에게 헌신적이며 안정감을 주는 성격입니다.",
                imageUrl: "https://images.unsplash.com/photo-1516534775068-ba3e84529ec1?q=80&w=800&auto=format&fit=crop"
            },
            {
                type: "INTJ", title: "용의주도한 전략가 (INTJ)", traits: ["I", "N", "T", "J"],
                description: "상상력이 풍부하며 결단력이 있습니다. 야망이 크지만 겉으로는 잘 드러내지 않으며 분석적인 사고를 즐깁니다.",
                imageUrl: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=800&auto=format&fit=crop"
            },
            {
                type: "ISTP", title: "만능 재주꾼 (ISTP)", traits: ["I", "S", "T", "P"],
                description: "냉철한 이성과 왕성한 호기심을 가진 장인형입니다. 도구를 다루는 데 능숙하며 상황 적응력이 뛰어납니다.",
                imageUrl: "https://images.unsplash.com/photo-1452860687235-ce57a8aa3ff8?q=80&w=800&auto=format&fit=crop"
            },
            {
                type: "ISFP", title: "호기심 많은 예술가 (ISFP)", traits: ["I", "S", "F", "P"],
                description: "항상 새로운 것을 찾아 헤매는 매력적인 예술가입니다. 현재의 순간을 즐기며 겸손하고 따뜻한 마음을 가졌습니다.",
                imageUrl: "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?q=80&w=800&auto=format&fit=crop"
            },
            {
                type: "INTP", title: "논리적인 사색가 (INTP)", traits: ["I", "N", "T", "P"],
                description: "새로운 지식에 목말라하며 논리적인 추론을 즐깁니다. 아이디어가 풍부하고 지적인 호기심이 매우 높습니다.",
                imageUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=800&auto=format&fit=crop"
            },
            {
                type: "ESTP", title: "모험을 즐기는 사업가 (ESTP)", traits: ["E", "S", "T", "P"],
                description: "주변에 지대한 영향을 주는 사업가형입니다. 직설적이고 유머 감각이 있으며 활동적인 것을 좋아합니다.",
                imageUrl: "https://images.unsplash.com/photo-1485660551184-47f940bb34da?q=80&w=800&auto=format&fit=crop"
            },
            {
                type: "ESFP", title: "자유로운 영혼의 연예인 (ESFP)", traits: ["E", "S", "F", "P"],
                description: "순간의 흥분을 만끽하며 주변 사람들을 즐겁게 합니다. 에너지가 넘치고 즉흥적이며 사교적입니다.",
                imageUrl: "https://images.unsplash.com/photo-1514525253361-bee69677079b?q=80&w=800&auto=format&fit=crop"
            },
            {
                type: "ENFJ", title: "정의로운 사회운동가 (ENFJ)", traits: ["E", "N", "F", "J"],
                description: "넘치는 카리스마와 열정으로 사람들을 이끄는 리더입니다. 타인의 성장을 돕고 공동의 이익을 추구합니다.",
                imageUrl: "https://images.unsplash.com/photo-1521791136064-7986c2959210?q=80&w=800&auto=format&fit=crop"
            },
            {
                type: "ENTJ", title: "대담한 통솔자 (ENTJ)", traits: ["E", "N", "T", "J"],
                description: "대담하고 상상력이 풍부하며 강력한 의지를 가진 리더입니다. 목표를 달성하기 위해 냉철한 판단을 내립니다.",
                imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop"
            },
        ],
    },
    {
        id: "love-mbti",
        title: "연애 세포 생존 테스트",
        description: "내 안의 연애 세포, 아직 살아있을까? 10문항으로 알아보는 나의 연애 스타일과 공략법!",
        thumbnailUrl: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=600&auto=format&fit=crop",
        content: [
            {
                title: "나의 연애 스타일은?",
                paragraphs: [
                    "연애는 서로 다른 두 사람이 만나 맞춰가는 과정입니다. 하지만 타고난 성향에 따라 연애를 대하는 방식과 사랑을 표현하는 방법은 천차만별입니다. '연애 세포 생존 테스트'는 MBTI 이론을 연애 상황에 접목시켜 당신의 로맨틱한 본능을 분석합니다.",
                    "썸 탈 때의 행동, 데이트 코스를 짜는 방식, 갈등을 해결하는 태도 등 구체적인 연애 상황에서의 반응을 통해 당신이 어떤 연애 스타일을 가지고 있는지 알아보세요."
                ]
            },
            {
                title: "연애에 영향을 미치는 성격 요인",
                paragraphs: [
                    "**표현 방식**: 적극적으로 호감을 표현하는 '직진남녀' 스타일인지, 아니면 신중하게 기회를 엿보는 '짝사랑 전문' 스타일인지 파악합니다. 이는 외향(E)과 내향(I)의 성향 차이에서 비롯됩니다.",
                    "**데이트 선호**: 맛집부터 동선까지 완벽하게 계획하는 것을 좋아하는지, 아니면 즉흥적인 드라이브와 만남을 즐기는지에 따라 데이트 만족도가 달라질 수 있습니다. 이는 판단(J)과 인식(P)의 차이입니다.",
                    "**공감과 해결**: 연인이 힘들어할 때 감정적인 위로를 먼저 건네는지, 아니면 실질적인 해결책을 제시하는지는 연애 갈등의 주요 원인이 되기도 합니다. 사고(T)와 감정(F)의 균형을 이해하는 것이 중요합니다."
                ]
            },
            {
                title: "건강한 연애를 위하여",
                paragraphs: [
                    "자신의 연애 유형을 아는 것은 건강한 관계의 시작입니다. 나의 부족한 점을 보완하고, 상대방의 성향을 이해한다면 불필요한 오해와 다툼을 줄일 수 있습니다.",
                    "이 테스트 결과는 당신에게 가장 잘 어울리는 파트너 유형과 연애 성공 꿀팁까지 제공합니다. 죽어가는 연애 세포를 깨우고, 핑크빛 로맨스를 시작할 준비를 해보세요!"
                ]
            }
        ],
        questions: [
            {
                id: "lq1",
                text: "주말에 아무 약속이 없다면?",
                options: [
                    { id: "E", text: "심심해서 친구들에게 연락을 돌린다", score: { E: 1 } },
                    { id: "I", text: "오예! 밀린 넷플릭스를 보며 뒹굴거린다", score: { I: 1 } },
                ],
            },
            {
                id: "lq2",
                text: "소개팅에서 처음 만난 상대와 대화할 때 나는?",
                options: [
                    { id: "E", text: "어색한 건 못 참아! 내가 먼저 말을 건다", score: { E: 1 } },
                    { id: "I", text: "상대가 말을 걸어주길 기다리며 리액션을 준비한다", score: { I: 1 } },
                ],
            },
            {
                id: "lq3",
                text: "데이트 장소를 정할 때 나는?",
                options: [
                    { id: "J", text: "맛집, 카페, 동선까지 완벽하게 검색해둔다", score: { J: 1 } },
                    { id: "P", text: "일단 만나서 기분 내키는 대로 간다", score: { P: 1 } },
                ],
            },
            {
                id: "lq4",
                text: "연인이 우울하다고 할 때 나의 반응은?",
                options: [
                    { id: "T", text: "왜? 무슨 일 있었어? (해결책 탐색)", score: { T: 1 } },
                    { id: "F", text: "헐ㅠㅠ 진짜 속상했겠다.. (감정 공감)", score: { F: 1 } },
                ],
            },
            {
                id: "lq5",
                text: "연인과 싸운 후 화해할 때?",
                options: [
                    { id: "T", text: "논리적으로 잘잘못을 따지고 해결하고 싶다", score: { T: 1 } },
                    { id: "F", text: "일단 미안하다고 하고 감정을 푼다", score: { F: 1 } },
                ],
            },
            {
                id: "lq6",
                text: "기념일 선물 준비는?",
                options: [
                    { id: "J", text: "일주일 전부터 예약하고 준비한다", score: { J: 1 } },
                    { id: "P", text: "당일에 가장 좋은 것을 골라 선물한다", score: { P: 1 } },
                ],
            },
            {
                id: "lq7",
                text: "짝사랑 상대를 발견했을 때?",
                options: [
                    { id: "E", text: "직진! 대놓고 호감을 표시한다", score: { E: 1 } },
                    { id: "I", text: "몰래 지켜보며 기회를 엿본다", score: { I: 1 } },
                ],
            },
            {
                id: "lq8",
                text: "이상형에 가까운 사람은?",
                options: [
                    { id: "S", text: "센스 있고 현실감각 뛰어난 사람", score: { S: 1 } },
                    { id: "N", text: "대화가 잘 통하고 꿈이 있는 사람", score: { N: 1 } },
                ],
            },
            {
                id: "lq9",
                text: "이별 후 나는?",
                options: [
                    { id: "T", text: "바쁘게 지내며 잊으려 노력한다", score: { T: 1 } },
                    { id: "F", text: "슬픈 노래를 들으며 실컷 운다", score: { F: 1 } },
                ],
            },
            {
                id: "lq10",
                text: "다음 연애를 시작할 때?",
                options: [
                    { id: "J", text: "결혼까지 생각할 수 있는지 신중하게 본다", score: { J: 1 } },
                    { id: "P", text: "지금 당장 좋으면 일단 만난다", score: { P: 1 } },
                ],
            },
        ],
        results: [
            {
                type: "ESTJ",
                title: "현실주의 리더형 연애군주",
                description: "연애도 계획적으로! 한번 내 사람이다 싶으면 확실하게 책임지는 스타일입니다. 밀당보다는 솔직한 표현을 선호하며, 약속 시간을 어기는 것을 매우 싫어합니다.",
                traits: ["E", "S", "T", "J"],
                imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop"
            },
            {
                type: "ISTJ",
                title: "신중한 순정파",
                description: "처음에는 낯을 가리지만 한번 마음을 열면 변치 않는 소나무 같은 사람. 가벼운 만남보다는 진지하고 오래가는 관계를 선호합니다.",
                traits: ["I", "S", "T", "J"],
                imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop"
            },
            {
                type: "ENFP",
                title: "금사파 댕댕이",
                description: "사람을 너무 좋아해서 금방 사랑에 빠지지만, 식는 것도 빠를 수 있어요! 항상 새로운 데이트와 자극을 원하며 함께 있으면 지루할 틈이 없습니다.",
                traits: ["E", "N", "F", "P"],
                imageUrl: "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?q=80&w=800&auto=format&fit=crop"
            },
            {
                type: "INFP",
                title: "몽글몽글 감성쟁이",
                description: "사랑에 살고 사랑에 죽는 로맨티스트. 상대방의 감정을 섬세하게 캐치하지만, 상처받기도 쉬워요. 진심 어린 편지 한 통에 감동하는 타입입니다.",
                traits: ["I", "N", "F", "P"],
                imageUrl: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=800&auto=format&fit=crop"
            },
            {
                type: "ENTJ",
                title: "카리스마 폭격기",
                description: "사랑도 정복의 대상! 효율적이고 명확한 연애를 선호합니다. 상대방을 성장시켜주는 훌륭한 파트너이지만, 때로는 너무 강한 고집으로 상대를 지치게 할 수도 있어요.",
                traits: ["야망가", "불도저"],
                imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop"
            },
            {
                type: "ISFJ",
                title: "헌신적인 가디언",
                description: "보이지 않는 곳에서 묵묵히 챙겨주는 스타일. 안정적인 관계를 추구하며 상대방의 작은 변화도 섬세하게 알아차립니다. 당신의 배려는 연인을 감동시키기에 충분해요.",
                traits: ["다정다감", "기억력갑"],
                imageUrl: "https://images.unsplash.com/photo-1516534775068-ba3e84529ec1?q=80&w=800&auto=format&fit=crop"
            },
            {
                type: "INFJ",
                title: "신비로운 영혼의 동반자",
                description: "말하지 않아도 마음을 읽어주는 깊은 공감력의 소유자. 가벼운 만남보다는 영혼의 교감을 중요시합니다. 가끔은 혼자만의 시간이 필요하지만, 사랑하는 사람에게는 모든 것을 내어주죠.",
                traits: ["통찰력", "로맨틱"],
                imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop"
            },
            {
                type: "ESFJ",
                title: "사랑 넘치는 분위기 메이커",
                description: "주변 모든 사람과 잘 지내고 싶은 사랑꾼. 연인의 친구들과도 금방 친해지는 친화력을 가졌습니다. 리액션이 좋고 챙겨주는 것을 좋아해 연애 만족도가 높은 타입입니다.",
                traits: ["사교왕", "배려왕"],
                imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop"
            }
        ],
    },
    {
        id: "work-survival",
        title: "직장인 생존 유형 테스트",
        description: "나는 탕비실의 요정일까, 회의실의 스나이퍼일까? 10문항으로 알아보는 살벌한 오피스 생존 전략!",
        thumbnailUrl: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=600&auto=format&fit=crop",
        content: [
            {
                title: "오피스 정글에서 살아남기",
                paragraphs: [
                    "하루의 대부분을 보내는 직장. 이곳은 총성 없는 전쟁터이자, 다양한 인간군상이 모여있는 정글과도 같습니다. '직장인 생존 유형 테스트'는 복잡미묘한 사내 정치와 업무 스트레스 속에서 당신이 어떤 전략으로 생존하고 있는지를 진단합니다.",
                    "상사의 썰렁한 농담에 대처하는 자세부터 업무 데드라인을 지키는 방식까지, 직장 생활의 리얼한 에피소드를 통해 당신의 '사회생활 레벨'을 측정해드립니다."
                ]
            },
            {
                title: "당신의 업무 스타일은?",
                paragraphs: [
                    "**PRO형 (카멜레온)**: 조직의 논리를 완벽하게 이해하고 순응하는 타입입니다. 원만한 인간관계를 최우선으로 하며, 상사의 의중을 빠르게 파악하여 '센스 있다'는 평가를 받습니다. 승진 가도에 유리하지만, 때로는 자신의 주관을 잃기 쉽습니다.",
                    "**MYWAY형 (고독한 늑대)**: 업무 능력은 탁월하지만 불필요한 사내 정치는 거부하는 타입입니다. '워라밸'과 '공사 구분'이 확실하며, 능력으로 자신을 증명합니다. 프로페셔널하지만 자칫 차가워 보일 수 있다는 점을 주의해야 합니다."
                ]
            },
            {
                title: "슬기로운 직장생활 팁",
                paragraphs: [
                    "어떤 유형이든 정답은 없습니다. 중요한 것은 자신의 성향을 파악하고 강점을 극대화하는 것입니다. PRO형이라면 업무 전문성을 더 키우고, MYWAY형이라면 최소한의 네트워킹에 신경 쓰는 균형 감각이 필요합니다.",
                    "이 테스트를 통해 자신의 현 주소를 점검하고, 스트레스 받지 않고 즐겁게 일할 수 있는 나만의 생존 전략을 세워보세요."
                ]
            }
        ],
        questions: [
            {
                id: "wq1",
                text: "부장님이 썰렁한 아재개그를 했을 때 나는?",
                options: [
                    { id: "A", text: "물개박수를 치며 자지러진다.", score: { PRO: 1 } },
                    { id: "B", text: "입꼬리만 살짝 올리며 어색한 미소를 짓는다.", score: { MYWAY: 1 } },
                ],
            },
            {
                id: "wq2",
                text: "퇴근 10분 전, 급한 업무가 떨어졌다. 나의 행동은?",
                options: [
                    { id: "A", text: "'넵 알겠습니다!' 하고 야근을 불사한다.", score: { PRO: 1 } },
                    { id: "B", text: "'내일 아침에 바로 처리하겠습니다' 하고 칼퇴한다.", score: { MYWAY: 1 } },
                ],
            },
            {
                id: "wq3",
                text: "점심 메뉴를 고를 때 나는?",
                options: [
                    { id: "A", text: "'아무거나 괜찮아요~' 하고 대세를 따른다.", score: { PRO: 1 } },
                    { id: "B", text: "'오늘 날씨엔 짬뽕이죠!' 하고 적극 추천한다.", score: { MYWAY: 1 } },
                ],
            },
            {
                id: "wq4",
                text: "동료가 실수를 했을 때?",
                options: [
                    { id: "A", text: "조용히 처리해주고 나중에 알려준다.", score: { PRO: 1 } },
                    { id: "B", text: "정확하게 지적하고 수정하라고 한다.", score: { MYWAY: 1 } },
                ],
            },
            {
                id: "wq5",
                text: "회식 참여에 대한 나의 생각은?",
                options: [
                    { id: "A", text: "업무의 연장이다. 2차까지 필참!", score: { PRO: 1 } },
                    { id: "B", text: "맛있는 거 먹으러 가는 건 좋지만 1차만.", score: { MYWAY: 1 } },
                ],
            },
            {
                id: "wq6",
                text: "회의 시간에 내 의견과 다른 주장이 나오면?",
                options: [
                    { id: "A", text: "분위기를 보며 적당히 수긍한다.", score: { PRO: 1 } },
                    { id: "B", text: "논리적으로 반박하며 내 의견을 피력한다.", score: { MYWAY: 1 } },
                ],
            },
            {
                id: "wq7",
                text: "월요일 아침 출근길, 나의 기분은?",
                options: [
                    { id: "A", text: "이번 주도 화이팅! 긍정 회로를 돌린다.", score: { PRO: 1 } },
                    { id: "B", text: "로또 당첨 번호를 다시 확인해본다.", score: { MYWAY: 1 } },
                ],
            },
            {
                id: "wq8",
                text: "상사가 부당한 지시를 내린다면?",
                options: [
                    { id: "A", text: "일단 따르는 척하며 융통성 있게 처리한다.", score: { PRO: 1 } },
                    { id: "B", text: "할 말은 해야 한다. 정중하게 거절한다.", score: { MYWAY: 1 } },
                ],
            },
            {
                id: "wq9",
                text: "연봉 협상 시즌이 다가왔다. 나는?",
                options: [
                    { id: "A", text: "회사의 상황을 고려해 적당선을 제시한다.", score: { PRO: 1 } },
                    { id: "B", text: "나의 성과를 데이터로 정리해 강력 어필한다.", score: { MYWAY: 1 } },
                ],
            },
            {
                id: "wq10",
                text: "회사에서 가장 중요한 가치는?",
                options: [
                    { id: "A", text: "원만한 인간관계와 팀워크", score: { PRO: 1 } },
                    { id: "B", text: "나의 커리어 성장과 보상", score: { MYWAY: 1 } },
                ],
            },
        ],
        results: [
            {
                type: "PRO",
                title: "만렙 생존러: 카멜레온",
                description: "어떤 상황에서도 살아남는 처세술의 달인. 상사의 기분을 귀신같이 파악하고 적절하게 맞장구칠 줄 압니다. 조직 생활에 최적화된 당신은 어디서든 사랑받는 감초 같은 존재!",
                traits: ["사회생활만렙", "인간관계마스터"],
                imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
            },
            {
                type: "MYWAY",
                title: "마이웨이: 고독한 늑대",
                description: "업무 능력은 확실하지만 불필요한 친목은 사절합니다. 워라밸을 중요시하며 자기 할 일은 완벽하게 해냅니다. 능력으로 승부하는 당신은 진정한 실력자!",
                traits: ["칼퇴요정", "일잘러", "팩트폭격기"],
                imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop"
            }
        ]
    },
    {
        id: "zombie-survival",
        title: "좀비 아포칼립스 생존 유형",
        description: "부산행 열차에 탔다면 나는? 리더형 vs 배신자형 vs 짐덩어리형. 극한 상황에서의 본성을 확인하세요! (총 10문항)",
        thumbnailUrl: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=600&auto=format&fit=crop",
        content: [
            {
                title: "극한 상황에서의 인간 본성",
                paragraphs: [
                    "영화 <부산행>이나 드라마 <킹덤>을 보며 '나라면 어땠을까?' 상상해 본 적 있으신가요? 좀비 아포칼립스와 같은 극한의 재난 상황은 인간의 가장 밑바닥 본성을 드러내게 합니다.",
                    "이 테스트는 생존을 위협받는 절체절명의 순간, 당신이 어떤 선택을 할지 예측해 봅니다. 도덕성을 지킬지, 생존 본능을 따를지, 아니면 남다른 기지로 상황을 타개할지 확인해 보세요."
                ]
            },
            {
                title: "생존 유형 분석",
                paragraphs: [
                    "**리더형**: 위기 상황일수록 빛을 발하는 타입입니다. 빠른 판단력으로 사람들을 이끌지만, 그만큼 책임감의 무게를 견뎌야 합니다.",
                    "**배신자형**: 오직 '나의 생존'이 최우선입니다. 비난을 받을지언정, 끝까지 살아남을 확률은 가장 높습니다. 현실적인 생존 기계라고 볼 수 있습니다.",
                    "**희생양**: 마음이 약하거나 상황 판단이 느려 가장 먼저 희생될 가능성이 높습니다. 착한 마음씨가 좀비 세계에서는 약점이 될 수 있습니다.",
                    "**전략가/과학자**: 무력보다는 지능으로 승부합니다. 백신을 개발하거나 탈출 경로를 설계하는 등 인류의 마지막 희망이 될 수 있는 브레인입니다."
                ]
            },
            {
                title: "재미로 보는 생존 확률",
                paragraphs: [
                    "물론 실제로 좀비가 나타날 확률은 희박하지만, 이 테스트는 위기 대처 능력과 스트레스 상황에서의 반응 양식을 간접적으로 보여줍니다.",
                    "친구들과 함께 테스트를 해보며 누가 끝까지 살아남을지, 누가 짐 덩어리가 될지 이야기해 보는 것도 또 다른 재미가 될 것입니다. (만약 진짜 좀비 사태가 터지면, 테스트 결과가 좋은 친구 옆에 꼭 붙어 있으세요!)"
                ]
            }
        ],
        questions: [
            {
                id: "z1", text: "좀비 바이러스 뉴스가 속보로 떴다. 나의 반응은?",
                options: [
                    { id: "A", text: "가짜 뉴스겠지. 일단 출근한다.", score: { FIRST: 1 } },
                    { id: "B", text: "마트로 달려가 생필품부터 사재기한다.", score: { SCAVENGER: 1 } }
                ]
            },
            {
                id: "z2", text: "도망치던 중 넘어진 사람을 발견했다.",
                options: [
                    { id: "A", text: "일단 일으켜 세워서 같이 뛴다.", score: { LEADER: 1 } },
                    { id: "B", text: "미안하지만 나부터 살고 봐야 한다.", score: { BETRAYER: 1 } }
                ]
            },
            {
                id: "z3", text: "숨어있던 마트 셔터가 내려가기 직전이다!",
                options: [
                    { id: "A", text: "다른 생존자가 더 없는지 소리쳐 확인한다.", score: { LEADER: 1 } },
                    { id: "B", text: "일단 내가 먼저 안으로 들어가고 셔터를 내린다.", score: { BETRAYER: 1 } }
                ]
            },
            {
                id: "z4", text: "좀비에게 물린 것 같은 친구가 괜찮다고 한다.",
                options: [
                    { id: "A", text: "혹시 모르니 밧줄로 묶어둔다.", score: { LEADER: 1 } },
                    { id: "B", text: "친구 말을 믿고 감싸준다.", score: { FIRST: 1 } }
                ]
            },
            {
                id: "z5", text: "무기가 될만한 것을 발견했다. 무엇을 집을까?",
                options: [
                    { id: "A", text: "확실하게 제압할 수 있는 야구방망이", score: { LEADER: 1 } },
                    { id: "B", text: "가볍고 숨기기 쉬운 과도", score: { SCAVENGER: 1 } }
                ]
            },
            {
                id: "z6", text: "식량이 얼마 남지 않았다. 어떻게 할까?",
                options: [
                    { id: "A", text: "똑같이 배분하여 다 같이 버틴다.", score: { LEADER: 1 } },
                    { id: "B", text: "내 몫을 몰래 조금 더 챙겨둔다.", score: { BETRAYER: 1 } }
                ]
            },
            {
                id: "z7", text: "밤에 이상한 소리가 들린다.",
                options: [
                    { id: "A", text: "무슨 일인지 확인하러 나간다.", score: { LEADER: 1 } },
                    { id: "B", text: "죽은 척하고 조용히 있는다.", score: { SCIENTIST: 1 } }
                ]
            },
            {
                id: "z8", text: "생존자 무리를 만났다. 합류할까?",
                options: [
                    { id: "A", text: "쪽수가 많아야 산다. 합류한다.", score: { FIRST: 1 } },
                    { id: "B", text: "믿을 수 없다. 거리를 두고 지켜본다.", score: { SCIENTIST: 1 } }
                ]
            },
            {
                id: "z9", text: "탈출 헬기가 도착했다! 자리가 하나뿐이라면?",
                options: [
                    { id: "A", text: "노약자나 아이에게 양보한다.", score: { LEADER: 1 } },
                    { id: "B", text: "밀치고 내가 먼저 탄다.", score: { BETRAYER: 1 } }
                ]
            },
            {
                id: "z10", text: "마지막 순간, 좀비 떼가 몰려온다.",
                options: [
                    { id: "A", text: "끝까지 싸우다 장렬히 전사한다.", score: { LEADER: 1 } },
                    { id: "B", text: "백신 샘플을 챙겨 탈출을 시도한다.", score: { SCIENTIST: 1 } }
                ]
            }
        ],
        results: [
            {
                type: "LEADER", title: "냉철한 생존 리더",
                description: "빠른 판단력과 결단력으로 무리를 이끄는 리더입니다. 감정보다는 이성을 중시하며, 다수를 위해 소수를 희생할 줄도 아는 현실적인 영웅입니다. 어디가서든 대장 노릇을 할 타입!",
                traits: ["판단력갑", "리더십"],
                imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
            },
            {
                type: "BETRAYER", title: "밉상 배신자",
                description: "나만 살면 돼! 위기 상황에서 가장 먼저 배신할 가능성이 높습니다. 생존 본능이 극대화된 타입으로, 욕은 먹겠지만 끝까지 살아남을 확률은 가장 높습니다. 친구들이 당신을 조심해야겠네요.",
                traits: ["생존본능", "통수장인"],
                imageUrl: "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?q=80&w=800&auto=format&fit=crop"
            },
            {
                type: "FIRST", title: "1호 희생양",
                description: "아... 안타깝게도 영화 시작 5분 만에 좀비가 될 운명입니다. 너무 착하거나, 상황 파악이 느려서 가장 먼저 희생될 수 있습니다. 다음 생에는 좀 더 눈치껏 살아보아요.",
                traits: ["평화주의자", "좀비맛집"],
                imageUrl: "https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?q=80&w=800&auto=format&fit=crop"
            },
            {
                type: "SCAVENGER", title: "실속파 보급 전문가",
                description: "전투력보다는 생존에 필요한 물자를 찾아내는 능력이 탁월합니다. 마트 털기, 은신처 찾기의 달인! 당신과 함께라면 굶어 죽지는 않겠지만, 위험한 순간에는 이미 사라져있을지도 몰라요.",
                traits: ["눈치백단", "생존물자장인"],
                imageUrl: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=800&auto=format&fit=crop"
            },
            {
                type: "SCIENTIST", title: "최후의 희망 박사님",
                description: "무력은 낮지만 인류를 구할 백신을 개발할 유일한 희망입니다. 냉철하게 상황을 관찰하고 분석하는 능력이 뛰어납니다. 당신을 지켜줄 든든한 동료만 있다면 세상을 구할 수 있을 거예요.",
                traits: ["브레인", "인류의희망"],
                imageUrl: "https://images.unsplash.com/photo-1532187875605-7fe3475c1298?q=80&w=800&auto=format&fit=crop"
            }
        ]
    },
    {
        id: "personal-color",
        title: "성격 퍼스널 컬러 진단",
        description: "피부톤 말고 성격톤! 나의 성격을 색깔로 표현한다면? 10문항으로 알아보는 나의 감성 컬러.",
        thumbnailUrl: "https://images.unsplash.com/photo-1502691876148-a84978e59af8?q=80&w=600&auto=format&fit=crop",
        content: [
            {
                title: "성격에도 색깔이 있다?",
                paragraphs: [
                    "퍼스널 컬러 진단은 주로 피부 톤에 맞는 메이크업이나 의상을 고를 때 사용되지만, 우리의 성격에도 고유의 '색깔'이 존재합니다. Warm Tone(웜톤)의 따뜻하고 활기찬 성격과 Cool Tone(쿨톤)의 차분하고 지적인 성격은 사람마다 다른 매력을 발산합니다.",
                    "'성격 퍼스널 컬러 진단'은 당신의 내면이 뿜어내는 분위기와 에너지를 색채 심리학적 관점에서 분석해드립니다."
                ]
            },
            {
                title: "웜톤(Warm) vs 쿨톤(Cool)",
                paragraphs: [
                    "**웜톤 성격**: 봄의 햇살이나 가을의 단풍처럼 따뜻한 에너지를 가졌습니다. 사교적이고 친절하며, 주변 사람들을 편안하게 해주는 능력이 있습니다. 감정 표현이 솔직하고 에너지가 외부로 향하는 경향이 있습니다.",
                    "**쿨톤 성격**: 여름의 바다나 겨울의 눈처럼 시원하고 차분한 매력을 지녔습니다. 이성적이고 냉철하며, 신뢰감을 주는 이미지를 가지고 있습니다. 자신의 내면에 집중하며 깊이 있는 관계를 선호합니다."
                ]
            },
            {
                title: "나만의 매력 포인트 찾기",
                paragraphs: [
                    "자신의 성격 컬러를 알면 대인관계에서 자신의 장점을 더욱 부각시킬 수 있습니다. 웜톤이라면 특유의 친화력으로 분위기 메이커 역할을, 쿨톤이라면 신뢰감을 바탕으로 한 리더십을 발휘해 보세요.",
                    "또한 나와 반대되는 컬러의 사람과는 어떻게 조화를 이루어야 할지, 나와 같은 컬러의 사람과는 어떤 시너지를 낼 수 있을지 알아보는 것도 흥미로운 포인트가 될 것입니다."
                ]
            }
        ],
        questions: [
            {
                id: "pc1", text: "내가 더 좋아하는 시간대는?",
                options: [
                    { id: "A", text: "활기찬 아침과 눈부신 낮", score: { WARM: 1 } },
                    { id: "B", text: "차분한 새벽과 감성적인 밤", score: { COOL: 1 } }
                ]
            },
            {
                id: "pc2", text: "나를 더 잘 설명하는 단어는?",
                options: [
                    { id: "A", text: "열정, 에너지, 도전", score: { WARM: 1 } },
                    { id: "B", text: "평온, 신뢰, 지혜", score: { COOL: 1 } }
                ]
            },
            {
                id: "pc3", text: "친구들이 말하는 나의 이미지는?",
                options: [
                    { id: "A", text: "따뜻하고 다정하다", score: { WARM: 1 } },
                    { id: "B", text: "시크하고 쿨하다", score: { COOL: 1 } }
                ]
            },
            {
                id: "pc4", text: "스트레스 해소법은?",
                options: [
                    { id: "A", text: "수다 떨고 맛있는 거 먹기", score: { WARM: 1 } },
                    { id: "B", text: "조용히 음악 듣거나 잠자기", score: { COOL: 1 } }
                ]
            },
            {
                id: "pc5", text: "주말에 가고 싶은 장소는?",
                options: [
                    { id: "A", text: "사람 북적이는 핫플레이스 카페", score: { WARM: 1 } },
                    { id: "B", text: "조용한 숲속 글램핑장", score: { COOL: 1 } }
                ]
            },
            {
                id: "pc6", text: "옷장에 더 많은 색깔은?",
                options: [
                    { id: "A", text: "베이지, 옐로우, 브라운 계열", score: { WARM: 1 } },
                    { id: "B", text: "블랙, 화이트, 네이비 계열", score: { COOL: 1 } }
                ]
            },
            {
                id: "pc7", text: "좋아하는 계절은?",
                options: [
                    { id: "A", text: "꽃 피는 봄이나 뜨거운 여름", score: { WARM: 1 } },
                    { id: "B", text: "낙엽 지는 가을이나 눈 내리는 겨울", score: { COOL: 1 } }
                ]
            },
            {
                id: "pc8", text: "대화할 때 나의 스타일은?",
                options: [
                    { id: "A", text: "리액션 부자! 맞장구를 잘 쳐준다.", score: { WARM: 1 } },
                    { id: "B", text: "경청 모드. 진지하게 들어준다.", score: { COOL: 1 } }
                ]
            },
            {
                id: "pc9", text: "나의 방 분위기는?",
                options: [
                    { id: "A", text: "아기자기한 소품이 가득하다.", score: { WARM: 1 } },
                    { id: "B", text: "심플하고 모던하게 정돈되어 있다.", score: { COOL: 1 } }
                ]
            },
            {
                id: "pc10", text: "끌리는 영화 장르는?",
                options: [
                    { id: "A", text: "로맨틱 코미디나 감동 드라마", score: { WARM: 1 } },
                    { id: "B", text: "미스터리 스릴러나 SF", score: { COOL: 1 } }
                ]
            }
        ],
        results: [
            {
                type: "WARM", title: "봄날의 햇살 옐로우",
                description: "당신은 주변 사람들을 기분 좋게 만드는 긍정 에너지를 가졌어요. 따뜻하고 다정한 성격으로 어디서나 환영받는 분위기 메이커입니다. 당신 곁에 있으면 마음이 편안해져요.",
                traits: ["긍정왕", "비타민"],
                imageUrl: "https://images.unsplash.com/photo-1528696892704-5e1122852276?q=80&w=800&auto=format&fit=crop",
                themeColor: "from-yellow-100 to-orange-50 text-orange-800"
            },
            {
                type: "COOL", title: "새벽 2시의 딥 네이비",
                description: "깊고 넓은 바다처럼 차분하고 성숙한 당신. 함부로 감정을 드러내지 않지만, 내면은 누구보다 깊고 진지합니다. 당신의 한마디에는 신뢰와 무게가 실려있어요.",
                traits: ["새벽감성", "신뢰감"],
                imageUrl: "https://images.unsplash.com/photo-1478359844494-1092259d93e4?q=80&w=800&auto=format&fit=crop",
                themeColor: "from-blue-100 to-slate-200 text-slate-800"
            }
        ]
    },
    {
        id: "kkondae-test",
        title: "꼰대력 테스트 (Latte is Horse)",
        description: "나 정도면 쿨하지~ 라고 생각하시나요? 당신의 뼈를 때리는 꼰대 레벨 진단! (총 10문항)",
        thumbnailUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop",
        content: [
            {
                title: "'라떼는 말이야~' 꼰대 탈출기",
                paragraphs: [
                    "'꼰대'는 더 이상 나이 든 사람만을 지칭하는 단어가 아닙니다. '젊은 꼰대'라는 말이 있듯, 권위적인 사고방식과 소통의 부재는 세대를 불문하고 나타날 수 있는 문제입니다.",
                    "나는 쿨하고 합리적인 선배라고 생각하시나요? 후배들이 앞에서는 웃지만 뒤에서는 고개를 젓고 있지는 않을까요? 이 테스트를 통해 당신의 무의식 속에 숨어있는 꼰대 본능을 점검해 보세요."
                ]
            },
            {
                title: "꼰대 자가 진단 체크포인트",
                paragraphs: [
                    "**답정너**: 답은 정해져 있고 너는 대답만 해. 상대방의 의견을 묻는 척하지만 결국 본인의 뜻대로 하는 유형입니다.",
                    "**서열 중시**: 나이, 연차, 학번 등을 따지며 상하 관계를 지나치게 강조하는 태도는 꼰대의 전형적인 특징입니다.",
                    "**오지랖**: 사생활에 지나치게 간섭하거나, 원하지 않는 조언(훈수)을 늘어놓는 것도 주의해야 할 행동입니다.",
                    "**과거 미화**: '나 때는 더 힘들었어'라며 현재의 어려움을 과소평가하고 자신의 과거 경험만을 절대적인 기준으로 삼는 태도입니다."
                ]
            },
            {
                title: "존경받는 선배가 되려면",
                paragraphs: [
                    "꼰대가 되지 않는 가장 좋은 방법은 '경청'과 '공감'입니다. 나와 다른 세대의 문화를 존중하고, 틀림이 아닌 다름을 인정하는 열린 마음을 가져야 합니다.",
                    "이 테스트는 당신을 비난하기 위함이 아니라, 더 나은 소통과 관계를 위한 거울이 되어줄 것입니다. 결과가 조금 충격적이더라도 웃어넘기며 변화의 계기로 삼아보세요!"
                ]
            }
        ],
        questions: [
            { id: "k1", text: "후배가 인사를 작게 한다면?", options: [{ id: "A", text: "'요즘 애들은 기본이 안 되어있네' 생각한다", score: { K: 1 } }, { id: "B", text: "'바쁜가보네' 하고 넘긴다", score: { NO: 1 } }] },
            { id: "k2", text: "회식 메뉴 정할 때?", options: [{ id: "A", text: "답정너. 내가 먹고 싶은 걸로 유도한다", score: { K: 1 } }, { id: "B", text: "다수결이나 막내의 의견을 따른다", score: { NO: 1 } }] },
            { id: "k3", text: "\"나 때는 말이야\"라는 말이 목 끝까지 차오른 적이 있다.", options: [{ id: "A", text: "하루에도 수십 번", score: { K: 1 } }, { id: "B", text: "거의 없다", score: { NO: 1 } }] },
            { id: "k4", text: "요즘 유행하는 줄임말을 들으면?", options: [{ id: "A", text: "'한글 파괴 아니냐?'라며 거부감이 든다", score: { K: 1 } }, { id: "B", text: "무슨 뜻인지 물어보고 배운다", score: { NO: 1 } }] },
            { id: "k5", text: "칼퇴하는 후배를 보면?", options: [{ id: "A", text: "'일은 다 하고 가는 건가?' 눈치가 보인다", score: { K: 1 } }, { id: "B", text: "'부럽다 나도 가야지'", score: { NO: 1 } }] },
            { id: "k6", text: "사무실에서 이어폰 끼고 일하는 후배를 보면?", options: [{ id: "A", text: "불러도 못 듣고, 예의 없어 보인다.", score: { K: 1 } }, { id: "B", text: "일만 잘하면 상관없다.", score: { NO: 1 } }] },
            { id: "k7", text: "점심시간에 메뉴 통일하자고 하면?", options: [{ id: "A", text: "효율적이고 좋지! 국밥 콜?", score: { K: 1 } }, { id: "B", text: "각자 먹고 싶은 거 먹자.", score: { NO: 1 } }] },
            { id: "k8", text: "후배에게 업무 피드백을 줄 때?", options: [{ id: "A", text: "'다 너 잘 되라고 하는 소리야' 사족을 붙인다.", score: { K: 1 } }, { id: "B", text: "핵심만 명확하게 전달한다.", score: { NO: 1 } }] },
            { id: "k9", text: "퇴근 후나 주말에 업무 카톡을 보낸 적이 있다.", options: [{ id: "A", text: "급하면 보낼 수도 있지.", score: { K: 1 } }, { id: "B", text: "절대 안 보낸다.", score: { NO: 1 } }] },
            { id: "k10", text: "솔직히 내가 꼰대라고 생각한다.", options: [{ id: "A", text: "아니, 나 정도면 쿨한 선배지.", score: { K: 1 } }, { id: "B", text: "가끔 그런 면이 있을지도 모른다.", score: { NO: 1 } }] }
        ],
        results: [
            { type: "K", title: "꼰대 레벨 5: 파괴신", description: "라떼는 말이야~ 숨쉬듯이 꼰대어를 구사하시네요. 주변 사람들이 당신을 피하고 있을지도 모릅니다. 본인이 '쿨하다'고 생각한다면 더욱 위험합니다. 주의 요망!", traits: ["라떼장인", "훈수두기"], imageUrl: "https://images.unsplash.com/photo-1629239855077-94116497330d?q=80&w=800&auto=format&fit=crop" },
            { type: "NO", title: "꼰대 청정 구역", description: "축하합니다! 당신은 꼰대 바이러스에 감염되지 않았습니다. 열린 사고방식의 소유자시군요. 후배들이 당신을 믿고 따를 것입니다.", traits: ["오픈마인드", "소통왕"], imageUrl: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?q=80&w=800&auto=format&fit=crop" }
        ]
    },
    {
        id: "rich-dna",
        title: "숨겨진 '부자 DNA' 찾기",
        description: "나의 소비 습관으로 보는 미래 자산 규모! 나는 욜로족일까, 워렌 버핏 꿈나무일까? (총 10문항)",
        thumbnailUrl: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=600&auto=format&fit=crop",
        content: [
            {
                title: "부자는 타고나는 것일까?",
                paragraphs: [
                    "누구나 부자를 꿈꾸지만, 모든 사람이 부자가 되지는 못합니다. 부자들에게는 그들만의 특별한 사고방식과 습관, 즉 '부자 DNA'가 있다고 합니다.",
                    "'숨겨진 부자 DNA 찾기' 테스트는 당신의 사소한 소비 습관, 돈을 대하는 태도, 재테크에 대한 관심도 등을 분석하여 당신이 훗날 경제적 자유를 이룰 가능성이 얼마나 되는지 진단해 드립니다."
                ]
            },
            {
                title: "부자 DNA vs 욜로(YOLO) DNA",
                paragraphs: [
                    "**부자 DNA (RICH)**: 미래 지향적입니다. 당장의 만족보다는 장기적인 목표를 위해 인내하며, 돈을 불리는 시스템(투자)에 관심이 많습니다. '가성비'와 '효용'을 중요하게 생각하는 합리적인 소비를 지향합니다.",
                    "**욜로 DNA (YOLO)**: 현재 지향적입니다. '인생은 한 번뿐'이라는 모토 아래 지금의 행복과 경험을 최우선으로 둡니다. 소비를 통해 즉각적인 보상을 얻는 것을 즐기지만, 자칫 미래에 대한 대비가 부족해질 수 있습니다."
                ]
            },
            {
                title: "경제적 자유를 향한 첫걸음",
                paragraphs: [
                    "테스트 결과가 '욜로족'으로 나왔다고 실망하지 마세요. 습관은 언제든 바꿀 수 있습니다. 자신의 소비 패턴을 인지하는 것만으로도 변화의 시작이 될 수 있습니다.",
                    "작은 돈을 소중히 여기는 태도부터 시작해 보세요. 통장을 쪼개고, 불필요한 고정 지출을 줄이는 작은 실천들이 모여 당신 안에 잠들어 있는 부자 DNA를 깨울 것입니다."
                ]
            }
        ],
        questions: [
            { id: "r1", text: "월급이 들어왔다. 가장 먼저 하는 일은?", options: [{ id: "A", text: "적금, 주식 등 투자 계좌로 이체", score: { RICH: 1 } }, { id: "B", text: "장바구니 결제 & 카드값 상환", score: { YOLO: 1 } }] },
            { id: "r2", text: "1+1 행사를 본다면?", options: [{ id: "A", text: "필요 없으면 안 산다.", score: { RICH: 1 } }, { id: "B", text: "개이득! 당장 담는다.", score: { YOLO: 1 } }] },
            { id: "r3", text: "친구들과 밥을 먹고 더치페이 할 때?", options: [{ id: "A", text: "10원 단위까지 정확하게 계산한다", score: { RICH: 1 } }, { id: "B", text: "귀찮은데 내가 낼게~ (그리고 후회함)", score: { YOLO: 1 } }] },
            { id: "r4", text: "길가다 5만원을 주웠다. 어떻게 할까?", options: [{ id: "A", text: "비상금 통장에 저금한다", score: { RICH: 1 } }, { id: "B", text: "꽁돈이다! 치킨 시켜 먹는다", score: { YOLO: 1 } }] },
            { id: "r5", text: "매일 마시는 커피, 당신의 선택은?", options: [{ id: "A", text: "탕비실 믹스커피 or 카누", score: { RICH: 1 } }, { id: "B", text: "스타벅스 사이렌 오더", score: { YOLO: 1 } }] },
            { id: "r6", text: "택시를 타는 빈도는?", options: [{ id: "A", text: "정말 급할 때 아니면 버스/지하철", score: { RICH: 1 } }, { id: "B", text: "걷기 귀찮으면 바로 카카오택시 호출", score: { YOLO: 1 } }] },
            { id: "r7", text: "구독하고 있는 OTT 서비스는?", options: [{ id: "A", text: "친구랑 공유하거나 꼭 필요한 1개만", score: { RICH: 1 } }, { id: "B", text: "넷플릭스, 디즈니, 티빙... 다 봄", score: { YOLO: 1 } }] },
            { id: "r8", text: "스트레스를 받았을 때 소비 패턴은?", options: [{ id: "A", text: "돈 안 드는 산책이나 수면", score: { RICH: 1 } }, { id: "B", text: "매운 음식 배달 or 쇼핑으로 풀기", score: { YOLO: 1 } }] },
            { id: "r9", text: "금융 지식에 대한 관심도는?", options: [{ id: "A", text: "틈틈이 경제 뉴스나 유튜브를 본다.", score: { RICH: 1 } }, { id: "B", text: "머리 아프다. 몰라도 사는데 지장 없다.", score: { YOLO: 1 } }] },
            { id: "r10", text: "여행을 간다면 숙소는?", options: [{ id: "A", text: "가성비 좋은 깔끔한 숙소", score: { RICH: 1 } }, { id: "B", text: "인스타 감성 5성급 호텔", score: { YOLO: 1 } }] }
        ],
        results: [
            { type: "RICH", title: "워렌 버핏 꿈나무", description: "철저한 경제 관념의 소유자. 숨만 쉬어도 돈이 모이는 타입입니다. 불필요한 지출을 통제할 줄 아는 당신은 조만간 건물주가 될 상이로군요!", traits: ["인간계산기", "건물주각"], imageUrl: "https://images.unsplash.com/photo-1604594849809-dfedbc827105?q=80&w=800&auto=format&fit=crop" },
            { type: "YOLO", title: "텅장 요정 욜로족", description: "인생은 폼생폼사! 현재의 행복이 가장 중요합니다. 하지만 통장 잔고를 볼 때마다 눈물이 나는군요. 미래의 나에게 너무 많은 짐을 떠넘기고 있지는 않은가요?", traits: ["탕진잼", "행복회로"], imageUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=800&auto=format&fit=crop" }
        ]
    },
    {
        id: "joseon-job",
        title: "전생 체험: 조선시대 내 직업은?",
        description: "\"나는 왕이 될 상인가, 아니면 노비 문서에 도장을 찍을 상인가?\" 현대의 성향을 조선시대 계급에 빗대어 알아보는 신분 예측 테스트. (총 7문항)",
        thumbnailUrl: "/images/joseon_thumb.png",
        content: [
            {
                title: "조선시대로 타임슬립 한다면?",
                paragraphs: [
                    "현대의 직업 적성 검사가 지루하다면, 조선시대로 배경을 옮겨보는 건 어떨까요? 역사 속 계급 사회는 현대의 조직 사회와 놀랍도록 닮아 있습니다.",
                    "'전생 체험: 조선시대 내 직업은?' 테스트는 당신의 성향, 리더십, 업무 스타일, 가치관 등을 종합하여 조선시대였다면 어떤 신분과 직업을 가졌을지 예측해 보는 퓨전 심리 테스트입니다."
                ]
            },
            {
                title: "신분으로 보는 현대적 해석",
                paragraphs: [
                    "**왕(King)**: 최고의 권력과 책임을 지는 자리입니다. 현대에서는 CEO, 리더, 창업가 기질을 가진 사람입니다. 자기 주도적이고 야망이 크며, 남 밑에서 일하는 것을 힘들어할 수 있습니다.",
                    "**선비(Scholar)**: 학문과 명예를 중시하는 지식인입니다. 현대의 연구원, 교수, 전문가 직군에 해당합니다. 원칙을 중요시하고 논리적이며, 정신적인 가치를 추구합니다.",
                    "**거상(Merchant)**: 실리와 이익을 쫓는 사업가입니다. 영업, 마케팅, 투자 전문가에 어울립니다. 현실 감각이 뛰어나고 트렌드에 민감하며, 돈의 흐름을 읽는 능력이 탁월합니다.",
                    "**한량(Rebel)**: 풍류를 즐기는 자유로운 영혼입니다. 예술가, 프리랜서, 크리에이터 기질이 다분합니다. 얽매이는 것을 싫어하고 창의적인 아이디어가 넘칩니다.",
                    "**노비(Slave)**: 묵묵히 맡은 일을 수행하는 성실한 일꾼입니다. (비하의 의미가 아닙니다!) 현대 사회를 지탱하는 대다수의 성실한 직장인을 대변하며, 꼼꼼하고 책임감이 강한 실무자 타입입니다."
                ]
            },
            {
                title: "재미로 보는 전생과 현생",
                paragraphs: [
                    "당신의 전생이 왕이었다고 해서 현생에서 떵떵거리는 것은 아니지만, 타고난 기질은 변하지 않습니다. 자신의 '신분'에 맞는 적성을 찾아 현대 사회에서 어떻게 능력을 발휘할지 힌트를 얻어보세요.",
                    "친구들과 결과를 공유하며 서로의 전생 관계(주종 관계? 라이벌?)를 맞춰보는 것도 큰 즐거움이 될 것입니다."
                ]
            }
        ],
        questions: [
            {
                id: "j1", text: "주말에 집에 있는데 배가 고프다. 어떻게 할까?",
                options: [
                    { id: "A", text: "\"여봐라~ 아무도 없느냐?\" 배달 앱을 켠다.", score: { ROYAL: 1 } },
                    { id: "B", text: "직접 냉장고를 뒤져서 요리해 먹는다.", score: { SLAVE: 1 } }
                ]
            },
            {
                id: "j2", text: "친구들과의 모임에서 나는?",
                options: [
                    { id: "A", text: "내가 분위기를 주도하고 다들 내 말을 따른다.", score: { ROYAL: 1, SCHOLAR: 1 } },
                    { id: "B", text: "남들이 하자는 대로 조용히 따라간다.", score: { SLAVE: 1, MERCHANT: 1 } }
                ]
            },
            {
                id: "j3", text: "돈에 대한 나의 가치관은?",
                options: [
                    { id: "A", text: "돈이 최고다. 명예보다 부가 우선!", score: { MERCHANT: 1 } },
                    { id: "B", text: "돈보다는 체면과 명예가 중요하다.", score: { SCHOLAR: 1 } }
                ]
            },
            {
                id: "j4", text: "일을 할 때 나의 스타일은?",
                options: [
                    { id: "A", text: "남에게 시키는 게 편하다.", score: { ROYAL: 1 } },
                    { id: "B", text: "내가 직접 몸으로 뛰는 게 속 편하다.", score: { SLAVE: 1, MERCHANT: 1 } }
                ]
            },
            {
                id: "j5", text: "규칙과 규율에 대해 어떻게 생각하나?",
                options: [
                    { id: "A", text: "답답하다. 나는 자유로운 영혼이다!", score: { REBEL: 1 } },
                    { id: "B", text: "사회 질서를 위해 반드시 지켜야 한다.", score: { SCHOLAR: 1 } }
                ]
            },
            {
                id: "j6", text: "사람들이 나를 볼 때?",
                options: [
                    { id: "A", text: "어려워하거나 존경의 눈빛을 보낸다.", score: { ROYAL: 1, SCHOLAR: 1 } },
                    { id: "B", text: "편안해하고 만만하게(?) 본다.", score: { REBEL: 1, SLAVE: 1 } }
                ]
            },
            {
                id: "j7", text: "인생의 목표는?",
                options: [
                    { id: "A", text: "즐겁고 편하게 놀고 먹는 것", score: { REBEL: 1 } },
                    { id: "B", text: "남들 위에 서는 권력자가 되는 것", score: { ROYAL: 1 } }
                ]
            }
        ],
        results: [
            { type: "ROYAL", title: "천상천하 유아독존: 왕(King)", description: "당신은 타고난 리더입니다! 남의 밑에 있을 사람이 아니군요. 현대에서도 팀장이나 대표 역할을 맡는 경우가 많겠어요. 다만 너무 독단적이면 폭군이 될 수 있으니 주의!", traits: ["리더십", "야망가"], imageUrl: "/images/joseon_king.png" },
            { type: "SCHOLAR", title: "청렴결백: 영의정(선비)", description: "지적이고 논리적인 당신! 학식과 덕망을 갖춘 선비 스타일입니다. 명예를 중시하며, 올바른 길을 가려는 신념이 강합니다. 현대판 브레인이시군요.", traits: ["지적임", "원칙주의"], imageUrl: "/images/joseon_scholar.png" },
            { type: "MERCHANT", title: "돈 냄새 맡는: 거상", description: "계산이 빠르고 실속을 챙길 줄 아는 당신! 명예보다는 실리가 중요합니다. 타고난 사업 수완으로 현대에서도 부자가 될 확률이 가장 높습니다.", traits: ["수완가", "현실적"], imageUrl: "/images/joseon_merchant.png" },
            { type: "REBEL", title: "바람 따라 구름 따라: 한량", description: "인생 뭐 있어? 즐기는 게 최고지! 얽매이는 것을 싫어하고 자유를 사랑하는 영혼입니다. 예술적 감각이 뛰어나며, 음주가무에 능할 수도 있어요.", traits: ["자유영혼", "흥부자"], imageUrl: "/images/joseon_rebel.png" },
            { type: "SLAVE", title: "프로 일잘러: 노비(머슴)", description: "시키는 일 하나는 기가 막히게 잘하는 당신! 성실함이 무기입니다. 하지만 너무 남의 눈치만 보지 마세요. 현대에서는 '월급 노예'라고 불릴지도... 힘내세요!", traits: ["성실함", "예스맨"], imageUrl: "/images/joseon_slave.png" }
        ]
    },
    {
        id: "isekai-truck",
        title: "🧙 이세계 환생 트럭 테스트",
        description: "트럭에 치여 눈을 떠보니 이세계?! 마왕일까 용사일까, 아니면 슬라임? 당신의 이세계 직업 매칭! (총 7문항)",
        thumbnailUrl: "/images/isekai_thumb.png",
        content: [
            {
                title: "이세계 트럭에 치여버렸다!",
                paragraphs: [
                    "웹소설이나 애니메이션의 단골 소재 '이세계 전생'. 만약 당신에게도 우연한 사고(?)로 다른 차원의 판타지 세계로 가게 된다면 어떤 운명이 기다리고 있을까요?",
                    "'이세계 환생 트럭 테스트'는 판타지 세계관 속 당신의 역할(Role)을 찾아주는 서브컬처 취향 저격 테스트입니다. 마왕을 무찌르는 용사일지, 세계를 정복할 마왕일지, 아니면 평화롭게 슬라임으로 살아갈지 확인해 보세요."
                ]
            },
            {
                title: "판타지 클래스(Class) 분석",
                paragraphs: [
                    "**용사(Hero)**: 정의감과 용기로 똘똘 뭉친 주인공 타입입니다. 도전적인 과제를 좋아하고 동료를 모아 목표를 달성하는 리더십을 가졌습니다.",
                    "**마왕(Demon King)**: 압도적인 힘과 카리스마로 세상을 지배하려는 야심가입니다. 기존의 질서를 파괴하고 자신만의 세계를 구축하려는 혁명가적 기질이 있습니다.",
                    "**마법사/현자(Wizard)**: 지혜와 지식을 탐구하는 지성파입니다. 후방에서 전략을 짜거나 강력한 한 방을 준비하는 신중한 타입입니다.",
                    "**마을 주민/슬라임(Villager)**: 평화롭고 소소한 행복을 추구하는 안빈낙도 타입입니다. 위험한 모험보다는 안전하고 편안한 삶을 선호하며, '가늘고 길게' 사는 것이 목표입니다."
                ]
            },
            {
                title: "당신의 모험 스타일은?",
                paragraphs: [
                    "이 테스트는 단순히 직업을 정해주는 것을 넘어, 당신이 낯선 환경(새로운 직장, 학교 등)에 처했을 때 어떻게 적응하고 대처하는지를 보여줍니다.",
                    "적극적으로 문제를 해결하는 유형인지, 아니면 흐름에 몸을 맡기는 유형인지 파악해 보세요. 어떤 결과가 나오든, 당신의 이세계 라이프를 응원합니다!"
                ]
            }
        ],
        questions: [
            {
                id: "i1", text: "눈을 떠보니 낯선 숲속이다. 가장 먼저 할 행동은?",
                options: [
                    { id: "A", text: "주변을 탐색하며 정보를 수집한다.", score: { HERO: 1, WIZARD: 1 } },
                    { id: "B", text: "일단 다시 잔다. 꿈이겠지.", score: { SLIME: 1, VILLAGER: 1 } }
                ]
            },
            {
                id: "i2", text: "몬스터가 나타났다! 나의 대처법은?",
                options: [
                    { id: "A", text: "정면 승부! 검을 뽑아 돌진한다.", score: { HERO: 1, DEMON: 1 } },
                    { id: "B", text: "멀리서 마법으로 안전하게 공격한다.", score: { WIZARD: 1 } }
                ]
            },
            {
                id: "i3", text: "길가다 엄청나게 강해 보이는 검을 발견했다.",
                options: [
                    { id: "A", text: "내꺼다! 바로 뽑아본다.", score: { HERO: 1, DEMON: 1 } },
                    { id: "B", text: "저주받았을지 모른다. 지나친다.", score: { VILLAGER: 1, SLIME: 1 } }
                ]
            },
            {
                id: "i4", text: "동료를 모은다면 어떤 스타일로?",
                options: [
                    { id: "A", text: "나를 따르라! 내 명령을 잘 듣는 부하들.", score: { DEMON: 1 } },
                    { id: "B", text: "서로 믿고 의지하는 평등한 친구들.", score: { HERO: 1 } }
                ]
            },
            {
                id: "i5", text: "평화로운 마을에 도착했다. 하고 싶은 일은?",
                options: [
                    { id: "A", text: "마을 촌장에게 퀘스트를 받는다.", score: { HERO: 1 } },
                    { id: "B", text: "농사나 짓고 평화롭게 살고 싶다.", score: { VILLAGER: 1, SLIME: 1 } }
                ]
            },
            {
                id: "i6", text: "최종 보스 마왕성 앞에 도착했다.",
                options: [
                    { id: "A", text: "세상을 구하기 위해 문을 박차고 들어간다.", score: { HERO: 1 } },
                    { id: "B", text: "사실 내가 마왕이었다면? (반전)", score: { DEMON: 1 } }
                ]
            },
            {
                id: "i7", text: "이세계에서 얻고 싶은 능력은?",
                options: [
                    { id: "A", text: "세계관 최강의 파괴력", score: { DEMON: 1, WIZARD: 1 } },
                    { id: "B", text: "죽지 않는 재생능력과 편안함", score: { SLIME: 1, VILLAGER: 1 } }
                ]
            }
        ],
        results: [
            { type: "DEMON", title: "세계관 최강자: 마왕", description: "압도적인 카리스마와 힘을 가진 당신! 세상을 발 아래 두고 싶어하는 정복자 기질이 있습니다. 하지만 가끔은 용사에게 당해주는 자비(?)도 베풀어주세요.", traits: ["지배자", "최강자"], imageUrl: "/images/isekai_demon.png" },
            { type: "HERO", title: "정의의 사도: 용사", description: "불의를 보면 참지 못하는 정의로운 성격! 곤경에 처한 사람을 돕고 동료를 모아 세상을 구하는 전형적인 주인공 스타일입니다.", traits: ["용기", "주인공"], imageUrl: "/images/isekai_hero.png" },
            { type: "WIZARD", title: "지혜의 탐구자: 대마법사", description: "육체노동은 질색! 뛰어난 지능과 마법으로 모든 것을 해결합니다. 혼자 있는 것을 좋아하고 연구와 탐구에 몰두하는 학구파입니다.", traits: ["지능캐", "방구석여포"], imageUrl: "/images/isekai_wizard.png" },
            { type: "SLIME", title: "말랑말랑: 슬라임", description: "가장 약해 보이지만 생존력은 최강! 흐물흐물 상황에 맞춰 살아가는 유연함을 가졌습니다. 스트레스 받기 싫어하고 편안함을 추구하는 평화주의자입니다.", traits: ["유연함", "생존왕"], imageUrl: "/images/isekai_slime.png" },
            { type: "VILLAGER", title: "평범 그 자체: 마을 주민 A", description: "튀는 건 싫어! 엑스트라처럼 보이지만 사실 마을의 평화를 지키는 숨은 주역입니다. 소소한 행복을 즐기며 평범하게 사는 것이 꿈인 당신.", traits: ["평범함", "안전제일"], imageUrl: "/images/isekai_villager.png" }
        ]
    }
];
