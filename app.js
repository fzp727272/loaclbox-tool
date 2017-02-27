var main = require("./element/index.js");
//var $ = require("jquery");
//console.log(main);
document.addEventListener("DOMContentLoaded", function() {

	document.body.innerHTML = main;


});



var operate = require('./element/operate/operateinit.js');

$(function(){

	operate.init();
	
})



//alert($(window).height())



/*var data = {
	user: {
		title: "jack",
		table: [{
			colume: 1,
		}, {
			colume: 2
		}, {
			colume: 3
		}, {
			colume: 4
		}, {
			colume: 5
		}, {
			colume: 6
		}, {
			colume: 7
		}, {
			colume: 8
		}, ]
	}
};
var template = require("./element/index.hbs");

var showElement = function(template, InsertPlace, data) {
	document.addEventListener("DOMContentLoaded", function() {
		var div = document.createElement('div');
		div.innerHTML = template(data);
		InsertPlace.appendChild(div);
	});
};

showElement(template, document.body, data);*/