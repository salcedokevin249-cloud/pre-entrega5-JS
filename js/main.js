class Producto {
  constructor(id, nombre, precio, categoria) {
    this.id = id;
    this.nombre = nombre.toLowerCase();
    this.precio = parseFloat(precio);
    this.categoria = categoria;
    this.vendido = false;
  }

  sumarIva() {
    this.precio *= 1.21;
  }

  vender() {
    this.vendido = true;
  }
}

const productos = [];

productos.push(new Producto(0, "carne", 120, "Carniceria"));
productos.push(new Producto(1, "leche", 50, "Lacteos"));
productos.push(new Producto(2, "huevos", 70, "Huevos"));

console.log(productos);
console.table(productos);

for (const producto of productos) {
  producto.sumarIva();
}

console.table(productos);

while (confirm("Deseas comprar un producto?")) {
  let listadoProductos = "";

  for (const producto of productos) {
    if (producto.vendido === false) {
      listadoProductos += producto.id + " " + producto.nombre + " (" + producto.categoria + ")\n";
    }
  }

  let indiceProducto = parseInt(
    prompt("Qué producto deseas comprar?\n" + listadoProductos),
  );

  if (indiceProducto >= 0 && indiceProducto < productos.length) {
    productos[indiceProducto].vender();
  } else {
    alert("Ingreso invalido");
  }
}