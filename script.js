const GITHUB_USER = "GustavoDSB1";
// Repositórios públicos que não devem aparecer como projeto (nome em minúsculas)
const HIDDEN_REPOS = ["minha-page-de-projetos-"];

const LANG_COLORS = {
  Python: "#3572A5",
  JavaScript: "#f1e05a",
  HTML: "#e34c26",
  CSS: "#563d7c",
  TypeScript: "#3178c6",
  Java: "#b07219",
  "Jupyter Notebook": "#DA5B0B",
  Shell: "#89e051",
  Kotlin: "#A97BFF",
};

const ICON_GITHUB = '<svg viewBox="0 0 24 24"><path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.26 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/></svg>';
const ICON_LINK = '<svg viewBox="0 0 24 24"><path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7ZM19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7Z"/></svg>';

document.querySelectorAll("[data-icon]").forEach((el) => (el.innerHTML = icon(el.dataset.icon)));

const isTouch = window.matchMedia("(pointer: coarse)").matches;
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- Loader ---------- */
window.addEventListener("load", () => {
  setTimeout(() => document.getElementById("loader").classList.add("hidden"), 600);
});

document.getElementById("year").textContent = new Date().getFullYear();

/* ---------- Efeito de digitação ---------- */
(function typing() {
  const phrases = [
    "Estudante de programação 💻",
    "Apaixonado por tecnologia 🚀",
    "Desenvolvedor Python em formação 🐍",
    "Sempre aprendendo algo novo 📚",
  ];
  const el = document.getElementById("typed");
  let p = 0, c = 0, deleting = false;

  function tick() {
    const phrase = phrases[p];
    c += deleting ? -1 : 1;
    el.textContent = phrase.slice(0, c);
    let delay = deleting ? 40 : 85;
    if (!deleting && c === phrase.length) { deleting = true; delay = 1800; }
    else if (deleting && c === 0) { deleting = false; p = (p + 1) % phrases.length; delay = 400; }
    setTimeout(tick, delay);
  }
  tick();
})();

/* ---------- Partículas conectadas ---------- */
(function particles() {
  const canvas = document.getElementById("particles");
  const ctx = canvas.getContext("2d");
  const mouse = { x: null, y: null };
  let w, h, dots;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    const count = Math.min(110, Math.floor((w * h) / 14000));
    dots = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      r: Math.random() * 1.8 + 0.6,
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    for (let i = 0; i < dots.length; i++) {
      const d = dots[i];
      d.x += d.vx; d.y += d.vy;
      if (d.x < 0 || d.x > w) d.vx *= -1;
      if (d.y < 0 || d.y > h) d.vy *= -1;

      if (mouse.x !== null) {
        const dx = d.x - mouse.x, dy = d.y - mouse.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 120) { d.x += dx / dist; d.y += dy / dist; }
      }

      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      ctx.fillStyle = i % 3 === 0 ? "rgba(34,211,238,.8)" : "rgba(168,85,247,.8)";
      ctx.fill();

      for (let j = i + 1; j < dots.length; j++) {
        const o = dots[j];
        const dist = Math.hypot(d.x - o.x, d.y - o.y);
        if (dist < 130) {
          ctx.strokeStyle = `rgba(168,85,247,${0.18 * (1 - dist / 130)})`;
          ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(d.x, d.y); ctx.lineTo(o.x, o.y); ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }

  window.addEventListener("resize", resize);
  window.addEventListener("mousemove", (e) => { mouse.x = e.clientX; mouse.y = e.clientY; });
  window.addEventListener("mouseout", () => { mouse.x = mouse.y = null; });
  resize();
  if (!reducedMotion) draw();
})();

/* ---------- Cursor personalizado ---------- */
(function cursor() {
  if (isTouch) return;
  const dot = document.querySelector(".cursor-dot");
  const ring = document.querySelector(".cursor-ring");
  let mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my;

  window.addEventListener("mousemove", (e) => {
    mx = e.clientX; my = e.clientY;
    dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
  });

  (function follow() {
    rx += (mx - rx) * 0.15;
    ry += (my - ry) * 0.15;
    ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
    requestAnimationFrame(follow);
  })();

  document.addEventListener("mouseover", (e) => {
    ring.classList.toggle("hover", !!e.target.closest("a, button, .project, .stat-card"));
  });
})();

/* ---------- Navbar, progresso e botão topo ---------- */
const navbar = document.querySelector(".navbar");
const progress = document.getElementById("scroll-progress");
const toTop = document.getElementById("to-top");
const navLinks = document.querySelectorAll(".navbar nav a");
const sections = document.querySelectorAll("main section[id]");

window.addEventListener("scroll", () => {
  const y = window.scrollY;
  const max = document.documentElement.scrollHeight - innerHeight;
  progress.style.width = `${(y / max) * 100}%`;
  navbar.classList.toggle("scrolled", y > 40);
  toTop.classList.toggle("show", y > 600);

  let current = "";
  sections.forEach((s) => { if (y >= s.offsetTop - 200) current = s.id; });
  navLinks.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${current}`));
});

toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

/* ---------- Revelar ao rolar ---------- */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    setTimeout(() => (entry.target.style.transitionDelay = ""), 1500);
    entry.target.querySelectorAll(".fill").forEach((f) => (f.style.width = `${f.dataset.width}%`));
    revealObserver.unobserve(entry.target);
  });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal").forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 0.12}s`;
  revealObserver.observe(el);
});

/* ---------- Efeito ripple e botões magnéticos ---------- */
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".btn");
  if (!btn) return;
  const rect = btn.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const span = document.createElement("span");
  span.className = "ripple";
  span.style.width = span.style.height = `${size}px`;
  span.style.left = `${e.clientX - rect.left - size / 2}px`;
  span.style.top = `${e.clientY - rect.top - size / 2}px`;
  btn.appendChild(span);
  setTimeout(() => span.remove(), 600);
});

