"use client";

import { useEffect, useState } from "react";
import { banners } from "@/data/banners";

export function BannerRotator() {
    const [randomBanners, setRandomBanners] = useState<typeof banners>([]);

    useEffect(() => {
        // Shuffle the banners array and take the first 3
        const shuffled = [...banners].sort(() => 0.5 - Math.random());
        setRandomBanners(shuffled.slice(0, 3));
    }, []);

    if (randomBanners.length === 0) {
        // Render nothing or a placeholder while hydrating to avoid layout shift if possible,
        // or we could render a default set. For simplicity and "randomness" requirement,
        // we wait for client side execution.
        // To prevent hydration mismatch, we render consistent initial state (empty)
        // and then populate on mount.
        return null;
    }

    return (
        <div className="flex flex-col sm:flex-row gap-4 mb-2 items-center">
            {randomBanners.map((banner) => (
                <a
                    key={banner.href}
                    href={banner.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={banner.title}
                >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={banner.imgSrc}
                        alt={banner.alt}
                        width="234"
                        height="60"
                        className="rounded-lg shadow-sm hover:opacity-90 transition-opacity"
                    />
                </a>
            ))}
        </div>
    );
}
