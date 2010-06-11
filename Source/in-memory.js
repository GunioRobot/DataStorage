/*
---

script: in-memory.js

description: A simple in-memory database.

license: MIT-style license.

authors: Henrik Enggaard Hansen

requires:
- DataStorage

provides: [Adapter.InMemory]

...
*/

Adapter.InMemory = new Class({
	initialize: function(model){
		this.database = {};
		if (!("_id" in model.scheme)){
			model.scheme["_id"] = "";
		}
	},
	save: function(record, callback){
		if (record.data["_id"] === "") {
			record.data["_id"] = uuid();
		}
		this.database[record.data["_id"]] = Object.clone(record.data);
		callback();
	},
	destroy: function(record, callback){
		delete this.database[record.data["_id"]]
		callback();
	},
	filter: function(){
		
	},
	find: function(){
		
	}
});
