let miFormulario = document.getElementById('formulario');
miFormulario.addEventListener('submit', validarFormulario);

miFormulario.addEventListener('submit', () => {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Su producto fue añadido con exito',
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

let formBuscar = document.querySelector('#formularioBuscar')
formBuscar.addEventListener('submit', encontrarProducto)

function encontrarProducto(e) {
    e.preventDefault();
    let formularioBuscar = e.target;
    let nombre = formularioBuscar.children[0].value;
    let resultado = productos.filter((producto) => producto.nombre.includes(nombre));
    if (nombre !== undefined) {
        alert("Hay ")
    } else {
        alert("no se encontro")
    }
    e.target.reset();
}


document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        obtenerContenido(URL)
    }, 1000);
})



const eliminarb = () => {
    let id = prompt("ingrese")
    if (id > 0) {
        fetch(`${URL}/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                obtenerContenido(URL)
            })
            .catch(err => console.log(err));


    }
}

const agregarb = () => {
    const nombreb = prompt('ingrese nombre del producto')
    const preciob = prompt('ingrese precio del producto')
    const descripcionb = prompt('ingrese la descripcion del producto')
    const categoriab = prompt('ingrese la categoria del producto')
    const stockb = prompt('ingrese el stock del producto')
    fetch(`${URL}`, {
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
        .then(res => res.json())
        .then(res => {
            console.log(res);
            obtenerContenido(URL)
        });
}

btnEliminar.addEventListener("click", eliminarb)
btnAgregar.addEventListener("click", agregarb)
