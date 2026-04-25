/**
 * ═══════════════════════════════════════════════════════════════════
 *  PROJECT DATA — All portfolio projects live here.
 *
 *  To add a new project:
 *    1. Add a new object to the array below
 *    2. Set only the fields that apply (unused tabs just don't appear)
 *    3. Put images in public/images/ folder
 *
 *  Default tab priority: video → dashboard → notebook → caseStudy
 * ═══════════════════════════════════════════════════════════════════
 */

const projects = [
  // ────────────────────────────────────────────────
  // 1. L'AMOUR Enterprise Data Architecture
  // ────────────────────────────────────────────────
  {
    id: "lamour-enterprise-bi",
    title: "L'AMOUR Enterprise Data Architecture & BI Pipeline",
    category: "Enterprise BI Solution",
    date: "February 2025",
    tags: ["Python", "SQL", "Azure", "Power BI"],
    coverImage: "/images/lamour-data-architecture/3.jpg",
    summary:
      "Architected an end-to-end Python and SQL ETL pipeline, transforming locked financial data into a scalable Bronze-Silver-Gold architecture with real-time BI reporting.",
    bullets: [
      "Architected an end-to-end Python and SQL ETL pipeline to bypass a legacy ERP system (Sage 50), transforming locked financial data into a scalable Bronze-Silver-Gold database architecture.",
      "Engineered an advanced Power BI Composite Model combining historical Data Imports with live DirectQuery, enabling real-time budget scenario planning.",
      "Implemented dynamic, multi-tenant Row-Level Security (RLS) across 12 global subsidiaries to ensure strict data governance and regional isolation.",
      "Eliminated 60+ hours of manual monthly reporting and reduced decision latency by 95%, directly contributing to the retention of an at-risk enterprise subscription and contract renewal.",
    ],
    video: {
      type: "canva",
      src: "https://www.canva.com/design/DAHEJN4_fH0/hkhB_al8YMPMguI6KKsH3g/watch?embed",
      title: "Project Explanation Video",
    },
    caseStudy: {
      folder: "/images/lamour-data-architecture",
      count: 16,
      aspectRatio: "portrait",
    },
    architecture: [
      {
        icon: "terminal",
        title: "Python ETL Engine",
        desc: "Custom-built modular ingestion engine bypassing Sage 50 ERP with automated error handling and retry mechanisms.",
        tech: ["Pandas", "pyodbc", "Asyncio"],
      },
      {
        icon: "layers",
        title: "Bronze-Silver-Gold Framework",
        desc: "Medallion architecture ensuring data quality progression from raw landing zone to business-ready aggregates.",
        tech: ["SQL Server", "SSIS", "Stored Procs"],
      },
      {
        icon: "query_stats",
        title: "Power BI Composite Model",
        desc: "Blended DirectQuery and Import modes with optimised DAX measures and Row-Level Security across 12 subsidiaries.",
        tech: ["DAX", "DirectQuery", "RLS"],
      },
    ],
  },

  // ────────────────────────────────────────────────
  // 2. L'AMÒUR CFO View Dashboard
  // ────────────────────────────────────────────────
  {
    id: "lamour-cfo-dashboard",
    title: "L'AMÒUR CFO View Dashboard",
    category: "Financial BI",
    date: "January 2025",
    tags: ["Power BI", "DAX", "Financial Ratios"],
    coverImage: "/images/Final Lamore cfo cokpit image.png",
    summary:
      "Developed a tailored CFO cockpit dashboard with 24+ financial ratios for comprehensive risk, efficiency, capitalisation, and liquidity analysis with industry benchmarking.",
    bullets: [
      "Utilised 24+ ratios for a comprehensive financial overview, focusing on risk, efficiency, capitalisation, and liquidity.",
      "Developed a beautiful, tailored dashboard providing a specific, high-level view for a Chief Financial Officer.",
      "Integrated the ability to see benchmarking figures against specific industry standards for competitive analysis.",
    ],
    dashboard: {
      src: "https://app.powerbi.com/view?r=eyJrIjoiOWY1ZTFkYjMtOTM3NS00NTY3LWI5NTktZGIxNmMwODIyMDgxIiwidCI6IjY1ZTM4Y2Y0LTc5MDUtNDYwYy05YzIwLTYwNDU4MGY2Zjc2NSIsImMiOjl9",
      title: "L'AMOUR CFO Cockpit Dashboard",
      disclaimer:
        "While the project reflects real-world experience, all data displayed in the dashboard is completely synthetic, adhering to GDPR standards.",
    },
    architecture: [
      {
        icon: "monitoring",
        title: "24+ Financial Ratios",
        desc: "Comprehensive financial health metrics covering liquidity, solvency, profitability, and efficiency ratios.",
        tech: ["DAX", "Financial Modeling"],
      },
      {
        icon: "balance",
        title: "Industry Benchmarking",
        desc: "Integrated benchmarking against industry standards for direct competitive analysis.",
        tech: ["Power BI", "Data Modeling"],
      },
    ],
  },

  // ────────────────────────────────────────────────
  // 3. L'AMÒUR YoY Comparison Dashboard
  // ────────────────────────────────────────────────
  {
    id: "lamour-yoy-dashboard",
    title: "L'AMÒUR Events & Suites: YoY Comparison Dashboard",
    category: "Hospitality Analytics",
    date: "Late 2024",
    tags: ["Power BI", "DAX", "SharePoint", "Excel"],
    coverImage: "/images/sales-funnel-preview.png",
    summary:
      "Created a near real-time updating dashboard connected via SharePoint, with 30+ DAX queries, 15+ bookmark states, and drill-through capabilities saving 8 hours of weekly reporting.",
    bullets: [
      "Connected directly to Excel through SharePoint to create near real-time updating dashboard, eliminating manual refresh processes.",
      "Implemented 30+ complex DAX queries and 15+ bookmark states behind 5 button clicks.",
      "Created interactive Data Visualisation with drill-through capabilities, custom tooltips, and KPI metrics.",
      "Saved client team 8 hours of weekly manual reporting work by upgrading their Excel dashboard into self-reporting Power BI dashboard.",
    ],
    dashboard: {
      src: "https://app.powerbi.com/view?r=eyJrIjoiMDY5ZTJlNDctODhhYi00MWM5LWEwNTEtNzE4OTM5ZmQ0NTc1IiwidCI6IjY1ZTM4Y2Y0LTc5MDUtNDYwYy05YzIwLTYwNDU4MGY2Zjc2NSIsImMiOjl9",
      title: "L'AMÒUR YoY Comparison Dashboard",
      disclaimer:
        "While the project reflects real-world experience, all data displayed in the dashboard is completely synthetic, adhering to GDPR standards.",
    },
    caseStudy: {
      folder: "/images/lamour-yoy-case-study",
      count: 16,
      aspectRatio: "landscape",
    },
    linkedin:
      "https://www.linkedin.com/posts/mahhinshahzad_cast-study-lamorete-hotel-mahhin-shahzad-activity-7313609110992658432-oKet",
    architecture: [
      {
        icon: "compare_arrows",
        title: "YoY Comparison Engine",
        desc: "Dynamic year-over-year comparison with automatic period detection and variance analysis.",
        tech: ["DAX", "Time Intelligence"],
      },
      {
        icon: "touch_app",
        title: "Interactive Bookmarks",
        desc: "15+ bookmark states behind 5 button clicks providing a guided analytical experience.",
        tech: ["Power BI", "UX Design"],
      },
    ],
  },

  // ────────────────────────────────────────────────
  // 4. S&P 500 Stocks Analysis
  // ────────────────────────────────────────────────
  {
    id: "snp500-stocks-analysis",
    title: "S&P 500 Comprehensive Recent Stocks Analysis",
    category: "Quantitative Finance",
    date: "Mid 2024",
    tags: ["Python", "Jupyter", "Pandas", "Matplotlib"],
    coverImage: "/images/snp-image1.png",
    summary:
      "In-depth analysis of top S&P 500 tech companies (2019-2024) using fundamental, quantitative, and technical approaches with 7+ time series analyses and a live candlestick dashboard.",
    bullets: [
      "Conducted in-depth analysis of top S&P 500 tech companies (2019-2024) using fundamental, quantitative, and technical approaches.",
      "Performed extensive EDA on recent changes, computing metrics and values, and executed 7+ time series analyses (volatility, risk, PE ratios, moving averages and many more).",
      "Developed a live, dynamic candlestick dashboard for stocks and ETFs, offering real-time insights and dynamic visualisations.",
    ],
    notebook: {
      src: "/projects/Stock Analysis.html",
      title: "S&P 500 Analysis Notebook",
    },
    downloadLink: {
      url: "https://drive.google.com/uc?id=1xCOK_UsGEne-wCyDCiWsXnInx41EEBQJ&export=download",
      label: "Download Dashboard",
    },
    gallery: [
      "/images/snp-image1.png",
      "/images/snp-image2.png",
      "/images/snp-image3.png",
      "/images/snp-image4.png",
      "/images/snp-image5.png",
    ],
  },

  // ────────────────────────────────────────────────
  // 5. Hate Speech Data Analysis
  // ────────────────────────────────────────────────
  {
    id: "hate-speech-analysis",
    title: "Hate Speech Data Analysis with Python",
    category: "NLP / Machine Learning",
    date: "Early 2024",
    tags: ["Python", "NLTK", "Gensim", "NetworkX", "Word2Vec"],
    coverImage: "/images/MinimalHate.png",
    summary:
      "Comprehensive Python NLP project using 7+ major libraries to clean, standardise, and analyse Roman Urdu/Hindi hate speech datasets with Word2Vec embeddings and network visualisations.",
    bullets: [
      "Developed a comprehensive Python project using 7+ major libraries (Pandas, Matplotlib, NLTK, Gensim, re, NetworkX, etc.).",
      "Depicted complex Roman Urdu language with advanced techniques to make intricate patterns and meanings visually clear and understandable.",
      "Built a pipeline for cleaning and standardising Roman Urdu/Hindi multi-labeled datasets.",
      "Trained Word2Vec embedding models and visualised embeddings with Matplotlib and Plotly.",
    ],
    notebook: {
      src: "/projects/TagAnalysis.html",
      title: "Hate Speech Analysis Notebook",
    },
    github: "https://github.com/mahhin1010/hate-speech-analysis",
  },

  // ────────────────────────────────────────────────
  // 6. Coffee Shop Sales Dashboard
  // ────────────────────────────────────────────────
  {
    id: "coffee-shop-excel",
    title: "Enhanced Coffee Shop Sales Dashboard in Excel",
    category: "Excel Analytics",
    date: "Mid 2024",
    tags: ["Excel", "XLOOKUP", "INDEX-MATCH", "Data Viz"],
    coverImage: "/images/Coffe Shop image.png",
    summary:
      "Advanced Excel analytics dashboard using XLOOKUP and INDEX-MATCH across multiple sheets, with filled maps and scatter plots revealing recurring patterns to reduce churn and boost profits.",
    bullets: [
      "Used advanced Excel lookup functions such as XLOOKUP and INDEX-MATCH to smoothly merge data from multiple sheets.",
      "Advanced visualisations, such as filled maps and scatter plots, were created to effectively depict branch performance across multiple nations.",
      "Discovered recurring patterns, leading to strategic recommendations to reduce churn and boost profits.",
    ],
    linkedin:
      "https://www.linkedin.com/posts/mahhinshahzad_microsoftexcel-datatransformation-exceldashboard-activity-7233992607159246848-ky5i",
    github: "https://github.com/mahhin1010/hate-speech-analysis",
  },

  // ────────────────────────────────────────────────
  // 7. Data Analytics Job Survey
  // ────────────────────────────────────────────────
  {
    id: "job-survey-powerbi",
    title: "Data Analytics Job Survey Analysis with Power BI",
    category: "Market Research",
    date: "Late 2023",
    tags: ["Power BI", "DAX", "Survey Analytics"],
    coverImage: "/images/jobmarket.png",
    summary:
      "In-depth analysis of data-related jobs with DAX-driven rating analysis, salary insights for top earners, and complex textual survey data visualisation.",
    bullets: [
      "Created an in-depth analysis of data-related jobs, with a particular focus on data analytics roles.",
      "Implemented DAX queries to analyse and visualise rating questions, providing deeper insights into job satisfaction levels.",
      "Conducted an in-depth analysis of the top priorities for the highest-earning individuals in the data field.",
      "Visualised various complex textual aspects of the survey data, making it easier to comprehend and derive insights.",
    ],
    medium:
      "https://medium.com/@mahhinshahzad/data-analytics-job-survey-analysis-with-power-bi-dc7fbd7cf1a4",
    github:
      "https://github.com/Mahhin1010/Data-Analytics-Job-Survey-Analysis",
    dashboard: {
      src: "https://app.powerbi.com/view?r=eyJrIjoiMDAwMjk0NjItZDYwYy00YjU0LTlmMmEtNzdjYWM2YWZmODhiIiwidCI6IjY1ZTM4Y2Y0LTc5MDUtNDYwYy05YzIwLTYwNDU4MGY2Zjc2NSIsImMiOjl9",
      title: "Power BI fin actual",
    },
  },

  // ────────────────────────────────────────────────
  // 8. Walmart Sales Analysis
  // ────────────────────────────────────────────────
  {
    id: "walmart-sales-sql",
    title: "Walmart Sales Analysis",
    category: "SQL & Python Analytics",
    date: "2023",
    tags: ["SQL", "Python", "Matplotlib", "Seaborn"],
    coverImage: "/images/HousingSchememinmal.png",
    summary:
      "Analysing sales data for Walmart branches using advanced SQL Joins, Window Functions, CTEs, and Python visualisation to optimise sales strategies.",
    bullets: [
      "Utilised advanced Joins and views to extract data from five Walmart branches.",
      "Applied complex SQL functions for data aggregation and filtering, improving the reporting process.",
      "Used various Window Functions and CTEs in the process.",
      "Created detailed visualisations with Python using Matplotlib and Seaborn, highlighting sales trends and key insights to optimise sales strategies.",
    ],
    github: "https://github.com/Mahhin1010/Walmart-Sales-Analysis-",
  },
];

export default projects;
