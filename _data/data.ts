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
    show: "Qahwa - Coffee Companion",
    desc: "Created Qahwa, an coffee companion that provides personalized brewing recommendations and coffee knowledge. Built with React, Node.js, Qahwa offers users a unique and interactive coffee experience.",
    lang: ["React", "Node.js", "Express", "MongoDB"],
    img: "qahwa-banner.png",
    link: "https://qahwa-nu.vercel.app/",
    git: "https://github.com/mohandamged70m/qahwa",
    problem: "Coffee enthusiasts often struggle to find personalized brewing recommendations and comprehensive coffee knowledge in one place.",
    solution: "Developed Qahwa, a coffee companion that offers personalized brewing recommendations based on user preferences and provides extensive coffee knowledge. Built with React for the frontend and Node.js with Express for the backend, Qahwa utilizes MongoDB to store user data and coffee information, creating an interactive and engaging experience for coffee lovers.",
  }
];
