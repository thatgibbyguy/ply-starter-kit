var Schemas = {};

exampleCollection = new Mongo.Collection('examplecollection');

Schemas.exampleCollectionSchema = new SimpleSchema({
  key:{
    type: String,
    label: "key label"
  }
});

exampleCollection.attachSchema(Schemas.exampleCollectionSchema);