if (!isTouch) {
  document.querySelectorAll(".magnetic").forEach((el) => {
    el.addEventListener("mousemove", (e) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      el.style.transform = `translate(${x * 0.3}px, ${y * 0.4}px)`;
    });
    el.addEventListener("mouseleave", () => (el.style.transform = ""));
  });
}

/* ---------- Inclinação 3D ---------- */
function addTilt(el, strength = 12) {
  if (isTouch) return;
  el.addEventListener("mousemove", (e) => {
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.transform = `perspective(800px) rotateY(${(px - 0.5) * strength}deg) rotateX(${(0.5 - py) * strength}deg) scale(1.03)`;
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
  });
  el.addEventListener("mouseleave", () => (el.style.transform = ""));
}
document.querySelectorAll(".tilt").forEach((el) => addTilt(el, 18));

/* ---------- Contadores animados ---------- */
function animateCount(el, target) {
  const duration = 1500;
  const start = performance.now();
  (function step(now) {
    const t = Math.min((now - start) / duration, 1);
    el.textContent = Math.round(target * (1 - Math.pow(1 - t, 3)));
    if (t < 1) requestAnimationFrame(step);
  })(start);
}

function setStats(stats) {
  const statsBox = document.querySelector(".stats");
  const run = () => Object.entries(stats).forEach(([k, v]) => {
    const el = document.querySelector(`[data-stat="${k}"]`);
    if (el) animateCount(el, v);
  });
  const obs = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) { run(); obs.disconnect(); }
  }, { threshold: 0.4 });
  obs.observe(statsBox);
}

/* ---------- Projetos do GitHub ---------- */
function escapeHTML(str) {
  return String(str ?? "").replace(/[&<>"']/g, (ch) => (
    { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]
  ));
}

function formatName(name) {
  return name.replace(/[-_]+/g, " ").replace(/\s+/g, " ").trim();
}

