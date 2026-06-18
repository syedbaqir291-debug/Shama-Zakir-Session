/* ============================================================
   CPHQ · Pro-Frontier — Shared Quiz Engine
   One engine, reused by every module's quiz section instead of
   duplicating the category-select → question → score UI per
   module. Each module page only supplies its own question data
   (see quiz-data.js inside that module's folder) and calls:

     CPHQQuiz.init({
       containerId: 'quizApp',
       questions: QUIZ_QUESTIONS,     // array, see schema below
       categories: QUIZ_CATEGORIES,   // array, see schema below
       introText: 'optional intro line shown above the category list'
     });

   Question schema: { question, options:[4], correct: idx, explanation, category }
   Category schema: { name, short, icon }
   ============================================================ */
window.CPHQQuiz = (function(){

  function shuffleArray(arr){
    const a = arr.slice();
    for(let i=a.length-1;i>0;i--){
      const j = Math.floor(Math.random()*(i+1));
      [a[i],a[j]] = [a[j],a[i]];
    }
    return a;
  }

  function init(opts){
    const container = document.getElementById(opts.containerId);
    if(!container) return;
    const ALL_QUESTIONS = opts.questions || [];
    const CATEGORIES = opts.categories || [];
    const introText = opts.introText || 'Pick a category to start a scored practice round. Each question shows the correct answer and explanation immediately.';

    let state = { questions: [], idx: 0, score: 0, answered: false, categoryLabel: '', categoryName: null };

    function renderCategoryList(){
      let catsHtml = '';
      CATEGORIES.forEach(cat=>{
        const n = ALL_QUESTIONS.filter(q=>q.category===cat.name).length;
        if(n===0) return;
        catsHtml += `
          <div class="quiz-cat-row" data-cat="${encodeURIComponent(cat.name)}" data-label="${encodeURIComponent(cat.short)}">
            <div class="qc-ic">${cat.icon}</div>
            <div>
              <div class="qc-tt">${cat.short}</div>
              <div class="qc-dd">${cat.name}</div>
            </div>
            <div class="qc-count">${n} Qs</div>
          </div>`;
      });
      catsHtml += `
        <div class="quiz-cat-row" data-cat="" data-label="Full Module Quiz">
          <div class="qc-ic">🌐</div>
          <div>
            <div class="qc-tt">Full Module Quiz</div>
            <div class="qc-dd">All categories combined</div>
          </div>
          <div class="qc-count">${ALL_QUESTIONS.length} Qs</div>
        </div>`;

      container.innerHTML = `
        <p class="quiz-intro-text" style="margin:0 0 14px;">${introText}</p>
        <div class="quiz-cat-list" style="margin:0 0 6px;">${catsHtml}</div>
      `;
      container.querySelectorAll('.quiz-cat-row').forEach(row=>{
        row.addEventListener('click', ()=>{
          const cat = decodeURIComponent(row.dataset.cat) || null;
          const label = decodeURIComponent(row.dataset.label);
          startQuiz(cat, label);
        });
      });
    }

    function startQuiz(categoryName, label){
      let pool = categoryName ? ALL_QUESTIONS.filter(q=>q.category===categoryName) : ALL_QUESTIONS;
      pool = shuffleArray(pool);
      state = { questions: pool, idx: 0, score: 0, answered: false, categoryLabel: label, categoryName: categoryName };
      renderQuestion();
    }

    function renderQuestion(){
      const total = state.questions.length;
      if(state.idx >= total){ renderResult(); return; }
      const q = state.questions[state.idx];
      state.answered = false;
      let optsHtml = '';
      q.options.forEach((opt, i)=>{
        optsHtml += `<button class="quiz-opt" data-idx="${i}">${opt}</button>`;
      });
      container.innerHTML = `
        <div class="quiz-stage" style="margin:0;">
          <div class="quiz-progress">
            <span>${state.categoryLabel} — Q${state.idx+1} / ${total}</span>
            <div class="quiz-bar"><div class="quiz-bar-fill" style="width:${(state.idx/total)*100}%"></div></div>
            <span>Score: ${state.score}</span>
          </div>
          <div class="quiz-q-card">
            <div class="quiz-q-text">${q.question}</div>
            <div id="qe-opts">${optsHtml}</div>
            <div class="quiz-explain" id="qe-explain"><b>Explanation —</b> ${q.explanation}</div>
            <div class="quiz-nav">
              <button class="btn btn-ghost" id="qe-next" style="display:none;">Next →</button>
            </div>
          </div>
        </div>
      `;
      container.querySelectorAll('#qe-opts .quiz-opt').forEach(btn=>{
        btn.addEventListener('click', ()=> selectOption(parseInt(btn.dataset.idx,10), q));
      });
      const nextBtn = container.querySelector('#qe-next');
      nextBtn.addEventListener('click', nextQuestion);
    }

    function selectOption(i, q){
      if(state.answered) return;
      state.answered = true;
      const opts = container.querySelectorAll('#qe-opts .quiz-opt');
      opts.forEach((btn, idx)=>{
        btn.classList.add('disabled');
        if(idx === q.correct) btn.classList.add('correct');
        if(idx === i && i !== q.correct) btn.classList.add('wrong');
      });
      if(i === q.correct) state.score++;
      container.querySelector('#qe-explain').classList.add('show');
      const nextBtn = container.querySelector('#qe-next');
      nextBtn.style.display = 'block';
      nextBtn.textContent = (state.idx+1 < state.questions.length) ? 'Next →' : 'See Results →';
    }

    function nextQuestion(){
      state.idx++;
      renderQuestion();
    }

    function renderResult(){
      const total = state.questions.length;
      const pct = total ? Math.round((state.score/total)*100) : 0;
      const pass = pct >= 70;
      container.innerHTML = `
        <div class="quiz-result">
          <div class="score">${pct}%</div>
          <div class="score-lab">${state.score} of ${total} correct — ${state.categoryLabel}</div>
          <div class="verdict ${pass ? 'pass' : 'fail'}">${pass ? '✓ Strong performance' : '↻ Keep practicing'}</div>
        </div>
        <div style="display:flex;gap:10px;padding:0 0 10px;">
          <button class="btn btn-teal" style="width:auto;flex:1;" id="qe-retry">Retry</button>
          <button class="btn btn-ghost" style="width:auto;flex:1;" id="qe-categories">Categories</button>
        </div>
      `;
      container.querySelector('#qe-retry').addEventListener('click', ()=> startQuiz(state.categoryName, state.categoryLabel));
      container.querySelector('#qe-categories').addEventListener('click', renderCategoryList);
    }

    renderCategoryList();
  }

  return { init: init, shuffleArray: shuffleArray };
})();
