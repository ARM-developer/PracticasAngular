import { Component, OnInit} from "@angular/core";
import {Zapatilla} from "../models/zapatilla"

@Component({
    selector: "zapatillas",
    templateUrl: './zapatillas.component.html' 
})
export class ZapatillasComponent implements OnInit{
    public titulo : string;
    public zapatillas: Array<Zapatilla>;
    public marcas:string[]; 
    public color:string;
    public mi_marca: string;

    constructor(){
        this.mi_marca = "fila";
        this.color = 'red';
        this.marcas = new Array();
        this.zapatillas = [
            new Zapatilla('Nemesis', 'Adidas', 'white', 3600, true),
            new Zapatilla('Mercury', 'Nike', 'Black/White', 5800, true),
            new Zapatilla('Brazil', 'Pirma', 'blue', 2800, false),   
            new Zapatilla('Yezz', 'Adidas', 'white', 2200, true),
            new Zapatilla('Air Max', 'Nike', 'Black/White', 3600, true),
            new Zapatilla('React Element', 'Nike', 'Blanco/Azul', 2000, true)
        ];
    }

    ngOnInit(){
        console.log(this.zapatillas);
        this.getMarcas();
    }

    getMarcas(){
        this.zapatillas.forEach((zapatilla, index) => {
            if(this.marcas.indexOf(zapatilla.marca) < 0){
                this.marcas.push(zapatilla.marca);  
            }
            //console.log(index);            
        });
        
        console.log(this.marcas);        
    }

    getMarca(){
        alert(this.mi_marca);
    }

    addMarca(){
        this.marcas.push(this.mi_marca);
    }

    borrarMarca(indice){
        this.marcas.splice(indice,1);
    }

    onBlur(){
        console.log('has salido del blur');        
    }
}