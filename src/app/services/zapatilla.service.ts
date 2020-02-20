import { Injectable } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";

@Injectable()

export class ZapatillaService{

    public zapatillas: Array<Zapatilla>;

    constructor(){
        this.zapatillas = [
            new Zapatilla('Nemesis', 'Adidas', 'white', 3600, true),
            new Zapatilla('Mercury', 'Nike', 'Black/White', 5800, true),
            new Zapatilla('Brazil', 'Pirma', 'blue', 2800, false),   
            new Zapatilla('Yezz', 'Adidas', 'white', 2200, true),
            new Zapatilla('Air Max', 'Nike', 'Black/White', 3600, true),
            new Zapatilla('React Element', 'Nike', 'Blanco/Azul', 2000, true)
        ];
    }

    getZapatillas(): Array<Zapatilla>{
        return this.zapatillas;
    }

    getTexto(){
        return 'Hola Mundo Desde Servicio';
    }
}