function projectCard(repo, index) {
  const lang = repo.language;
  const color = LANG_COLORS[lang] || "#a855f7";
  const updated = new Date(repo.pushed_at || repo.updated_at).toLocaleDateString("pt-BR");
  const homepage = repo.homepage
    ? `<a href="${escapeHTML(repo.homepage)}" target="_blank" rel="noopener" aria-label="Ver online">${ICON_LINK}</a>`
    : "";
  const topics = (repo.topics || []).slice(0, 5)
    .map((t) => `<span class="topic">#${escapeHTML(t)}</span>`).join("");

  const details = PROJECT_DETAILS[repo.name.toLowerCase()];
  const cover = details?.images?.[0];

  const card = document.createElement("article");
  card.className = "project";
  card.dataset.lang = lang || "Outros";
  card.style.animationDelay = `${index * 0.12}s`;
  card.tabIndex = 0;
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", `Ver detalhes de ${details?.title || formatName(repo.name)}`);
  card.innerHTML = `
    <div class="project-inner">
      ${cover ? `<div class="project-cover${cover.phone ? " phone" : ""}"><img src="${escapeHTML(cover.src)}" alt="" loading="lazy" /></div>` : ""}
      <div class="project-top">
        <span class="project-icon">${icon(details?.icon)}</span>
        <div class="project-links">
          <a href="${escapeHTML(repo.html_url)}" target="_blank" rel="noopener" aria-label="Ver no GitHub">${ICON_GITHUB}</a>
          ${homepage}
        </div>
      </div>
      <h3>${escapeHTML(details?.title || formatName(repo.name))}</h3>
      <p>${escapeHTML(details?.tagline || repo.description || "Projeto em desenvolvimento — confira o código no GitHub!")}</p>
      ${topics ? `<div class="topics">${topics}</div>` : ""}
      <div class="project-meta">
        ${lang ? `<span><i class="lang-dot" style="background:${color}"></i>${escapeHTML(lang)}</span>` : ""}
        <span>${icon("estrela", "mini")} ${repo.stargazers_count}</span>
        <span>${icon("fork", "mini")} ${repo.forks_count}</span>
        <span>${icon("relogio", "mini")} ${updated}</span>
      </div>
      <span class="project-more">Ver detalhes <b>→</b></span>
    </div>`;
  addTilt(card, 10);

  const open = (e) => {
    if (e.target.closest("a")) return; // links do card continuam abrindo o GitHub
    openProject(repo, card);
  };
  card.addEventListener("click", open);
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(e); }
  });
  return card;
}

/* ---------- Tela de detalhes do projeto ---------- */
const modal = document.getElementById("project-modal");
let lastFocus = null;
let galleryIndex = 0;
let galleryImages = [];

