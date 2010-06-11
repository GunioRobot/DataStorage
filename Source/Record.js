/*
---

script: Record.js

description: The base class for records.

license: MIT-style license.

authors: Henrik Enggaard Hansen

requires:
- core:1.3

provides: [Record]

...
*/

Record = new Class({
	Implements: [Events, Options],
	initialize: function(data, model){
		this.data = data;
		this.model = model;
		this.modified = [];
	},
	get: function(key){
		return this.data[key];
	},
	set: function(key, value){
		if($defined(this.data[key])){
			this.data[key] = value;
			this.isModified = true;
			//this.modified = includes(key);
		}
	},
	save: function(callback){
		this.model.adapter.save(this, callback);
	},
	destroy: function(callback){
		this.model.adapter.destroy(this, callback);
	}
});