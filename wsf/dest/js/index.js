window.onload = function() {
  var burger = document.getElementById("burger");

  var offcanvas = document.getElementById("offcanvas");

  var menu = document.getElementById("menu");

  burger.onclick = showMenu;

  function showMenu() {
  	menu.classList.toggle("close");
	offcanvas.style.display = (offcanvas.style.display == 'block') ? 'none' : 'block';
  };
}
