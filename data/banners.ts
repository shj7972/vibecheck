export interface Banner {
    href: string;
    imgSrc: string;
    alt: string;
    title?: string;
}

export const banners: Banner[] = [
    {
        href: "https://stock-insight.app",
        imgSrc: "https://stock-insight.app/static/banner_link_234x60.png",
        alt: "Stock Insight AI"
    },
    {
        href: "https://unsedam.kr",
        imgSrc: "https://unsedam.kr/static/images/banner_link_234x60.png",
        alt: "운세담"
    },
    {
        href: "https://promptgenie.kr",
        imgSrc: "https://promptgenie.kr/images/banner_link_new_234x60.png",
        alt: "PromptGenie - AI Prompt Library"
    },
    {
        href: "https://irumlab.com",
        imgSrc: "https://irumlab.com/banner_link_234x60.png",
        alt: "이룸랩 배너",
        title: "이룸랩 - 무료 셀프 작명, 영어 닉네임, 브랜드 네이밍"
    },
    {
        href: "https://nutrimatch.kr",
        imgSrc: "https://nutrimatch.kr/banner_link_234x60.png",
        alt: "내 몸이 진짜 원하는 영양제는? Nutri-Match 분석 결과 보기",
        title: "Nutri-Match - 나만의 영양제 궁합 & 저속노화 분석기"
    }
];