function openProject(repo, origin) {
  const d = PROJECT_DETAILS[repo.name.toLowerCase()] || {};
  const title = d.title || formatName(repo.name);
  const about = d.about || [repo.description || "Este projeto ainda não tem uma descrição detalhada. Confira o código no GitHub!"];
  const tech = d.tech || (repo.language ? [repo.language] : []);
  galleryImages = d.images || [];
  galleryIndex = 0;

  const live = d.live || (repo.homepage ? { url: repo.homepage, label: "Ver online" } : null);
  const updated = new Date(repo.pushed_at || repo.updated_at).toLocaleDateString("pt-BR");

  modal.querySelector(".modal-body").innerHTML = `
    ${galleryImages.length ? `
      <div class="gallery">
        <div class="gallery-stage">
          ${galleryImages.map((img, i) => `
            <figure class="gallery-slide${i === 0 ? " active" : ""}${img.phone ? " phone" : ""}">
              <img src="${escapeHTML(img.src)}" alt="${escapeHTML(img.caption || title)}" />
            </figure>`).join("")}
          ${galleryImages.length > 1 ? `
            <button class="gallery-nav prev" aria-label="Imagem anterior">‹</button>
            <button class="gallery-nav next" aria-label="Próxima imagem">›</button>` : ""}
        </div>
        <p class="gallery-caption"></p>
        ${galleryImages.length > 1 ? `<div class="gallery-dots">${galleryImages.map((_, i) =>
          `<button class="dot${i === 0 ? " active" : ""}" data-i="${i}" aria-label="Imagem ${i + 1}"></button>`).join("")}</div>` : ""}
      </div>` : `<div class="gallery-empty">${icon(d.icon)}</div>`}

    <div class="modal-info">
      <span class="modal-icon">${icon(d.icon)}</span>
      <h3 id="modal-title" class="modal-title">${escapeHTML(title)}</h3>
      ${d.tagline ? `<p class="modal-tagline">${escapeHTML(d.tagline)}</p>` : ""}

      <h4>Sobre o projeto</h4>
      ${about.map((p) => `<p>${escapeHTML(p)}</p>`).join("")}

      ${d.features ? `
        <h4>O que ele faz</h4>
        <ul class="modal-features">${d.features.map((f) => `<li>${escapeHTML(f)}</li>`).join("")}</ul>` : ""}

      ${tech.length ? `
        <h4>Tecnologias</h4>
        <div class="modal-tech">${tech.map((t) => `<span>${escapeHTML(t)}</span>`).join("")}</div>` : ""}

      ${d.note ? `<p class="modal-note">ℹ️ ${escapeHTML(d.note)}</p>` : ""}

      <div class="modal-meta">
        <span>${icon("estrela", "mini")} ${repo.stargazers_count} estrelas</span>
        <span>${icon("relogio", "mini")} Atualizado em ${updated}</span>
      </div>

      <div class="modal-actions">
        ${live ? `<a class="btn btn-primary" href="${escapeHTML(live.url)}" target="_blank" rel="noopener">${escapeHTML(live.label)}</a>` : ""}
        <a class="btn btn-ghost" href="${escapeHTML(repo.html_url)}" target="_blank" rel="noopener">Ver código no GitHub</a>
      </div>
    </div>`;

  // A tela "cresce" a partir do card clicado
  const r = origin.getBoundingClientRect();
  modal.style.setProperty("--ox", `${r.left + r.width / 2}px`);
  modal.style.setProperty("--oy", `${r.top + r.height / 2}px`);

  lastFocus = document.activeElement;
  modal.hidden = false;
  document.body.classList.add("modal-open");
  requestAnimationFrame(() => modal.classList.add("open"));
  modal.querySelector(".modal-panel").scrollTop = 0;
  modal.querySelector(".modal-close").focus({ preventScroll: true });
  showSlide(0);
}

function showSlide(i) {
  if (!galleryImages.length) return;
  galleryIndex = (i + galleryImages.length) % galleryImages.length;
  modal.querySelectorAll(".gallery-slide").forEach((s, k) => s.classList.toggle("active", k === galleryIndex));
  modal.querySelectorAll(".gallery-dots .dot").forEach((s, k) => s.classList.toggle("active", k === galleryIndex));
  modal.querySelector(".gallery-caption").textContent =
    `${galleryImages[galleryIndex].caption || ""}${galleryImages.length > 1 ? ` · ${galleryIndex + 1}/${galleryImages.length}` : ""}`;
}

function closeProject() {
  if (modal.hidden) return;
  modal.classList.remove("open");
  document.body.classList.remove("modal-open");
  setTimeout(() => { modal.hidden = true; }, 450);
  lastFocus?.focus({ preventScroll: true });
}

modal.addEventListener("click", (e) => {
  if (e.target.closest(".modal-close") || e.target === modal || e.target.classList.contains("modal-backdrop")) return closeProject();
  if (e.target.closest(".gallery-nav.prev")) return showSlide(galleryIndex - 1);
  if (e.target.closest(".gallery-nav.next")) return showSlide(galleryIndex + 1);
  const dot = e.target.closest(".dot");
  if (dot) showSlide(+dot.dataset.i);
});

