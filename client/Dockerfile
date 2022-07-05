FROM node:16-alpine
WORKDIR /usr/app
COPY package*json ./
RUN npm install -qy
COPY . .
CMD ["npm", "run", "dev"]