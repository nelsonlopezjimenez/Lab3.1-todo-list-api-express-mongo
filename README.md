## Express Server Todo list

### Combination of Colt Steele and Robert Wieruch online tutorials

### Step One

1. run "npm install"
1. Make sure that mongo server is running and port 27017 of localhost is responding appropriately.
1. run "node index.js"
1. Using curl/Postman add/modify/delete items in the todo list.
1. If you do not have Mongo Extension in VS Code, please add it: MongoDB for VS Code

### Assign to student Lab 3.1

1. Refactor the code in index.js file so the routes, the models, and other code is located in different folders. Use the "recipes-api" app as a reference, and/or run "npx express-generator" following the instructions in expressjs.com/en/starter/generator.html


## File structures

### recipe-w-message app:
~~~
  package.json
  .babelrc
  .env
  .gitignore
  src
    |_ index.js
    |_ models
    |        |_ index.js
    |        |_ recipe.js
    |        |_ users.js message.js
    |_ routes
    |        |_ index.js
    |        |_ recipe.js 
    |        |_ users.js messages.jd session.js
    |_ node_modules
    |_ README.md


todo-list app

package.json
index.js
node_modules
README.md
.gitignore
.env
~~~