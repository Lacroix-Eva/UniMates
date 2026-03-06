/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("_pb_users_auth_")

  // update collection data
  unmarshal({
    "listRule": "@request.auth.id != ''",
    "viewRule": "@request.auth.id != ''",
    "updateRule": "@request.auth.id = id",
    "deleteRule": "@request.auth.id = id"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("_pb_users_auth_")

  // update collection data
  unmarshal({
    "listRule": "",
    "viewRule": "",
    "updateRule": "",
    "deleteRule": ""
  }, collection)

  return app.save(collection)
})
