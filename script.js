// Simulación de una base de datos de usuarios
let usuarios = [];

// Función para mostrar/ocultar contraseña
function togglePasswordVisibility(inputId) {
    const input = document.getElementById(inputId);
    if (input.type === "password") {
        input.type = "text";
    } else {
        input.type = "password";
    }
}

// Obtener referencias a los formularios y botones
const formLogin = document.getElementById("formLogin");
const formRegister = document.getElementById("formRegister");
const btnIniciarSesion = document.getElementById("btn__iniciar-sesion");
const btnRegistrarse = document.getElementById("btn__registrarse");
const perfil = document.getElementById("perfil");

// Alternar entre formularios de inicio de sesión y registro
btnIniciarSesion.addEventListener("click", () => {
    formLogin.style.display = "block";
    formRegister.style.display = "none";
    perfil.style.display = "none";
});

btnRegistrarse.addEventListener("click", () => {
    formLogin.style.display = "none";
    formRegister.style.display = "block";
    perfil.style.display = "none";
});

// Manejar el registro de usuarios
formRegister.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("registerNombre").value;
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Validar campos obligatorios
    if (!nombre || !email || !password || !confirmPassword) {
        alert("Por favor, completa todos los campos obligatorios.");
        return;
    }

    // Validar que las contraseñas coincidan
    if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden.");
        return;
    }

    // Verificar si el correo ya está registrado
    const existeUsuario = usuarios.some(u => u.email === email);
    if (existeUsuario) {
        alert("Este correo electrónico ya está registrado.");
        return;
    }

    const usuario = {
        nombre,
        email,
        telegram: document.getElementById("registerTelegram").value,
        password,
        telefono: document.getElementById("numero-telefono").value,
        tipoDocumento: document.getElementById("tipo-documento").value,
        numeroDocumento: document.getElementById("numero-documento").value,
        fechaNacimiento: document.getElementById("fecha-nacimiento").value,
        genero: document.getElementById("genero").value,
        pais: document.getElementById("pais").value,
        tipoUsuario: document.getElementById("tipo-usuario").value,
        nombreProyecto: document.getElementById("nombre-proyecto").value,
        sponsorGrupo: document.getElementById("sponsor-grupo").value,
        jefeGrupo: document.getElementById("jefe-grupo").value,
        liderGrupo: document.getElementById("lider-grupo").value,
        sugerencias: document.getElementById("sugerencias").value,
    };

    // Guardar el usuario en la "base de datos"
    usuarios.push(usuario);
    alert("Registro exitoso. Ahora puedes iniciar sesión.");
    formRegister.reset();
    formLogin.style.display = "block";
    formRegister.style.display = "none";
});

// Manejar el inicio de sesión
formLogin.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    // Buscar el usuario en la "base de datos"
    const usuarioEncontrado = usuarios.find(
        (u) => u.email === email && u.password === password
    );

    if (usuarioEncontrado) {
        alert("Inicio de sesión exitoso.");
        mostrarPerfil(usuarioEncontrado);
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
});

// Función para mostrar el perfil del usuario
function mostrarPerfil(usuario) {
    formLogin.style.display = "none";
    formRegister.style.display = "none";
    perfil.style.display = "block";

    document.getElementById("perfilNombre").textContent = usuario.nombre;
    document.getElementById("perfilEmail").textContent = usuario.email;
    document.getElementById("perfilTelefono").textContent = usuario.telefono;
    document.getElementById("perfilTipoDocumento").textContent = usuario.tipoDocumento;
    document.getElementById("perfilNumeroDocumento").textContent = usuario.numeroDocumento;
    document.getElementById("perfilFechaNacimiento").textContent = usuario.fechaNacimiento;
    document.getElementById("perfilGenero").textContent = usuario.genero;
    document.getElementById("perfilPais").textContent = usuario.pais;
    document.getElementById("perfilTipoUsuario").textContent = usuario.tipoUsuario;
    document.getElementById("perfilTelegram").textContent = usuario.telegram;
    document.getElementById("perfilNombreProyecto").textContent = usuario.nombreProyecto;
    document.getElementById("perfilSponsorGrupo").textContent = usuario.sponsorGrupo;
    document.getElementById("perfilJefeGrupo").textContent = usuario.jefeGrupo;
    document.getElementById("perfilLiderGrupo").textContent = usuario.liderGrupo;
    document.getElementById("perfilSugerencias").textContent = usuario.sugerencias;
}

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

// Manejar el cambio de contraseña
document.getElementById('btnCambiarContrasena').addEventListener('click', function (e) {
    e.preventDefault();

    const contrasenaActual = document.getElementById('contrasenaActual').value;
    const nuevaContrasena = document.getElementById('nuevaContrasena').value;
    const confirmarNuevaContrasena = document.getElementById('confirmarNuevaContrasena').value;

    // Validar que las nuevas contraseñas coincidan
    if (nuevaContrasena !== confirmarNuevaContrasena) {
        alert("Las nuevas contraseñas no coinciden.");
        return;
    }

    // Simular la validación de la contraseña actual (aquí deberías comparar con la base de datos)
    const usuarioActual = usuarios.find(u => u.password === contrasenaActual);
    if (!usuarioActual) {
        alert("La contraseña actual es incorrecta.");
        return;
    }

    // Actualizar la contraseña
    usuarioActual.password = nuevaContrasena;
    alert("Contraseña cambiada exitosamente.");
});