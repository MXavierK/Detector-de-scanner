let barcodeInput = document.getElementById("barcode-input");
let response = document.getElementById("barcode-input2");

barcodeInput.addEventListener("input", function () {
  lastInputTime = new Date().getTime(); //Tomamos el tiempo inicial en que se tecleo la ultima letra.
});

barcodeInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    var next_input = $(this).nextAll('input').first();
    next_input.focus(); //Cambiamos el focus al siguiente INPUT lo que activara el listener focusout
  }
});

barcodeInput.addEventListener("focusout", function () {
  
  let barcodeVal = barcodeInput.value.trim();
  if (barcodeVal.length > 0) {
    let finalTime = new Date().getTime() - lastInputTime; //Tiempo transcurrido entre el tiempo inicial de la ultima letra y el focus
    if (finalTime < 10) { // El valor del input se completó en menos de 10 ms, por lo que probablemente fue escaneado, el escaneado esta en un rango de 7ms
      response.value="Codigo escaneado";
    } 
    else  // El valor del input se completó en más de 10 ms, por lo que probablemente fue ingresado manualmente, el manual esta en un rango de 70ms
    {
      response.value="Codigo manual";
    }
  }
});

function limpiarCampos(){
  barcodeInput.value="";
  response.value="";
}