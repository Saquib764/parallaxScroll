(function($){

	$.fn.parallaxScroll = function(options){
		return this.each(function(){
			new parallaxScroll(this,options).init();
		});
	}


	var defaults = {
		image : null,
		speed : 0,
		parallax : true,
		xOffset : 0,
		yOffset:0,
	},parallaxScroll,setting;

	parallaxScroll = function(element,options){
		return{
			init: function(){
				var self = this;
				setting = self._getSetting();
				self._setBackground();
				self._setPostion();
				self._bindEvents();
			},
			_bindEvents: function(){
				var self = this;
				if (setting.parallax) {
					$(window).on('scroll',function(){
						self._setPostion();
					});
				}
			},

			_getSetting: function(){
				var settings = $.extend({}, defaults, options);
				settings.image = $(element).data('image')||settings.image;
				settings.speed = $(element).data('speed')||settings.speed;
				settings.parallax = $(element).data('parallax')||settings.parallax;
				settings.xOffset = $(element).data('xOffset')||settings.xOffset;
				settings.yOffset = $(element).data('yOffset')||settings.yOffset;

				if (settings.speed<0 || settings.speed>1) {settings.speed = 0};
				return settings;
			},

			_setBackground: function(){
				$(element).css({
					'background-repeat': 'no-repeat',
					'background-image' : 'url("'+setting.image+'")',
					'background-size' : 'cover',
					'background-position': setting.yOffset+'px '+setting.xOffset+'px'
				});
			},

			_setPostion: function(){
				scrolled = -$(element).offset().top + $(window).scrollTop()+setting.xOffset;
				$(element).css({
					'background-position': setting.yOffset+'px '+scrolled*(1-setting.speed)+'px',
				});
			}
		};
	};

})(jQuery);