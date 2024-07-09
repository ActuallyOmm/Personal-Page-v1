/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6bbm54998s0nzwx")

  // remove
  collection.schema.removeField("6ebnottx")

  return dao.saveCollection(collection)
}, (db) => {
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

  return dao.saveCollection(collection)
})
