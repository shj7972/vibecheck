import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";
import { getTestById } from "@/lib/logic";

export const runtime = "edge";

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const testId = searchParams.get("testId") || "standard-mbti";
    const type = searchParams.get("type") || "";
    const title = searchParams.get("title") || "VibeCheck 결과";
    const desc = searchParams.get("desc") || "나의 성격 유형을 알아보세요!";

    // 테마 색상 결정
    const themeColors: Record<string, { bg: string; accent: string; text: string }> = {
        "standard-mbti": { bg: "#6366f1", accent: "#818cf8", text: "#ffffff" },
        "love-mbti": { bg: "#ec4899", accent: "#f472b6", text: "#ffffff" },
        "zombie-survival": { bg: "#22c55e", accent: "#4ade80", text: "#ffffff" },
        "work-survival": { bg: "#f59e0b", accent: "#fbbf24", text: "#ffffff" },
        "personal-color": { bg: "#a855f7", accent: "#c084fc", text: "#ffffff" },
        "kkondae-test": { bg: "#ef4444", accent: "#f87171", text: "#ffffff" },
        "joseon-job": { bg: "#d97706", accent: "#fbbf24", text: "#ffffff" },
        "isekai-truck": { bg: "#0ea5e9", accent: "#38bdf8", text: "#ffffff" },
        "rich-dna": { bg: "#16a34a", accent: "#4ade80", text: "#ffffff" },
    };

    const theme = themeColors[testId] || { bg: "#6366f1", accent: "#818cf8", text: "#ffffff" };

    // 제목 길이 제한
    const shortTitle = title.length > 30 ? title.slice(0, 30) + "..." : title;
    const shortDesc = desc.length > 60 ? desc.slice(0, 60) + "..." : desc;

    return new ImageResponse(
        (
            <div
                style={{
                    width: "1200px",
                    height: "630px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    background: `linear-gradient(135deg, ${theme.bg} 0%, ${theme.accent} 100%)`,
                    fontFamily: "sans-serif",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                {/* 배경 원형 장식 */}
                <div
                    style={{
                        position: "absolute",
                        top: "-100px",
                        right: "-100px",
                        width: "400px",
                        height: "400px",
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.1)",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        bottom: "-120px",
                        left: "-80px",
                        width: "350px",
                        height: "350px",
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.08)",
                    }}
                />

                {/* 메인 카드 */}
                <div
                    style={{
                        background: "rgba(255,255,255,0.15)",
                        backdropFilter: "blur(10px)",
                        borderRadius: "24px",
                        border: "1px solid rgba(255,255,255,0.3)",
                        padding: "48px 64px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        maxWidth: "900px",
                        textAlign: "center",
                    }}
                >
                    {/* RESULT 뱃지 */}
                    <div
                        style={{
                            background: "rgba(255,255,255,0.25)",
                            borderRadius: "999px",
                            padding: "6px 20px",
                            color: theme.text,
                            fontSize: "18px",
                            fontWeight: "700",
                            letterSpacing: "0.15em",
                            marginBottom: "24px",
                        }}
                    >
                        ✨ RESULT
                    </div>

                    {/* 유형 코드 (MBTI 등) */}
                    {type && (
                        <div
                            style={{
                                color: "rgba(255,255,255,0.9)",
                                fontSize: "48px",
                                fontWeight: "900",
                                letterSpacing: "0.05em",
                                marginBottom: "8px",
                            }}
                        >
                            {type}
                        </div>
                    )}

                    {/* 결과 제목 */}
                    <div
                        style={{
                            color: theme.text,
                            fontSize: "52px",
                            fontWeight: "900",
                            lineHeight: 1.2,
                            marginBottom: "20px",
                        }}
                    >
                        {shortTitle}
                    </div>

                    {/* 결과 설명 */}
                    <div
                        style={{
                            color: "rgba(255,255,255,0.85)",
                            fontSize: "26px",
                            lineHeight: 1.5,
                            maxWidth: "700px",
                        }}
                    >
                        {shortDesc}
                    </div>
                </div>

                {/* 브랜드 */}
                <div
                    style={{
                        position: "absolute",
                        bottom: "32px",
                        right: "48px",
                        color: "rgba(255,255,255,0.7)",
                        fontSize: "24px",
                        fontWeight: "700",
                        letterSpacing: "0.05em",
                    }}
                >
                    ✦ VibeCheck
                </div>
            </div>
        ),
        {
            width: 1200,
            height: 630,
        }
    );
}
