# limehome-assignment
App is deployed on heroku at https://limehome.herokuapp.com/ 

API docemtation at https://documenter.getpostman.com/view/848695/TVK76feL

## Developement
### setup env
```export mongo_uri=your_mongodb_connection_string```
### checkout 
```git clone https://github.com/shivshankar3578/limehome-assignment```
### install dependancies

```
cd limehome-assignment
npm install
```
### start local server
``` npm start```

## Note
[api/properties?at=LAT,LONG](https://limehome.herokuapp.com/api/properties?at=48.130811,11.575934) Will return properties near by to 1 KM from (LAT,LONG). This max distance (1 KM or 1000 m) is configurable. API also return dist property which is the geo distance of property from (LAT,LONG). 


