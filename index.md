<details class="about-me-toggle">
  <summary>More about me</summary>
  <div class="about-me-content">
    <p>I'm Mahhin Shahzad — Analytics Engineer & Financial Data Specialist.</p>
    <p>With a Computer Science foundation (3.8 CGPA) and 3 years leading BI in Fintech, I specialise in turning messy financial data into scalable, trustworthy architecture — bridging the gap between raw numbers and the systems that make sense of them.</p>
    <p>My domain is financial data: Budgeting, ARR/MRR tracking, and AR/AP analysis — built on a Single Source of Truth that the whole business can rely on.</p>
    <p>I work at the intersection of modern Analytics Engineering and smart data infrastructure, going beyond dashboards to deliver the executive and operational insight that drives real decisions.</p>
  </div>
</details>

<style>
.about-me-toggle {
  margin: 15px 0 30px 0;
  padding: 10px 15px;
  background: #f8f9fa;
  border-left: 4px solid #E97627;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
}
.about-me-toggle summary {
  font-weight: 600;
  color: #494949;
  cursor: pointer;
  list-style: none; /* Hide default arrow in some browsers */
  display: flex;
  align-items: center;
}
.about-me-toggle summary::-webkit-details-marker {
  display: none; /* Hide default arrow in WebKit */
}
.about-me-toggle summary::before {
  content: '▶';
  font-size: 0.8em;
  color: #E97627;
  margin-right: 10px;
  transition: transform 0.2s ease;
}
.about-me-toggle[open] summary::before {
  transform: rotate(90deg);
}
.about-me-content {
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px solid #e0e0e0;
  color: #555;
  font-size: 0.95em;
  line-height: 1.6;
  animation: slideDown 0.3s ease-out;
}
@keyframes slideDown {
  from { opacity: 0; transform: translateY(-5px); }
  to { opacity: 1; transform: translateY(0); }
}
/* Timeline styling */
.projects-container {
  position: relative;
  padding-left: 20px;
  margin-top: 40px;
}
.projects-container::before {
  content: '';
  position: absolute;
  left: 0;
  top: 10px;
  bottom: 10px;
  width: 2px;
  background: linear-gradient(to bottom, #E97627, #3b82f6);
  border-radius: 2px;
}
.project-date {
  display: inline-block;
  background: #f1f5f9;
  color: #64748b;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.85em;
  font-weight: 600;
  margin-top: -10px;
  margin-bottom: 20px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
}
.projects-container li {
  margin-bottom: 15px;
  line-height: 1.6;
}
/* General mobile optimizations */
@media (max-width: 768px) {
  .projects-container {
    padding-left: 15px;
    margin-top: 25px;
  }
  .about-me-toggle {
    margin: 10px 0 20px 0;
  }
}
</style>

# Projects

{% include project-stats.html %}

<div class="projects-container" markdown="1">

## L'AMOUR Enterprise Data Architecture & BI Pipeline
<div class="project-date">📅 February 2025</div>

{% capture video_html %}
<div style="position: relative; width: 100%; height: 0; padding-top: 62.5000%;
 padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;
 border-radius: 8px; will-change: transform;">
  <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"
    src="https://www.canva.com/design/DAHEJN4_fH0/hkhB_al8YMPMguI6KKsH3g/watch?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
  </iframe>
</div>
<a href="https://www.canva.com/design/DAHEJN4_fH0/hkhB_al8YMPMguI6KKsH3g/watch?utm_content=DAHEJN4_fH0&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener" style="font-size: 0.9em; color: #555;">Project Explanation Video</a> <span style="font-size: 0.9em; color: #888;">by MAHHIN GAMING GATE</span>
{% endcapture %}

{% capture case_study_html %}
{% include native-carousel.html folder="images/lamour-data-architecture" count=16 %}
{% endcapture %}

{% include video-case-study-tabs.html 
    id="lamour-data-architecture" 
    video_html=video_html 
    case_study_html=case_study_html 
%}

- Architected an end-to-end Python and SQL ETL pipeline to bypass a legacy ERP system (Sage 50), transforming locked financial data into a scalable Bronze-Silver-Gold database architecture.
- Engineered an advanced Power BI Composite Model combining historical Data Imports with live DirectQuery, enabling real-time budget scenario planning.
- Implemented dynamic, multi-tenant Row-Level Security (RLS) across 12 global subsidiaries to ensure strict data governance and regional isolation.
- Eliminated 60+ hours of manual monthly reporting and reduced decision latency by 95%, directly contributing to the retention of an at-risk enterprise subscription and contract renewal.

---

## L'AMÒUR CFO View Dashboard
<div class="project-date">📅 January 2025</div>

{% include cfo-dashboard-preview.html %}

- Utilized 24+ ratios for a comprehensive financial overview, focusing on risk, efficiency, capitalization, and liquidity.

- Developed a beautiful, tailored dashboard providing a specific, high-level view for a Chief Financial Officer.

- Integrated the ability to see benchmarking figures against specific industry standards for competitive analysis.

---

## L'AMÒUR Events & Suites: YoY Comparison Dashboard
<div class="project-date">📅 Late 2024</div>

{% capture dashboard_html %}
{% include dashboard-preview.html %}
{% endcapture %}

{% capture case_study_html %}
{% include native-carousel.html folder="images/lamour-yoy-case-study" count=16 %}
{% endcapture %}

{% include multi-view-tabs.html 
    id="lamour-yoy" 
    linkedin="https://www.linkedin.com/posts/mahhinshahzad_cast-study-lamorete-hotel-mahhin-shahzad-activity-7313609110992658432-oKet" 
    dashboard_html=dashboard_html 
    case_study_html=case_study_html 
%}

- Connected directly to Excel through SharePoint to create near real-time updating dashboard, eliminating manual refresh processes

- Implemented 30+ complex DAX queries and 15+ bookmark states behind 5 button clicks

- Created interactive Data Visualization with drill-through capabilities, custom tooltips, and KPI metrics

- Saved client team 8 hours of weekly manual reporting work by upgrading their Excel dashboard into self-reporting Power BI dashboard


## S&P 500 Comprehensive Recent Stocks Analysis
<div class="project-date">📅 Mid 2024</div>
<div style="display: inline;">
  <a href="projects/Stock Analysis.html" target="_blank">
    <img src="https://img.shields.io/badge/Jupyter-Open_Notebook-F37626?logo=Jupyter" alt="Open Notebook">
  </a>
  <a href="https://drive.google.com/uc?id=1xCOK_UsGEne-wCyDCiWsXnInx41EEBQJ&export=download">
    <img src="https://img.shields.io/badge/Download-Dashboard-E97627?logo=tableau&logoColor=white" alt="Download Dashboard">
  </a>
</div>

- Conducted in-depth analysis of top S&P 500 tech companies (2019-2024) using fundamental, quantitative, and technical approaches.

- Performed extensive EDA on recent changes, computing metrics and values, and executed 7+ time series analyses (volatility, risk, PE ratios, moving averages and many more).

- Developed a live, dynamic candlestick dashboard for stocks and ETFs, offering real-time insights and dynamic visualizations.

- Open Notebook to Checkout the Analysis in depth

{% include snp-image-slider.html %}  <--  THIS IS WHERE IT GOES

---
## Hate Speech Data Analysis with Python 
<div class="project-date">📅 Early 2024</div>
<div style="display: inline;">
  <a href="projects/TagAnalysis.html" target="_blank">
    <img src="https://img.shields.io/badge/Jupyter-Open_Notebook-F37626?logo=Jupyter" alt="Open Notebook">
  </a>
  <a href="https://github.com/mahhin1010/hate-speech-analysis" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-View_on_GitHub-blue?logo=GitHub" alt="View on GitHub">
  </a>
</div>

- Developed a comprehensive Python project using 7+ major libraries (Pandas, Matplotlib, NLTK, Gensim, re, NetworkX, etc.).

- Depicted complex Roman Urdu language with advanced techniques to make intricate patterns and meanings visually clear and understandable.

- Built a pipeline for cleaning and standardizing Roman Urdu/Hindi multi-labeled datasets.
- Conducted label distribution analysis and visualized Top Label with word clouds.
- Trained Word2Vec embedding models and visualized embeddings with Matplotlib and Plotly.
- Open Notebook to Check out Everything.

<div style="text-align: center;">
  <img src="images\MinimalHate.png" style="margin: 0 auto;" />
</div>

--- 

## Enhanced Coffee Shop Sales Dashboard in Excel
<div class="project-date">📅 Mid 2024</div>
<div style="display: inline;">
  <a href="https://www.linkedin.com/posts/mahhinshahzad_microsoftexcel-datatransformation-exceldashboard-activity-7233992607159246848-ky5i?utm_source=share&utm_medium=member_desktop" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-Check_Post-0A66C2?logo=LinkedIn&logoColor=white" alt="LinkedIn Post">
  </a>
  <a href="https://github.com/mahhin1010/hate-speech-analysis" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-View_on_GitHub-FF4500?logo=GitHub&color=FF4500" alt="View on GitHub">
  </a>
</div>


- Used advanced Excel lookup functions such as XLOOKUP and INDEX-MATCH to smoothly merge data from Multiple sheets

- Advanced visualizations, such as filled maps and scatter plots, were created to effectively depict branch performance across multiple nations while offering a clear geographic perspective.

- Discovered recurring patterns, leading to strategic recommendations to reduce churn and boost profits (Check out LinkedIn post to see them all)

<div style="text-align: center;">
  <img src="images\Coffe Shop image.png" style="margin: 0 auto;" />
</div>


---

## Data Analytics Job Survey Analysis with Power BI
<div class="project-date">📅 Late 2023</div>

[![Read on Medium](https://img.shields.io/badge/Read%20on-Medium-1DA1F2?logo=medium&color=black)](https://medium.com/@mahhinshahzad/data-analytics-job-survey-analysis-with-power-bi-dc7fbd7cf1a4)
[![View on GitHub](https://img.shields.io/badge/GitHub-View_on_GitHub-FF4500?logo=GitHub&color=FF4500)](https://github.com/Mahhin1010/Data-Analytics-Job-Survey-Analysis)


- Created an in-depth analysis of data-related jobs, with a particular focus on data analytics roles.
- Implemented DAX queries to analyze and visualize rating questions, providing deeper insights into job satisfaction levels.

- Conducted an in-depth analysis of the top priorities for the highest-earning individuals in the data field.
- Visualized various complex textual aspects of the survey data, making it easier to comprehend and derive insights.

<div style="text-align: center;">
  <img src="images\jobmarket.png" style="margin: 0 auto;" />
</div>

## Walmart Sales Analysis
<div class="project-date">📅 2023</div>

[![View on GitHub](https://img.shields.io/badge/GitHub-View_on_GitHub-blue?logo=GitHub)](https://github.com/Mahhin1010/Walmart-Sales-Analysis-)

**Walmart Sales Analysis:** Analyzing sales data for Walmart branches to optimize sales strategies.
- Utilized advanced Joins and views to extract data from five Walmart branches.
- Applied complex SQL functions for data aggregation and filtering, improving the reporting process.
- Used Various Window Functions and CTE'S in the process 
- Created detailed visualizations with Python using Matplotlib and Seaborn, highlighting sales trends and key insights to optimize sales strategies.

<center><img src="images\HousingSchememinmal.png"/></center>

<style>
.copy-link-btn {
  opacity: 0;
  margin-left: 10px;
  font-size: 0.6em;
  color: #ccc;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;
  vertical-align: middle;
  background: none;
  border: none;
  padding: 0;
}
h2:hover .copy-link-btn, h3:hover .copy-link-btn {
  opacity: 1;
}
.copy-link-btn:hover {
  color: #E97627;
  transform: scale(1.1);
}
.copy-success-msg {
  font-size: 0.4em;
  color: #28a745;
  margin-left: 8px;
  opacity: 0;
  transition: opacity 0.3s;
  vertical-align: middle;
  font-weight: normal;
}
</style>

<script>
document.addEventListener("DOMContentLoaded", function() {
  const headers = document.querySelectorAll("h2, h3");
  headers.forEach((header, index) => {
    // Generate an ID if it doesn't have one
    if (!header.id) {
      let text = header.innerText.replace(/[^a-zA-Z0-9 ]/g, " ");
      header.id = text.toLowerCase().trim().replace(/\s+/g, '-');
    }
    
    // Skip the intro header
    if (header.innerText.includes("Hello there")) return;
    
    // Format header layout
    header.style.display = 'flex';
    header.style.alignItems = 'center';
    header.style.flexWrap = 'wrap';
    
    // Create copy button
    const copyBtn = document.createElement("button");
    copyBtn.className = "copy-link-btn";
    copyBtn.innerHTML = "🔗"; 
    copyBtn.title = "Copy direct link to this project";
    
    // Create success message
    const successMsg = document.createElement("span");
    successMsg.className = "copy-success-msg";
    successMsg.innerText = "Link copied!";
    
    copyBtn.onclick = function(e) {
      e.preventDefault();
      // Ensure absolute robust link regardless of Jekyll or GitHub Pages base paths
      const currentUrl = new URL(window.location.href);
      currentUrl.hash = header.id;
      
      navigator.clipboard.writeText(currentUrl.href).then(() => {
        successMsg.style.opacity = "1";
        setTimeout(() => { successMsg.style.opacity = "0"; }, 2000);
      });
    };
    
    header.appendChild(copyBtn);
    header.appendChild(successMsg);
  });
});
</script>

</div>
