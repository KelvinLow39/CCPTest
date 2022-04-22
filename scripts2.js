
var url = "https://api.mypurecloud.com.au/api/v2/conversations/calls";

var xhr = new XMLHttpRequest();
xhr.open("GET", url);

xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Authorization", "Bearer kCgnsHkurUJINtDP-v2tMeHaYIV_RVLIkHGBjcE_QNkCx3Ho-B_ooGJwEwfQ4WGjLoTdd7jYwCH4h2p1X8SRVA");

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
   }};

xhr.send();

//GET -H "Content-Type: application/json" -H "Authorization: bearer kCgnsHkurUJINtDP-v2tMeHaYIV_RVLIkHGBjcE_QNkCx3Ho-B_ooGJwEwfQ4WGjLoTdd7jYwCH4h2p1X8SRVA" "https://api.mypurecloud.com.au/api/v2/conversations/calls"