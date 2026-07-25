import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const experience = [
  {
    role: "Project Data Analyst",
    dates: "Dec 2024 – Feb 2026",
    company: "Aquaterra Energy Limited",
    location: "Norwich, United Kingdom",
    focus: "Finance, Sales, Marketing Data Analysis",
    points: [
      "Built end-to-end Board MI reporting suite in Power BI, using SQL and Excel covering Finance, Sales, Marketing, HR, Business Development with RAG status indicators (On Track / Off Track) per metric.",
      "Analysed Operating Performance dashboard with Cumulative Order Intake, Monthly Revenue, Gross Profit & GP% Margin, Adjusted EBITDA, Fixed Costs excl. depreciation, Fixed Costs % of sales and YTD Exceptional Costs in Prior, Budget, Forecast and Annual multi line series.",
      "Created Cash Performance dashboards covered Monthly & Cumulative Cash Flow from Operations, Net Working Capital, Debtor Days (DSO), Net Debt monitored against facility limits, Cumulative Capex Spend, with Off Track flags on DSO, Net Working Capital, and Fixed Costs % of Sales.",
      "Built Sales KPI dashboards tracking Win Rate (7.06% monthly / 25.16% YTD), Total New Opportunities, Proposals Issued YTD, and % of OI via Vos and developed pipeline visuals: Cumulative Order Intake trend (actual vs budget vs forecast vs prior year), Sum of Amount by Region.",
      "Developed and optimized Power Query (M) transformations for data extraction, cleansing, and preparation from multiple data sources and managed Power BI Service workspaces, semantic models, dataflows, and scheduled refresh configurations.",
      "Collaborated closely with business teams and developers to clarify data issues, define business rules, and translate functional data requirements into technical data solutions."
    ]
  },
  {
    role: "Test Engineer (Data Quality Validation)",
    dates: "Oct 2021 – Jul 2022",
    company: "Vervali Systems Pvt. Ltd.",
    location: "Mumbai, India",
    points: [
      "Performed exploratory data analysis (EDA) and data profiling on high-volume telecom datasets, including Call Detail Records (CDR), subscriber usage, and drop-call rates using SQL to isolate billing anomalies.",
      "Developed complex SQL queries and validation scripts for source-to-target mapping and data migration pipelines, reducing manual analysis effort by 30%.",
      "Analyzed large-scale telecom metrics, including Average Revenue Per User (ARPU), subscriber churn, and billing cycles, to support operational reporting and revenue assurance.",
      "Implemented automated SQL data quality checks, validation frameworks, and exception handling workflows, improving database data integrity by 20% and reducing reporting discrepancies.",
      "Prepared and transformed large-scale structured datasets for daily reporting, maintaining a 99%+ data accuracy rate in strict compliance with corporate data governance standards.",
      "Built interactive Power BI dashboards and executive KPI reports, enabling stakeholders to monitor active subscriber trends, daily network usage metrics, and real-time data quality indicators."
    ]
  },
  {
    role: "Software Test Engineer (Data Quality Analyst)",
    dates: "Jun 2021 – Oct 2021",
    company: "Riaxe Systems Pvt. Ltd.",
    location: "Odisha, India",
    points: [
      "Analyzed 500,000 user sessions using SQL to track garment selection and design tool drop-offs, recovering $45,000 in abandoned cart revenue.",
      "Developed SQL queries to identify that custom caps, embroidered hoodies and sports pants generated a 35% higher profit margin than standard items.",
      "Checked the full order flow in the software to verify that all custom design selections, customer details, and payment transactions transferred into the database perfectly.",
      "Ran SQL validation checks to match custom clothing orders (color, size, print details, and invoice amounts) with database orderbook tables, cutting shipping errors by 22%.",
      "Checked return logs using SQL to isolate a 4.5% net loss from printing defects on specific fabrics, saving $12,000 monthly.",
      "Created complex DAX measures in Power BI to track dynamic retail performance including Year-over-Year (YoY) revenue growth, regional order distribution, and custom vs. blank clothing metrics sliced across daily, weekly, and quarterly trends."
    ]
  },
  {
    role: "Associate Data Analyst (Remote)",
    dates: "Dec 2019 – Jun 2021",
    company: "Clinevo Technologies",
    location: "Bengaluru, India",
    points: [
      "Processed, cleansed, and validated high-volume clinical trial and patient datasets from CTMS, EDC, and operational systems using SQL and Excel, ensuring data accuracy, consistency, and regulatory compliance across multiple studies.",
      "Conducted exploratory data analysis and data quality assessments on patient enrollment, screening, visit completion, site performance, and protocol compliance data, identifying discrepancies and supporting issue resolution.",
      "Developed complex SQL queries and automated validation checks for data extraction, transformation, reconciliation, and integration, reducing manual reporting effort and improving data reliability.",
      "Built interactive Power BI dashboards and KPI scorecards to monitor Patient Enrollment, Screening Failure Rate, Site Activation Status, Visit Compliance, Subject Retention, and Protocol Deviations across clinical trial sites.",
      "Created visualisations including enrollment trends, patient recruitment by site, study progress tracking, protocol deviation analysis, query resolution metrics, and operational performance dashboards for clinical management teams.",
      "Prepared structured reports and communicated actionable insights to clinical operations, data management, and business stakeholders, enabling data-driven decisions and supporting successful trial execution."
    ]
  }
];