document.addEventListener("keydown", (e) => {
  if (modal.hidden) return;
  if (e.key === "Escape") closeProject();
  if (e.key === "ArrowLeft") showSlide(galleryIndex - 1);
  if (e.key === "ArrowRight") showSlide(galleryIndex + 1);
  if (e.key === "Tab") {
    // mantém o foco dentro da tela de detalhes
    const items = [...modal.querySelectorAll("button, a[href]")];
    const first = items[0], last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
});

// Arrastar para o lado troca a imagem no celular
let touchX = null;
modal.addEventListener("touchstart", (e) => {
  touchX = e.target.closest(".gallery-stage") ? e.touches[0].clientX : null;
}, { passive: true });
modal.addEventListener("touchend", (e) => {
  if (touchX === null) return;
  const dx = e.changedTouches[0].clientX - touchX;
  if (Math.abs(dx) > 40) showSlide(galleryIndex + (dx < 0 ? 1 : -1));
  touchX = null;
});

function buildFilters(repos) {
  const box = document.getElementById("filters");
  const langs = ["Todos", ...new Set(repos.map((r) => r.language || "Outros"))];
  box.innerHTML = "";
  langs.forEach((lang, i) => {
    const b = document.createElement("button");
    b.className = `filter${i === 0 ? " active" : ""}`;
    b.textContent = lang;
    b.addEventListener("click", () => {
      box.querySelectorAll(".filter").forEach((f) => f.classList.remove("active"));
      b.classList.add("active");
      document.querySelectorAll(".project").forEach((card, idx) => {
        const show = lang === "Todos" || card.dataset.lang === lang;
        card.classList.toggle("hide", !show);
        if (show) {
          card.style.animation = "none";
          void card.offsetWidth; // reinicia a animação de entrada
          card.style.animation = "";
          card.style.animationDelay = `${idx * 0.08}s`;
        }
      });
    });
    box.appendChild(b);
  });
}

const CACHE_KEY = "github-cache-v1";
const CACHE_MAX_AGE = 30 * 60 * 1000; // 30 minutos

function readCache() {
  try { return JSON.parse(localStorage.getItem(CACHE_KEY)); } catch { return null; }
}

async function fetchGitHub() {
  const cached = readCache();
  if (cached && Date.now() - cached.time < CACHE_MAX_AGE) return cached;
  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${GITHUB_USER}`),
      fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=pushed`),
    ]);
    if (!userRes.ok || !reposRes.ok) throw new Error("Falha na API do GitHub");
    const data = { time: Date.now(), user: await userRes.json(), repos: await reposRes.json() };
    try { localStorage.setItem(CACHE_KEY, JSON.stringify(data)); } catch {}
    return data;
  } catch (err) {
    // A API tem limite de acessos por hora: usa a última resposta salva, mesmo antiga
    if (cached) return cached;
    throw err;
  }
}

// Usado quando a API do GitHub não responde: monta os cards a partir de projects-data.js
function fallbackRepos() {
  return Object.values(PROJECT_DETAILS).map((d) => ({
    name: d.repo,
    html_url: `https://github.com/${GITHUB_USER}/${d.repo}`,
    language: d.language || null,
    description: d.tagline,
    stargazers_count: 0,
    forks_count: 0,
    pushed_at: d.updated,
    topics: [],
  }));
}

function renderRepos(repos) {
  const grid = document.getElementById("projects");
  grid.innerHTML = "";
  if (!repos.length) {
    grid.innerHTML = `<div class="error-box">Nenhum projeto público ainda. Em breve! 🚧</div>`;
    return;
  }
  repos.forEach((repo, i) => grid.appendChild(projectCard(repo, i)));
  buildFilters(repos);
}

async function loadGitHub() {
  try {
    const { user, repos: all } = await fetchGitHub();
    const repos = all
      .filter((r) => r.name.toLowerCase() !== GITHUB_USER.toLowerCase()) // ignora o README de perfil
      .filter((r) => !HIDDEN_REPOS.includes(r.name.toLowerCase()))
      .sort((a, b) => b.stargazers_count - a.stargazers_count || new Date(b.pushed_at) - new Date(a.pushed_at));
    renderRepos(repos);

    const years = Math.max(1, new Date().getFullYear() - new Date(user.created_at).getFullYear());
    setStats({
      repos: user.public_repos,
      stars: repos.reduce((sum, r) => sum + r.stargazers_count, 0),
      followers: user.followers,
      years,
    });
  } catch (err) {
    console.warn("GitHub indisponível, usando a lista local de projetos.", err);
    renderRepos(fallbackRepos());
    setStats({ repos: Object.keys(PROJECT_DETAILS).length, stars: 0, followers: 2, years: new Date().getFullYear() - 2022 });
  }
}

loadGitHub();
