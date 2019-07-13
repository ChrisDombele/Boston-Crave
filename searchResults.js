// Card Animation
$(document).ready(function() {
  $("main .col-lg").hover(
    function() {
      $(this).animate(
        {
          marginTop: "-=1%"
        },
        200
      );
    },
    function() {
      $(this).animate(
        {
          marginTop: "0%"
        },
        200
      );
    }
  );
});

// Sidebar Nav
function openSlideMenu() {
  document.getElementById("side-menu").style.width = "350px";
  document.getElementById("main").style.marginLeft = "350px";
}

$(document).mouseup(function(e) {
  const menu = document.getElementById("side-menu");
  if (e.target != menu && e.target.parentNode != menu) {
    menu.style.width = "0";
  }
});
