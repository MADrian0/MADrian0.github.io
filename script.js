function navElemActivate(elem) {
    var a = document.getElementsByTagName('a');
    for (i = 0; i < a.length; i++) {
        a[i].classList.remove('active')
    }
    elem.classList.add('active');
}

function navElemsDeactivate(elem) {
    var a = document.getElementsByTagName('a');
    for (i = 0; i < a.length; i++) {
        a[i].classList.remove('active')
    }
}

function openNav() {
    document.getElementById("openNav").style.display = "none";
    document.getElementById("closeNav").style.display = "block";
    document.getElementById("side-nav").style.width = "250px";

}

function closeNav() {
    setTimeout(function() {
        document.getElementById("closeNav").style.display = "none";
        if (window.innerWidth <= 870){
        document.getElementById("openNav").style.display = "block";
    }
    }, 300);
    document.getElementById("side-nav").style.width = "0";
    
    
    

}

function resize() {
    if (window.innerWidth >= 870){
        document.getElementById("openNav").style.display = "none";
        document.getElementById("closeNav").style.display = "none";
        document.getElementById("side-nav").style.width = "0";
    }else{
        document.getElementById("openNav").style.display = "block";
    }
}

window.addEventListener("resize", resize);