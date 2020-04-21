import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../service/peticiones.service';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {

  public user: any;
  public userId: any;
  public fecha: any;

  public new_user: any;
  public usuario_guardado;

  constructor(
  	private _peticionesService: PeticionesService
  ){
  	this.userId = 1;
    this.new_user = {       //new user es el usuario que voy a crear en la api- los campos son los que estan en la api
                "name": "",
                "job": ""
            };
  }

  ngOnInit() {

  	this.fecha = new Date(2019, 10, 4);
  	this.cargaUsuario();
  }

  cargaUsuario(){
  	this.user = false;
  	this._peticionesService.getUser(this.userId).subscribe(  //subscribe recoje la peticion
  		result => {
        this.user = result.data;
        console.log(this.user);
  		},
  		error => {
  			console.log(<any>error);
  		}
  	);
  }

  onSubmit(form){

    this._peticionesService.addUser(this.new_user).subscribe(
      response => {
        this.usuario_guardado = response;
        form.reset();
      },
      error => {
        console.log(<any>error);
      }
    );

  }

}
