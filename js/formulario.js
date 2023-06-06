let formulario = document.getElementById('form')

// usar con los inputs y guardar en localStorage
const poblarArrayDeUsuarios = () => {
    let usuariosRegistrados = []

    let nombreUsuario = document.getElementById('nombre').value;
    let correoUsuario = document.getElementById('email').value;
    let tlfUsuario = document.getElementById('tlf').value;

    let usuario = {
        nombre: nombreUsuario,
        correo: correoUsuario,
        tlf: tlfUsuario
    }

    // recuperar datos
    let datosRecuperados = JSON.parse(localStorage.getItem('datos'))
    datosRecuperados
        ? usuariosRegistrados = datosRecuperados
        : console.error('error al recuperar datos del storage')

    usuariosRegistrados.push(usuario)
    
    // almacenar datos
    localStorage.setItem('datos', JSON.stringify(usuariosRegistrados))

    console.table(usuariosRegistrados)
}

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    Swal.fire({
        title: `Hola!`,
        text: `Gracias por contactarnos, te enviaremos nuestras novedades al correo.`,
        icon: 'success',
        confirmButtonText: 'Continuar'
    })

    poblarArrayDeUsuarios()
    formulario.reset()
})