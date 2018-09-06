FROM mongo-node-2
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY /src .
CMD npm run docker_start