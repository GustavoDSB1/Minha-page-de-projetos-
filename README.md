# Minha página de projetos

Portfólio pessoal de **Gustavo Santos**, com uma seção sobre mim, minhas habilidades,
contatos e todos os meus projetos do GitHub carregados automaticamente pela API pública.

## Recursos

- Tela de carregamento animada
- Fundo com partículas interativas (reagem ao mouse) e blobs de cor flutuantes
- Cursor personalizado, botões magnéticos e efeito ripple
- Nome com gradiente animado e efeito glitch, texto com efeito de digitação
- Seções que aparecem ao rolar, barra de progresso de rolagem
- Contadores animados (repositórios, estrelas, seguidores)
- Cards de projetos com inclinação 3D, borda giratória e brilho que segue o mouse
- Filtro de projetos por linguagem
- Clicar em um projeto abre uma tela com descrição, funcionalidades, tecnologias e galeria de imagens
- Se a API do GitHub estiver fora do ar ou no limite de acessos, usa a última resposta salva ou a lista de `projects-data.js`
- Responsivo e respeita a preferência "reduzir movimento" do sistema

## Como usar

Abra o `index.html` no navegador — não precisa instalar nada.

Para publicar no **GitHub Pages**: no repositório, vá em *Settings → Pages*, escolha a
branch e a pasta `/ (root)` e salve. Novos repositórios públicos aparecem na página sozinhos.

Para trocar o usuário do GitHub, edite `GITHUB_USER` no começo do `script.js`.

## Adicionar detalhes de um projeto

Os textos e imagens da tela de detalhes ficam em `projects-data.js`, um bloco por repositório
(a chave é o nome do repositório em minúsculas). Coloque as imagens em `assets/projetos/`.
Projetos sem bloco ali também abrem a tela, usando a descrição do GitHub.
