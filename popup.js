var Url = "https://raw.githubusercontent.com/codarrenvelvindron/Week-Ly/master/weeklyquote.json"
var xhr = new XMLHttpRequest();
xhr.open("GET", Url, true);
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
    var json = JSON.parse(xhr.responseText);
	var i = Math.floor((Math.random() * 9) +1);  
	document.getElementById("quote").innerHTML = json.quotestore.q[i].quote;
	document.getElementById("author").innerHTML = "~~" + json.quotestore.q[i].author;
  }
}
xhr.send();