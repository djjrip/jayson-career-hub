import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

export async function POST() {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  console.log('--- [HUB ENGINE] Executing Aviation Scholarship Sniper ---');
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  const mockScholarships = [
    {
      provider: "AOPA",
      scholarship_name: "Primary Flight Training Scholarship 2026",
      award_amount: "$10,000",
      deadline: "2026-04-15",
      status: "new",
      user_id: session.user.id
    },
    {
      provider: "EAA",
      scholarship_name: "Ray Aviation Scholarship",
      award_amount: "$11,000",
      deadline: "2026-05-01",
      status: "new",
      user_id: session.user.id
    }
  ];

  const { data, error } = await supabase.from('scholarships').insert(mockScholarships).select();
  
  return NextResponse.json({ success: true, count: mockScholarships.length, data: data });
}
