# Jayson Career Hub

The unified Command Center for Jobs, Aviation Scholarships, and PPL Training.

## Overview
This is a production-ready, full-stack Next.js application designed to function as an autonomous career engine. It features:
- **NextAuth (GitHub)**: Protects the dashboard and isolates user data.
- **Supabase (PostgreSQL)**: Handles fast, cloud-hosted reads and writes of scraped opportunities and AI drafts.
- **OpenAI & Playwright Integration**: Back-end architecture designed to seamlessly deploy generative scripts and job scrapers.

---

## 🚀 3-Step Vercel Deployment Guide

To deploy this application to live internet (e.g., `jayson-career-hub.vercel.app`), follow these steps:

### 1. Push Code to GitHub
Open your terminal inside this `jayson-career-hub` folder and push to a new private repository:
```bash
git init
git add .
git commit -m "Initial commit - Career Hub Omega"
git branch -M main
# Connect to your GitHub repo and push
git remote add origin https://github.com/YourUsername/jayson-career-hub.git
git push -u origin main
```

### 2. Connect to Vercel
1. Go to [Vercel.com](https://vercel.com) and log in with your GitHub account.
2. Click **"Add New..."** > **"Project"**.
3. Import the `jayson-career-hub` repository you just created on GitHub.

### 3. Add Environment Variables & Deploy
Before clicking deploy, open the **Environment Variables** section in Vercel and paste in every key from your `.env.local` file:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `NEXTAUTH_URL` *(Change this to your new live Vercel URL, or simply remove it in Vercel as Vercel handles it automatically)*
- `NEXTAUTH_SECRET`
- `GITHUB_ID`
- `GITHUB_SECRET`
- `OPENAI_API_KEY`

> ⚠️ **Important:** In your GitHub OAuth App settings, you must change the "Authorization callback URL" from `localhost:3000` to your new live domain: `https://your-vercel-domain.vercel.app/api/auth/callback/github`.

Click **Deploy**. Your Command Center is now live worldwide.
