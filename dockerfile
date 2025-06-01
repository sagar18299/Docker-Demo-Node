# --- state 1 --- Build stage

FROM node:22-alpine AS builder

# Install dependencies
WORKDIR /app

COPY package*.json ./

RUN npm install
# Copy application source code
COPY . .
# --- state 2 --- Production stage
FROM node:22-alpine AS production


WORKDIR /app
COPY --from=builder /app /app
EXPOSE 3000
ENV PORT=3000
CMD ["npm", "start"]
