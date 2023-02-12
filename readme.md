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
        nodemon index.js            :: Automatically start application if there is a change
        nodemon --inspect index.js  :: Turn on "NodeJS devtool" in chrome browser
    - Change package.json file :
        "scripts": {
            "start": "nodemon --inspect index.js",
            "test": "echo \"Error: no test specified\" && exit 1"
        }
## 3. Morgan library:
    # https://www.npmjs.com/package/morgan
    - npm i morgan --save-dev       :: install library in dev environment
    - Check your request to server
## 4. Template engines library:
    # https://www.npmjs.com/package/express-handlebars
    - npm i express-handlebars 
