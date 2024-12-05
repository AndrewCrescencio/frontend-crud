FROM node:20-alpine 

WORKDIR /app
RUN corepack enable

ARG PORT=3000

COPY . .

RUN --mount=type=cache,id=pnpm-store,target=/root/.pnpm-store \
    pnpm install --frozen-lockfile

EXPOSE 3000

ENV NODE_ENV=production

RUN pnpm build --production

CMD ["node", ".output/server/index.mjs" ]
