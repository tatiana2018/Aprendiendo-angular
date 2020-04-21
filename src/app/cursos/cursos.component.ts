import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'; //sirve para recibir parametro por la url

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
	public nombre: string;
	public followers: number;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
	){ }

	ngOnInit() {
		this._route.params.subscribe((params: Params) => {  //recoje el parametro de la url
			this.nombre = params.nombre;
			this.followers = +params.followers; //+ convierte a tipo numerico

			if(this.nombre == 'ninguno'){
				this._router.navigate(['/home']);
			}
		});
	}

	redirigir(){
		this._router.navigate(['/zapatillas']); //redirige
	}

}
