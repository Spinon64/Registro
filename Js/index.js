const btnSave = document.getElementById('btnSave');
btnSave.addEventListener('click', () => {
  let fullName = document.getElementById('fullName').value;
  let studentId = document.getElementById('studentID').value;
  let gradeGroup = document.getElementById('gradeGroup').value;

  if (emptyField(fullName) || emptyField(studentId) || emptyField(gradeGroup)){
    alert('Campos vacios');
  }
  else
  {
    messageInputs(fullName, studentId, gradeGroup);
  }
});


function messageInputs(fullName, studentId, gradeGroup){
  
  gradeGroupStudent(gradeGroup);
  if (!fullNameStudent(fullName)){
    console.log("entró");
    alert('Nombre del almuno incorrecto');
  }
  else if (!accountNumber(studentId)){
    alert('Numero de cuenta incorrecto');
  }
  else if (!gradeGroupStudent(gradeGroup)){
    alert('Grado y grupo incorrecto');
  }
  else{
    assitence(fullName, gradeGroup);
  }
}

function assitence(fullName, gradeGroup){
  let attendanceMultiplier = 1;
   // Verificar si el grupo es 7G, si es así, no contar la asistencia
    if (gradeGroup === "7G") {
    alert("No se contará la asistencia para este estudiante.");
    return;
  }  // Verificar si el estudiante pertenece a los grupos A, B o C
  else if (["A", "B", "C"].includes(gradeGroup.charAt(1))) {  
    attendanceMultiplier = 2;
  }  // Verificar si el estudiante pertenece a grados 4 o mayores
  else if (parseInt(gradeGroup.charAt(0)) >= 4) {
    attendanceMultiplier = 3;
  }
  else {
    attendanceMultiplier = 1;
  }

  alert(
    `Asistencia registrada para ${fullName}. Asistencia contada: x${attendanceMultiplier}`
  );
}




