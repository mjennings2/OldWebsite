function expand(x) {
		    x.classList.toggle("change");
}		

var acc = document.getElementsByClassName("container");
var i;

var acc = document.getElementsByClassName("container");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}