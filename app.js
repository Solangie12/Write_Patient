document.getElementById('serviceRequestForm').addEventListener('submit', function (event) {
  event.preventDefault();

  // 1. Datos del Médico tratante
  const medico = {
      nombre: document.getElementById('medico-nombre').value,
      especialidad: document.getElementById('medico-especialidad').value,
      institucion: document.getElementById('medico-institucion').value,
  };

  // 2. Datos del Paciente
  const paciente = {
      nombre: document.getElementById('paciente-nombre').value,
      tipoDocumento: document.getElementById('paciente-tipo-documento').value,
      numeroDocumento: document.getElementById('paciente-numero-documento').value,
      edad: document.getElementById('paciente-edad').value,
      sexo: document.getElementById('paciente-sexo').value,
      diagnosticoPrincipal: document.getElementById('paciente-diagnostico-principal').value,
      procedimientoRealizado: document.getElementById('paciente-procedimiento-realizado').value,
  };

  // 3. Información del Procedimiento
  const procedimiento = {
      nombre: document.getElementById('procedimiento-nombre').value,
      codigo: document.getElementById('procedimiento-codigo').value,
      fecha: document.getElementById('procedimiento-fecha').value,
      hora: document.getElementById('procedimiento-hora').value,
      tipo: document.getElementById('procedimiento-tipo').value,
      descripcion: document.getElementById('procedimiento-descripcion').value,
      tecnica: document.getElementById('procedimiento-tecnica').value,
      anestesia: document.getElementById('procedimiento-anestesia').value,
      estadoPaciente: document.getElementById('procedimiento-estado').value,
      seguimiento: document.getElementById('procedimiento-seguimiento').value,
  };

  // Construcción del objeto completo
  const serviceRequestData = {
      medico,
      paciente,
      procedimiento
  };

  console.log("Enviando datos:", serviceRequestData);

  // Enviar al backend
  fetch('https://hl7-fhir-ehr-solangie-9665.onrender.com/service-request', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
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
      alert('Formulario enviado correctamente. ID: ' + data._id);
      document.getElementById('serviceRequestForm').reset();
  })
  .catch(error => {
      console.error('Error:', error);
      alert('Error al enviar el formulario: ' + error.message);
  });
});



  
