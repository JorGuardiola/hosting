class Menu {
    constructor (nombre){
        this.nombre=nombre;
        this.platos=[];
    }

   agregarPlato(plato){
    this.platos.push(plato);    
   }

   getHTML() {
    let html = `<div class="menu"><h2>${this.nombre}</h2>`;
    for (let i = 0; i < this.platos.length; i++) {
        html += this.platos[i].getHTML();
    }
    html += `</div>`;
    return html;    }
}