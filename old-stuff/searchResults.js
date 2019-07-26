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
}

$(document).mouseup(function(e) {
  const menu = document.getElementById("side-menu");
  if (e.target != menu && e.target.parentNode != menu) {
    menu.style.width = "0";
  }
});

// API SHIT
var settings = {
  async: true,
  crossDomain: true,
  url: "https://api.yelp.com/v3/businesses/search",
  method: "GET",
  headers: {
    Authorization:
      "Bearer EElj7yTkL-mqWepweO0Pgb-DQa_Yh9hsbvKPAKFB7dyFcDfAM5yn-a-0TH5I0eqbD8CA8RpbaIenoJ-Jw3Q33OOxz4mz6uct9H-ukaO7HpQXYYkV1Qd0TzDI95E4XXYx",
    "User-Agent": "PostmanRuntime/7.15.2",
    Accept: "*/*",
    "Cache-Control": "no-cache",
    "Postman-Token":
      "ed7f0fc2-1283-4109-b9ce-ac80425ba83b,055fe451-fddf-46c7-8bb4-7e34badbe945",
    Host: "api.yelp.com",
    "Accept-Encoding": "gzip, deflate",
    Connection: "keep-alive",
    "cache-control": "no-cache"
  }
};

$.ajax(settings).done(function(response) {
  console.log(response);
});
