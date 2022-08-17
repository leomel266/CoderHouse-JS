let miFormulario = document.getElementById('formulario');
miFormulario.addEventListener('submit', validarFormulario);

miFormulario.addEventListener('submit', () => {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Añadido con exito',
        showConfirmButton: false,
        timer: 1500
    })
})


function validarFormulario(e) {
    e.preventDefault();
    let id = 0;
    let formulario = e.target;
    let nombre = formulario.children[0].value;
    let apellido = formulario.children[1].value;
    let seccion = formulario.children[2].value;
    let jornada = formulario.children[3].value;
    personal.push(new Personal(id, nombre, apellido, seccion, jornada));
    cargarPersonal()
    guardarDatosDelUsr();
    e.target.reset();
};



document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        obtenerContenido(URL)
    }, 1000);
})

const showEliminar = () => {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Eliminado con exito',
        showConfirmButton: false,
        timer: 1500
    })
}

const showAgregar = () => {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Agregado con exito',
        showConfirmButton: false,
        timer: 1500
    })
}

const showError = () => {
    Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Ocurrio un problema',
        showConfirmButton: false,
        timer: 1500
    })

}


const eliminarb = async () => {
    try {
        let id = prompt("ingrese el ID del producto a eliminar")
        if (id > 0) {
            const response = await fetch(`${URL}/${id}`, {
                method: 'DELETE'
            })
            const data = await response.json();
            obtenerContenido(URL);
            showEliminar();
        }

    } catch (error) {
        showError()

    }
}

const agregarb = async () => {
    try {
        const nombreb = prompt('ingrese nombre del producto')
        const preciob = prompt('ingrese precio del producto')
        const descripcionb = prompt('ingrese la descripcion del producto')
        const categoriab = prompt('ingrese la categoria del producto')
        const stockb = prompt('ingrese el stock del producto')
        const response = await fetch(`${URL}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nombre: `${nombreb}`,
                preciob: `${preciob}`,
                descripcion: `${descripcionb}`,
                categoria: `${categoriab}`,
                stock: `${stockb}`

            })
        })
        const data = response.json()
        obtenerContenido(URL);
        showAgregar()


    } catch (error) {
        showError()

    }
}
btnEliminar.addEventListener("click", eliminarb)
btnAgregar.addEventListener("click", agregarb)
