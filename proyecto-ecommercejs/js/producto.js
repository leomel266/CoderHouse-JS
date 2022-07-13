const productos = []
const listadoProductos = document.getElementById('listadoProductos');

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


let producto1 = productos.push(new Producto(0, 'PAPAS', 150, 'Papas de la mejor calidad', 'alimentos', 10));

function generarProductos() {
    productos.push(new Producto(0, 'TOMATE', 200, 'Tomate de la mejor calidad', 'alimentos', 10));
    productos.push(new Producto(0, 'ARROZ', 120, 'Arroz gallo', 'alimentos', 20));
    productos.push(new Producto(0, 'FIDEOS', 100, 'Matarazzo', 'alimentos', 13));
    productos.push(new Producto(0, 'CUCHILLOS', 40, 'Tramontina', 'Cocina', 10));
    productos.push(new Producto(0, 'PINTURA ROJA', 50, 'ColorShop', 'Industria', 7));

}
generarProductos();


// Funcion para buscar producto por nombre
function buscarProducto() {
    let buscar = prompt("Ingrese el nombre del producto que desea buscar").toUpperCase();
    let resultado = productos.filter((producto) => producto.nombre.includes(buscar));
    resultado !== undefined ? console.table(resultado) : alert("no se ha encontrado")
    // if (resultado !== undefined) {
    //     console.clear();
    //     console.table(resultado);

    // }
}
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

listarProductos();



function cargarProductos() {
    listadoProductos.innerHTML = '';
    for (const producto of productos) {
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.innerText = `
        ID: ${producto.id}\n
        Nombre: ${producto.nombre}\n
        Precio: $${producto.precioFinal()}\n
        Descripcion: ${producto.descripcion}\n
        Stock: ${producto.stock}\n
        `;
        li.id = producto.nombre + "Prod";
        li.addEventListener("click", () => {
            agregarAlCarrito(producto),
                tCarritoHTML();
        })
        listadoProductos.append(li);
    }
}

//le puse un operador avanzado que se muestra por log ...carrito
//por ahora no le encuentro uso en el proyecto pero lo implemento
function agregarAlCarrito(prod) {
    carrito.push(prod)
    const p = document.createElement("p");
    p.className = "list-group-item";
    p.innerText = `
    ID: ${prod.id}
    Nombre: ${prod.nombre}
    Precio: $${prod.precioFinal()}
    Descripcion: ${prod.descripcion}
    `;
    p.id = 0
    carrito.forEach(element => {
        if (carrito.length > 0) {
            p.id++
        }

    });
    p.addEventListener("dblclick", () => {
        removerDelCarrito(`${p.id}`);
    })
    listaCarrito.append(p);
    //operador avanzado
    console.log(...carrito)
}

function removerDelCarrito(prod) {
    const productoARemover = document.querySelector(`#${p.id}`);
    prod.id === productoARemover ? productoARemover.remove() : alert("no se encontro")

}



//Almacenar en storage

function guardarDatosDelUsr() {
    const datosDeUsr = {
        nombre: formulario.children[0].value,
        precio: formulario.children[1].value,
        descripcion: formulario.children[2].value,
        categoria: formulario.children[3].value,
        stock: formulario.children[4].value

    }
    let str = JSON.stringify(datosDeUsr)
    localStorage.setItem("datosDelUsr", str)
}

function recueroDatosDelUsr() {
    if (localStorage.getItem("datosDelUsr")) {
        const datosDelUsr = JSON.parse(localStorage.getItem("datosDelUsr"))
        formulario.children[0].value = datosDelUsr.nombre
        formulario.children[1].value = datosDelUsr.precio
        formulario.children[2].value = datosDelUsr.descripcion
        formulario.children[3].value = datosDelUsr.categoria
        formulario.children[4].value = datosDelUsr.stock


    }

}

//LocalStorage array de objetos usando stringify

const guardarLocal = (key, value) => {
    localStorage.setItem(key, value)
};
for (const producto of productos) {
    guardarLocal(producto.id, JSON.stringify(producto))
    //console.log(producto)

}

//calcular total productos

function calcularProductos() {
    let total = productos.reduce((acc, producto) => acc + producto.precioFinal(), 0)
    console.log(total)

}



cargarProductos();

recueroDatosDelUsr()


