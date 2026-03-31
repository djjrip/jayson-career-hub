import { NextResponse } from 'next/server';
import { writeData, readData } from '@/lib/db';

export async function POST(request) {
  const { type, payload } = await request.json();
  
  console.log(`--- [HUB ENGINE] AI Generator: Creating draft for ${type} ---`);
  
  // Simulate OpenAI LLM response delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  let generatedDraft = "";

  if (type === 'job') {
    generatedDraft = `[AI GENERATED DRAFT FOR ${payload.company}]\n\nI am an autonomous systems operator and the solo founder of Onyx Foundry. I saw your opening for ${payload.title} and instantly recognized the exact bottlenecks your team is facing. I can own your entire stack and automate the mundane so your team can focus on scale.`;
  } else if (type === 'airport_job') {
    generatedDraft = `[AI GENERATED DRAFT FOR ${payload.company} @ ${payload.airportCode}]\n\nI am highly motivated to get my Private Pilot License and learn the aviation industry from the ground up at your FBO. I have zero direct aviation experience, but I hold a deep technical background in enterprise systems engineering and autonomous operations—skills built purely on extreme attention to detail and rigorous safety protocols.`;
  } else if (type === 'scholarship') {
    generatedDraft = `[AI GENERATED DRAFT FOR ${payload.provider}]\n\nSince analyzing jet engine diagrams at a young age, my trajectory has been locked onto aviation. I am applying for the ${payload.scholarshipName} because this $${payload.awardAmount} grant will directly fund my PPL Checkride and dual-instruction hours, allowing me to transition from an elite code operator to a fully rated aviator.`;
  } else {
    generatedDraft = `[AI GENERATED DRAFT]\nGeneric output for ${type}.`;
  }

  // Save the draft to our local DB
  const drafts = readData('drafts.json') || [];
  const newDraft = {
    id: `d-${Date.now()}`,
    type,
    content: generatedDraft,
    target: payload.company || payload.provider || 'Target',
    createdAt: new Date().toISOString()
  };
  
  drafts.unshift(newDraft);
  writeData('drafts.json', drafts);

  return NextResponse.json({ success: true, draft: newDraft });
}
