window.onload = function() {
    var carre = document.getElementById('carre');
    var time = setInterval(grandirCarre, 1000);

    function grandirCarre() {
        var item = document.getElementById('carre');
        item.style.width = item.offsetWidth+10+'px';
        console.log(item.offsetWidth);
        if (item.offsetWidth >= 700) {
            clearInterval(time);
        }
    }
}

// var hauteur = 0;

// function f(){
//     hauteur += 5;
//     div.setAttribute("style", "height:" + hauteur + "px");
//     console.log(hateur);
//     if(hauteur == 700) clearInterval(timer);
// }

// var timer = window.setInterval("f()", 1000);