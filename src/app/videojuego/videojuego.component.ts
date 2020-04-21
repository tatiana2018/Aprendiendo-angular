import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';


//decorador para definir atributos 
@Component({
	selector: 'videojuego',
	templateUrl: './videojuego.component.html'
})
export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{
	public titulo: string;
	public listado: string;

	constructor(){
		console.log("componente cargado");
		this.titulo = "Componente de Videojuegos";
		this.listado = "Listado de los juegos más populares";

	    console.log("Se ha cargado el componente: videojuego.component.ts");
	}

	ngOnInit(){  //se ejecuta siempre al llamar al componente
		 console.log("OnInit ejecutado");
	}

	ngDoCheck(){ //se ejecuta al modificar algo 
		 console.log("DoCheck ejecutado");
	}

	ngOnDestroy(){  //se ejecuta despues de eliminar el componente
		 console.log("OnDestroy ejecutado");
	}

	cambiarTitulo(){
		this.titulo = "Nuevo titulo del componente";
	}

}