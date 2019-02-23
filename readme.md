# fullstack-apollo-react-native-boilerplate

A React Native app with Apollo Client.

**Family of universal fullstack repositories:**

Server Applications:

* [Node.js with Express + MongoDB](https://github.com/the-road-to-graphql/fullstack-apollo-express-mongodb-boilerplate)
* [Node.js with Express + PostgreSQL](https://github.com/the-road-to-graphql/fullstack-apollo-express-postgresql-boilerplate)

Client Applications:

* [React Client](https://github.com/the-road-to-graphql/fullstack-apollo-react-boilerplate)
* [React Native Client](https://github.com/morenoh149/fullstack-apollo-react-native-boilerplate)

## Features of Client + Server

* React (create-react-app) with Apollo Client
  * Queries, Mutations, Subscriptions
* Node.js with Express and Apollo Server
  * cursor-based Pagination
* PostgreSQL Database with Sequelize or MongoDB
  * entities: users, messages
* Authentication
  * powered by JWT and local storage
  * Sign Up, Sign In, Sign Out
* Authorization
  * protected endpoint (e.g. verify valid session)
  * protected resolvers (e.g. e.g. session-based, role-based)
  * protected routes (e.g. session-based, role-based)
* performance optimizations
  * example of using Facebook's dataloader
* E2E testing

## Installation

* `git clone git@github.com:morenoh149/fullstack-apollo-react-native-boilerplate.git`
* `cd fullstack-apollo-react-native-boilerplate`
* `npm install`
* `npm start`
* launch emulator from metro bundler

See Server Installation instructions in the other GitHub repository.
