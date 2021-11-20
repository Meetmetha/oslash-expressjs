## Oslash Backend Developer Task Submission ExpressJS API
#### Tasklink: https://getoslash.notion.site/OSlash-Backend-Engineering-Assignment-OSlash-Clone-6a72b110f7c24b8f928138a9a8ed0ee5
#### Oslash Backend Task in NestJS is Here: https://github.com/Meetmetha/oslash-nestjs  
#### RestAPI Hosted Live Here: [Check in Action](https://oslashexpressjs.miteshmetha.com) 🥳 
### Technologies & Framework: ExpressJS - Mongodb - Meilisearch
The Task is completed by using ExpressJS as framework for API,   
MongoDB as Database and Meilisearch for Efficient search internally just like ElasticSearch   
Meilisearch is deployed here and requires APIKey for accsessing Data! [Check in Action](https://oslashsearch.miteshmetha.com)
### Steps to Setup
Note: git init is required before npm install
```
git clone https://github.com/Meetmetha/oslash-expressjs
cd oslash-expressjs
npm install
```
### Setup Enviornment & Keys: check env.example (Create filename : .env) 
Meilisearch has to be deployed and "shortcuts" index with primaryKey "_id" has to be created prior
Below are some required Keys (SMTP & AWS keys are not required)
```
PORT=3000
MONGODB_URL=mongodb://localhost:27017/oslashexpress
JWT_SECRET=ThisIsMySecretJWT
MEILISEARCH_HOST=yourdeployedmeilisearchurl
MEILISEARCH_APIKEY=privatekeyhere
```
### Run Project
```
npm run start
```
### Output 🥳
```
visit your localhost:3000 and follow below documentation
```
#### API Documentation: https://documenter.getpostman.com/view/14843355/UVCBC5Dz
#### ExpressNestAPI Live Hosted URL : https://oslashexpressjs.miteshmetha.com
### Core Reason & KeyHighlights of project using ExpressJS

Meilisearch - This is the Key point which handles search and by using meilisearch instead of regex check or query check api is able to search effeciently with typo error checks and checks over all entered inputs even url, It works just like elasticsearch but easy to implement and use for our use case of searching. Unlike elasticsearch Meilisearch comes with Authentication 

Session management - Here we are using device based SessionManagement with JWT. while register/login deviceHash is taken from users device and acts as unique identifier so If someone logs our or relogs in the old Session is blacklisted. So by this approach every individual device has its jwt and session binded. We also have devices and their IP's so better logs maintained.


### Troubleshooting 
Getting Device registeration Failed: Pass devicehash hash header someunique in prod(web:fingerprintJS, android:deviceid, ios:deviceuuid)  
Issues while searching: Check your meilisearchKey   
Husky Install Error: Use "git init" command again    
Any other Issues :Feel free to reach me     
Getting Invalid Request in response :Pass authentication JWT like this Authorization: bearer Tokenhere

### Reachme
Mitesh Metha  
https://miteshmetha.com
