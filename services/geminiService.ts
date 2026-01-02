
import { GoogleGenAI, Type } from "@google/genai";
import { LearnerContext, AINudge } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateNudge = async (context: LearnerContext): Promise<AINudge> => {
  const prompt = `
    Generate a personalized learning nudge for a student based on this context:
    - Days since last login: ${context.daysSinceLastLogin}
    - Course progress: ${context.courseProgress}%
    - Last activity: ${context.lastActivity}
    - Learning goal: ${context.learningGoal}
    - Average session length: ${context.avgSessionLength}
    - Past notification responses: ${context.pastNotificationResponse}

    GUIDELINES:
    1. Motivation State Classification: Classify into 'Engaged', 'Busy but willing', 'Stuck/confused', 'Avoiding due to guilt', or 'Burned out'.
    2. Nudge Type: Choose from 'Micro-commitment', 'Progress reminder', 'Recovery re-entry', 'Curiosity-based', or 'Silence'.
    3. Ethics: NO guilt-tripping, NO urgency, NO fear-based framing (e.g. "you are losing your streak").
    4. Message: Empathetic, short (max 25 words), focused on making re-entry feel light.
    5. Action: A specific small next step based on "Last activity".
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            message: { type: Type.STRING },
            recommendedAction: { type: Type.STRING },
            timeEstimate: { type: Type.STRING },
            motivationState: { type: Type.STRING },
            nudgeType: { type: Type.STRING },
            explanation: { type: Type.STRING, description: "Internal reasoning for choosing this nudge" }
          },
          required: ["message", "recommendedAction", "timeEstimate", "motivationState", "nudgeType", "explanation"]
        }
      }
    });

    const data = JSON.parse(response.text.trim());
    return data as AINudge;
  } catch (error) {
    console.error("Error generating nudge:", error);
    // Fallback nudge
    return {
      message: "Ready for a small win today? Pick up where you left off in just 5 minutes.",
      recommendedAction: "Continue: " + context.lastActivity,
      timeEstimate: "5 mins",
      motivationState: "Busy but willing",
      nudgeType: "Micro-commitment",
      explanation: "Fallback nudge due to API error."
    };
  }
};
