$(document).ready(function() {
    $('#limpiarFormulario').click(function() {
        $('form')[0].reset(); // Limpia todos los campos del formulario
    });
    
    $('form').submit(function(event) {
        var nombreCompleto = $('#nombreCompleto').val();
        var nombreUsuario = $('#nombreUsuario').val();
        var correoElectronico = $('#correoElectronico').val();
        var claveIngreso = $('#claveIngreso').val();
        var confirmarClave = $('#confirmarClave').val();
        var fechaNacimiento = new Date($('#fechaNacimiento').val());
        var direccionDespacho = $('#direccionDespacho').val();
        

        // Validaciones
        if (!nombreCompleto || !nombreUsuario || !correoElectronico || !claveIngreso || !confirmarClave || !fechaNacimiento) {
            alert('Todos los campos son obligatorios');
            event.preventDefault();
            return;
        }
        
        if (!/\S+@\S+\.\S+/.test(correoElectronico)) {
            alert('El correo electrónico no es válido');
            event.preventDefault();
            return;
        }
        
        if (claveIngreso !== confirmarClave) {
            alert('Las contraseñas no coinciden');
            event.preventDefault();
            return;
        }
        
        if (!/(?=.*\d)(?=.*[A-Z]).{6,18}/.test(claveIngreso)) {
            alert('La contraseña debe contener al menos un número y una letra mayúscula, y tener entre 6 y 18 caracteres');
            event.preventDefault();
            return;
        }
        
        var edadMinima = new Date();
        edadMinima.setFullYear(edadMinima.getFullYear() - 13);
        if (fechaNacimiento > edadMinima) {
            alert('Debes tener al menos 13 años para registrarte');
            event.preventDefault();
            return;
        }
    });
});