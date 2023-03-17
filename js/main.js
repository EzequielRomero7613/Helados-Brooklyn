const hoy = new Date();




var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtnHorarios");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



function horarios() {
    document.getElementById("horarios")
    alert("Lunes: De 13:20 a 23:40 , Martes: Cerrado, Miércoles: De 13:20 a 23:40, Jueves: De 13:20 a 23:40, Viernes: De 13:20 a 23:40, Sábado: De 13:20 a 23:40, Domingo: De 13:00 a 23:40");
}


function pedidos(){
    document.getElementById("pedidos")
    location.href = "pedidos.html";
}


function fecha(){
  console.log(hoy);
}

