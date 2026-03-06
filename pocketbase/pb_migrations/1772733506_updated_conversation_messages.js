/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_674042895")

  // update collection data
  unmarshal({
    "createRule": "sender = @request.auth.id",
    "deleteRule": "sender = @request.auth.id",
    "listRule": "conversation.user1 = @request.auth.id || conversation.user2 = @request.auth.id",
    "updateRule": "sender = @request.auth.id",
    "viewRule": "conversation.user1 = @request.auth.id || conversation.user2 = @request.auth.id"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_674042895")

  // update collection data
  unmarshal({
    "createRule": "",
    "deleteRule": "",
    "listRule": "",
    "updateRule": "",
    "viewRule": ""
  }, collection)

  return app.save(collection)
})
