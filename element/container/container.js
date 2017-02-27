require('./container.less');
var containerTpl = require('./container.hbs');
var userinfo = require('./userinfo/userinfo.js');
var flowchart = require('./flowchart/flowchart.js');
var URLParameters = require('./URLParameters/URLParameters.js');
var data = {
	userinfo:userinfo,
	flowchart:flowchart,
	URLParameters:URLParameters
}; //data可以用参数传入
var container = containerTpl(data);
module.exports = container;