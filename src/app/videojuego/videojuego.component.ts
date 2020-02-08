import { Component } from "@angular/core";

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
}