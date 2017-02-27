require("../../../disabledallelement.js");
require("../../../operate/loading.js");

var billingaccountoperate = function() {
	var $EAWallet = $("#addEAWallet");
	var $EAWalletwithamount = $("#CreateChargeEAWalletwithamount");

	$EAWallet.addClass('disabled');
	$EAWalletwithamount.find('button').addClass('disabled');
	$EAWalletwithamount.find('input').attr('disabled', true);
	$("#addCreditcardaccount").removeClass('disabled');

	$("#addCreditcardaccount").click(function(event) {
		$.loading(AddCreditCard);
		function AddCreditCard() {
			$("#billindaccount").disableall('show');
			$EAWallet.removeClass('disabled').on('click', function(event) {

				/*
				$EAWalletwithamount.find('button').removeClass('disabled');
				$EAWalletwithamount.find('input').attr('disabled', false);*/
				/* Act on the event */
			});
		}

	});

};

module.exports = billingaccountoperate;