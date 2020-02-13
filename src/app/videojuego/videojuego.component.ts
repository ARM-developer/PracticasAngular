import { Component, OnInit, DoCheck, OnDestroy} from "@angular/core";
/*Component, es el metodo que genera el componente
oninit interfaz que obliga a crear el metodo ngOnInit el cual sera el primero en usarse despues del constructor "se sabe que el constructor es lo primero a ejecutarse en una clase"
DoCheck cada vez que se produce un cambio en los componentes de la aplicacion,
OnDestroy cada vez que se elimina un componente*/ 

@Component({
    selector: "videojuego",
    templateUrl: './videojuego.component.html' 
})
export class VideojuegosComponent implements OnInit, DoCheck, OnDestroy{
    public titulo : string;
    public listado: string;

    constructor(){
        this.titulo = 'Componente de Videojuegos';
        this.listado = 'los mejores videojuegos del mundo';
       // console.log('se ha cargado');        
    }

    ngOnInit(){
       // console.log('OnInit ejecutado');        
    }

    ngDoCheck(){
       // console.log('DoCheck ejecutado');        
    }

    ngOnDestroy(){
       // console.log('OnDestroy ejecutado');        
    }

    cambiartitulo(titte:string): void{
       // this.titulo = titte;
    }
}