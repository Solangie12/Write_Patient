document.getElementById('serviceRequestForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Obtener los valores del formulario
  const patientName = document.getElementById('patientName').value;
  const documentType = document.getElementById('documentType').value;
  const documentNumber = document.getElementById('documentNumber').value;

  const doctorName = document.getElementById('doctorName').value;
  const procedureName = document.getElementById('procedureName').value;
  const procedureDescription = document.getElementById('procedureDescription').value;

  // Construir el objeto con los datos de la solicitud de servicio
  const serviceRequestData = {
    patient: {
      name: patientName,
      documentType: documentType,
      documentNumber: documentNumber
    },
    doctor: {
      name: doctorName,
      procedureName: procedureName,
      procedureDescription: procedureDescription
    }
  };

  console.log(serviceRequestData); // Para verificación en consola

  // Enviar la solicitud al backend
  fetch('https://hl7-fhir-ehr-solangie-9665.onrender.com/service-request/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(serviceRequestData)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Error en la solicitud: ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    console.log('Success:', data);
    alert('Service Request creado exitosamente! ID: ' + data._id);
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Hubo un error en la solicitud: ' + error.message);
  });
});
  
