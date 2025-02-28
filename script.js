// Simulación de una base de datos de usuarios
let usuarios = [];

// Obtener referencias a los formularios y botones
const formLogin = document.getElementById("formLogin");
const formRegister = document.getElementById("formRegister");
const btnIniciarSesion = document.getElementById("btn__iniciar-sesion");
const btnRegistrarse = document.getElementById("btn__registrarse");

// Alternar entre formularios de inicio de sesión y registro
btnIniciarSesion.addEventListener("click", () => {
    formLogin.style.display = "block";
    formRegister.style.display = "none";
});

btnRegistrarse.addEventListener("click", () => {
    formLogin.style.display = "none";
    formRegister.style.display = "block";
});

// Manejar el registro de usuarios
formRegister.addEventListener("submit", (e) => {
    e.preventDefault();

    const usuario = {
        nombre: document.getElementById("registerNombre").value,
        email: document.getElementById("registerEmail").value,
        telegram: document.getElementById("registerTelegram").value,
        password: document.getElementById("registerPassword").value,
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

    const email = document.getElementById("loginUsuario").value;
    const password = document.getElementById("loginPassword").value;

    // Buscar el usuario en la "base de datos"
    const usuarioEncontrado = usuarios.find(
        (u) => u.email === email && u.password === password
    );

    if (usuarioEncontrado) {
        alert("Inicio de sesión exitoso.");
        // Aquí puedes redirigir al usuario a otra página o mostrar más opciones
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
});