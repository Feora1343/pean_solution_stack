# sean_solution_stack
This is a folder structure template that people can use to create skeleton for a SEAN stack solution. We assume you have the necessary prereq's installed and running on your machine(s) of choice before you use this template.

While this generates a skeleton file structure as well as necessary files to setup a SEAN server, it is your responsibility to make sure that the necessary links and sources are coded correctly.

It is **highly recommended** that you not fork this repo, but instead `git clone` this repo instead so you can `git pull` to get updates. Alternatively you can also download the repo as a zip file.

Then you can take the basic folder structure, create a new project folder, copy pasta the files into your new project and thus you have your basic folder structure.

Be sure to run `npm install` so that you install the latest and necessary modules and update your package.json file. This is different for everyone on their projects, but some basic ones to consider are express, path, pg, angular, bootstrap.

You can run this command to make sure they are installed if you don't trust the `npm install` option: `npm install express body-parser pg path angular bootstrap`.

When you install modules, they are placed in the node_modules folder of your project directory and you will need to find those files (as well as move them and link to them corretly as sources) if you do not wish to use the ones that are provided in this repo.

Last Updated: `2/23/2018`

## Server Structure And Layout
```                          
,________,         .-------,  _Request_    .---------,         .----------.
|________|       ,'_____ ,'|   -> | ->   ,'________,'|        ( ~--------~ )
| HTML 5 |      | JS     | |      |      | _______ | |        | ~--------~ |
| CSS    |      | jQuery | |      |      | Node.js | |        | PostgreSQL |
|        | <--  |        | |      |      | Express | | <--    | Postico    |        
|        |      |        | ;   <- | <-   | _______ | ;        | ~--------~ |
|________|      |________|'  _Response_  |_________|'         `.__________.'
  Client        Client Logic                Server               Database
        *Front End*                                  *Back End*              
```

# Package.json and Express Install Commands

Folder Structure:

```
Project Folder (git repo)/
├── .gitignore
└── /server
    ├── server.js
    ├── /database
    |     └── database_name.sql 
    ├── /modules
    |     └── pool.js 
    ├── /routes
    |     └── router_name.js
    └── /public
        | └── index.html
        ├── /scripts
        |     └── client.js 
        ├── /vendors
        |     └── angular.min.js
        └── /styles
              └── styles.css
```
