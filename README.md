# liveChat-nodejs
global live chat with node js and express

# how to execute
  - install node js and mysql (xampp)
  - execute createDatabase.js with 'node ./createDatabase.js' in the folder
  - execute server.js with 'node ./server.js' to run the server
  - open index.html in the browser
 
# files
  - server.js : file that return json file with the messages with GET request, and add messages with POST request
  - index.html : the web site that run the chat
  - ceateDatabase.js : file that create the database if you haven't already done
  - connect-db.js : module that allows you to communicate with the mysql database
  - databaseData.js : form that contains database data, can modify it to insert other data
  - css/style.css : style sheet of index.html
  - js/script.js : the script that allows you to communicate with the server (jquery needed)
 
# how is built
  - node js
  - moduls
    - express
    - mysql
  - jquery ajax, mostly $.get() and $.post()
  - html, css, js
