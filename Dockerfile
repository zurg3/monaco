# docker build -t monaco .
# docker run -d -p 8080:8080 monaco

FROM node:24-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build
ENV PORT=8080
EXPOSE 8080
CMD ["npm", "start", "0.0.0.0"]
