import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';
import { ZapatillaService } from '../service/zapatilla.service';

@Component({
	selector: 'zapatillas',
	templateUrl: './zapatillas.component.html',
	providers: [ZapatillaService]
})
export class ZapatillasComponent implements OnInit {
	public titulo: string = "Componente de zapatillas";
	public zapatillas: Array<Zapatilla>;
	public marcas: String[];
	public color: string;
	public mi_marca: string;

	constructor(
		private _zapatillaService: ZapatillaService

	) {
		this.color = 'yellow';
		this.mi_marca = "Fila";
		this.marcas = new Array();

	}

	ngOnInit() {
		this.zapatillas = this._zapatillaService.getZapatillas();
		alert(this._zapatillaService.getTexto());

		this.getMarcas();
		console.log(this.zapatillas);
	}
	 
		getMarcas(){
			this.zapatillas.forEach((zapatilla, index) =>{
				
				if(this.marcas.indexOf(zapatilla.marca) < 0){  //si no lo encuentre , guardelo
					this.marcas.push(zapatilla.marca);    //push guarda
				}
				
			});
	
			console.log(this.marcas);
		}
	
		getMarca(){
			alert(this.mi_marca);
		}
	
		addMarca(){
			this.marcas.push(this.mi_marca);  //push agrega una marca al array de marcas
		}
	
		borrarMarca(index){
			// delete this.marcas[index];
			this.marcas.splice(index, 1); //que indice quiero eliminar y cuantos -- elimina la marca seleccionada
		}
	
		onBlur(){
			console.log("Has salido del input");
		}
	
		mostrarPalabra(){
			alert(this.mi_marca);
		}
	    
		
}