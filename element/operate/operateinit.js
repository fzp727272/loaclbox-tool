require("../disabledallelement.js");
var userinfo = require("../container/userinfo/user-account/useraccountoperate.js");
require("./loading.js");
var billingaccountoperate = require("../container/userinfo/billingaccount/billingaccountoperate.js");

var operate = {
	init: function() {
		$("body").disableall();
		this.navinit();
		var $this = this;
		$.loading($this.userinfoInit);

		/*var load = new Load()
		load.loading();*/
		/*	var $this = this;
			$(document).on('loadingdone', function(event) {
				$this.userinfoInit();
				$(document).off('loadingdone');
				/* Act on the event */



	},
	navinit: function() {
		/*navbar abled*/
		$(".navbar").find('select').attr('disabled', false);

		/*可以添加ajax判断传值成功*/

	},
	userinfoInit: function() {
		$("#user-info").find('.colume-title').css({
			color: '#333'
		});
		$("#user-account").find('.userinfo-title').css({
			'border-color': '#333',
			'color': '#333'
		});
		$("#user-account").find('.button-line-group').eq(0).find('button').removeClass('disabled');
		$('#Email').find('input.form-control').attr('disabled', false);
		$('#Email').find('button.btn').removeClass('disabled');
		//$("button[text=Get User]").removeClass('disabled')
		$(document).on('click', '#addRandomUser', function(event) {

			$.loading(userAccount);

			function userAccount() {
				billingaccountoperate();
				$("#user-info").find(".panel-body").eq(0).css({"border-color":"#ccc"})
				$("#user-account").disableall('show');
				$("#flowandcart").disableall('show');
				$("#URLParameters").disableall('show');
			};

			/* Act on the event */
		});


	}



};



module.exports = operate;