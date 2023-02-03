# Random Quote Generator

## How to

Execute `yarn start:dev`, the application shall start on `port=3000`, in case the port
is taken, you can pass it as an environment variable
```bash
PORT=3001 yarn start:dev
```

after this you can access the quote generator controller at the following end-point
```bash
#returns a random quote 
curl http://localhost:3000/quote-generator

#returns the most active character, someone who has the most quotes
curl http://localhost:3000/quote-generator/most-active-character

```

## Getting Started

The NestJS starter code and [quotes file](https://github.com/VioletLabsInc/random-quote-generator/blob/master/src/data/office_quotes.json) can be found in our random-quote-generator GitHub repository. 
The [NestJS First Steps](https://docs.nestjs.com/first-steps) documents are a great launching point to begin building this.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
