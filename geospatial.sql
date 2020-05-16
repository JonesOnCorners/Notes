db.places.drop()

db.places.insertOne({name:'Ascendas', location:{type:'Point',coordinates:[73.6815152,18.5920244]}})

db.places.findOne({location:{$near : {$geometry:{type:'Point', coordinates:[73.6828012,18.5912834]}}}})


db.places.insertOne({name:'Ascendas', location:{type:'Point',coordinates:[73.6815152,18.5920244]}})

const cdc = [73.68132, 18.59278]
db.places.insertOne({name:'cdc', location:{type:'Point',coordinates:[73.68132, 18.59278]}})

const singbidge = [73.68649, 18.59105]
db.places.insertOne({name:'singbridge', location:{type:'Point',coordinates:[73.68649, 18.59105]}})

const snacks = [ 73.68503, 18.59166]
db.places.insertOne({name:'snacks', location:{type:'Point',coordinates:[73.68503, 18.59166]}})

const hexaware = [ 73.67917, 18.59095]
db.places.insertOne({name:'hexaware', location:{type:'Point',coordinates:[73.67917, 18.59095]}})


db.places.find({location:{$geoWithin : {$geometry:{type:'Polygon', coordinates:[[cdc, singbidge, snacks , cdc]]} }}})