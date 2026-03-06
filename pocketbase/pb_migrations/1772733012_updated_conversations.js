/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2675425891")

  // add field
  collection.fields.addAt(3, new Field({
    "cascadeDelete": false,
    "collectionId": "_pb_users_auth_",
    "hidden": false,
    "id": "relation2354152789",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "user1",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "cascadeDelete": false,
    "collectionId": "_pb_users_auth_",
    "hidden": false,
    "id": "relation358143215",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "user2",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2675425891")

  // remove field
  collection.fields.removeById("relation2354152789")

  // remove field
  collection.fields.removeById("relation358143215")

  return app.save(collection)
})
