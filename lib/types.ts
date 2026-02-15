export type QuestionOption = {
    id: string;
    text: string;
    score: Record<string, number>; // e.g., { E: 1, I: 0 } or { sexy: 10 }
};

export type Question = {
    id: string;
    text: string;
    options: QuestionOption[];
};

export type TestResult = {
    type: string;
    title: string;
    description: string;
    traits: string[]; // e.g., ['E', 'N', 'F', 'P'] or tags
    imageUrl?: string;
    themeColor?: string; // Optional hex code for result page styling
};

export type TestContent = {
    title: string;
    paragraphs: string[];
};

export type TestData = {
    id: string;
    title: string;
    description: string;
    thumbnailUrl?: string; // or emoji
    questions: Question[];
    results: TestResult[];
    content?: TestContent[]; // New field for rich content (AdSense)
    // Logic to determine result
    // Simple max score logic for now. 
    // We can map result types to score keys.
};
