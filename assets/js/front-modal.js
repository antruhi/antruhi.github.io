var modal = document.getElementById("modalEl");
var modalOkButtonObject = document.getElementById("modal-ok-button-object");

// close the modal when the 'OK' is clicked
modalOkButtonObject.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

function showModal(){
    console.log('showmodal called')
    modal.style.display = "block";    
}

var showModalVar1 = function() {
  showModal();
}
window.onload = function() {
  setTimeout(showModalVar1, 1);
}