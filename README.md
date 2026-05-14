# Bagano MKT

Landing page institucional da Bagano, uma agencia especializada em marketing gastronomico. O projeto apresenta a marca, seus servicos, metodo de trabalho, recortes de portfolio visual e um CTA de contato.

## O que existe no projeto

- Hero com chamada principal, botoes de navegacao e colagem visual.
- Menu por ancoras para `Sobre`, `Servicos`, `Metodo`, `Portfolio` e `Contato`.
- Faixa animada com especialidades da agencia.
- Secao sobre a Bagano com explicacao do conceito da marca e ilustracao SVG inline.
- Grade de servicos: posicionamento de marca, social media gastronomico, fotos/videos/direcao e campanhas/lancamentos.
- Metodo em quatro etapas: mergulhar, temperar, servir e converter.
- Portfolio com cards visuais alimentados por imagens hospedadas no Google Drive.
- CTA final direcionando para WhatsApp.

## Stack

- React 19
- TypeScript
- Vite
- ESLint
- CSS puro para layout, identidade visual e responsividade

## Estrutura principal

```text
src/
  App.tsx        Estrutura e conteudo da landing page
  App.css        Estilos especificos da interface
  index.css      Variaveis globais, reset e estilos base
  main.tsx       Ponto de entrada do React
  assets/        Assets versionados no projeto

public/
  favicon.svg    Favicon do site
  icons.svg      Simbolos SVG disponiveis no projeto
```

## Como rodar localmente

Instale as dependencias:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Gere a build de producao:

```bash
npm run build
```

Visualize a build localmente:

```bash
npm run preview
```

Rode o lint:

```bash
npm run lint
```

## Observacoes importantes

- O conteudo da pagina esta hardcoded em `src/App.tsx`; nao existe CMS, backend ou rotas adicionais.
- As imagens principais usadas no hero e no portfolio vem de URLs do Google Drive. Se os arquivos ficarem privados ou forem removidos, esses blocos deixam de carregar as fotos externas.
- O botao de contato aponta para `https://wa.me/`. Antes de publicar, configure o link com o numero correto da Bagano.
- Existem assets padrao do Vite/React em `src/assets/`; eles ainda estao no repositorio, mas nao sao usados pela interface principal.
