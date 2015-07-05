$(document).ready(function(){
	if($(".content__options-select").length){
		$(".content__options-select").simpleSelect();
	}
});
;var upperModule = (function (){
	var upper=$('.upper-button'),
		_scroll = function(){
			$(window).on("scroll",_scrollCondition);
			_goUp();
		},
		_scrollCondition = function(){
			var scroll=$(document).scrollTop();
			if(scroll>200){
				upper.fadeIn();
				
			} else {
				upper.fadeOut();
			}
		},
		_goUp = function(){
			upper.on('click',function(){
				$("html, body").animate({scrollTop:0});
			});
		};
			
	return {
		init: _scroll
	};

})();
upperModule.init();
;var accardeon = (function (){
	var	clickTrigger = function(){
		$('.sidebar__trigger').on('click',function(e){
			e.preventDefault();
			var $this=$(this),
			list=$this.closest('.sidebar__list'),
			item=$this.closest('.sidebar__item'),
			items=list.find('.sidebar__item'),
			triggers=list.find('.sidebar__trigger'),
			content = item.find('.sidebar__inner'),
			otherContent = list.find('.sidebar__inner');
			duration = 300;

			if(!item.hasClass('active')){
				items.removeClass('active');
				triggers.removeClass('sidebar__trigger-active');
				item.addClass('active');
				$this.addClass('sidebar__trigger-active');
				otherContent.stop(true, true).slideUp(duration);
				content.stop(true, true).slideDown(duration);
			} else {
				content.stop(true,true).slideUp(duration);
				items.removeClass('active');
				triggers.removeClass('sidebar__trigger-active');
			}
		});
	};
	
		
	return {
		init: clickTrigger
	};

})();
accardeon.init();

