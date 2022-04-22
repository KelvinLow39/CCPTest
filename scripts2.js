

//var url = "http://www.google.com";
var id1 =""
var id2 = ""
var url = "https://api.mypurecloud.com.au/api/v2/conversations/calls";
var xhr = new XMLHttpRequest();


xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Authorization", "kCgnsHkurUJINtDP-v2tMeHaYIV_RVLIkHGBjcE_QNkCx3Ho-B_ooGJwEwfQ4WGjLoTdd7jYwCH4h2p1X8SRVA");
xhr.open("GET", url);

xhr.onload = function () {
   if (xhr.readyState === 4) {
	  var obj = JSON.parse(xhr.responseText);
      console.log(xhr.status);
      //console.log(xhr.responseText);
	  id1 = obj["entities"][0]["id"]
	  id2 = obj["entities"][0]["participants"][3]["id"]
  
   }};




 console.log(id1);
 console.log(id2);


xhr.send();


//GET -H "Content-Type: application/json" -H "Authorization: bearer kCgnsHkurUJINtDP-v2tMeHaYIV_RVLIkHGBjcE_QNkCx3Ho-B_ooGJwEwfQ4WGjLoTdd7jYwCH4h2p1X8SRVA" "https://api.mypurecloud.com.au/api/v2/conversations/calls"