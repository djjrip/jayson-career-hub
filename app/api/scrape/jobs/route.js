import { NextResponse } from 'next/server';
import { writeData } from '@/lib/db';

export async function POST() {
  console.log('--- [HUB ENGINE] Executing Remote Job Scraper ---');
  
  // Simulate heavy Playwright headless scraping operation
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  const mockJobs = [
    {
      id: "j-1",
      title: "Senior Automation Engineer (Remote)",
      company: "TechFlow Inc.",
      status: "new",
      description: "Looking for a solo engineer to automate our entire CI/CD and deployment pipeline."
    },
    {
      id: "j-2",
      title: "Founding Engineer - React/Node",
      company: "Stealth Startup",
      status: "new",
      description: "Need a heavy-hitter to build our MVP. You will own the entire stack."
    }
  ];

  writeData('jobs.json', mockJobs);
  
  return NextResponse.json({ success: true, count: mockJobs.length, data: mockJobs });
}
