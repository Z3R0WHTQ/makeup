let carrito = [];

function agregarAlCarrito(nombreProducto, precio) {
    // Crea un objeto del producto
    const producto = {
        nombre: nombreProducto,
        precio: precio
    };

    // Añade el producto al carrito
    carrito.push(producto);

    // Muestra un mensaje al usuario
    alert(`${nombreProducto} ha sido añadido al carrito. Total: $${calcularTotal()}`);
}

function calcularTotal() {
    let total = 0;
    carrito.forEach(producto => {
        total += producto.precio;
    });
    return total.toFixed(2);
}

function mostrarCarrito() {
    if (carrito.length === 0) {
        alert("El carrito está vacío.");
        return;
    }
    
    let mensaje = "Productos en tu carrito:\n";
    carrito.forEach((producto, index) => {
        mensaje += `${index + 1}. ${producto.nombre} - $${producto.precio.toFixed(2)}\n`;
    });
    mensaje += `\nTotal: $${calcularTotal()}`;
    alert(mensaje);
}
