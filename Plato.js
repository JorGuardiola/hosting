class Plato {
    constructor (nombre, descripcion, precio){
        this.nombre=nombre;
        this.descripcion=descripcion;
        this.precio=precio;
    }
    getHTML() {
    return `<div class="plato"><h3>${this.nombre}</h3><p>${this.descripcion}</p><span class="precio">${this.precio}€</span></div>`;
    }   
}