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
    //tambien es permitido ciudad === ''
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
