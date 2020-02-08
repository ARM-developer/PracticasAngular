import { Component } from "@angular/core";

@Component({
    selector: "zapatillas",
    templateUrl: './zapatillas.component.html' 
})
export class ZapatillasComponent {
    public titulo : string;
    public listado: string;

    constructor(){
        this.titulo = 'Componente de zapatillas';
        this.listado = 'las mayores mascar de zapatillas en el mundo';

        console.log('se ha cargado');        
    }
}