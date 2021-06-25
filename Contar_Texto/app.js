function contarText() {
    
    let dividido = document.getElementById("myTextarea").value.split(" ");
    
    let palabras=dividido.length;
    document.getElementById("demo2").innerHTML = palabras;
    
    let valortextarea=document.getElementById("myTextarea").value;
    document.getElementById("demo3").innerHTML = valortextarea.length;
    }