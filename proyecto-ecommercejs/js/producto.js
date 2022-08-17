const productos = [];
const personal = []

class Personal {
    static contadorPersonal = 0
    constructor(id, nombre, apellido, seccion, jornada) {
        this.id = ++Personal.contadorPersonal;
        this.nombre = nombre;
        this.apellido = apellido;
        this.seccion = seccion;
        this.jornada = jornada;

    }
}

function generarPersonal() {
    personal.push(new Personal(0, 'Leonardo', 'Melchiori', 'A5', '8-14hs'))
    personal.push(new Personal(0, 'Matias', 'Barreda', 'B3', '14-21hs'))
    personal.push(new Personal(0, 'Michael', 'Barreda', 'B7', '8-12hs'))
    personal.push(new Personal(0, 'Sofia', 'Barreda', 'Caja', '12-20hs'))


}

function cargarPersonal() {
    document.querySelector("#listadoPersonal").innerHTML = '';
    personal.forEach((personal) => {
        const fila = `<ul>
                        <li>ID: ${personal.id}</li>
                        <li>Nombre: ${personal.nombre}</li>
                        <li>Apellido: ${personal.apellido}</li>
                        <li>Sección: ${personal.seccion}</li>
                        <li>Jornada: ${personal.jornada}</li>
                    </ul>`
        document.querySelector("#listadoPersonal").innerHTML += fila;
    })

}

generarPersonal()
cargarPersonal()
class Producto {
    static contadorProducto = 0;
    constructor(id, nombre, precio, descripcion, categoria, stock) {
        this.id = ++Producto.contadorProducto;
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.categoria = categoria;
        this.stock = stock;
    }

    precioFinal() {
        return parseFloat((this.precio * 1.21).toFixed(2));
    }
}

function listarProductos() {
    document.querySelector("tbody").innerHTML = '';
    productos.forEach((producto) => {
        const fila = `<tr>
                        <td>${producto.id}</td>
                        <td>${producto.nombre}</td>
                        <td>$${producto.precioFinal()}</td>
                        <td>${producto.descripcion}</td>
                        <td>${producto.categoria}</td>
                        <td> ${producto.stock}</td>
                    </tr>`
        document.querySelector("tbody").innerHTML += fila;
    })
    // const agregarTd= document.querySelector("td").innerHTML='';

}

// funcion sin usar DOM
// function agregarProducto() {
//     let id = 0;
//     let nombre = prompt("Ingrese el nombre del producto");
//     let precio = parseInt(prompt("Ingrese el precio del producto"));
//     let descripcion = prompt("Ingrese la descripcion del producto");
//     let categoria = prompt("Ingrese la categoria del producto");
//     let stock = parseInt(prompt("Ingrese el stock del producto"));
//     productos.push(new Producto(id, nombre, precio, descripcion, categoria, stock));
// }
// agregarProducto();


// let producto1 = productos.push(new Producto(0, 'PAPAS', 150, 'Papas de la mejor calidad', 'alimentos', 10));

// function generarProductos() {
//     productos.push(new Producto(0, 'TOMATE', 200, 'Tomate de la mejor calidad', 'alimentos', 10));
//     productos.push(new Producto(0, 'ARROZ', 120, 'Arroz gallo', 'alimentos', 20));
//     productos.push(new Producto(0, 'FIDEOS', 100, 'Matarazzo', 'alimentos', 13));
//     productos.push(new Producto(0, 'CUCHILLOS', 40, 'Tramontina', 'Cocina', 10));
//     productos.push(new Producto(0, 'PINTURA ROJA', 50, 'ColorShop', 'Industria', 7));

// }
// generarProductos();


// Funcion para buscar producto por nombre
// function buscarProducto() {
//     let buscar = prompt("Ingrese el nombre del producto que desea buscar").toUpperCase();
//     let resultado = productos.filter((producto) => producto.nombre.includes(buscar));
//     resultado !== undefined ? console.table(resultado) : alert("no se ha encontrado")
// if (resultado !== undefined) {
//     console.clear();
//     console.table(resultado);

// }
// }
// LLamo funcion



// Funcion map para proyectar el precio del producto
function proyectarIncremento(porc) {
    let proyeccion = productos.map((producto) => {
        return {
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            proyeccion: (producto.precio * porc).toFixed(2)
        }
    })
    console.table(proyeccion);

}
//Uso de funcion incremento
proyectarIncremento(1.30);




