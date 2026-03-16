import { Metadata } from 'next';
import { tests } from "@/data/tests";
import { TestCard } from "@/components/TestCard";
import { Footer } from "@/components/layout/Footer";
import { Sparkles } from "lucide-react";
import { IntroSection } from "@/components/home/IntroSection";
import { MbtiGuideSection } from "@/components/home/MbtiGuideSection";
import { FaqSection } from "@/components/home/FaqSection";

export const metadata: Metadata = {
  title: "무료 MBTI 테스트 | 16가지 성격 유형 심리테스트 모음 - VibeCheck",
  description: "무료 MBTI 성격 유형 테스트를 온라인으로 즐겨보세요. 퍼스널 컬러, 좀비 생존, 연애 유형, 꼰대 테스트 등 10가지 심리테스트를 회원가입 없이 즉시 무료로 이용하세요.",
  keywords: [
    "무료 MBTI 테스트", "MBTI 성격 유형", "16가지 성격유형", "심리테스트 무료",
    "MBTI 검사 무료", "성격 유형 테스트", "무료 심리테스트", "온라인 MBTI",
    "INFJ 테스트", "ENFP 테스트", "INTJ 테스트", "퍼스널 컬러 테스트",
    "연애 MBTI", "좀비 생존 테스트", "꼰대 테스트", "심테"
  ],
  alternates: {
    canonical: "https://vibecheck.page",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "VibeCheck",
  "url": "https://vibecheck.page",
  "description": "무료 MBTI 성격 유형 테스트 및 심리테스트 모음 플랫폼",
  "inLanguage": "ko-KR",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "MBTI 테스트는 무료인가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "네, VibeCheck의 모든 MBTI 성격 유형 테스트와 심리테스트는 100% 무료입니다. 회원가입 없이 즉시 이용하실 수 있습니다."
      }
    },
    {
      "@type": "Question",
      "name": "MBTI 16가지 성격 유형은 무엇인가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "MBTI는 ISTJ, ISFJ, INFJ, INTJ, ISTP, ISFP, INFP, INTP, ESTP, ESFP, ENFP, ENTP, ESTJ, ESFJ, ENFJ, ENTJ의 16가지 성격 유형으로 구성됩니다. 각 유형은 에너지 방향(E/I), 인식 기능(S/N), 판단 기능(T/F), 생활 양식(J/P)의 조합으로 결정됩니다."
      }
    },
    {
      "@type": "Question",
      "name": "INFJ, ENFP 등 인기 MBTI 유형의 특징은 무엇인가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "INFJ는 통찰력 있고 이상주의적인 성격으로 '선지자형'으로 불립니다. ENFP는 열정적이고 창의적인 '활동가형'입니다. INTJ는 전략적이고 독립적인 '전략가형', ENFJ는 카리스마 있는 '선도자형'입니다. VibeCheck에서 무료로 자신의 MBTI 유형을 알아보세요."
      }
    },
    {
      "@type": "Question",
      "name": "퍼스널 컬러 테스트란 무엇인가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "퍼스널 컬러 테스트는 개인의 성격과 감성을 색깔로 분석하는 심리테스트입니다. 따뜻한 웜톤 타입인지, 차분한 쿨톤 타입인지를 성격적 특성을 통해 알아볼 수 있습니다."
      }
    },
    {
      "@type": "Question",
      "name": "MBTI 결과를 친구와 공유할 수 있나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "물론입니다! 결과 페이지 하단의 공유 버튼을 통해 카카오톡, 링크 복사 등으로 친구들에게 내 MBTI 결과를 공유할 수 있습니다."
      }
    },
    {
      "@type": "Question",
      "name": "개인정보는 안전하게 보호되나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "VibeCheck는 별도의 회원가입이나 개인정보 입력을 요구하지 않습니다. 테스트 결과는 브라우저에 임시 저장되며 서버에 영구적으로 저장되지 않아 안심하고 이용하실 수 있습니다."
      }
    },
    {
      "@type": "Question",
      "name": "어떤 이론을 바탕으로 MBTI 테스트가 만들어졌나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "MBTI(Myers-Briggs Type Indicator) 성격 유형 이론을 기반으로 하며, 카를 융(Carl Jung)의 심리 유형론에서 발전한 이론입니다. 4가지 선호 지표(E/I, S/N, T/F, J/P)를 통해 16가지 성격 유형을 분류합니다."
      }
    },
    {
      "@type": "Question",
      "name": "좀비 아포칼립스 생존 테스트란 무엇인가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "좀비 아포칼립스 생존 테스트는 위기 상황에서의 성격 유형을 재미있게 분석하는 심리테스트입니다. 리더형, 과학자형, 배신자형 등 5가지 생존 유형 중 나의 타입이 무엇인지 알아볼 수 있습니다."
      }
    },
    {
      "@type": "Question",
      "name": "새로운 심리테스트는 언제 업데이트 되나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "매주 새로운 심리테스트가 업데이트될 예정입니다. 트렌드를 반영한 다양한 주제의 테스트를 준비하고 있으니 자주 방문해주세요!"
      }
    }
  ]
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <header className="px-6 py-6 pb-2">
        <h1 className="text-2xl font-extrabold flex items-center gap-2">
          <Sparkles className="text-primary" />
          <span className="text-gradient font-black tracking-tight" style={{ fontFamily: 'var(--font-inter)' }}>VibeCheck</span>
        </h1>
        <p className="text-gray-400 text-sm mt-1">무료 MBTI 테스트 & 심리테스트 모음</p>
      </header>

      <div className="flex-1 px-4 py-6 overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-min mb-16">
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

        {/* AdSense Content Sections */}
        <div className="max-w-5xl mx-auto space-y-8">
          <IntroSection />

          <div className="my-12 border-t border-gray-100" />

          <MbtiGuideSection />

          <div className="my-12 border-t border-gray-100" />

          <FaqSection />
        </div>
      </div>

      <Footer />
    </div>
  );
}
