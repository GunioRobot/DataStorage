/*
---

script: DataStorage.js

description: Stores data

license: MIT-style license.

authors: Henrik Enggaard Hansen

requires:
- core:1.3
- Record

provides: [DataStorage, Adapter]

...
*/

Adapter = {};

DataStorage = new Class({
	initialize: function(options){
		this.name = options.name;
		this.scheme = options.scheme;
		this.adapter = new options.adapter(this);
	},
	create: function(data){
		// The following can be implemented in a much more efficient way.
		data = Object.merge(Object.clone(this.scheme), data);
		data = Object.filter(data, function(x, key){
			var v = (this.scheme[key] != undefined);
			return v
		}, this)
		return new Record(data, this);
	}
});