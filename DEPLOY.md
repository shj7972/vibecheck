# Deployment Guide

## 1. GitHub Integration
1. Initialize git in this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```
2. Create a new repository on GitHub and push.

## 2. Vercel Deployment (Recommended)
The easiest way to deploy Next.js is via Vercel.

1. Go to [Vercel Dashboard](https://vercel.com/dashboard).
2. Click **Add New** -> **Project**.
3. Import your GitHub repository.
4. Framework Preset: **Next.js** (detected automatically).
5. Build Command: `npm run build` (default).
6. Click **Deploy**.

## 3. Google Analytics Setup
1. Create a propery in [Google Analytics](https://analytics.google.com/).
2. Get your `Measurement ID` (starts with `G-`).
3. Set it as an Environment Variable in Vercel:
   - Key: `NEXT_PUBLIC_GA_ID`
   - Value: `G-XXXXXXXXXX`
4. Update `app/layout.tsx` to use the environment variable instead of hardcoded string if needed, or just paste it in.

## 4. Updates & CI/CD
Vercel automatically re-deploys when you push to `main` branch.

## 5. Adding More Tests
To add a new test:
1. Open `data/tests.ts`.
2. Add a new object to the `tests` array following the `TestData` interface.
3. Add images to `public/images`.
4. Done! The landing page automatically lists the new test.
