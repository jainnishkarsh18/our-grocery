var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.querySelector("header").style.display = "block";
    document.querySelector("footer").style.display = "block";
    document.querySelector("main").style.display = "block";
    document.querySelector(".main-loader").style.height = 0;
}