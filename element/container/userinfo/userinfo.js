var useraccount = require('./user-account/useraccount.js');
var billingaccount = require('./billingaccount/billingaccount.js');
var userinfoTpl = require('./userinfo.hbs');
data = {
useraccount:useraccount,
billingaccount:billingaccount,	
};
var userinfo = userinfoTpl(data);
module.exports = userinfo;