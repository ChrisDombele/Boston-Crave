const proxyurl = "https://cors-anywhere.herokuapp.com/";

var data = [];

var settings = {
  async: true,
  crossDomain: true,
  url:
    proxyurl +
    "https://api.yelp.com/v3/businesses/search?term=tacos&location=Boston",
  method: "GET",
  headers: {
    Authorization:
      "Bearer EElj7yTkL-mqWepweO0Pgb-DQa_Yh9hsbvKPAKFB7dyFcDfAM5yn-a-0TH5I0eqbD8CA8RpbaIenoJ-Jw3Q33OOxz4mz6uct9H-ukaO7HpQXYYkV1Qd0TzDI95E4XXYx",
    Accept: "*/*",
    "Cache-Control": "no-cache",
    "Postman-Token":
      "99246994-9647-4da8-8131-6f694a0edd91,72b32a65-7e22-4b0b-b705-d593d244e1d0"
  }
};

$(document).ready(function() {
  $("input").keyup(function() {
    var keycode = event.keyCode ? event.keyCode : event.which;
    if (keycode == "13") {
      $.ajax(settings).done(function(response) {
        console.log(response);

        var prefix = "card-title";
        for (var i = 0; i < 16; i++) {
          if (document.getElementById(prefix + i)) {
            document.getElementById(prefix + i).innerHTML =
              response.businesses[i].name;
          }
        }

        var prefix1 = "card-location";
        for (var i = 0; i < 16; i++) {
          if (document.getElementById(prefix1 + i)) {
            document.getElementById(prefix1 + i).innerHTML =
              response.businesses[i].display_phone;
          }
        }

        var prefix2 = "url";
        for (var i = 0; i < 16; i++) {
          if (document.getElementById(prefix2 + i)) {
            document
              .getElementById(prefix2 + i)
              .setAttribute("href", response.businesses[i].url);
          }
        }

        var prefix3 = "map";
        for (var i = 0; i < 16; i++) {
          if (document.getElementById(prefix3 + i)) {
            document
              .getElementById(prefix3 + i)
              .setAttribute(
                "href",
                "https://maps.google.com/?" + response.businesses[i].coordinates
              );
          }
        }
      });
    }
  });
});

function handleClick() {
  $.ajax(settings).done(function(response) {
    data = response;
    console.log(data);
    console.log(data.businesses[0].name);
    document.getElementById("card-title1").innerHTML = data.businesses[0].name;
  });
}
