function validarNombre(nombre) {
  if (nombre.length === 0) {
    return "Este campo debe tener al menos 1 caracter";
  }
  if (nombre.length >= 50) {
    return "Este campo debe tener menos de 50 caracteres";
  }

  if (!/^[a-z]+$/i.test(nombre)) {
    return "El campo nombre solo acepta letras";
  }
  return "";
}

function validarCiudad(ciudad) {
  if (ciudad.length === 0) {
    return "Este campo no es valido, al menos una ciudad debe ser seleccionada";
  }
  return "";
}

function validarDescripcionRegalo(descripcion) {
  if (descripcion.length >= 100) {
    return "Este campo descripcion es muy largo";
  } else if (descripcion.length === 0) {
    return "Este campo descripcion no puede estar vacio";
  } else if (!/^[a-z0-9 ]+$/i.test(descripcion)) {
    return "El campo descripcion solo puede tener numeros y letras";
  } else {
    return "";
  }
}

function validarFormulario(event) {
  const $form = document.querySelector("#carta-a-santa");

  const nombre = $form.nombre.value;
  const ciudad = $form.ciudad.value;
  const descripcion = $form["descripcion-regalo"].value;

  const errorNombre = validarNombre(nombre);
  const errorCiudad = validarCiudad(ciudad);
  const errorDescripcion = validarDescripcionRegalo(descripcion);

  const errores = {
    //estos key corresponden al valor de name en html
    nombre: errorNombre,
    ciudad: errorCiudad,
    "descripcion-regalo": errorDescripcion
  };

  const exitoso = manejarErrores(errores) === 0;

  if (exitoso) {
    $form.className = "oculto";
    document.querySelector("#exito").className = "";
    redireccionaWishList();
  }

  event.preventDefault();
}

function redireccionaWishList() {
  setTimeout(function() {
    window.location.href = "wishlist.html";
  }, 5000);
}

function manejarErrores(errores) {
  let cantidadErrores = 0;
  const $errores = document.querySelector("#errores");
  let listaErrores = document.querySelectorAll("#errores li");

  const keys = Object.keys(errores);
  keys.forEach(key => {
    const error = errores[key];
    if (error) {
      cantidadErrores++;
      $form[key].className = "error";
      $form[key].value = "";

      let errorExiste = false;
      listaErrores.forEach(listaError => {
        if (listaError.innerHTML == error) {
          errorExiste = true;
        }
      });
      if (!errorExiste) {
        let $error = document.createElement("li");
        $error.innerHTML = error;
        $error.className = key;
        $errores.appendChild($error);
      }
    } else {
      $form[key].className = "";
      listaErrores.forEach(listaError => {
        if (listaError.className == key) {
          listaError.remove();
        }
      });
    }
  });
  return cantidadErrores;
}

const $form = document.querySelector("#carta-a-santa");
$form.onsubmit = validarFormulario;
