import { TestData, TestResult } from "./types";
import { tests } from "@/data/tests";

export function getTestById(id: string): TestData | undefined {
    return tests.find((t) => t.id === id);
}

export function calculateResult(testId: string, scores: Record<string, number>): TestResult | null {
    const test = getTestById(testId);
    if (!test) return null;

    // Simple logic: Find the result with the most matching traits (simplified)
    // For standard MBTI, we compare pairs: E vs I, S vs N, T vs F, J vs P

    // MBTI Logic Check (if keys exist)
    if (scores.E !== undefined || scores.I !== undefined) {
        const traitScores = {
            E: scores.E || 0,
            I: scores.I || 0,
            S: scores.S || 0,
            N: scores.N || 0,
            T: scores.T || 0,
            F: scores.F || 0,
            J: scores.J || 0,
            P: scores.P || 0,
        };

        let resultType = "";
        resultType += traitScores.E >= traitScores.I ? "E" : "I";
        resultType += traitScores.S >= traitScores.N ? "S" : "N";
        resultType += traitScores.T >= traitScores.F ? "T" : "F";
        resultType += traitScores.J >= traitScores.P ? "J" : "P";

        const exactMatch = test.results.find(r => r.type === resultType);
        if (exactMatch) return exactMatch;

        // Best Match Fallback
        // If no exact match (because we don't have all 16 types in data), find the one with most matching letters
        let bestMatch = test.results[0];
        let maxOverlap = -1;

        test.results.forEach((result) => {
            let overlap = 0;
            const currentType = result.type; // e.g. "ESTJ"
            // Compare characters
            for (let i = 0; i < 4; i++) {
                if (currentType[i] === resultType[i]) overlap++;
            }

            if (overlap > maxOverlap) {
                maxOverlap = overlap;
                bestMatch = result;
            }
        });

        return bestMatch;
    }

    // Fallback / General Logic: Find result type with highest score
    // Assuming keys in 'scores' match 'result.type'
    let maxScore = -1;
    let maxType = "";

    Object.entries(scores).forEach(([type, score]) => {
        if (score > maxScore) {
            maxScore = score;
            maxType = type;
        }
    });

    if (maxType) {
        const match = test.results.find(r => r.type === maxType);
        if (match) return match;
    }


    // Fallback (since I haven't defined all 16 results in tests.ts yet)
    return test.results[0];
}
