function refreshColors () {

var url = "http://colormind.io/api/";
var data = {
	model : "default",
	input : [[139,194,74],"N","N","N","N"]
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

function newColors () {
    
    var url = "http://colormind.io/api/";
    var data = {
        model : "default",
        input : ["N","N",[51,103,30],"N","N"]
    }
    
    var http = new XMLHttpRequest();
    
    http.onreadystatechange = function() {
        if (http.readyState == 4 && http.status == 200) {
            
            var response = JSON.parse(http.responseText);
            var palette = response.result;
    
        
            var colors = document.querySelectorAll('.colors2');
    
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
    
    document.addEventListener('DOMContentLoaded', newColors);

    function nextColors () {

        var url = "http://colormind.io/api/";
        var data = {
            model : "default",
            input : ["N","N","N","N",[217,233,199]]
        }
        
        var http = new XMLHttpRequest();
        
        http.onreadystatechange = function() {
            if (http.readyState == 4 && http.status == 200) {
                
                var response = JSON.parse(http.responseText);
                var palette = response.result;
        
            
                var colors = document.querySelectorAll('.colors3');
        
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
        
        document.addEventListener('DOMContentLoaded', newColors);
