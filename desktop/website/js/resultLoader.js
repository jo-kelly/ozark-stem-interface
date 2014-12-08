/*function Person(name, gender) {
	this.name = name;
	this.gender = gender;
}

Person.prototype.speak = function(){
	alert("Howdy, my name is" + this.name);
}

var person = new Person("Bob", "M");

person.speak();*/

// default sorting mode is location, but searching, and A-Z sorting is also available.
var sortingMode = "LOCATION";

function sortBy(type){
	if (type == "LOCATION"){
		sortingMode = "LOCATION";
	} else if (type == "AZ"){
		sortingMode = "AZ";
	} else {
		// Sorting mode is search.
		searchFor(type);
	}
}