// server.js
import express from 'express';
import cors from 'cors';
import { GoogleGenAI, Type } from "@google/genai";

const app = express();
app.use(cors());
app.use(express.json());

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const responseSchema = {
  type: Type.OBJECT,
  properties: {
    screenplay: { type: Type.STRING },
    characters: { 
      type: Type.ARRAY, 
      items: { type: Type.OBJECT, properties: { name: { type: Type.STRING }, age: { type: Type.STRING }, description: { type: Type.STRING }, motivations: { type: Type.STRING }, arc: { type: Type.STRING } } } 
    },
    soundDesign: {
      type: Type.ARRAY,
      items: { type: Type.OBJECT, properties: { scene: { type: Type.STRING }, musicGenre: { type: Type.STRING }, effects: { type: Type.ARRAY, items: { type: Type.STRING } }, ambientLayers: { type: Type.STRING }, notes: { type: Type.STRING } } }
    },
    storyline: { type: Type.STRING }
  },
  required: ["screenplay", "characters", "soundDesign", "storyline"]
};

app.post('/generate', async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Transform this story concept into a cinematic pre-production package: "${prompt}"`,
      config: {
        systemInstruction: "You are a professional screenwriter, script supervisor, and sound designer. Output must follow industry standards.",
        responseMimeType: "application/json",
        responseSchema,
        temperature: 0.7
      }
    });

    const text = response.text;
    if (!text) throw new Error("Failed to generate content");
    res.json(JSON.parse(text));
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));
