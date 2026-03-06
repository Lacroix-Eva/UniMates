/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2675425891")

  // update collection data
  unmarshal({
    "name": "conversations"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2675425891")

  // update collection data
  unmarshal({
    "name": "conservations"
  }, collection)

  return app.save(collection)
})
