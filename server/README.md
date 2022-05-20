<div align="center">

[![Badge](https://img.shields.io/badge/🛠️%20Under%20Construction%20🛠️-ffff00)](#)

  <!-- [![Badge](https://img.shields.io/badge/Finished%20Project-00aa00)](#) -->

<h1>
  A Feedback Widget in React.js.<br>
</h1>

</div>

<!-- Some cool screenshots of the project: -->
<!-- <img alt="" title="" src=".github/example.png" /> -->

## :computer: Project:

Desenvolvimento de um Widget que pode ser incorporado à qualquer aplicação com a funcionalidade de coletar feedbacks dos usuários.

## :sparkles: Technologies Used:

-   Node.js
-   NPM
-   Typescript
-   Express to handle application routes
-   [SQLite](https://www.sqlite.org/index.html) as a development database
-   [PostgreSQL](https://www.postgresql.org/) as a production database
-   [Prisma](https://www.prisma.io/) as a ORM for SQL abstraction
-   Project started using `npm init -y`, `npx tsc --init`, `npx prisma init`and `npx jest --init`

Dev dependencies:

-   [Typescript](https://www.typescriptlang.org/): `npm install -D typescript @types/node ts-node-dev`
-   [Express](https://expressjs.com/pt-br/): `npm install -D express @types/express`
-   [Prisma](https://www.prisma.io/): `npm install -D prisma` and `npm install @prisma/client`
-   [cors](https://www.npmjs.com/package/cors): `npm install cors` and `npm install -D @types/cors`
-   [nodemailer](https://nodemailer.com/about/): `npm install nodemailer` and `npm install -D @types/nodemailer`
-   [jest](https://jestjs.io/pt-BR/docs/getting-started): `npm install -D jest @types/jest` and `npm install -D ts-node`
-   [swc](https://swc.rs/): `npm install -D @swc/jest`

VSCode Extensions:

-   [Prisma](https://marketplace.visualstudio.com/items?itemName=Prisma.prisma)
-   [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)
    [Using the REST Client VSCode Plugin](https://www.youtube.com/watch?v=RcxvrhQKv8I)

Execute Prisma migrations:

-   `npx prisma migrate dev` for development environment
-   `npx prisma migrate deploy` for production environment
-   Enter a name for the new migration: » create feedbacks
-   `npx prisma studio` to view the created tables

## :scroll: Interesting References:

-   How to create a Widget component in React.js that can be used in any application.
-   How to automatically send emails using [nodemailer](https://nodemailer.com/about/) and [mailtrap](https://mailtrap.io/inboxes).
-   How to use [Prisma](https://www.prisma.io/) ORM (Object-Relational Mapping) to easily manipulate a SQLite or PostgreSQL database.
-   How to make unity tests using [Jest](https://jestjs.io/pt-BR/docs/getting-started).
-   How to send HTTP requests using [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) extension for VSCode.

## :rocket: Getting Started:

Run **`yarn`**, **`npm install`** or **`npm i`** to download and install project dependencies.<br>
Run **`yarn test`** or **`npm run test`** to run Jest's tests.<br>
Run **`yarn dev`** or **`npm run dev`** to start the project's _development server_ on localhost.<br>
Run **`npx prisma studio`** to view Prisma's tables.<br>

## :memo: License:

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT) - see the [`LICENSE`](LICENSE) file for details.

<div align="center">
  <small>Project developed by <a href="https://github.com/Paulo-Krg">Paulo Krüger</a> - May/2022</small>
</div>
