/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6bbm54998s0nzwx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6ebnottx",
    "name": "Overview",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wvrh4yks",
    "name": "Language",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "ikyivz9g5qy64vy",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6bbm54998s0nzwx")

  // remove
  collection.schema.removeField("6ebnottx")

  // remove
  collection.schema.removeField("wvrh4yks")

  return dao.saveCollection(collection)
})