// function cargarProductos() {
//     listadoProductos.innerHTML = '';
//     for (const producto of productos) {
//         const li = document.createElement("li");
//         li.className = "list-group-item";
//         li.innerText = `
//         ID: ${producto.id}\n
//         Nombre: ${producto.nombre}\n
//         Precio: $${producto.precioFinal()}\n
//         Descripcion: ${producto.descripcion}\n
//         Stock: ${producto.stock}\n
//         `;
//         li.id = producto.nombre + "Prod";
//         li.addEventListener("click", () => {
//             agregarAlCarrito(producto),
//                 tCarritoHTML();
//         })
//         listadoProductos.append(li);
//     }
// }

//le puse un operador avanzado que se muestra por log ...carrito
//por ahora no le encuentro uso en el proyecto pero lo implemento

// function agregarAlCarrito(prod) {
//     carrito.push(prod);
//     const filaCarrito = `<tr>
//                         <td>${prod.id}</td>
//                         <td>${prod.nombre}</td>
//                         <td>$${prod.precioFinal()}</td>
//                         <td>${prod.descripcion}</td>
//                         <td>${prod.categoria}</td>
//                         <td>${prod.stock}</td>
//                     </tr>`;
//     const listaTr = document.querySelector("#carritotr").innerHTML += filaCarrito;

// }




// function agregarAlCarrito(prod) {
//     carrito.push(prod)
//     const p = document.createElement("p");
//     p.className = "list-group-item";
//     p.innerText = `
//     ID: ${prod.id}
//     Nombre: ${prod.nombre}
//     Precio: $${prod.precioFinal()}
//     Descripcion: ${prod.descripcion}
//     `;
//     p.id = 0
//     carrito.forEach(element => {
//         if (carrito.length > 0) {
//             p.id++
//         }

//     });
//     p.addEventListener("dblclick", () => {
//         removerDelCarrito(`${p.id}`);
//     })
//     listaCarrito.append(p);
//     //operador avanzado
//     console.log(...carrito)
// }

function removerDelCarrito(prod) {
    const productoARemover = document.querySelector(`#${p.id}`);
    prod.id === productoARemover ? productoARemover.remove() : alert("no se encontro")

}



//Almacenar en storage

function guardarDatosDelUsr() {
    const datosDeUsr = {
        nombre: formulario.children[0].value,
        apellido: formulario.children[1].value,
        seccion: formulario.children[2].value,
        jornada: formulario.children[3].value,

    }
    let str = JSON.stringify(datosDeUsr)
    localStorage.setItem("datosDelUsr", str)
}

function recueroDatosDelUsr() {
    if (localStorage.getItem("datosDelUsr")) {
        const datosDelUsr = JSON.parse(localStorage.getItem("datosDelUsr"))
        formulario.children[0].value = datosDelUsr.nombre
        formulario.children[1].value = datosDelUsr.apellido
        formulario.children[2].value = datosDelUsr.seccion
        formulario.children[3].value = datosDelUsr.jornada


    }

}

//LocalStorage array de objetos usando stringify

const guardarLocal = (key, value) => {
    localStorage.setItem(key, value)
};
for (const persona of personal) {
    guardarLocal(persona.id, JSON.stringify(persona))
    //console.log(producto)

}

//calcular total productos

// function calcularProductos() {
//     let total = productos.reduce((acc, producto) => acc + producto.precioFinal(), 0)
//     console.log(total)

// }

const contenidoDOM = document.querySelector("#contenidojson")

const obtenerContenido = async (URL) => {
    let mostrarProd = ""
    try {
        const response = await fetch(URL)
        const data = await response.json()
        data.forEach(contenido => {
            mostrarProd += contenidoCard(contenido)
        })
        contenidoDOM.innerHTML = mostrarProd

    } catch (error) {
        contenidoDOM.innerHTML = cardError()

    } finally {
        spinner.innerHTML = ""
    }
}


const contenidoCard = (contenido) => {
    const { id, nombre, precio, descripcion, categoria, stock } = contenido
    return `
        <tr>
            <td>ID: ${id}</td>
            <td>${nombre}</td>
            <td>$${precio}</td>
            <td>${descripcion}</td>
            <td>${categoria}</td>
            <td>Stock: ${stock}</td>
        </tr>`
}

const cardError = () => {
    return `
    <div class="center black-text">
                <br><br><br><br>
                <h4>El contenido parece no estar disponible. Intente nuevamente en unos minutos.</h4>
                <br><br>
            </div>`
}


recueroDatosDelUsr()


