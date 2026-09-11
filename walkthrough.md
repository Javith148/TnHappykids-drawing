# TN Happy Kids – Vinayagar Chaturthi Kids Drawing Competition Web App

A festive **frontend-only responsive web application** built for **TN Happy Kids** for a **Vinayagar Chaturthi Drawing Competition for children aged 3–5 years**.

---

## 🎨 Key Features & Highlights

### 1. Festive Vinayagar Chaturthi Intro Animation
- **Opening Sequence**: Gradient background fade-in &rarr; marigold flowers animation &rarr; banana leaves sliding into corner position &rarr; glowing brass diyas &rarr; Lord Vinayagar PNG &rarr; TN Happy Kids logo &rarr; Competition title &rarr; CTA button.
- **Skip Intro**: Includes a responsive `Skip Intro` button for quick access.

### 2. Premium Sticky Header & Mobile Drawer
- **Navigation**: Home, Competition, How It Works, Rewards.
- **Responsive Header**: Glassmorphism scroll transformation (transparent to frosted white/amber blur).
- **Mobile Menu**: Smooth sliding drawer menu with easily tap-able buttons.

### 3. Visually Stunning Hero & Competition Sections
- **Hero Section**: Saffron & marigold gold typography, "For Children Aged 3–5 Years" badge, primary & secondary CTAs, surrounded by animated PNG graphics (Lord Vinayagar, glowing diyas, floating flowers, modaks, kolam).
- **Competition Section**: 3 festive cards (*Draw*, *Play*, *Reward*).
- **How It Works Timeline**: 4-step animated progression guide.

### 4. Registration Flow & Custom Age Eligibility Modal
- **Stepper Progress Bar**: `01 Registration ➔ 02 Upload ➔ 03 Activity ➔ 04 Reward`.
- **Form Fields**: Child Name, Child Age, Parent Name, Parent Mobile, Parent Email with focus states & input feedback.
- **Age Validation**: Restrict eligibility to ages 3–5. Invalid ages trigger a custom festive modal featuring Lord Vinayagar PNG, marigold garlands, and smooth Framer Motion entrance (no browser `alert()`).

### 5. Interactive Media Upload Page
- **Card 1 (Vinayagar Drawing)**: Accepts JPG, JPEG, PNG, WebP with live image preview, file name, size, replace & remove controls.
- **Card 2 (Activity Video)**: Accepts MP4, WebM, MOV with HTML5 video player preview.
- **Dynamic Continue Button**: Disabled when incomplete; transforms into saffron-gradient state when both files are selected.

### 6. HTML Canvas Dot-to-Dot Vinayagar Activity Game
- **Interactive Canvas**: 12 numbered dots tracing Lord Vinayagar's contour.
- **Touch & Desktop Support**: Tap or click numbered dots sequentially. Highlights active dot with a soft glowing ring.
- **Gentle Retry Feedback**: Supportive messages when tapping out of sequence.
- **Completion Sequence**: Canvas fades as Lord Vinayagar PNG smoothly emerges with floating flowers, glowing diyas, confetti sparkles, and a celebratory completion banner.

### 7. 30-Second TN Happy Kids Promotional Experience
- **Promotional Card**: Highlights TN Happy Kids Playschool features, admissions open banner, and classroom visuals.
- **30-Second Timer**: Animated progress bar counting down from 30s to 0s with "Your reward is waiting..." text.
- **Close & Unlocking**: "Continue to Rewards" button unlocks automatically after timer or upon clicking the close button.

### 8. Celebratory Reward & Completion Summary
- **Dynamic Reward Reveal**: Displays child's name with a smooth **0 ➔ 100 Reward Points** count-up animation and festive confetti.
- **Participation Completed Summary**: Final page detailing Child Name, Age, 100 Reward Points, and Status (*Completed*).

---

## 🛠️ Technology Stack & Assets

- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS v4 + Vanilla CSS animations & glassmorphism
- **Animations**: Framer Motion + Canvas Confetti
- **Icons**: Lucide React
- **Asset Directory**: Transparent high-res PNG images for Lord Vinayagar, Banana Leaves, Brass Diyas, Marigold Garlands, Kolam Patterns, Kozhukattai / Modak, TN Happy Kids Logo, and Playschool Banner.
- **State Persistence**: React Context (`CompetitionContext`) backed by `localStorage`.

---

## 🚀 How to Run Locally

```bash
# 1. Install dependencies (if not already installed)
npm install

# 2. Start Vite local development server
npm run dev

# 3. Build for production (optional verification)
npm run build
```

Local dev URL: **`http://localhost:5173/`**
