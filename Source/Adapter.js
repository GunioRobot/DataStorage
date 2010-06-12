/*
---

script: Adapter.js

description: Helpers for the adapters

license: MIT-style license.

authors: Henrik Enggaard Hansen

requires:

provides: [Adapter, Adapter.Base]

...
*/

Adapter = {};
(function(){
	
var UID = 0;

Adapter.Base = new Class({
	initialize: function(){
			
	},
	uniqueID: function(){
		return (new Date().getTime() + (UID++)).toString(36);
	}
});

})();