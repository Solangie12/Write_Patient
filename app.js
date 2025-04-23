document.getElementById('serviceRequestForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = {
    medico: {
      nombre: document.getElementById('medicoNombre').value,
      especialidad: document.getElementById('especialidadMedica').value,
      institucion: document.getElementById('institucionMedica').value
    },
    paciente: {
      nombre: document.getElementById('pacienteNombre').value,
      tipoDocumento: document.getElementById('tipoDocumento').value,
      numeroDocumento: document.getElementById('numeroDocumento').value,
      edad: document.getElementById('edad').value,
      sexo: document.getElementById('sexo').value,
      diagnosticoPrincipal: document.getElementById('diagnosticoPrincipal').value,
      procedimientoRealizado: document.getElementById('procedimientoRealizado').value
    },
    procedimiento: {
      nombre: document.getElementById('nombreProcedimiento').value,
      codigo: document.getElementById('codigoProcedimiento').value,
      fecha: document.getElementById('fechaProcedimiento').value,
      hora: document.getElementById('horaProcedimiento').value,
      tipo: document.getElementById('tipoProcedimiento').value,
      descripcion: document.getElementById('descripcionProcedimiento').value,
      tecnica: document.getElementById('tecnicaUtilizada').value,
      anestesia: document.getElementById('anestesiaUtilizada').value,
      estadoFinal: document.getElementById('estadoPaciente').value,
      seguimiento: document.getElementById('seguimientoRecomendado').value
    }
  };

  fetch('https://hl7-fhir-ehr-solangie-9665.onrender.com/service-request/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  })
  .then(response => {
    if (!response.ok) throw new Error('Error en la solicitud: ' + response.statusText);
    return response.json();
  })
  .then(data => {
    console.log('Éxito:', data);
    alert('Solicitud registrada exitosamente. ID: ' + data._id);
    document.getElementById('serviceRequestForm').reset();
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Error al enviar el formulario: ' + error.message);
  });
});

  
