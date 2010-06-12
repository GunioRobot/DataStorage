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
	Extends: Adapter.PropertyBased,
	initialize: function(model){
		// We have to add the database here, instead of just adding it in the decleration of the class. MooTools likes to mess up localStorage :)
		this.database = localStorage;
		this.parent(model);
	},
	save: function(record, callback){
		if (record.data["_id"] === "") {
			record.data["_id"] = this.uniqueID();
		}
		this.database[this.genKey(record.model.name, record.data["_id"])] = JSON.encode(record.data);
		record.isModified = false;
		callback();
	},
	filter: function(){
		
	},
	find: function(){
		
	}
});
