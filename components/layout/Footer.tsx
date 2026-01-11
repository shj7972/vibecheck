import { Github } from "lucide-react";

export function Footer() {
    return (
        <footer className="py-6 px-4 bg-gray-50 border-t flex flex-col items-center text-sm text-gray-500 gap-2">
            <p>© 2024 Fun Tests. All rights reserved.</p>
            <div className="flex gap-4">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-gray-900 transition flex items-center gap-1">
                    <Github size={16} /> GitHub
                </a>
            </div>
        </footer>
    );
}
