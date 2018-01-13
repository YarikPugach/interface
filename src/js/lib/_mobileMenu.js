
	
// function menuToggle() {
//   $menu.slideToggle();
// }

// $btn.on('click', menuToggle);

var mobileMenu = function() {
  var $btn  = $('.js-iconMenu'),
    	$menu = $('.js-toggleEffect');

  $btn.on('click', function() {
	  	$menu.slideToggle();  
  });
};

module.exports = mobileMenu;
