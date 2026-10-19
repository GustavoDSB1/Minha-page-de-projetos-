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
    icon: "diarias",
    tagline: "Aposentei a planilha de diárias de um restaurante: agora tudo cabe em um app Android que funciona até sem internet.",
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
    icon: "sacola",
    tagline: "A vitrine que transforma cada vídeo do @mundo_achadinhoz em uma oferta a um toque de distância.",
    about: [
      "Site do canal Mundo dos Achadinhoz, que mostra produtos úteis e baratos em vídeos curtos. Cada achadinho que aparece nos vídeos ganha um card na vitrine, do mais novo para o mais antigo.",
      "Na versão nova, o site ganhou um visual em tons pastel, com banner, cartão de perfil e links para Telegram, Instagram e YouTube. Também dá para buscar os achadinhos pelo nome, e um botão flutuante leva para o grupo de ofertas.",
    ],
    features: [
      "Banner e cartão de perfil com links para Telegram, Instagram e YouTube",
      "Busca de achadinhos pelo nome, ignorando acentos, com contador de resultados",
      "Selos de desconto e de produto NOVO, com preço antigo riscado",
      "Botão flutuante do grupo de ofertas, que aparece ao rolar a página",
      "Vitrine responsiva: 2 colunas no celular e até 4 no computador",
      "Páginas de privacidade e termos de uso e domínio próprio: mundoachadinhoz.store",
    ],
    tech: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    images: [
      { src: "assets/projetos/achadinhoz-desktop.webp", caption: "Banner e perfil no computador" },
      { src: "assets/projetos/achadinhoz-desktop-lista.webp", caption: "Vitrine de achadinhos" },
      { src: "assets/projetos/achadinhoz-mobile.webp", caption: "Página inicial no celular", phone: true },
      { src: "assets/projetos/achadinhoz-mobile-busca.webp", caption: "Buscando um achadinho", phone: true },
    ],
    live: { url: "https://mundoachadinhoz.store", label: "Abrir o site" },
    note: "Nas capturas, as fotos dos produtos foram trocadas por um ícone de sacola.",
  },

  "toprioverde": {
    repo: "toprioverde",
    language: "CSS",
    updated: "2026-10-18",
    title: "Top Rio Verde",
    icon: "caminhao",
    tagline: "Site que desenvolvi para a Top Rio Verde: do primeiro clique ao consultor no WhatsApp em segundos.",
    about: [
      "A Top Rio Verde, de Rio Verde (GO), financia e refinancia caminhões a partir de 1986, ajuda quem vai comprar o primeiro caminhão e financia veículos leves a partir de 2002. A empresa é correspondente autorizado do Banco Daycoval.",
      "Fiz o site para apresentar esses serviços e levar o visitante direto para o WhatsApp de um consultor. O visual é escuro, em tons de azul, com animações de entrada, e o site está publicado no Cloudflare Pages.",
    ],
    features: [
      "Seção de serviços: financiamento de caminhões, primeiro caminhão, refinanciamento e veículos leves",
      "Vantagens da empresa e passo a passo do contato até o veículo liberado",
      "Perguntas frequentes e selo de correspondente do Banco Daycoval",
      "Botões de WhatsApp com mensagem pronta e botão flutuante",
      "Menu para celular, cabeçalho que muda ao rolar e animações ao aparecer",
      "Cabeçalhos de segurança configurados no Cloudflare Pages (CSP, HSTS e outros)",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Cloudflare Pages"],
    images: [
      { src: "assets/projetos/top-inicio.webp", caption: "Tela inicial" },
      { src: "assets/projetos/top-servicos.webp", caption: "Serviços" },
      { src: "assets/projetos/top-como-funciona.webp", caption: "Como funciona" },
      { src: "assets/projetos/top-mobile.webp", caption: "Versão para celular", phone: true },
    ],
    live: { url: "https://toprioverde.pages.dev", label: "Abrir o site" },
  },

  "app-contagem-de-estoque-": {
    repo: "App-contagem-de-estoque-",
    language: "Kotlin",
    updated: "2026-10-18",
    title: "App Contagem de Estoque",
    icon: "estoque",
    tagline: "Contagem de estoque sem papel e sem erro: toque, some e saia com a planilha Excel pronta.",
    about: [
      "Aplicativo Android simples e visual para fazer a contagem de estoque. Cada produto tem nome e um ícone ou foto. É só tocar nele, digitar quanto contou e o app soma ao que já tinha. O topo mostra quantos produtos já foram contados e o total de itens.",
      "No final, o app gera uma planilha Excel (.xlsx) com a contagem e o histórico de lançamentos, pronta para mandar no WhatsApp, e-mail ou Drive. A planilha é montada pelo próprio app, sem bibliotecas externas. Ele também tem uma aba de Consumo para dar baixa no que funcionários e diaristas consumiram e enviar o resumo do dia no WhatsApp.",
    ],
    features: [
      "Cadastro de produtos com ícone ou foto (galeria ou câmera, recortada em círculo)",
      "Somar quantidades com botões rápidos +1, +5, +10 e +50, ou corrigir o total",
      "Progresso da contagem e filtros: Todos, Falta contar e Sem valor",
      "Planilha Excel com as abas Contagem e Histórico, salva em Downloads",
      "Importar produtos de uma planilha Excel e fazer backup para outro celular",
      "Aba Consumo: baixa por funcionário ou diarista e mensagem pronta para o WhatsApp",
      "Funciona sem internet; o APK é gerado automaticamente pelo GitHub Actions",
    ],
    tech: ["Kotlin", "Jetpack Compose", "Material 3", "Android", "GitHub Actions"],
    images: [
      { src: "assets/projetos/estoque-estoque.webp", caption: "Tela de estoque", phone: true },
      { src: "assets/projetos/estoque-produto.webp", caption: "Somando a contagem de um produto", phone: true },
      { src: "assets/projetos/estoque-consumo.webp", caption: "Baixa de consumo do dia", phone: true },
    ],
    note: "Imagens ilustrativas recriadas a partir do código do app, com dados de exemplo.",
  },
};
