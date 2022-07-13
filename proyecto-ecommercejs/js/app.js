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
    let precio = formulario.children[1].value;
    let descripcion = formulario.children[2].value;
    let categoria = formulario.children[3].value;
    let stock = formulario.children[4].value;
    productos.push(new Producto(id, nombre, precio, descripcion, categoria, stock));
    listarProductos()
    totalCarritoHTML();
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