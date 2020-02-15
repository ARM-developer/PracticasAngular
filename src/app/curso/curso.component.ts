import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  public nombre: string;
  public followers: number;

  constructor(
    private _route : ActivatedRoute,
    private _router: Router
  ){ }

  ngOnInit(): void {
    this._route.params.subscribe((params:Params) =>{
      this.nombre = params.nombre;
      this.followers = +params.followers;
    });
  }

  redirigir(){
    this._router.navigate(['/zapatillas']);
  }

}
