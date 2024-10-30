//crear un plato
const plato1 = new Plato("Hamburguesa", "Deliciosa hamburguesa con carne jugosa y queso derretido",10);
console.log(plato1.getHTML());

//crear plato2
const plato2 = new Plato("Pizza", "Riquísima pizza con ingredientes de la mejor calidad", 14);

//crear un menú1 y agregar platos
const menu1 = new Menu("Menú del día");
menu1.agregarPlato(plato1);
console.log(menu1.getHTML());

//array con todos los platos
var platosDisponibles = [];
platosDisponibles.push(plato1, plato2);

// Función para mostrar platos
function mostrarPlatos() {
    const platosContainer = document.getElementById('menu'); // Contenedor donde se mostrarán los platos
    let html = '<h2>Platos Disponibles</h2>'; // Título de la sección de platos
    for (let i = 0; i < platosDisponibles.length; i++) {
        html += platosDisponibles[i].getHTML(); // Obtener el HTML de cada plato
    }
    platosContainer.innerHTML = html; // Agregar el HTML generado al contenedor
}

// Llamar a la función mostrarPlatos cuando la página esté cargada
//mostrarPlatos();
document.addEventListener('DOMContentLoaded', mostrarPlatos);

//crea array asociativo (objeto) y añadir menu1
var menusDisponibles ={};
menusDisponibles[menu1.nombre] =menu1;

//función mostrar menus
function mostrarMenus() {
    const menusContainer = document.getElementById('menu2'); // Contenedor donde se mostrarán los menus
    let html = '<h2>Menus Disponibles</h2>'; // Título de la sección de menus
    for (const nombre in menusDisponibles) {
        html += `<div class="menu2">${menusDisponibles[nombre].getHTML()}</div>`;
    }
    menusContainer.innerHTML = html; // Agregar el HTML generado al contenedor
}
//llamar a la funcion mostrar menus
//mostrarMenus();
document.addEventListener('DOMContentLoaded', mostrarMenus);

//funcion agregarplato
function agregarPlato (){
    const nombre = document.getElementById('nombre').value;
    const descripcion = document.getElementById('descripcion').value;
    const precio = parseFloat(document.getElementById('precio').value);
    
    const nuevoPlato = new Plato(nombre, descripcion, precio.toFixed(2));
    platosDisponibles.push(nuevoPlato);
    mostrarPlatos(); // Muestra los platos al cargar la página
    mostrarSelectPlatos("selectPlatos");
    mostrarSelectPlatos("selectPlatos2");

    
}

//actualizar platos al hacer click en añadir plato
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btnAgregarPlato').addEventListener('click', agregarPlato);
});


function mostrarSelectPlatos(selectId) {
    const select = document.getElementById(selectId);
    select.innerHTML = ""; // Limpia las opciones del <select>

    platosDisponibles.forEach((plato) => {
        const option = document.createElement("option");
        option.value = plato.nombre;
        option.text = plato.nombre;
        select.appendChild(option);
    });

}
mostrarSelectPlatos("selectPlatos");
mostrarSelectPlatos("selectPlatos2");

function borrarPlato() {
    const select = document.getElementById("selectPlatos");
    const selectedOptionIndex = select.selectedIndex; // Obtiene el índice de la opción seleccionada

    platosDisponibles.splice(selectedOptionIndex, 1); // Elimina el plato del array

    mostrarPlatos(); // Muestra los platos disponibles actualizados en el <select>
    mostrarSelectPlatos("selectPlatos");
    mostrarSelectPlatos("selectPlatos2");

}
//eliminar del array platosDisponibles según su posición 
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btnEliminar').addEventListener('click', borrarPlato);
});


//funcion agregarmenu
function agregarMenu (){
    const nombre = document.getElementById('nombreMenu').value;
    menusDisponibles[nombre] = new Menu(nombre);
    mostrarMenus ();
    mostrarSelectMenu("selectMenus");    
    mostrarSelectMenu("selectMenus2");

}


//actualizar menus al hacer click en añadir menu
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btnAgregarMenu').addEventListener('click', agregarMenu);
});

//Último boton añadir plato menú

//añadimos a la función mostrarSelectPlatos la segunda id de platos

//funcion mostrarSelectMenu, esta vez es un objeto
function mostrarSelectMenu(selectidmenu) {
    const select = document.getElementById(selectidmenu);
    select.innerHTML = ""; // Limpia las opciones del <select>

    Object.values(menusDisponibles).forEach((menu) => {
        const option = document.createElement("option");
        option.value = menu.nombre;
        option.text = menu.nombre;
        select.appendChild(option);
    });
}
mostrarSelectMenu("selectMenus");
mostrarSelectMenu("selectMenus2");

//actualizar menus al hacer click en añadir plato al menu
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btnAgregarPlatoMenu').addEventListener('click', agregarPlatoMenu);
});

//funcion agregar plato a menu
function agregarPlatoMenu(){
    const platoAMenu = document.getElementById('selectPlatos2').value;//solo te da el nombre
    const menuElegido = document.getElementById('selectMenus').value;// solo te da el nombre
   
       // Obtener el menú desde `menusDisponibles` y el plato desde `platosDisponibles`
       const menu = menusDisponibles[menuElegido];
       const plato = platosDisponibles.find(p => p.nombre === platoAMenu);

       menu.agregarPlato(plato); // Agregar el objeto `plato` al objeto `menu`
        mostrarMenus();

    };

//añadido borrar menus

//funcion borrar menu
function borrarMenu() {
    const select = document.getElementById("selectMenus2");
    const selectedMenuName = select.value; // Obtiene el nombre del menú seleccionado
    
    delete menusDisponibles[selectedMenuName]; // Elimina el menú del objeto

    mostrarMenus(); // Muestra los menús actualizados
    mostrarSelectMenu("selectMenus");    
    mostrarSelectMenu("selectMenus2");
}
//actualizar menus al hacer click en borrar menu
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btnEliminar2').addEventListener('click', borrarMenu);
});