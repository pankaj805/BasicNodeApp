# Basic App Example
A basic Node js Backend app written in ES6 demonstrating the usage of the mongo Helper library [pkmongo](https://www.npmjs.com/package/pkmongo) and some other basic middleware features.

Please Note that this example uses ES6 syntax and promises. 

# Get Started

First, Clone this repo and run `npm install` to get install all the listed dependencies.

Make sure your local mongo db is running at port 27017 and you have a db named as 'test'. If you wish to connect to some different db, please search for the below line in `app.js` file and change the connection string.
```
MongoHelper.initialize('mongodb://localhost:27017/test');
```
Once you have the db ready, please run `npm start` to get the backend app started.
You should see the below message in your console:
```
bash-3.2$ npm start
> basicappexample@1.0.0 start  
/..../BasicAppExample
> node ./bin/index.js
 ********** : MongoHelper Intializing
connecting to Mongo: mongodb://localhost:27017/test
 ********** : running on 3005
Established Mongo Connection!
```
Now the App is ready!
# Testing the APIs

This App has 3 APIs ready to be used.
* Root Test API (GET - /)
* Create User (POST - /user)
* Get User (GET - /user/:mob)

You can test these apis by using tool as postman or by simple curl request. Please find some sample curl request below:
### Root Test API
```
curl -X GET \
  http://localhost:3005/ \
  -H 'cache-control: no-cache'
```
### Create User
```
curl -X POST \
  http://localhost:3005/user \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -d '{
	"mobile":"9012345678",
	"name":"Pankaj"
}'
```
### Get User
```
curl -X GET \
  http://localhost:3005/user/9012345678 \
  -H 'cache-control: no-cache'
```