function refreshColors () {

var url = "http://colormind.io/api/";
var data = {
	model : "default",
	input : [[255,255,0],"N","N","N","N"]
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
        input : [[255,255,103],"N","N","N","N"]
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
            input : [[254,255,191],"N","N","N","N"]
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
