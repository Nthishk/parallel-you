# 🌌 Parallel You — Alternate Life Exploration

An interactive frontend web application built as a university project for **Cloud Computing & DevOps Workflows**. 

**Parallel You** allows users to explore how their life could have turned out if they had made different choices at pivotal forks in their life—such as career discipline, relocation city, core priorities, turning points, and lifestyle pursuits.

---

## 🎯 Project Features

1. **Interactive Multi-Step Choice Builder**:
   - **Career & Discipline**: Technology, Creative & Design, Culinary Arts, Renewable Energy, Entrepreneurship, Literature, Marine Biology.
   - **Starting Relocation City**: Tokyo, Berlin, Reykjavík, Singapore, New York, Valparaíso.
   - **Core Life Priority**: High-Risk Ambition, Mastery of Craft, Work-Life Harmony & Travel, Social Good, Total Autonomy.
   - **Major Life Turning Point**: Overseas fellowship, co-founding a side project, solo sabbatical, discipline pivot.
   - **Lifestyle & Personal Pursuits**: Digital nomadism, artisanal studio, urban homesteading, digital atelier.

2. **Procedural Parallel Life Engine**:
   - Synthesizes a 10-year alternate timeline (2026–2036) with 6 multi-year milestone stories.
   - Calculates 5 dynamic life index metrics:
     - 🎨 **Creative Autonomy**
     - 💼 **Career Impact**
     - ✈️ **Adventure & Travel**
     - 🧘 **Peace & Balance**
     - 💰 **Financial Resilience**

3. **Interactive Exploration & Branching**:
   - **2030 Mid-Timeline Decision Fork**: Test how making a second critical decision in 2030 recalculates the second half of your timeline.
   - **Category Filtering**: Filter milestone cards by *Turning Point, Career, Personal & Travel, Mastery*.
   - **Side-by-Side Path Comparison**: Save generated timelines and compare choices, outcomes, and metrics side-by-side.
   - **Export & Share**: Export a Markdown text summary or download a JSON snapshot.

4. **Zero Backend Required**:
   - Implemented 100% on the frontend using React, Vite, and Tailwind CSS.
   - Zero external API dependencies, artificial delays, or database requirements.

---

## 🎓 University Assignment: 3-Branch Development & Cloud Deployment

This repository implements a **three-environment development workflow** required for cloud deployment evaluation:

```text
dev (DEFAULT / DEVELOPMENT)
  ↓  Pull Request
test (TESTING / STAGING)
  ↓  Pull Request
main (PRODUCTION RELEASE → CLOUD DEPLOYMENT)
```

### Branch Hierarchy

| Branch | Purpose | Default GitHub Branch? | Deployment Target |
| :--- | :--- | :---: | :--- |
| **`dev`** | Active development environment | **YES (Default)** | Development builds |
| **`test`** | Testing & staging validation | No | Staging preview |
| **`main`** | Production release environment | No | **Production Cloud URL** |

> [!IMPORTANT]
> **GitHub Default Branch**: The repository default branch MUST be set to **`dev`** in GitHub repository settings under *Settings → Branches*.
>
> **Production Cloud Deployment**: The production cloud deployment (on Vercel, Netlify, Render, etc.) MUST be configured to deploy from the **`main`** branch, even though `dev` is the default GitHub branch.

---

## 🛠️ Local Development & Branch Setup Instructions

### 1. Repository Setup & Local Branching

```bash
# 1. Initialize local Git repository (if not already initialized)
git init

# 2. Create the dev branch (Development) and switch to it
git checkout -b dev

# 3. Create the test branch (Testing)
git checkout -b test

# 4. Create the main branch (Production)
git checkout -b main

# 5. Return to dev branch for ongoing development
git checkout dev
```

### 2. Local Setup & Running

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 🔀 Environment Promotion Workflow (Dev → Test → Main)

When releasing changes through the workflow environments:

### Step 1: Development (`dev`)
Make all code updates and commits on `dev`:
```bash
git checkout dev
git add .
git commit -m "feat: enhance timeline generator and mobile UI responsiveness"
```

### Step 2: Merge to Testing (`test`)
Promote tested features from `dev` to `test`:
```bash
git checkout test
git merge dev
# Push to remote test branch or open a Pull Request dev -> test on GitHub
```

### Step 3: Promote to Production (`main`)
After testing validation, merge from `test` to `main`:
```bash
git checkout main
git merge test
# Push to main branch to trigger production cloud deployment
```

---

## ☁️ Cloud Deployment Instructions

### Deploying to Vercel (Recommended)

1. Push your repository to **GitHub**.
2. Go to [Vercel Dashboard](https://vercel.com) and click **Add New Project**.
3. Import your GitHub repository.
4. Under **Build & Development Settings**:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Under **Deployments / Production Branch Settings**:
   - Set **Production Branch** to **`main`**.
6. Click **Deploy**. Vercel will build from `main` and provide a public HTTPS URL (e.g. `https://parallel-you.vercel.app`).

### Deploying to Netlify

1. Log in to [Netlify](https://netlify.com) and select **Add new site → Import an existing project**.
2. Connect to **GitHub** and select this repository.
3. Configure settings:
   - **Branch to deploy**: `main`
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. Click **Deploy Site**.

---

## 📄 License & Student Meta

- **Course**: CS401 Cloud Computing & Web Deployment
- **Project Name**: Parallel You
- **Tech Stack**: React 18, Vite, Tailwind CSS, Lucide Icons
