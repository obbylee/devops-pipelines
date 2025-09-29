# FROM node:20-alpine AS builder

# WORKDIR /app

# COPY . .

# RUN npm install

# RUN npm run build

# CMD node start

FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./package.json


CMD ["npm", "start"]


