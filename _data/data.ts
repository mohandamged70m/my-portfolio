export const projects = [
  {
    name: "Kana Dojo (Open Source Contributor)",
    slug: "kana-dojo-contribution",
    show: "Open Source Contribution",
    desc: "Contributed to a 2.3k ⭐ Japanese learning platform. Merged PR #15811 adding Japanese proverb '馬子にも衣装', open PR #15827 adding grammar point 〜ても and fixing JSON bugs, plus added video game quotes.",
    lang: ["TypeScript", "Next.js", "React", "Tailwind CSS", "Zustand"],
    img: "kana-dojo-banner.png",
    link: "https://kanadojo.com",
    git: "https://github.com/lingdojo/kana-dojo",
    problem: "Open-source Japanese learning platform required community-contributed content (proverbs, grammar points) and had syntax errors in JSON content files.",
    solution: "Added validated Japanese proverb entries, grammar point structures for 〜ても (even if/though), contributed video game quotes, and resolved JSON formatting bugs in community content files. Ensured all contributions passed CI checks (TypeScript, ESLint, formatting).",
  },
  {
    name: "Qahwa",
    slug: "qahwa",
    show: "Qahwa — Egyptian Artisan Coffee Brand",
    desc: "Built a conversion-focused single-page marketing website for a fictional Egyptian artisan coffee brand with 150+ years of heritage. Features a mobile-first responsive design, smooth scroll navigation with fixed header, animated hero section with dual CTAs, product showcase grid with WhatsApp order integration, customer testimonials, and email newsletter signup.",
    lang: ["Next.js 14", "Tailwind CSS", "shadcn/ui", "Framer Motion", "Google Gemini API", "Supabase"],
    img: "qahwa-banner.png",
    link: "https://qahwa-nu.vercel.app/",
    git: "https://github.com/mohandamged70m/qahwa",
    problem: "Artisan coffee brands struggle to provide personalized product recommendations and a conversion-optimized digital presence that captures the warmth and heritage of their offerings.",
    solution: "Implemented an AI-powered conversational coffee quiz using Google Gemini API that guides users through multi-step preference gathering (strength, style, flavor, brew method) and scores 23 products to deliver personalized recommendations with alternatives. Integrated Supabase for email capture and WhatsApp for order integration, achieving LCP under 2.5s with warm luxury aesthetic.",
  }
];
