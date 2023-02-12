# INFORMATION OF PROJECT: 
    - URL : https://github.com/hieuemmm/nodejs_blog

---
# LIBRARY HELPFUL:

## 1. Express library:
    # https://expressjs.com/
    - npm install express      :: install library in dev environment
    - Framework of NodeJS language
## 2. Nodemon library:
    # https://www.npmjs.com/package/nodemon
    - npm i nodemon --save-dev      :: install library in dev environment
    - nodemon [your node app] 
        nodemon app.js            :: Automatically start application if there is a change
        nodemon --inspect app.js  :: Turn on "NodeJS devtool" in chrome browser
    - Change package.json file :
        "scripts": {
            "start": "nodemon --inspect app.js",
            "test": "echo \"Error: no test specified\" && exit 1"
        }
## 3. Morgan library:
    # https://www.npmjs.com/package/morgan
    - npm i morgan --save-dev       :: install library in dev environment
    - Check your request to server
## 4. Template engines library:
    # https://www.npmjs.com/package/express-handlebars
    - npm i express-handlebars 
    - Support Render layout in NodeJS
## 5. Node-sass
    # https://www.npmjs.com/package/node-sass
    - npm i node-sass --save-dev
    - Support auto render scss to css with command line interface
    - Change package.json file :
        "scripts": {
            "scss": "node-sass --watch src/resources/scss/ --output src/public/css/",
        }
