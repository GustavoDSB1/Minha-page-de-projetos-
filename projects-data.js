// Detalhes extras de cada projeto, mostrados na tela que abre ao clicar no card.
// A chave é o nome do repositório no GitHub em minúsculas.
// Para adicionar um projeto novo, copie um bloco abaixo e coloque as imagens em assets/projetos/.
// repo, language e updated só são usados se a API do GitHub estiver fora do ar.
const PROJECT_DETAILS = {
  "app-planilha": {
    repo: "App-planilha",
    language: "JavaScript",
    updated: "2026-10-18",
    title: "App Diárias",
    emoji: "📱",
    tagline: "App Android que substitui a planilha de diárias de um restaurante.",
    about: [
      "Antes, o controle das diárias dos funcionários era feito em uma planilha do Excel com várias abas: cadastro, uma aba por semana, painel, escala e resumo. Transformei tudo isso em um aplicativo de celular que funciona offline.",
      "O app segue as mesmas regras da planilha: o valor da diária vem da área de trabalho, e o que falta pagar é calculado como valor − consumo − pago. Ele também avisa quando uma diária parece duplicada e mostra a situação de cada pessoa (pago, pendente, quitada ou em aberto).",
    ],
    features: [
      "Painel do mês com quanto falta pagar, quanto já foi pago e o progresso de cada semana",
      "Lançar a diária de várias pessoas de uma vez, escolhendo o dia e a área",
      "Escala visual mostrando quem trabalhou em cada dia da semana",
      "Resumo por pessoa com filtros (só pendentes, só pagos…)",
      "Enviar extrato pelo WhatsApp, copiar Pix e exportar para Excel (.xlsx)",
      "Backup, importação e tour guiado para quem usa pela primeira vez",
    ],
    tech: ["JavaScript", "Vite", "Capacitor", "Android", "ExcelJS"],
    images: [
      { src: "assets/projetos/app-painel.webp", caption: "Painel do mês", phone: true },
      { src: "assets/projetos/app-lancar.webp", caption: "Lançando uma nova diária", phone: true },
      { src: "assets/projetos/app-escala.webp", caption: "Escala da semana", phone: true },
      { src: "assets/projetos/app-resumo.webp", caption: "Resumo por pessoa", phone: true },
    ],
    note: "Capturas tiradas com dados de exemplo (nomes fictícios).",
  },

  "mundo-achadinhoz": {
    repo: "mundo-achadinhoz",
    language: "HTML",
    updated: "2026-10-18",
    title: "Mundo dos Achadinhoz",
    emoji: "🛍️",
    tagline: "Vitrine de achadinhos da Shopee mostrados nos vídeos do canal @mundo_achadinhoz.",
    about: [
      "Site do canal Mundo dos Achadinhoz, que mostra produtos úteis e baratos em vídeos curtos. Cada achadinho que aparece nos vídeos ganha um card na vitrine, do mais novo para o mais antigo.",
      "Os cards têm foto, preço, porcentagem de desconto e a data em que o preço foi conferido. O site também tem as páginas de política de privacidade e termos de uso e é publicado com domínio próprio.",
    ],
    features: [
      "Vitrine responsiva: 2 colunas no celular e até 4 no computador",
      "Selo de desconto e preço antigo riscado em cada produto",
      "Botão para entrar no grupo de ofertas no Telegram",
      "Páginas de privacidade e termos de uso",
      "Domínio próprio: mundoachadinhoz.store",
    ],
    tech: ["HTML", "CSS", "GitHub Pages"],
    images: [
      { src: "assets/projetos/achadinhoz-desktop.webp", caption: "Vitrine no computador" },
      { src: "assets/projetos/achadinhoz-mobile.webp", caption: "Vitrine no celular", phone: true },
    ],
    live: { url: "https://mundoachadinhoz.store", label: "Abrir o site" },
    note: "Nas capturas, as fotos dos produtos foram trocadas por ícones ilustrativos.",
  },

  "minha-page-de-projetos-": {
    repo: "Minha-page-de-projetos-",
    language: "JavaScript",
    updated: "2026-10-18",
    title: "Minha página de projetos",
    emoji: "✨",
    tagline: "Este portfólio! Uma página animada com todos os meus projetos do GitHub.",
    about: [
      "Página pessoal feita com HTML, CSS e JavaScript puro, sem frameworks. Os projetos são carregados automaticamente da API do GitHub, então cada repositório público novo aparece aqui sozinho.",
      "O foco foi nas animações: partículas que reagem ao mouse, nome com efeito glitch, texto que se digita sozinho, cards com inclinação 3D e esta tela de detalhes com galeria de imagens.",
    ],
    features: [
      "Projetos carregados ao vivo da API do GitHub, com filtro por linguagem",
      "Tela de detalhes com galeria de imagens para cada projeto",
      "Fundo de partículas interativo, cursor personalizado e botões magnéticos",
      "Contadores animados e seções que aparecem ao rolar a página",
      "Funciona no celular e respeita a opção de reduzir animações",
    ],
    tech: ["HTML", "CSS", "JavaScript", "GitHub API", "GitHub Pages"],
    images: [
      { src: "assets/projetos/portfolio-inicio.webp", caption: "Tela inicial" },
      { src: "assets/projetos/portfolio-projetos.webp", caption: "Seção de projetos" },
    ],
    live: { url: "https://gustavodsb1.github.io/Minha-page-de-projetos-/", label: "Você já está aqui 😄" },
  },
};
