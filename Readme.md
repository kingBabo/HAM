# HAM - Case

Hilton Asset Managements egna rest api. Utvecklat i en NodeJS miljö och med en mongoDB databas.

## Komma igång

Efter att du har klonat ner repot, kör följande kommando(i repot).

```
npm install
```

För att sedan kunna testa dem olika endpointsen måste vi seeda databasen, gör detta genom att köra följande kommando:

```
node seed/seed.js
```

Vill du rensa databasen kan du köra:

```
node seed/dropdb.js
```

När du sedan har seedat databasen kan du starta server genom att köra:

```
npm start
```

## Rutt

Servern kan nu nås via:

```
localhost:4000
```

* [Documentation](https://documenter.getpostman.com/view/2904040/itcase/RVfzf8qQ) - Autogenererad docs med Postman

### Databas

Vill du ansluta till databasen kan du göra du göra det via mongo SHELL. Kör följande kommando för att ansluta:

```
mongo "mongodb://hamcluster-shard-00-00-txxmp.mongodb.net:27017,hamcluster-shard-00-01-txxmp.mongodb.net:27017,hamcluster-shard-00-02-txxmp.mongodb.net:27017/test?replicaSet=HAMCluster-shard-0" --ssl --authenticationDatabase admin --username HAM-CASE --password <PASSWORD>
```

För att se all samlingar i databasen skriver du:

```
show collections
```

För att se innehållet i en specifik samling skriver du:

```
db.<collectionname>.find()
```

## Hjälpmedel

* [nodeJS](https://nodejs.org/en/) (8.7.0) - Javascript ramverket som användes
* [Mongodb](https://www.mongodb.com/) (3.6) - Databas
* [Express](https://expressjs.com/) (^4.16.2) - NodeJS webapplication ramverk
* [Mongoose](http://mongoosejs.com/) (^5.0.6) - Modellering för mongoDB
* [Body-parser](https://www.npmjs.com/package/body-parser) (^1.18.2) - Parsa JSON
* [Morgan](https://github.com/expressjs/morgan) (^1.9.0) - Express addon för att logga
* [Nodemon](https://nodemon.io/) (^1.15.1) - Automatiskt ladda om server på CTRL+S
