/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2675425891")

  // update collection data
  unmarshal({
    "deleteRule": "user1 = @request.auth.id || user2 = @request.auth.id",
    "listRule": "user1 = @request.auth.id || user2 = @request.auth.id",
    "updateRule": "user1 = @request.auth.id || user2 = @request.auth.id",
    "viewRule": "user1 = @request.auth.id || user2 = @request.auth.id"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2675425891")

  // update collection data
  unmarshal({
    "deleteRule": "",
    "listRule": "",
    "updateRule": "",
    "viewRule": ""
  }, collection)

  return app.save(collection)
})
