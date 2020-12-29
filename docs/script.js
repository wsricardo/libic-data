var xmlhttp = new XMLHttpRequest();
var urljson = "https://raw.githubusercontent.com/ItaengaConecta/libic-data/main/json/libic-textos-exatas.json"
xmlhttp.onreadystatechange = function() {
	  if (this.readyState == 4 && this.status == 200) {
		      var myArr = JSON.parse(this.responseText);
		      document.getElementById("libic").innerHTML = myArr[0].Title;
		    }
};
xmlhttp.open("GET", urljson, true);
xmlhttp.send(); 
