var flowchartTpl = require('./flowchart.hbs');
var data = {

}; //data可以用参数传入
var flowchart = flowchartTpl(data);
module.exports = flowchart;