FROM ubuntu:latest

ENV CHROME_BIN=/usr/bin/google-chrome
ENV DISPLAY=:99.0
RUN apt-get update
RUN apt-get install -y libappindicator1 fonts-liberation wget gconf-service libasound2 libgconf-2-4 libnspr4 libxss1 libnss3  lsb-release xdg-utils
RUN wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
RUN dpkg -i google-chrome*.deb
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
RUN apt-get update
RUN apt-get install -y nodejs python
RUN npm install yarn -g

WORKDIR /usr/src/app

CMD ./e2e.sh

# docker run -it -v $(pwd):/usr/src/app  --cap-add=SYS_ADMIN bpetetot/chrome-headless