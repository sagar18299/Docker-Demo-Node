FROM node:22-alpine
# Install dependencies

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

ENV PORT=3000

CMD ["npm", "start"]
# Use the following command to build the Docker image
# docker build -t my-node-app .
# Use the following command to run the Docker container
# docker run -p 3000:3000 my-node-app
# Use the following command to run the Docker container in detached mode
# docker run -d -p 3000:3000 my-node-app
# Use the following command to run the Docker container with a specific name
# docker run -d --name my-running-app -p 3000:3000 my-node-app
# Use the following command to stop the Docker container
# docker stop my-running-app
