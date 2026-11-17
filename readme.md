Funcionalidades del Sistema

1. Clase Producto ("Fábrica" de objetos):

Contiene un constructor que inicializa las propiedades: id, nombre, precio, categoria y vendido (por defecto en false).

Método sumarIva(): Aplica el recargo impositivo del 21% al precio del producto.

Método vender(): Modifica el estado del producto marcándolo como vendido (vendido = true).

2. Gestión de Inventario (Array):

Almacena las instancias de los productos creados mediante la palabra clave new Producto().

Muestra el estado inicial y actualizado en la consola mediante console.log y console.table.

3. Interacción con el Usuario (while + prompt):

Permite al usuario consultar qué productos siguen disponibles mediante cuadros de diálogo interactivos.

Actualiza dinámicamente el stock/estado de la compra según la selección.

¿Cómo utilizarlo y probarlo localmente?

1. Cloná el repositorio en tu computadora o descargalo como ZIP:

git clone https://github.com/salcedokevin249-cloud/pre-entrega5-JS.git

2. Abrí la carpeta en tu editor de código (por ejemplo, Visual Studio Code).

3. Abrí el archivo index.html en tu navegador web preferido (o utilizá la extensión Live Server).

4. Abrí la consola de desarrollador de tu navegador (F12 o Clic derecho -> Inspeccionar -> Consola) para ver los registros del array, tablas y la ejecución del programa.

