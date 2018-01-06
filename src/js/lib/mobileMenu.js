var $btn = $('.js-iconMenu'),
  $menu = $('.js-toggleEffect');
	
// function menuToggle() {
//   $menu.slideToggle();
// }

// $btn.on('click', menuToggle);

var mobileMenu = function() {

  $btn.click(function() {
  	$menu.slideToggle();
  });;

};

module.exports = mobileMenu;
