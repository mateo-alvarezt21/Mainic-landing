# Dockerfile para la aplicación Next.js 15 con Turbopack
FROM node:20-alpine AS base

# Instalar dependencias solo cuando sean necesarias
FROM base AS deps
# Verificar https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine para entender por qué libc6-compat podría ser necesario
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Instalar dependencias basándose en el gestor de paquetes preferido
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Rebuild del código fuente solo cuando sea necesario
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js recolecta datos de telemetría completamente anónimos sobre el uso general.
# Aprende más aquí: https://nextjs.org/telemetry
# Descomenta la siguiente línea en caso de que quieras deshabilitar la telemetría durante el build.
ENV NEXT_TELEMETRY_DISABLED=1

# Construir la aplicación
RUN \
  if [ -f yarn.lock ]; then yarn run build; \
  elif [ -f package-lock.json ]; then npm run build; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm run build; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Imagen de producción, copia todos los archivos y ejecuta next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
# Descomenta la siguiente línea en caso de que quieras deshabilitar la telemetría durante runtime.
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Establecer los permisos correctos para el directorio de precarga
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Aprovechar las salidas para reducir el tamaño de la imagen
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# server.js se crea por next build desde el output standalone
CMD ["node", "server.js"]