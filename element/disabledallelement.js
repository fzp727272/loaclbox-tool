;
(function($) {
	var methods = {
		init: function(options) {
			var setting = $.extend({
				'color': '#999',
				'border-color': '#999',
				'panel-border-color': '#eee'
			}, options);

			return this.each(function() {
				$(this).find(".btn").addClass('disabled');
				$(this).find("input").attr('disabled', true);
				$(this).find("select").attr('disabled', true);
				$(this).find("textarea").attr('disabled', true);
				$(this).find(".colume-title").css(setting);
				$(this).find(".panel-body").css({
					'border-color': setting['panel-border-color'],
				});
				$(this).find(".userinfo-title").css(setting);
			});
		},
		show: function(options) {
			var setting = $.extend({
				'color': '#333',
				'border-color': '#333',
				'panel-border-color': '#ccc'
			}, options);

			return this.each(function() {
				$(this).find(".btn").removeClass('disabled');
				$(this).find("input").attr('disabled', false);
				$(this).find("select").attr('disabled', false);
				$(this).find("textarea").attr('disabled', false);
				$(this).find(".colume-title").css(setting);
				$(this).find(".panel-body").css({
					'border-color': setting['panel-border-color'],
				});
				$(this).find(".userinfo-title").css(setting);
			});
		}


	};

	$.fn.disableall = function(method) {


		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof method === 'object' || !method) {
			return methods.init.apply(this, arguments);
		} else {
			$.error('Method ' + method + ' does not exist ');
		};


	};

})($)



/*

var disabled = function(ele, toggle) {
	if (toggle) {
		ele.find(".btn").addClass('disabled');
		ele.find("input").attr('disabled', true);
		ele.find("select").attr('disabled', true);
		ele.find("textarea").attr('disabled', true);
		$(".colume-title").css({
			'color': '#999',
			'border-color': '#999'
		});
		$(".panel-body").css({
			'border-color': '#eee',
		});
		$(".userinfo-title").css({
			'color': '#999',
			'border-color': '#999'
		});
	} else {
		ele.find(".btn").removeClass('disabled');
		ele.find("input").attr('disabled', false);
		ele.find("select").attr('disabled', false);
		ele.find("textarea").attr('disabled', false);
		$(".colume-title").css({
			'color': '#333',
			'border-color': '#333'
		});
		$(".panel-body").css({
			'border-color': '##337ab7',
		});
		$(".userinfo-title").css({
			'color': '##337ab7',
			'border-color': '##337ab7'
		});
	}

};*/