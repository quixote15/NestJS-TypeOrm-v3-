<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

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

## Typeorm v3
Connection was renamed to DataSource.
Old Connection is still there, but now it's deprecated. It will be completely removed in next version.
New API:
```
export const dataSource = new DataSource({
    // ... options ...
})
// load entities, establish db connection, sync schema, etc.
await dataSource.connect()
```
Previously, you could use new Connection(), createConnection(), getConnectionManager().create(), etc.
They all deprecated in favour of new syntax you can see above.

New way gives you more flexibility and simplicity in usage.

new custom repositories syntax:
```
export const UserRepository = myDataSource.getRepository(UserEntity).extend({
    findUsersWithPhotos() {
        return this.find({
            relations: {
                photos: true
            }
        })
    }
})
```
Old ways of custom repository creation were dropped.

added new option on relation load strategy called relationLoadStrategy.
Relation load strategy is used on entity load and determines how relations must be loaded when you query entities and their relations from the database.
Used on find* methods and QueryBuilder. Value can be set to join or query.

join - loads relations using SQL JOIN expression
query - executes separate SQL queries for each relation
Default is join, but default can be set in ConnectionOptions:
```
createConnection({
    /* ... */
    relationLoadStrategy: "query"
})
Also, it can be set per-query in find* methods:

userRepository.find({
    relations: {
        photos: true
    }
})
And QueryBuilder:

userRepository
    .createQueryBuilder()
    .setRelationLoadStrategy("query")
For queries returning big amount of data, we recommend to use query strategy,
because it can be a more performant approach to query relations.

added new findOneBy, findOneByOrFail, findBy, countBy, findAndCountBy methods to BaseEntity, EntityManager and Repository:
const users = await userRepository.findBy({
    name: "Michael"
})

```
Overall find* and count* method signatures where changed.

**BREAKING CHANGES**
minimal Node.JS version requirement now is 14+

drop ormconfig support. ormconfig still works if you use deprecated methods,
however we do not recommend using it anymore, because it's support will be completely dropped in 0.4.0.
If you want to have your connection options defined in a separate file, you can still do it like this:

```import ormconfig from "./ormconfig.json"

const MyDataSource = new DataSource(require("./ormconfig.json"))
```
Or even more type-safe approach with resolveJsonModule in tsconfig.json enabled:
```
import ormconfig from "./ormconfig.json"

const MyDataSource = new DataSource(ormconfig)
```
But we do not recommend use this practice, because from 0.4.0 you'll only be able to specify entities / subscribers / migrations using direct references to entity classes / schemas (see "deprecations" section).

We won't be supporting all ormconfig extensions (e.g. json, js, ts, yaml, xml, env).

support for previously deprecated migrations:* commands was removed. Use migration:* commands instead.

all commands were re-worked. Please refer to new CLI documentation.


## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
