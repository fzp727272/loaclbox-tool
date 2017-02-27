var logoTpl = require('./logo.hbs');
data = {
	logoName:'LOCALBOX_TOOL',
};
var logo = logoTpl(data);
module.exports = logo;