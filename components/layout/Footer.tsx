import { Github } from "lucide-react";
import { BannerRotator } from "./BannerRotator";

export function Footer() {
    return (
        <footer className="py-8 px-4 bg-gray-50 border-t flex flex-col items-center text-sm text-gray-500 gap-4">
            <BannerRotator />
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
