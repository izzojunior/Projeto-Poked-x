window.onload = function() {
    const btnTexto = document.querySelector("#close"); 
    
    btnTexto.addEventListener("click", function () {
            btnTexto.parentNode.style.display = "none";    
    });
    setTimeout(() => {
        btnTexto.parentNode.style.display = "none";
    }, 5000);
}