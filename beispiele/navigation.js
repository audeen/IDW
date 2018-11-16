document.getElementById("toggle-navigation").addEventListener("click", navigation);

function navigation() {
    document.getElementById("navigation").classList.toggle("is-hidden");
    
}

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel', {
  // options
});