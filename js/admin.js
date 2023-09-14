let campoCodigo = document.getElementById("codigo");
let campoProducto = document.getElementById("producto");
let campoDescripcion = document.getElementById("descripcion");
let campoCantidad = document.getElementById("Cantidad");
let campoURL = document.getElementById("URL");

/* validaciones */
const campoRequerido = (input) => {
  console.log("campoRequerido");
  console.log(input.value);
  if (input.value.length > 0) {
    console.log("todo bien");
    input.className = "form-label is-valid";
    return true;
  } else {
    console.log("error");
    input.className = "form-label is-invalid";
    return false;
  }
};





/* eventos */
campoCodigo.addEventListener("blur", () => {
  console.log("desde codigo");
  campoRequerido(campoCodigo);
});

campoProducto.addEventListener("blur", () => {
  console.log("desde codigo");
});

campoDescripcion.addEventListener("blur", () => {
  console.log("desde codigo");
});

campoCantidad.addEventListener("blur", () => {
  console.log("desde codigo");
});

campoURL.addEventListener("blur", () => {
  console.log("desde codigo");
});
