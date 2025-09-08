function refreshColors () {

var url = "http://colormind.io/api/";
var data = {
	model : "default",
	input : [[128,0,128],"N","N","N","N"]
}

var http = new XMLHttpRequest();

http.onreadystatechange = function() {
    if (http.readyState == 4 && http.status == 200) {
        
        var response = JSON.parse(http.responseText);
        var palette = response.result;

    
        var colors = document.querySelectorAll('.colors');

        palette.forEach(function(rgb, index) {
            if (colors[index]) {
                colors[index].style.backgroundColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
            }
        });
    }
};

http.open("POST", url, true);
http.send(JSON.stringify(data));

}

document.addEventListener('DOMContentLoaded', refreshColors);
