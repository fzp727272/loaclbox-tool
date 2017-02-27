/*var data = {};
var template = require('sidebar.hbs');
var div = document.createElement('div');
div.innerHTML = template(data);
return div;*/

//import styles from '../../less/style.less';
//require("../../css/style.css");
//var panel = require("../panel/panel.js");

//import styles from './../../css/style.css';
require('./navbar.less');
var navbarTpl = require('./navbar.hbs');
var logo = require('./logo/logo.js');
var data = {
	logo:logo,
	
}; //data可以用参数传入
var navbar = navbarTpl(data);
module.exports = navbar;