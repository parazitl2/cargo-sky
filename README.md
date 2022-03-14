# Cargo-sky project application

**

### <a href="https://cargo-sky.netlify.app">LIVE DEMO</a> 
[![Netlify Status](https://api.netlify.com/api/v1/badges/3917dd37-c0e3-4b69-8ed9-998237250eda/deploy-status)](https://app.netlify.com/sites/cargo-sky/deploys)

## Description
This is a ReactJS based page. The design is inspired by a tmplate from <a href="https://www.free-css.com/assets/files/free-css-templates/preview/page234/interact/">Free-CSS.com </a>

## Install
### 1. Preps
Clone the project. You will need to have <a href="https://nodejs.org/">Node JS</a> installed on your pc. 

### 2. Clone Files
After cloning the files, you will have to run 
```bash
$ yarn
$ yarn start
```
to work with the project and liveserver.

### 3. Register to several vital services
1. You need to create an account in https://www.emailjs.com/. 

This is important to make possible email sending.
After registration you need to connect your email provider and create a mail template with variables {{from_name}}, {{from_email}}
 and {{message}}. Then you will obtain `service_ID` (id of the mailing service that you connected), `template_ID` 
(id of the newly created template) and `userID` (id of your account). 
You need to rename file `application-keys-example.json` into `application-keys.json` and fill it with your data
from this service. Now email sending is enabled.

2. You need to register at https://callback-free.ru/

This part enables to connect function **call me please**. After registration you should connect you account to the 
telegram bot, make settings and then you need to find the script with this widget in the `index.html` file 
and add your **data-key** attribute value to it. Now widget "call me" is enabled.

### 4. Add your own data
Change the data in the ```data.json``` file as well as add any images to ```public/img/```
You can also change styles by modifying the ```public/css``` files.

### 5. Deploy to the server
When everything is ready you need to type
```bash
$ yarn build
```

It will create a production build in the `build` folder. Now copy this folder into the correcponding server and enjoy!
