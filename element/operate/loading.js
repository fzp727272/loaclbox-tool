//jquery原型链方法


;
(function($) {
	$.extend({
		loading: function(callback) {
			var setting = {
				'position': 'fixed',
				'top': 0,
				'left': 0,
				'width': '0%',
				'height': '3px',
				'background-color': '#03A9F4',
				'transition': 'all .2s linear',
				'z-index': 9999
			};


			var loadingshow = function() {
				//$("body").disableall();
				$("#loadingbar").show(10);
				barlength = barlength + 10;
				var barwidth = barlength + '%';
				$("#loadingbar").width(barwidth);
				if (barlength >= 100) {
					clearTimeout(t);

					$("#loadingbar").delay(400).hide(10);
					callback();



				} else {
					var t = setTimeout(loadingshow, 100)
				}


			};
			var barlength = 0;

			if ($("#loadingbar").length === 1) {
				$("#loadingbar").css(setting);
				loadingshow();

			} else {
				$("body").append('<div id="loadingbar"></div>');
				$("#loadingbar").css(setting);
				loadingshow();
			};


		}

	});



})($)


//这是原型链方法
/*
var load = function(){
	alert(11)
};
	load.prototype.loading = function() {
		var setting = {
			'position': 'fixed',
			'top': 0,
			'left': 0,
			'width': '0%',
			'height': '3px',
			'background-color': '#03A9F4',
			'transition': 'all .2s linear',
			'z-index': 9999
		};


		var loadingshow = function() {
			//$("body").disableall();
			$("#loadingbar").show(10);
			barlength = barlength + 10;
			var barwidth = barlength + '%';
			$("#loadingbar").width(barwidth);
			if (barlength >= 100) {
				clearTimeout(t);

				$("#loadingbar").delay(400).hide(10);
				$(document).trigger('loadingdone');
				//$("body").disableall('show')
			} else {
				var t = setTimeout(loadingshow, 100)
			}


		};
		var barlength = 0;

		if ($("#loadingbar").length === 1) {
			loadingshow();

		} else {
			$("body").append('<div id="loadingbar"></div>');
			$("#loadingbar").css(setting);
			loadingshow();
		};



	};


module.exports = load;
*/