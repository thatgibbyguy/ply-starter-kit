/* Author: John Gibby @thatgibbyguy */

// ==========================
/* Store current location */
// ==========================

var pathName = location.pathname;

// ==========================
/* Remove Phone Link on Desktop */
// ==========================

remPhoneLink = function(){
	docWidth = $(document).width();
	if (docWidth >= 1024){
		$('[data-query="phone"]').click(function(){
			return false;
		});
	}
	else{
		$('[data-query="phone"]').click(function(){
			return true;
		});
	}
};
remPhoneLink();

// ==========================
/* Adding and removing classes */
// ==========================

var addClassTo = function(query){
	$('[data-query="' + query + '"]').addClass('on');
};
var removeClassFrom = function(query){
	$('[data-query="' + query + '"]').removeClass('on');
};
var addClassByUrl = function(path,query){
	if(pathName.indexOf(path) >= 0){
		$('[data-query="' + query + '"]').addClass('on');
	}
};

// ==========================
/* Mobile Menu Trigger */
// ==========================

var nav = '';
var toggler = document.getElementById('mobile-toggle');

$(toggler).click(function(){
	$(nav).toggleClass('mobile-hidden').toggleClass('show');
});