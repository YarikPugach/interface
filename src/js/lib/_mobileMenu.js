
	
// function menuToggle() {
//   $menu.slideToggle();
// }

// $btn.on('click', menuToggle);

var mobileMenu = function() {
  var $btn  = $('.js-iconMenu'),
    $menu = $('.js-toggleEffect');
  $btn.click(function() {
  	$menu.slideToggle();
  });;

};

module.exports = mobileMenu;
