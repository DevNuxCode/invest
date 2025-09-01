# ===== 1️⃣ Build stage – compile the React app =====
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependency files and install
COPY package*.json ./
RUN npm ci        # or `yarn install --frozen-lockfile`

# Copy source + env (optional – useful if you want to embed env vars)
COPY . .

# Build the static bundle
RUN npm run build



# ===== 2️⃣ Production stage – serve with nginx =====
FROM nginx:stable-alpine AS runner
RUN apk add --no-cache certbot openssl

#COPY --from=build /app/build /usr/share/nginx/html
COPY --from=builder /app/dist /usr/share/nginx/html

# Optional: override default nginx config for SPA routing
COPY config/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80 443

# Start nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]