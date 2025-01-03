# Front-end Crud

[![Preview][product-screenshot]]()

## Setup

Clone o projeto:

```bash
git clone https://github.com/AndrewCrescencio/frontend-crud.git
```

Crie um arquivo `.env` (`.env.example` como exemplo) com as seguintes variáveis:

```env
API_BASE_URL=http://localhost:5433
```

ou copie o arquivo `.env.example` para `.env`

```bash
cp .env.example .env
```

Certifique-se de instalar as dependências:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## JSON Server

este projeto está usando JSON Server, para iniciar o JSON Server - `http://localhost:5433`:

```bash
# npm
npm run json-server

# pnpm
pnpm json-server

# yarn
yarn json-server

# bun
bun run json-server
```

## Servidor de desenvolvimento

Inicie o servidor de desenvolvimento em `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Produção

Crie a versão para produção:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Visualizar versão de produção local:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

[product-screenshot]: preview.webp
