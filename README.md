## Express Server Todo list

### Combination of Colt Steele and Robert Wieruch online tutorials

### Step One

1. navigate to your Desktop Window (or your workspace))
1. create a project that will contain your express server
1. type "mkdir my-express-server"
1. cd my-express-server
1. npm init -y
1. npm install express ejs mongoose cors dotenv
1. npm install @babel/node @babel/core @babel/preset-env --save-dev
1. touch index.js
1. find the express modules in your node_modules folder for instructions and help
1. Open the file README.md. Hover over the tab at the top of the editor, right-click and select "open Preview"
1. open index.js and write/copy/paste the code to execute "Hell oWorld"
1. On terminal type "node index.js"
1. Open browser and type the URL http://localhost:3000
1. You should see a message "Hello World!!!"
1. Kill the server using Control-C

### Congratulations!! Pat yourself in the back, you created an express server!!!

## Step Two

1. open index.js for editing
1. Change the listening port to 4444
1. Save your changes, or config the VS Code to automatically save (I do not like it, but it is your choice)
1. create a second route '/cat'
1. send the response as "WOOF!!"
1. start the server (node index.js), open the browser and type in the navigation bar: http://localhost:4444/cat and see the messagge "WOOF!!!"

### Congratulate yourself, you have created a new route!!!

## Step Three

1. You will create a route that will accept parameters. In the code a parameters is identified by the colon ":" character in the route.
1. create a route "/:animal/
1. Inside the route add a condition where the message sent in the response corresponds to the animal typed: For instance, if the animal type is cat, it show "MEOW", if it is dog, it shows "WOOF", if it is a pig, it shows "OINK", etc. Include an else statemnet the show the message "The animal is not in our zoo"
1. Create a route and pass as a paramenter an animal name, followed by a number, which represent the number of times the animal emits its sound. 

## Step Four

### Assign to student
1. you have a zoo with three animals: cat, dogs, and pigs
1. Modifiy the code so when the user select an animal, the corrsponding message is its sound, when the animal does not exist the 

## Step Five

### Evrythng in one file: tag version 1.0.1