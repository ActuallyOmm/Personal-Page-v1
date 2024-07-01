/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ikyivz9g5qy64vy",
    "created": "2024-06-22 19:39:42.264Z",
    "updated": "2024-06-22 19:39:42.264Z",
    "name": "Skills",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "0ztimlbi",
        "name": "Skill_Name",
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
  const collection = dao.findCollectionByNameOrId("ikyivz9g5qy64vy");

  return dao.deleteCollection(collection);
})
