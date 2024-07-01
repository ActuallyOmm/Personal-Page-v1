/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "6bbm54998s0nzwx",
    "created": "2024-06-22 19:33:38.342Z",
    "updated": "2024-06-22 19:33:38.342Z",
    "name": "Projects",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ja57esr1",
        "name": "Project_Name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("6bbm54998s0nzwx");

  return dao.deleteCollection(collection);
})
