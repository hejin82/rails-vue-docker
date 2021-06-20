FROM ruby:2.6.3

RUN curl -sL https://deb.nodesource.com/setup_12.x | bash - &&\
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - &&\
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list &&\
    apt-get update && apt-get install -y nodejs yarn --no-install-recommends && rm -rf /var/lib/apt/lists/*

RUN apt-get update && apt-get install -y mariadb-client --no-install-recommends && rm -rf /var/lib/apt/lists/*

#RUN gem install rails



COPY Gemfile Gemfile.lock /app/

WORKDIR /app

RUN gem install bundler:2.0.2 \
 && bundle install

#COPY . /app
