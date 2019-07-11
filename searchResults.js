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
