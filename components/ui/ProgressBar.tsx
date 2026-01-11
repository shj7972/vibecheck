import { cn } from "@/lib/utils";

export function ProgressBar({ value, max, className }: { value: number; max: number; className?: string }) {
    const percentage = Math.min(100, Math.max(0, (value / max) * 100));

    return (
        <div className={cn("w-full bg-gray-100 rounded-full h-2.5 overflow-hidden", className)}>
            <div
                className="bg-primary h-full rounded-full transition-all duration-300 ease-out"
                style={{ width: `${percentage}%` }}
            />
        </div>
    );
}
