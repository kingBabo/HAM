# HAM - Case

Hilton Asset Managements egna rest api. Utvecklat med hjälp i en NodeJS miljö och med en mongoDB databas.

## Komma igång

Efter att du har klonat ner repot, kör följande kommando(i repot).

```
npm install
```

För att sedan kunna testa dem olika endpointsen måste vi seeda databasen, gör detta genom att köra följande kommando:

```
node seed/seed.js
```

Vill du rensa databasen kan du alltid köra:

```
node seed/dropdb.js
```

När du sedan har seedat databasen kan du starta server genom att köra:

```
npm start
```

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

* [nodeJS](https://nodejs.org/en/) - Javascript ramverket som användes
* [Mongodb](https://www.mongodb.com/) - Dependency Management
* [Mongoose](http://mongoosejs.com/) - Modellering för mongoDB

Det användes dessutom fler mindre bibliotek som kan utforskas i koden.
