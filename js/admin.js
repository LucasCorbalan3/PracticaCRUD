let campoCodigo = document.getElementById("codigo");
let campoProducto = document.getElementById("producto");
let campoDescripcion = document.getElementById("descripcion");
let campoCantidad = document.getElementById("cantidad");
let campoURL = document.getElementById("URL");

/* validaciones */
const campoRequerido = (input) => {
  console.log("campo Requerido");
  console.log(input.value);
  if (input.value.length > 0) {
    console.log("todo bien");
    input.className = "form-control is-valid";
    return true;
  } else {
    console.log("error");
    input.className = "form-control is-invalid";
    return false;
  }
};

const validarNumeros = (input) => {
  //vamos a usar o a crear una expresión regular
  let patron = /^[0-9]{1,3}$/;
  //el método test me sirve para comparar un string con el patron y duevuelve true o false si hay match o no
  //regex.test('stirng a validar')
  if (patron.test(input.value)) {
    //cumpla con la expresión regular
    input.className = "form-control is-valid";
    return true;
  } else {
    input.className = "form-control is-invalid";
    return false;
  }
};

const validarURL = (input) => {
  let patron = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;
  if (patron.test(input.value)) {
    //cumpla con la expresión regular
    input.className = "form-control is-valid";
    return true;
  } else {
    input.className = "form-control is-invalid";
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
