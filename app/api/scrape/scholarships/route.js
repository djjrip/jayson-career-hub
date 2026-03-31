import { NextResponse } from 'next/server';
import { writeData } from '@/lib/db';

export async function POST() {
  console.log('--- [HUB ENGINE] Executing Aviation Scholarship Sniper ---');
  
  // Simulate Playwright scraping delays
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  const mockScholarships = [
    {
      id: "s-1",
      provider: "AOPA",
      scholarshipName: "Primary Flight Training Scholarship 2026",
      awardAmount: "$10,000",
      deadline: "2026-04-15",
      status: "new"
    },
    {
      id: "s-2",
      provider: "EAA",
      scholarshipName: "Ray Aviation Scholarship",
      awardAmount: "$11,000",
      deadline: "2026-05-01",
      status: "new"
    }
  ];

  writeData('scholarships.json', mockScholarships);
  
  return NextResponse.json({ success: true, count: mockScholarships.length, data: mockScholarships });
}
