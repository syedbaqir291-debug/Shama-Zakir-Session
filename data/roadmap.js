// ================================================================
// COURSE ROADMAP DATA & LOGIC
// Sourced from ProFRONTIER's own 4-Month CPHQ Course Breakdown.
// Split out of index.html to keep the main file small and clean.
// ================================================================
const ROADMAP_TOPICS = [
  { num:1, title:"Introduction to Quality & Important Concepts", weeks:"2 weeks", desc:"Build the foundation of healthcare quality, quality terminology, measurement thinking, and basic quality tools." },
  { num:2, title:"Patient Safety", weeks:"2 weeks", desc:"Cover patient safety principles, safety culture, incident reporting, just culture, RCA, FMEA, and harm prevention." },
  { num:3, title:"Healthcare Data Analytics (SPC)", weeks:"2 weeks", desc:"Strengthen understanding of healthcare data, indicators, sampling, variation, run charts, and control charts." },
  { num:4, title:"People Management & Strategic Leadership / Quality Leadership & Integration", weeks:"2 weeks", desc:"Connect leadership, teamwork, communication, change management, governance, and quality integration." },
  { num:5, title:"Accreditation & Regulation", weeks:"1 week", desc:"Review accreditation standards, regulatory expectations, compliance, documentation, and survey readiness." },
  { num:6, title:"Risk Management, Financial Management & Utilization Management", weeks:"2 weeks", desc:"Understand risk identification, mitigation, financial stewardship, cost concepts, and appropriate utilization." },
  { num:7, title:"Performance Improvement & Information Management", weeks:"2 to 2.5 weeks", desc:"Cover PI models, PDSA, Lean/Six Sigma basics, project charters, dashboards, data governance, and reporting." },
  { num:8, title:"Population Health and Care Transitions", weeks:"1 week", desc:"Focus on continuity of care, transitions, preventive care, population risk, readmissions, and care coordination." },
  { num:9, title:"Quality Review & Accountability", weeks:"1 week", desc:"Review accountability structures, quality review processes, peer review, audit, scorecards, and governance reporting." },
  { num:10, title:"Healthcare Delivery Systems", weeks:"0.5 week", desc:"Summarize healthcare delivery models, value-based care, managed care, and system-level quality expectations." }
];

const ROADMAP_MONTHS = [
  { label:"Month 1 · Weeks 1–4", title:"Quality foundations and patient safety", desc:"Concept clarity, safety terminology, incident thinking, and harm prevention." },
  { label:"Month 2 · Weeks 5–8", title:"Data analytics, SPC, people management, and leadership", desc:"Data interpretation, control chart thinking, people scenarios, and leadership cases." },
  { label:"Month 3 · Weeks 9–12", title:"Accreditation, regulation, risk, finance, utilization, and PI basics", desc:"Survey readiness, risk cases, utilization questions, and project charter practice." },
  { label:"Month 4 · Weeks 13–16", title:"PI consolidation, information management, population health, accountability, and delivery systems", desc:"Cumulative testing, applied cases, final mock exam, and readiness review." }
];

function openRoadmap(){
  renderRoadmap();
  showOnlyView('view-roadmap');
}
function closeRoadmap(){
  showOnlyView('view-dash');
}
function renderRoadmap(){
  const topicList = document.getElementById('topicList');
  topicList.innerHTML = '';
  ROADMAP_TOPICS.forEach(t=>{
    const card = document.createElement('div');
    card.className = 'topic-card';
    card.innerHTML = `
      <div class="tnum">${String(t.num).padStart(2,'0')}</div>
      <div>
        <div class="ttt">${t.title}</div>
        <div class="tdd">${t.desc}</div>
        <div class="twk">${t.weeks}</div>
      </div>
    `;
    topicList.appendChild(card);
  });

  const monthList = document.getElementById('monthList');
  monthList.innerHTML = '';
  ROADMAP_MONTHS.forEach(m=>{
    const row = document.createElement('div');
    row.className = 'month-row';
    row.innerHTML = `
      <div class="mlab">${m.label}</div>
      <div class="mtt">${m.title}</div>
      <div class="mdd">${m.desc}</div>
    `;
    monthList.appendChild(row);
  });
}
