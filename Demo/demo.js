//If someone wants to make this code cleaner, I would be grateful :)

var notes = new DataStorage({
	name: "notes",
	scheme: {
		a: "",
		b: ""
	},
	adapter: Adapter.InMemory
});
console.log("Database created.");

note = notes.create({a: "Hello", b: "World", c: "noooo"});
console.log(note.get('a'))
console.log(note.data);

console.log(note.data["_id"]);

note.save(function(){console.log("Saved!")})
console.log(note.data["_id"]);

var newNote = notes.create({a: "Hello", b: "Denmark"});
newNote.save(function(){console.log("Saved!")})
console.log(newNote.data["_id"]);
console.log(notes.adapter.database)