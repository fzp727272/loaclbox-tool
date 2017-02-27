var $ = require("jquery");
require('./button-regular.less');
var navbar = require('./navbar/navbar.js');
var container = require('./container/container.js')
var homeTpl = require('./index.hbs');
var data = {
	navbar: navbar,
	container:container,
	//footer: footer,
};
var home = homeTpl(data);
module.exports = home;