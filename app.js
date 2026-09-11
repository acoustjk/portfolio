/**
 * Portfolio Dynamic Application Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  safeRun(initTheme, 'initTheme');
  safeRun(renderProfile, 'renderProfile');
  safeRun(renderStrengths, 'renderStrengths');
  safeRun(() => renderSkills('all'), 'renderSkills');
  safeRun(renderExperiences, 'renderExperiences');
  safeRun(() => renderProjects('all'), 'renderProjects');
  safeRun(renderEducation, 'renderEducation');
  safeRun(renderCertificates, 'renderCertificates');
  safeRun(initTypedText, 'initTypedText');
  safeRun(initScrollSpy, 'initScrollSpy');
  safeRun(initContactForm, 'initContactForm');
  safeRun(initLucide, 'initLucide');
});

function safeRun(fn, name) {
  try {
    fn();
  } catch (err) {
    console.error(`Error in ${name}:`, err);
  }
}

// Re-initialize Lucide icons
function initLucide() {
  if (window.lucide) {
    lucide.createIcons();
  }
}

// Dark Mode Switcher
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const storedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      const isDark = document.documentElement.classList.contains('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  }
}

// 1. Render Profile
function renderProfile() {
  const p = PORTFOLIO_DATA.profile;
  if (!p) return;
  
  const elName = document.getElementById('profile-name');
  const elTitle = document.getElementById('profile-title');
  const elShortBio = document.getElementById('profile-bio');
  const elAvatar = document.getElementById('profile-avatar');
  const elEmail = document.getElementById('profile-email');
  const elPhone = document.getElementById('profile-phone');
  const elGithub = document.getElementById('profile-github');
  const elBlog = document.getElementById('profile-blog');
  const elLinkedin = document.getElementById('profile-linkedin');

  if (elName) elName.textContent = p.name;
  if (elTitle) elTitle.textContent = p.title;
  if (elShortBio) elShortBio.textContent = p.shortBio;
  if (elAvatar) elAvatar.src = p.avatarUrl;
  if (elEmail) { elEmail.textContent = p.email; elEmail.href = `mailto:${p.email}`; }
  if (elPhone) { elPhone.textContent = p.phone; elPhone.href = `tel:${p.phone}`; }
  if (elGithub && p.github) elGithub.href = p.github;
  if (elBlog && p.blog) elBlog.href = p.blog;
  if (elLinkedin && p.linkedin) elLinkedin.href = p.linkedin;

  // Stats Counters
  if (p.stats) {
    const elExp = document.getElementById('stat-exp');
    const elProj = document.getElementById('stat-projects');
    const elTech = document.getElementById('stat-tech');
    const elComm = document.getElementById('stat-commits');
    if (elExp) elExp.textContent = p.stats.experienceYears;
    if (elProj) elProj.textContent = p.stats.projectsCount;
    if (elTech) elTech.textContent = p.stats.techCount;
    if (elComm) elComm.textContent = p.stats.commitCount;
  }
}

// 2. Animated Typing Effect
function initTypedText() {
  const typedEl = document.getElementById('typed-text');
  if (!typedEl || !PORTFOLIO_DATA.profile || !PORTFOLIO_DATA.profile.typedHeadlines) return;

  const headlines = PORTFOLIO_DATA.profile.typedHeadlines;
  let headlineIdx = 0;
  let charIdx = 0;
  let isDeleting = false;

  function typeStep() {
    const currentText = headlines[headlineIdx];
    
    if (isDeleting) {
      typedEl.textContent = currentText.substring(0, charIdx - 1);
      charIdx--;
    } else {
      typedEl.textContent = currentText.substring(0, charIdx + 1);
      charIdx++;
    }

    let delay = isDeleting ? 40 : 80;

    if (!isDeleting && charIdx === currentText.length) {
      delay = 2000;
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      headlineIdx = (headlineIdx + 1) % headlines.length;
      delay = 500;
    }

    setTimeout(typeStep, delay);
  }

  typeStep();
}

// 3. Render Strengths
function renderStrengths() {
  const container = document.getElementById('strengths-container');
  if (!container || !PORTFOLIO_DATA.strengths) return;

  container.innerHTML = PORTFOLIO_DATA.strengths.map(s => `
    <div class="glass-card p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
      <div class="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
        <i data-lucide="${s.icon}" class="w-6 h-6"></i>
      </div>
      <h3 class="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">${s.title}</h3>
      <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">${s.description}</p>
    </div>
  `).join('');

  initLucide();
}

// 4. Render Skills
function renderSkills(category = 'all') {
  const container = document.getElementById('skills-container');
  if (!container || !PORTFOLIO_DATA.skills) return;

  const skillsData = PORTFOLIO_DATA.skills;
  let items = [];

  if (category === 'all') {
    items = Object.values(skillsData).flat();
  } else if (skillsData[category]) {
    items = skillsData[category];
  }

  container.innerHTML = items.map(skill => `
    <div class="glass-card p-4 rounded-xl shadow-sm flex items-center gap-4 hover:border-blue-500 transition-all duration-300">
      <img src="${skill.icon}" alt="${skill.name}" class="w-9 h-9 object-contain" onerror="this.src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg'">
      <div class="flex-1">
        <div class="flex justify-between items-center mb-1">
          <span class="font-semibold text-slate-800 dark:text-slate-200 text-sm">${skill.name}</span>
          <span class="text-xs text-slate-500 dark:text-slate-400 font-mono">${skill.level}%</span>
        </div>
        <div class="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
          <div class="bg-gradient-to-r from-blue-500 to-indigo-600 h-full rounded-full transition-all duration-700" style="width: ${skill.level}%"></div>
        </div>
      </div>
    </div>
  `).join('');
}

// Filter Skills Tabs
window.filterSkills = function(category, btnEl) {
  document.querySelectorAll('.skill-tab-btn').forEach(btn => {
    btn.classList.remove('bg-blue-600', 'text-white', 'shadow-md');
    btn.classList.add('bg-slate-100', 'dark:bg-slate-800', 'text-slate-600', 'dark:text-slate-300');
  });

  btnEl.classList.remove('bg-slate-100', 'dark:bg-slate-800', 'text-slate-600', 'dark:text-slate-300');
  btnEl.classList.add('bg-blue-600', 'text-white', 'shadow-md');

  renderSkills(category);
};

// 5. Render Experiences
function renderExperiences() {
  const container = document.getElementById('experiences-container');
  if (!container || !PORTFOLIO_DATA.experiences) return;

  container.innerHTML = PORTFOLIO_DATA.experiences.map((exp, idx) => `
    <div class="glass-card p-6 md:p-8 rounded-2xl shadow-sm mb-8 border border-slate-200 dark:border-slate-800">
      <div class="flex flex-col md:flex-row md:items-center justify-between pb-4 mb-4 border-b border-slate-200 dark:border-slate-800 gap-2">
        <div>
          <div class="flex items-center gap-2 mb-1">
            <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 text-xs font-semibold rounded-full">${exp.type}</span>
            <h3 class="text-xl font-bold text-slate-900 dark:text-white">${exp.company}</h3>
          </div>
          <p class="text-sm font-medium text-slate-600 dark:text-slate-400">${exp.departmentRole}</p>
        </div>
        <div class="text-left md:text-right">
          <span class="inline-block px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-mono font-semibold rounded-lg">${exp.period}</span>
          <p class="text-xs text-blue-600 dark:text-blue-400 font-semibold mt-1">${exp.description}</p>
        </div>
      </div>

      <div class="space-y-2 mb-6">
        ${exp.achievements.map(ach => `
          <div class="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-500 mt-1 shrink-0"></i>
            <span>${ach}</span>
          </div>
        `).join('')}
      </div>

      <div class="flex flex-wrap gap-2 pt-2">
        ${exp.techStack.map(tech => `
          <span class="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold rounded-lg">${tech}</span>
        `).join('')}
      </div>
    </div>
  `).join('');

  initLucide();
}

// 6. Render Projects
function renderProjects(filter = 'all') {
  const container = document.getElementById('projects-container');
  if (!container || !PORTFOLIO_DATA.projects) return;

  const projects = PORTFOLIO_DATA.projects;
  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  container.innerHTML = filtered.map(p => `
    <div class="glass-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group border border-slate-200 dark:border-slate-800">
      <div class="relative overflow-hidden h-48">
        <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
        <span class="absolute top-4 right-4 px-3 py-1 bg-blue-600/90 text-white text-xs font-semibold rounded-full backdrop-blur-md">${p.period}</span>
      </div>

      <div class="p-6 flex-1 flex flex-col">
        <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">${p.title}</h3>
        <p class="text-xs text-blue-600 dark:text-blue-400 font-semibold mb-3">${p.role}</p>
        <p class="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">${p.summary}</p>
        
        <div class="flex flex-wrap gap-1.5 mb-6 mt-auto">
          ${p.techStack.map(t => `
            <span class="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs rounded-md">${t}</span>
          `).join('')}
        </div>

        <div class="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-800">
          <button onclick="openProjectModal('${p.id}')" class="text-sm font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1 hover:underline">
            상세 보기 <i data-lucide="arrow-right" class="w-4 h-4"></i>
          </button>
          <div class="flex gap-2">
            ${p.githubUrl ? `<a href="${p.githubUrl}" target="_blank" class="p-2 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors" title="GitHub Source"><i data-lucide="github" class="w-5 h-5"></i></a>` : ''}
            ${p.demoUrl ? `<a href="${p.demoUrl}" target="_blank" class="p-2 text-slate-500 hover:text-blue-600 transition-colors" title="Live Demo"><i data-lucide="external-link" class="w-5 h-5"></i></a>` : ''}
          </div>
        </div>
      </div>
    </div>
  `).join('');

  initLucide();
}

// Project Modal Popup
window.openProjectModal = function(projectId) {
  const p = PORTFOLIO_DATA.projects.find(item => item.id === projectId);
  if (!p) return;

  const modalHtml = `
    <div id="project-modal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm modal-enter-active">
      <div class="bg-white dark:bg-slate-900 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 relative">
        <button onclick="closeProjectModal()" class="absolute top-6 right-6 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
          <i data-lucide="x" class="w-5 h-5"></i>
        </button>

        <img src="${p.image}" alt="${p.title}" class="w-full h-56 object-cover rounded-2xl mb-6">

        <div class="flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400 mb-2">
          <span>${p.period}</span> • <span>${p.role}</span>
        </div>

        <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">${p.title}</h2>
        
        <p class="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">${p.description}</p>

        <h4 class="text-sm font-bold text-slate-900 dark:text-white mb-3">주요 구현 내용 및 성과</h4>
        <ul class="space-y-2 mb-6">
          ${p.highlights.map(h => `
            <li class="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
              <i data-lucide="check" class="w-4 h-4 text-blue-500 mt-0.5 shrink-0"></i>
              <span>${h}</span>
            </li>
          `).join('')}
        </ul>

        <h4 class="text-sm font-bold text-slate-900 dark:text-white mb-3">사용 기술 스택</h4>
        <div class="flex flex-wrap gap-2 mb-8">
          ${p.techStack.map(t => `
            <span class="px-3 py-1 bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 text-xs font-semibold rounded-lg">${t}</span>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);
  initLucide();
};

window.closeProjectModal = function() {
  const modal = document.getElementById('project-modal');
  if (modal) modal.remove();
};

// 7. Render Education & Certificates
function renderEducation() {
  const container = document.getElementById('education-container');
  if (!container || !PORTFOLIO_DATA.education) return;

  container.innerHTML = PORTFOLIO_DATA.education.map(edu => `
    <div class="glass-card p-6 rounded-2xl shadow-sm">
      <div class="flex justify-between items-start mb-2">
        <h3 class="text-lg font-bold text-slate-900 dark:text-white">${edu.school}</h3>
        <span class="text-xs font-mono text-slate-500 dark:text-slate-400">${edu.period}</span>
      </div>
      <p class="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-1">${edu.degree} ${edu.gpa ? `(학점: ${edu.gpa})` : ''}</p>
      <p class="text-xs text-slate-600 dark:text-slate-400">${edu.details}</p>
    </div>
  `).join('');
}

function renderCertificates() {
  const container = document.getElementById('certificates-container');
  if (!container || !PORTFOLIO_DATA.certificates) return;

  container.innerHTML = PORTFOLIO_DATA.certificates.map(cert => `
    <div class="glass-card p-5 rounded-2xl shadow-sm flex items-center justify-between">
      <div>
        <span class="inline-block px-2.5 py-0.5 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 text-xs font-semibold rounded-md mb-1">${cert.badge}</span>
        <h4 class="text-base font-bold text-slate-900 dark:text-white">${cert.name}</h4>
        <p class="text-xs text-slate-500 dark:text-slate-400">${cert.issuer}</p>
      </div>
      <span class="text-xs font-mono text-slate-400 dark:text-slate-500">${cert.date}</span>
    </div>
  `).join('');
}

// 8. Copy to Clipboard with Toast Notification
window.copyToClipboard = function(text, typeName) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(`${typeName} (${text})가 클립보드에 복사되었습니다!`);
  }).catch(() => {
    showToast(`복사 완료: ${text}`);
  });
};

function showToast(message) {
  const toastId = 'portfolio-toast';
  let toastEl = document.getElementById(toastId);
  if (toastEl) toastEl.remove();

  toastEl = document.createElement('div');
  toastEl.id = toastId;
  toastEl.className = 'fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 border border-slate-700 text-sm toast-animate';
  toastEl.innerHTML = `
    <i data-lucide="check-circle" class="w-5 h-5 text-emerald-400"></i>
    <span>${message}</span>
  `;

  document.body.appendChild(toastEl);
  initLucide();

  setTimeout(() => {
    if (toastEl) toastEl.remove();
  }, 3000);
}

// 9. ScrollSpy Navbar Highlight
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.scrollY;

    sections.forEach(sec => {
      const sectionTop = sec.offsetTop - 120;
      const sectionHeight = sec.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('text-blue-600', 'dark:text-blue-400', 'font-bold');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('text-blue-600', 'dark:text-blue-400', 'font-bold');
      }
    });
  });
}

// 10. Contact Form Submission Mock
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('메시지가 성공적으로 전송되었습니다! 빠른 시일 내에 답변드리겠습니다.');
    form.reset();
  });
}
