function probarValidarNombre() {
  console.assert(
    validarNombre('') === 'Este campo debe tener al menos 1 caracter',
    'Validar nombre no validó que el nombre no sea vacío'
  );

  console.assert(
    validarNombre(
      '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111'
    ) === 'Este campo debe tener menos de 50 caracteres',
    'Validar nombre no validó que el nombre sea menor a 50 caracteres'
  );
}

function probarValidarCiudad() {
  console.assert(
    validarCiudad('') ===
      'Este campo no es valido, al menos una ciudad debe ser seleccionada',
    'validar ciudad no funciono con un valor vacio'
  );

  console.assert(
    validarCiudad('Chaco') === '',
    'validar ciudad falla al seleccionar una ciudad'
  );
}

function probarValidarDescripcionRegalo() {
  console.assert(
    validarDescripcionRegalo('') ===
      'Este campo no es valido, ingrese una descripcion',
    'validar descripcion de regalo falla que no sea vacio'
  );

  console.assert(
    validarDescripcionRegalo('bici') === '',
    'validar descripcion ingresada falla'
  );
}

probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcionRegalo();
