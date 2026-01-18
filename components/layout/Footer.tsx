import { Github } from "lucide-react";

export function Footer() {
    return (
        <footer className="py-8 px-4 bg-gray-50 border-t flex flex-col items-center text-sm text-gray-500 gap-4">
            <div className="flex flex-col sm:flex-row gap-4 mb-2 items-center">
                <a href="https://stock-insight.app" target="_blank" rel="noopener noreferrer">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="https://stock-insight.app/static/banner_link_234x60.png" alt="Stock Insight AI" className="rounded-lg shadow-sm hover:opacity-90 transition-opacity" />
                </a>
                <a href="https://unsedam.kr" target="_blank" rel="noopener noreferrer">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="https://unsedam.kr/static/images/banner_link_234x60.png" alt="운세담" className="rounded-lg shadow-sm hover:opacity-90 transition-opacity" />
                </a>
                <a href="https://promptgenie.kr" target="_blank" rel="noopener noreferrer">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="https://promptgenie.kr/images/banner_link_new_234x60.png"
                        width="234"
                        height="60"
                        alt="PromptGenie - AI Prompt Library"
                        className="rounded-lg shadow-sm hover:opacity-90 transition-opacity"
                    />
                </a>
            </div>
            <div className="flex gap-4 text-xs">
                <a href="/privacy" className="hover:text-gray-900 transition">개인정보처리방침</a>
                <a href="/terms" className="hover:text-gray-900 transition">이용약관</a>
            </div>
            <p>© 2024 Fun Tests. All rights reserved.</p>
            <div className="flex gap-4">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-gray-900 transition flex items-center gap-1">
                    <Github size={16} /> GitHub
                </a>
            </div>
        </footer>
    );
}
