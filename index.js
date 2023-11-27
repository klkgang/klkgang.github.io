function moverElBoton() {
    var clicks = 0;
    var boton = document.getElementById("no");
    
    boton.onclick = function() {
        clicks += 1;
        if (clicks > 10) {
            alert("OKAY BYE");
            window.location.href = "BYE/bye.html";
        } else {
            boton.style.position = "absolute";
            var screenWidth = window.innerWidth;
            var screenHeight = window.innerHeight;
            var randomX = Math.floor(Math.random() * (screenWidth - boton.offsetWidth));
            var randomY = Math.floor(Math.random() * (screenHeight - boton.offsetHeight));
            boton.style.left = randomX + "px";
            boton.style.top = randomY + "px";
        }
    };
}

function si () {
    var si = document.getElementById("si");
    si.onclick = function() {
        alert("YO SABIA JIJIJI");
        window.location.href = "despues/main.html";
    };
}

moverElBoton();
si();