export default function PortfolioPage() {
  return (
    <main className="portfolio-page text-stone-200">
      <section className="relative overflow-hidden border-b border-stone-800">
        <Navbar />

        <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 pb-20 pt-32 md:grid-cols-2 md:px-12">
          <div className="portfolio-intro">
            <p className="text-xs uppercase tracking-[0.25em] text-[#c05a5f]">
              Data Analyst · Portfolio
            </p>

            <h1 className="serif mt-6 text-5xl leading-[0.95] text-stone-100 md:text-7xl">
              Saumyarajan
              <br />
              Panigrahi<span className="text-[#b13b42]">.</span>
            </h1>

            <p className="mt-7 max-w-lg text-lg leading-8 text-stone-400">
              Results-driven Data Analyst with 4 years of experience across
              telecom, healthcare, e-commerce, and energy.
            </p>

            <p className="mt-5 text-sm uppercase tracking-[0.14em] text-stone-500">
              MSc Data Science · University of East Anglia, UK
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="mailto:saumya.panigrahi24@gmail.com"
                className="portfolio-button border border-stone-600 px-5 py-3 text-xs uppercase tracking-[0.14em] transition hover:border-[#b13b42] hover:bg-[#b13b42]"
              >
                Email me
              </Link>

              <Link
                href="https://www.linkedin.com/in/saumya-rp/"
                target="_blank"
                className="portfolio-button border border-stone-700 px-5 py-3 text-xs uppercase tracking-[0.14em] transition hover:border-stone-300"
              >
                LinkedIn
              </Link>

              <Link
                href="https://github.com/saumyapanigrahi"
                target="_blank"
                className="portfolio-button border border-stone-700 px-5 py-3 text-xs uppercase tracking-[0.14em] transition hover:border-stone-300"
              >
                GitHub
              </Link>
            </div>

            <div className="portfolio-accent-line" />

            <p className="mt-8 text-sm text-stone-500">
              Bengaluru, India · +91-7684083166
            </p>
          </div>

          <div className="portfolio-photo relative mx-auto w-full max-w-md">
            <div className="absolute -inset-3 bg-[#851d25] opacity-20 blur-3xl" />

            <div className="portrait-frame relative overflow-hidden bg-stone-900">
              <img
                src="/images/saumya-portrait.png"
                alt="Saumyarajan Panigrahi"
                className="h-[550px] w-full object-cover grayscale transition duration-700 hover:grayscale-0"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-transparent to-transparent" />

              <p className="absolute bottom-6 left-6 text-xs uppercase tracking-[0.2em] text-stone-300">
                Data · Insight · Impact
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio-section mx-auto max-w-7xl px-6 py-24 md:px-12">
        <p className="text-xs uppercase tracking-[0.25em] text-[#c05a5f]">
          Professional Summary
        </p>

        <p className="mt-6 max-w-6xl text-lg leading-8 text-stone-300 md:text-2xl md:leading-10">
          Results-driven Data Analyst professional with total 4 years of
          progressive experience across telecom, healthcare, e-commerce, and
          energy sectors. Holds an MSc in Data Science from the University of
          East Anglia, UK. Proficient in Advanced SQL, Python, MS Excel, Power
          BI, DAX, and Power Query with hands-on experience in exploratory data
          analysis, data validation, data lineage, source-to-target mapping,
          and transformation specifications.
        </p>
      </section>

      <section className="portfolio-section scroll-reveal mx-auto max-w-7xl px-6 py-24 md:px-12">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-12">
          <p className="text-xs uppercase tracking-[0.25em] text-[#c05a5f]">
            Core Competencies
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <div className="skill-card border-t border-stone-700 p-5 pt-5">
              <h2 className="serif text-2xl text-stone-100">
                Data Analysis & BI
              </h2>
              <p className="mt-4 text-sm leading-7 text-stone-400">
                Power BI Desktop & Service, DAX, Power Query, SQL, Microsoft
                Excel, KPI Reporting, SQL Server, Financial & Billing Analysis,
                Forecasting, Stakeholder Dashboards, Git, Exploratory Data
                Analysis, Data Validation, Root Cause Analysis.
              </p>
            </div>

            <div className="skill-card border-t border-stone-700 p-5 pt-5">
              <h2 className="serif text-2xl text-stone-100">
                Data Modelling & Integration
              </h2>
              <p className="mt-4 text-sm leading-7 text-stone-400">
                Data Modelling, Star Schema, Fact & Dimension Table Design,
                Semantic Models, Row-Level Security (RLS), Microsoft Fabric,
                Snowflake, ETL Design, Data Integration, Metadata Management,
                Workflow Documentation, Large Dataset Processing.
              </p>
            </div>

            <div className="skill-card border-t border-stone-700 p-5 pt-5">
              <h2 className="serif text-2xl text-stone-100">
                Professional Skills
              </h2>
              <p className="mt-4 text-sm leading-7 text-stone-400">
                Analytical Thinking, Problem-Solving, Cross-Functional
                Collaboration, Stakeholder Communication, Time Management, Data
                Storytelling, Strong Communication Skills, Agile/Zoho.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio-section mx-auto max-w-7xl px-6 py-24 md:px-12">
        <p className="text-xs uppercase tracking-[0.25em] text-[#c05a5f]">
          Professional Experience
        </p>

        <div className="mt-12 space-y-16">
          {experience.map((job) => (
            <article
              key={job.role}
              className="experience-card grid gap-6 border-t border-stone-800 p-5 pt-7 md:grid-cols-[220px_1fr]"
            >
              <div>
                <p className="text-sm text-[#d36d72]">{job.dates}</p>
                <p className="mt-3 text-sm text-stone-500">{job.location}</p>
              </div>

              <div>
                <h2 className="serif text-3xl text-stone-100">{job.role}</h2>

                <p className="mt-2 text-sm uppercase tracking-[0.12em] text-stone-400">
                  {job.company}
                </p>

                {job.focus && (
                  <p className="mt-5 text-sm font-semibold text-stone-300">
                    {job.focus}
                  </p>
                )}

                <ul className="mt-5 space-y-3 text-sm leading-7 text-stone-400">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#b13b42]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio-section scroll-reveal mx-auto max-w-7xl px-6 py-24 md:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:px-12">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#c05a5f]">
              Education
            </p>

            <div className="mt-8 space-y-8">
              <div className="border-l border-[#b13b42] pl-5">
                <p className="serif text-2xl text-stone-100">
                  MSc in Data Science
                </p>
                <p className="mt-2 text-sm text-stone-400">
                  University of East Anglia · Norwich, United Kingdom
                </p>
                <p className="mt-1 text-sm text-stone-500">2022 – 2023</p>
              </div>

              <div className="border-l border-stone-700 pl-5">
                <p className="serif text-2xl text-stone-100">
                  B.Tech in Mechanical Engineering
                </p>
                <p className="mt-2 text-sm text-stone-400">
                  Biju Patnaik University of Technology (BPUT) · Odisha, India
                </p>
                <p className="mt-1 text-sm text-stone-500">2014 – 2018</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#c05a5f]">
              Key Projects
            </p>

            <div className="mt-8 space-y-7">
              <div className="experience-card border-t border-stone-700 p-5">
                <h3 className="serif text-2xl text-stone-100">
                  Sumo Wrestling Bout Outcome Prediction
                </h3>
                <p className="mt-2 text-xs uppercase tracking-[0.12em] text-[#d36d72]">
                  Python · Machine Learning
                </p>
                <p className="mt-3 text-sm leading-7 text-stone-400">
                  Developed and benchmarked multiple ML classification models
                  (Logistic Regression, KNN, Decision Tree, Random Forest) using
                  13 years of match data (2010–2023) to predict bout outcomes
                  and analyse wrestler performance trends.
                </p>
              </div>

              <div className="experience-card border-t border-stone-700 p-5">
                <h3 className="serif text-2xl text-stone-100">
                  Heart Disease Risk Prediction
                </h3>
                <p className="mt-2 text-xs uppercase tracking-[0.12em] text-[#d36d72]">
                  Python · Machine Learning
                </p>
                <p className="mt-3 text-sm leading-7 text-stone-400">
                  Achieved up to 90% accuracy using Logistic Regression, SVM,
                  Random Forest, and KNN. Applied feature engineering, EDA, and
                  cross-validation for robust model evaluation.
                </p>
              </div>

              <div className="experience-card border-t border-stone-700 p-5">
                <h3 className="serif text-2xl text-stone-100">
                  Client Experience KPI Analysis
                </h3>
                <p className="mt-2 text-xs uppercase tracking-[0.12em] text-[#d36d72]">
                  MS Excel · Power BI
                </p>
                <p className="mt-3 text-sm leading-7 text-stone-400">
                  Analysed year-on-year customer satisfaction trends, identified
                  root causes of service quality decline, and built interactive
                  dashboards that supported policy revisions and service
                  improvements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}