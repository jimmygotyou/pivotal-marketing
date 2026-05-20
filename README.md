# Pivotal Marketing Group — Lahore

An elegant, high-converting, premium dark-themed landing page designed specifically for **Pivotal Marketing**, Lahore's premium embeddable marketing powerhouse built for real estate developers.

This application is built with **React**, **Vite**, **Tailwind CSS**, and **Motion (Motion for React)** to provide incredibly smooth animations, interactive cost configurations, dynamic real estate strategizing toolkits, and interactive vector art showcases.

---

## 🚀 Quick Start (Local Development)

To run this project locally, make sure you have [Node.js](https://nodejs.org/) installed, then follow these simple steps:

1. **Clone or Download** the source files onto your local system.
2. Open your terminal in the project directory and install the packages:
   ```bash
   npm install
   ```
3. Boot up the Vite developer server:
   ```bash
   npm run dev
   ```
4. Open the development link [http://localhost:3000](http://localhost:3000) (or the port specified in terminal) in your browser.

---

## 📦 Building for Production

To compile highly optimized static assets (HTML, JS, CSS) to the `/dist` directory for launch:

```bash
npm run build
```

The output inside `/dist` is 100% static, lightweight, and ready to be hosted anywhere.

---

## 🌐 Deploying to GitHub & Live Hosting

You can easily host this website for free using **GitHub Pages**, **Vercel**, or **Netlify**.

### Option A: Deployment via Vercel / Netlify (Recommended)
1. Push this folder to a new **GitHub Repository**.
2. Log into [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/).
3. Connect your GitHub account and select this repository.
4. Leave the default settings (Vite is detected automatically) and click **Deploy**. Your site will be live on a secure HTTPS domain in under 60 seconds!

### Option B: Deploying to GitHub Pages
If you prefer traditional GitHub Pages hosting:
1. Install the GitHub Pages utility package locally:
   ```bash
   npm install --save-dev gh-pages
   ```
2. Open `vite.config.ts` and ensure your `base` path matches your repository name if hosting on custom subpaths:
   ```typescript
   export default defineConfig({
     base: '/repository-name/', // Only if hosting on your-username.github.io/repository-name/
     // ... rest of config
   });
   ```
3. Add helper deployment commands inside the scripts block of your `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
4. Run the deploy sequence:
   ```bash
   npm run deploy
   ```

---

## 🎨 Theme, Copywriting & Identity Specs

* **Color System**: Premium Navy & Deep White Light leak Accents (`#001B3D`, `#00132C`, `#000F24`, custom Emerald & Cyan highlights).
* **Typography**: Elegant pairing of modern geometric display sans (**Inter**) and futuristic technological details (**JetBrains Mono**).
* **Contact Integration**: Connected to WhatsApp at `+92 311 4518485` under Lead Strategist **Taimour Baig**.
* **Features**:
  * **Visual Niche Artwork HUD Scanners** for high-rises, commercial malls, and housing sectors.
  * **Dynamic Overhead Savings Calculator** comparing real permanent Lahore salaries to Pivotal’s embedded model.
  * **Interactive Campaign Strategizer Blueprint Simulator** matching development parameters with custom pre-launch models.
  * **Allies Synergy Network Canvas** demonstrating active local industry lines.
