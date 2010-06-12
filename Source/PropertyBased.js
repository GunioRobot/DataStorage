/*
---

script: Adapter.js

description: A base class for simple property base databases.

license: MIT-style license.

authors: Henrik Enggaard Hansen

requires:

provides: [Adapter]

...
*/

Adapter.PropertyBased = new Class({
	Extends: Adapter.Base,
	initialize: function(model){
		if (!("_id" in model.scheme)){
			model.scheme["_id"] = "";
		}
			
	},
	genKey: function(name, id){
		return name + "::" + id
	},
	save: function(record, callback){
		if (record.data["_id"] === "") {
			record.data["_id"] = this.uniqueID();
		}
		this.database[this.genKey(record.model.name, record.data["_id"])] = Object.clone(record.data);
		record.isModified = false;
		callback();
	},
	destroy: function(record, callback){
		delete this.database[this.genKey(record.model.name, record.data["_id"])]
		callback();
	}
});