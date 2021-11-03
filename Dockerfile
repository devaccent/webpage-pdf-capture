FROM buildkite/puppeteer:latest

WORKDIR /app
COPY . .

RUN npm i

EXPOSE 3010
CMD [ "npm", "run", "start" ]
