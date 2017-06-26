//read quotes from external xml
var UrlQuote="weeklyquote.xml";
window.onload = function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    myFunction(this);
    }
  };
  xhttp.open("GET", UrlQuote, true);
  xhttp.send(null);
}

function myFunction(xml) {
  	
  var i = Math.floor((Math.random() * 9) +1);
  var xmlDoc = xml.responseXML;
  var x = xmlDoc.getElementsByTagName("q");
  //window.alert(i);
  quotevar = x[i].getElementsByTagName("quote")[0].childNodes[0].nodeValue;
  authorvar= x[i].getElementsByTagName("author")[0].childNodes[0].nodeValue;
  document.getElementById("quote").innerHTML = quotevar;
  document.getElementById("author").innerHTML = authorvar;
}