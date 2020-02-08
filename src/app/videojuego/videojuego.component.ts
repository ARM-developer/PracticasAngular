import { Component, OnInit } from "@angular/core";
/*Component, es el metodo que genera el componente
oninit interfaz que obliga a crear el metodo ngOnInit el cual sera el primero en usarse despues del constructor "se sabe que el constructor es lo primero a ejecutarse en una clase"
*/

@Component({
    selector: "videojuego",
    templateUrl: './videojuego.component.html' 
})
export class VideojuegosComponent {
    public titulo : string;
    public listado: string;

    constructor(){
        this.titulo = 'Componente de Videojuegos';
        this.listado = 'los mejores videojuegos del mundo';
        console.log('se ha cargado');        
    }

    ngOnInit(){
        console.log('OnInit ejecutado');        
    }
}