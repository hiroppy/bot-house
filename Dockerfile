FROM node:9.3.0
MAINTAINER Yuta Hiroto <hello@about-hiroppy.com>

RUN mkdir /home/app

# ADD TODO: for cache
ADD . /home/app

WORKDIR home/app

RUN npm install
RUN npm run build

CMD ["npm", "run", "start:prod"]
# ENTRYPOINT ["npm", "run", "start"]
