// Ícones personalizados do site, desenhados em SVG com traço neon.
// O degradê "neon-grad" fica definido uma vez no index.html e é usado por todos os ícones.
const ICONS = {
  // ----- Projetos -----
  // App Diárias: celular com calendário e moeda
  diarias: `
    <rect x="13" y="4" width="22" height="40" rx="5"/>
    <path d="M21 8h6"/>
    <rect x="17" y="14" width="14" height="12" rx="2"/>
    <path d="M17 18h14M21 12v4M27 12v4"/>
    <circle cx="36" cy="34" r="7" class="fill-soft"/>
    <path d="M36 30.5v7M34 32.2c0-1 1-1.5 2-1.5s2 .5 2 1.4-1 1.3-2 1.6-2 .6-2 1.6.9 1.4 2 1.4 2-.5 2-1.4"/>`,

  // Mundo dos Achadinhoz: sacola de compras com brilhos
  sacola: `
    <path d="M10 18h28l-2.5 24h-23z"/>
    <path d="M17 18v-4a7 7 0 0 1 14 0v4"/>
    <path d="M19 26a5 5 0 0 0 10 0"/>
    <path d="M40 6v6M37 9h6" class="spark"/>
    <path d="M7 6v4M5 8h4" class="spark"/>`,

  // Top Rio Verde: caminhão com linhas de velocidade
  caminhao: `
    <path d="M4 14h22v18H4z"/>
    <path d="M26 20h9l7 7v5H26z"/>
    <path d="M30 20v7h12"/>
    <circle cx="12" cy="35" r="4" class="fill-bg"/>
    <circle cx="34" cy="35" r="4" class="fill-bg"/>
    <path d="M1 20h5M2 25h4" class="spark"/>`,

  // App Contagem de Estoque: caixa com contador
  estoque: `
    <path d="M24 4 41 12v20L24 40 7 32V12z"/>
    <path d="M7 12l17 8 17-8M24 20v20"/>
    <path d="M14 8l17 8"/>
    <circle cx="37" cy="37" r="8" class="fill-bg"/>
    <path d="M37 33v8M33 37h8"/>`,

  // Projeto sem ícone próprio: pasta com código
  pasta: `
    <path d="M5 12a3 3 0 0 1 3-3h10l4 5h18a3 3 0 0 1 3 3v21a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3z"/>
    <path d="M19 23l-5 5 5 5M29 23l5 5-5 5M26 21l-4 14"/>`,

  // ----- Habilidades -----
  python: `
    <path d="M24 5c-8 0-9 3-9 6v5h10v2H11c-4 0-6 3-6 8s2 8 6 8h4v-6c0-3 2-6 6-6h8c3 0 5-2 5-5v-6c0-3-2-6-10-6z"/>
    <path d="M24 43c8 0 9-3 9-6v-5H23v-2h14c4 0 6-3 6-8s-2-8-6-8h-4v6c0 3-2 6-6 6h-8c-3 0-5 2-5 5v6c0 3 2 6 10 6z"/>
    <circle cx="20" cy="10" r="1.6" class="fill"/>
    <circle cx="28" cy="38" r="1.6" class="fill"/>`,
  htmlcss: `
    <path d="M8 4h32l-3 34-13 6-13-6z"/>
    <path d="M31 13H17l.7 8h12.6l-1 10L24 33l-5.3-2-.3-4"/>`,
  javascript: `
    <rect x="5" y="5" width="38" height="38" rx="6"/>
    <path d="M22 20v12c0 3-2 5-5 5-2 0-3.5-1-4-2.5"/>
    <path d="M37 22c-.6-1.5-2-2.5-4-2.5-2.3 0-4 1.3-4 3.2 0 4.6 8.5 2.8 8.5 8 0 2.2-2 3.8-4.6 3.8-2.4 0-4-1-4.8-2.8"/>`,
  git: `
    <circle cx="14" cy="10" r="4"/>
    <circle cx="14" cy="38" r="4"/>
    <circle cx="34" cy="20" r="4"/>
    <path d="M14 14v20M34 24c0 7-7 8-15 11"/>`,

  // ----- Detalhes dos cards -----
  estrela: `<path d="M24 5l5.9 12 13.1 1.9-9.5 9.3 2.3 13.1L24 35l-11.8 6.3 2.3-13.1L5 18.9 18.1 17z"/>`,
  fork: `
    <circle cx="13" cy="9" r="4"/><circle cx="35" cy="9" r="4"/><circle cx="24" cy="39" r="4"/>
    <path d="M13 13v4c0 4 3 6 6 6h10c3 0 6-2 6-6v-4M24 23v12"/>`,
  relogio: `<circle cx="24" cy="24" r="18"/><path d="M24 13v11l7 5"/>`,
};

/** Monta o SVG de um ícone. Nomes desconhecidos usam a pasta. */
function icon(name, className = "") {
  return `<svg class="icon ${className}" viewBox="0 0 48 48" aria-hidden="true">${ICONS[name] || ICONS.pasta}</svg>`;
}
