/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6bbm54998s0nzwx")

  // remove
  collection.schema.removeField("yxi2rbe9")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ruz1fdbe",
    "name": "Project_Description",
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6bbm54998s0nzwx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yxi2rbe9",
    "name": "Project_Description",
    "type": "editor",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "convertUrls": false
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ruz1fdbe",
    "name": "Project_Descriptions",
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
