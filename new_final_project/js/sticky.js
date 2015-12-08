// create a clone of the menu, 
// which we'll only reveal when the user scrolls past a certain position
$('.sticky').addClass('original').clone().insertAfter('.sticky').addClass('cloned').css('position','fixed').css('top','0').css('margin-top','5%').css('z-index','500').removeClass('original').hide();

scrollIntervalID = setInterval(stickIt, 10);

function stickIt() {
  var orgElementPos = $('.original').offset();
  orgElementTop = orgElementPos.top;               

    // if we scroll past the position of the original menu,
    // only show the cloned, sticky element
  if ($(window).scrollTop() >= (orgElementTop)) {

    // the cloned menu should have same left position and width as original element

    orgElement = $('.original');
    coordsOrgElement = orgElement.offset();
    leftOrgElement = coordsOrgElement.left;  
    widthOrgElement = orgElement.css('width');
    $('.cloned').css('relative',leftOrgElement+'px').css('top','-8%').css('relative','4%').css('width',widthOrgElement).show();
    $('.original').css('visibility','hidden');
  } else {
    
    // if we're not scrolled past the menu, only show the original menu.
    $('.cloned').hide();
    $('.original').css('visibility','visible');
  }
}