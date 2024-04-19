//Campos vacios
function emptyField(field){
  const regex = /^\s*$/;
  return regex.test(field);
}

//Nombre completo, un nombre y dos apellidos
function fullNameStudent(fullName){
  const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]{4,}(?:\s+[a-zA-ZáéíóúÁÉÍÓÚñÑ]{4,}){2,}$/;
  return regex.test(fullName);
}

// Numero de cuenta maximo 8 digitos
function accountNumber(accountNumber){
  const regex = /^\d{8}$/;
  return regex.test(accountNumber);
}

//Grado y grupo, dos caracteres, Un numero y una letra en ese orden
function gradeGroupStudent(gradeGroup){
  const regex = /^[1-8][A-K]$/;
  return regex.test(gradeGroup);
}


