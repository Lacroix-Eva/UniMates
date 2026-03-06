/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("_pb_users_auth_")

  // remove field
  collection.fields.removeById("bool_showInteractionsIntro")

  // add field
  collection.fields.addAt(12, new Field({
    "hidden": false,
    "id": "bool_InteractionsIntro",
    "name": "InteractionsIntro",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("_pb_users_auth_")

  // remove field
  collection.fields.removeById("bool_InteractionsIntro")

  // add field
  collection.fields.addAt(12, new Field({
    "hidden": false,
    "id": "bool_showInteractionsIntro",
    "name": "showInteractionsIntro",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
})
