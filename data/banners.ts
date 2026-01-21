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
    }
];
