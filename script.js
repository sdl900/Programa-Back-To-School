// Manejar la búsqueda de usuarios
document.getElementById('btnBuscarUsuario').addEventListener('click', function (e) {
    e.preventDefault();

    const busqueda = document.getElementById('buscarUsuario').value.trim();
    const resultadoBusqueda = document.getElementById('resultadoBusqueda');

    // Validar que el campo de búsqueda no esté vacío
    if (busqueda === '') {
        resultadoBusqueda.innerHTML = '<p>Por favor, ingresa un término de búsqueda.</p>';
        return;
    }

    // Buscar usuarios que coincidan con el término de búsqueda
    const resultados = usuarios.filter(usuario =>
        usuario.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        usuario.email.toLowerCase().includes(busqueda.toLowerCase()) ||
        usuario.telegram.toLowerCase().includes(busqueda.toLowerCase())
    );

    // Mostrar los resultados de la búsqueda
    if (resultados.length > 0) {
        resultadoBusqueda.innerHTML = resultados.map(usuario => `
            <div class="usuario">
                <p><strong>Nombre:</strong> ${usuario.nombre}</p>
                <p><strong>Correo:</strong> ${usuario.email}</p>
                <p><strong>Telegram:</strong> ${usuario.telegram}</p>
                <p><strong>Teléfono:</strong> ${usuario.telefono}</p>
                <p><strong>Tipo de Documento:</strong> ${usuario.tipoDocumento}</p>
                <p><strong>Número de Documento:</strong> ${usuario.numeroDocumento}</p>
                <p><strong>Fecha de Nacimiento:</strong> ${usuario.fechaNacimiento}</p>
                <p><strong>Género:</strong> ${usuario.genero}</p>
                <p><strong>País:</strong> ${usuario.pais}</p>
                <p><strong>Tipo de Usuario:</strong> ${usuario.tipoUsuario}</p>
                <p><strong>Nombre del Proyecto:</strong> ${usuario.nombreProyecto}</p>
                <p><strong>Sponsor del Grupo:</strong> ${usuario.sponsorGrupo}</p>
                <p><strong>Jefe de Grupo:</strong> ${usuario.jefeGrupo}</p>
                <p><strong>Líder de Grupo:</strong> ${usuario.liderGrupo}</p>
                <p><strong>Sugerencias:</strong> ${usuario.sugerencias}</p>
            </div>
        `).join('');
    } else {
        resultadoBusqueda.innerHTML = '<p>No se encontraron resultados.</p>';
    }

    // Limpiar el campo de búsqueda
    document.getElementById('buscarUsuario').value = '';
});