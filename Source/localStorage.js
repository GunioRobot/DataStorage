/*
---

script: localStorage.js

description: Persisten storage using localStorage

license: MIT-style license.

authors: Henrik Enggaard Hansen

requires:
- DataStorage

provides: [Adapter.localStorage]

...
*/

Adapter.localStorage = new Class({
	Extends: Adapter.Base,
	initialize: function(model){
		if (!("_id" in model.scheme)){
			model.scheme["_id"] = "";
		}
	},
	save: function(record, callback){
		if (record.data["_id"] === "") {
			record.data["_id"] = this.uniqueID();
		}
		localStorage[record.model.name + "::" + record.data["_id"]] = JSON.encode(record.data);
		record.isModified = false;
		callback();
	},
	destroy: function(record, callback){
		delete this.database[record.model.name + "::" + record.data["_id"]]
		callback();
	},
	filter: function(){
		
	},
	find: function(){
		
	}
});
