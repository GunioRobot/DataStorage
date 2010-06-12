/*
---

script: in-memory.js

description: A simple in-memory database.

license: MIT-style license.

authors: Henrik Enggaard Hansen

requires:
- DataStorage
- Adapter
- Adapter.helpers

provides: [Adapter.InMemory]

...
*/

Adapter.InMemory = new Class({
	Extends: Adapter.PropertyBased,
	database: {},
	filter: function(){
		
	},
	find: function(){
		
	}
});
