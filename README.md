# Jordan Grollman — Personal Portfolio

Your personal website. Built with React + Vite. Hosted free on Vercel.

---

## 🚀 DEPLOYMENT GUIDE (Step-by-Step)

### Step 1: Create a GitHub Account (skip if you have one)

1. Go to **https://github.com**
2. Click **"Sign Up"**
3. Follow the prompts (email, password, username)
4. Verify your email

### Step 2: Create a New Repository on GitHub

1. Once logged in, click the **"+"** icon in the top-right corner
2. Click **"New repository"**
3. Name it: `jordan-grollman-portfolio`
4. Set it to **Public** (required for free Vercel hosting)
5. **DO NOT** check "Add a README" (we already have one)
6. Click **"Create repository"**

### Step 3: Upload Your Files

1. On the new repository page, click **"uploading an existing file"** link
2. Drag and drop the **entire contents** of this project folder into the upload area. That means:
   - `package.json`
   - `vite.config.js`
   - `index.html`
   - `README.md`
   - `public/` folder (with favicon.svg inside)
   - `src/` folder (with main.jsx and App.jsx inside)
3. At the bottom, type a commit message like "Initial upload"
4. Click **"Commit changes"**

### Step 4: Create a Vercel Account

1. Go to **https://vercel.com**
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"**
4. Authorize Vercel to access your GitHub account

### Step 5: Deploy Your Site

1. Once logged into Vercel, click **"Add New..." → "Project"**
2. You'll see a list of your GitHub repositories
3. Find **`jordan-grollman-portfolio`** and click **"Import"**
4. Vercel will auto-detect it's a Vite project — all the settings will be pre-filled
5. Click **"Deploy"**
6. Wait about 60 seconds — Vercel will build and deploy your site
7. 🎉 You'll get a live URL like `jordan-grollman-portfolio.vercel.app`

### Step 6: Add a Custom Domain (Optional — ~$10/year)

1. Buy a domain at **https://www.namecheap.com** or **https://www.cloudflare.com/products/registrar/**
   - Search for `jordangrollman.com` (or any name you want)
   - Add to cart and purchase (~$10-12/year)
2. In Vercel, go to your project **Settings → Domains**
3. Type your domain name and click **"Add"**
4. Vercel will show you DNS records to add
5. Go to your domain registrar (Namecheap/Cloudflare) and add those DNS records
6. Wait 5-30 minutes for DNS to propagate
7. Your site is now live at your custom domain! 🎉

---

## ✏️ HOW TO EDIT YOUR SITE

### Editing Text Content

1. Go to your GitHub repository
2. Navigate to **`src/App.jsx`**
3. Click the **pencil icon** (✏️) to edit
4. Find the text you want to change — all content is in plain English inside quote marks
5. Make your changes (be careful not to delete any quote marks, commas, or brackets)
6. Click **"Commit changes"** at the bottom
7. Vercel will auto-redeploy in ~30 seconds

### What You Can Edit

Everything is in **`src/App.jsx`**. Here's where to find things:

| What                     | Where to Look                                    |
| ------------------------ | ------------------------------------------------ |
| Portfolio projects       | Search for `const PROJECTS` (around line 23)     |
| Work experience timeline | Search for `const EXPERIENCE` (around line 70)   |
| Hero intro text          | Search for `Hi, I'm` in the HomePage function    |
| About page intro         | Search for `About Me` in the AboutPage function  |
| Skill badges             | Search for `Web3` in the skill badges array      |
| Social links             | Search for `x.com` or `linkedin.com`             |
| Calendar link            | Search for `TO EDIT: Replace the href`            |
| Education                | Search for `Indiana University`                  |

### Adding a New Portfolio Project

Find the `PROJECTS` array and add a new block:

```js
  {
    name: "New Company Name",
    tagline: "Short Tagline Here",
    url: "https://newcompany.com/",
    description: "A brief 1-2 sentence description of what this company does.",
  },
```

### Adding a New Work Experience

Find the `EXPERIENCE` array and add a new block:

```js
  {
    date: "2024 — Present",
    role: "Your Title",
    company: "Company Name",
    description: "What you did there in 2-3 sentences.",
    tags: ["Tag1", "Tag2", "Tag3"],
  },
```

### Updating Your Calendar Link

Search for `TO EDIT: Replace the href` in the Contact section and change `href="#"` to your actual scheduling link.

### Adding Your Headshot

1. Add your headshot image to the `public/` folder on GitHub (name it `headshot.jpg`)
2. In App.jsx, find the `JG` avatar div in the Sidebar and replace it with:
   ```jsx
   <img src="/headshot.jpg" style={{ width: 56, height: 56, borderRadius: 14, objectFit: "cover" }} />
   ```

---

## 🏗️ PROJECT STRUCTURE

```
jordan-grollman-portfolio/
├── public/
│   └── favicon.svg          ← Browser tab icon
├── src/
│   ├── main.jsx             ← App entry point (don't edit)
│   └── App.jsx              ← ⭐ ALL YOUR CONTENT IS HERE
├── index.html               ← Page title & meta description
├── package.json             ← Dependencies (don't edit)
├── vite.config.js           ← Build config (don't edit)
└── README.md                ← This file
```

---

## 💡 TIPS

- **Only edit `src/App.jsx`** — that's where all your content lives
- **Always keep the quote marks** — text must be inside `" "` or `' '`
- **Don't delete commas or brackets** — these keep the code working
- **Test before sharing** — after committing, wait 30 seconds and check your live URL
- **If something breaks** — go to your Vercel dashboard, click "Deployments", and click "Redeploy" on the last working version. You can also undo changes on GitHub by clicking the "History" button and reverting.
