import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "sk-dummy" });

export async function POST(request) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { type, payload } = await request.json();
  console.log(`--- [HUB ENGINE] AI Generator: Creating aviation draft for ${type} using Gemini 3 Flash ---`);
  
  let prmpt = "";
  if (type === 'airport_job') {
    prmpt = `You are an expert career bot. Write a 1-paragraph highly targeted cover letter for ${payload.company} for the role of ${payload.title}. The applicant is a systems engineer transitioning to get a Private Pilot License at their airport. Keep it extremely brief and aggressive about wanting to learn the line and flight operations.`;
  } else if (type === 'scholarship') {
    prmpt = `You are an expert career bot. Write a 500 word essay applying for the ${payload.scholarshipName} from ${payload.provider}. The applicant is a systems engineer transitioning to a pilot. Frame the narrative around systems and safety.`;
  } else {
    prmpt = `Write a short professional application for ${type}.`;
  }

  let generatedDraft = "";
  try {
    const response = await ai.models.generateContent({
        model: 'gemini-3-flash',
        contents: prmpt,
    });
    generatedDraft = response.text || "[Gemini failed to generate response]";
  } catch (err) {
    console.error("Gemini Error:", err);
    generatedDraft = "[Project Alpha AI Error - Check Gemini API Key or Quota]";
  }

  const { data, error } = await supabase
    .from('drafts')
    .insert([{ 
      type, 
      content: generatedDraft, 
      target: payload.company || payload.provider || 'Target',
      user_id: session.user.id
    }])
    .select();

  return NextResponse.json({ success: true, error: error, draft: data ? data[0] : null });
}
