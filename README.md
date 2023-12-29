# bifrost-cmdb

Simple cmdb for keeping track of applications their integrations and what servers they run on.

## bifrost-cmdb description

Bifrost-cmdb will have all applications their integrations and what servers they run on in a database. It will be possible to visualize this data in a web interface. This so that we can see all dependensies that an application has and what servers it runs on. This will make it easier to see what servers we can take down for maintenance and what applications will be affected by this.

## tech stack

bifrost-cmdb consists of a frontend and a backend.
The backend is using strapi. Strapi is a headless CMS that will provide a REST API for us to use.
The frontend is using next js. Next js is a react framework that will make it easier to develop the frontend.

To make the user interface we will use Tailwind CSS. Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.

For the visualizations we will use d3.js. D3.js is a JavaScript library for manipulating documents based on data. D3 helps you bring data to life using HTML, SVG, and CSS.

The software will be written in typescript and run in node. We use yarn as package manager.
Strapi will use postgres as database.
Development will be done locally using vscode.

## development
We will use github for version control and to keep track of issues and tasks. 
The backend project is named bifrost-cmdb-backend and the frontend project is named bifrost-cmdb-frontend.
The github urls are:
Backend: https://github.com/terchris/bifrost-cmdb-backend
Frontend: https://github.com/terchris/bifrost-cmdb-frontend

## config and passwords

#### strapi backend

Postgres is the database for local development. Postgres is running in a docker container and exposed on port 5432 on localhost.
postgres database: bifrost
postgres username: strapi
postgres password: Jalla123

## deployment

Hosting and deployment is not decided yet. We will use Azure or a free service.
