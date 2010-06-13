/*
Script: DataStorage.js
	Specs for DataStorage.js

License:
	MIT-style license.
*/

(function(){

var simpleModel = new DataStorage({
	name: "simple",
	scheme: {
		a: "",
		b: ""
	},
	adapter: Adapter.InMemory
});

describe('Record creation', {
	"Records should have the same keys in the scheme/data as the model has": function(){
		var dataset = [
			{a: "", b: ""},
			{a: ""},
			{a: "", b: "", c: ""}
		]
			
		dataset.each(function(data){
			var record = simpleModel.create(data);
			value_of(Object.keys(record.data)).should_be(Object.keys(simpleModel.scheme))
		;})
	},
	"Records should contain provided data": function(){
		var data = {a: "Foo", b: "Bar"};
		var record = simpleModel.create(data);
		value_of(
			Object.values(
				Object.subset(
					record.data,
					Object.keys(data))))
			.should_be(Object.values(data));
	}
});

})();
