import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; //permite hacer peticiones a url externa
import { Observable } from 'rxjs';  //recoje las peticiones

@Injectable()
export class PeticionesService{
	public url: string;
	
	constructor(
		public _http: HttpClient   //inyecto el servicio http
	){
		this.url = "https://reqres.in/";   //api que consume
	}

	getUser(userId): Observable<any>{
		return this._http.get(this.url+'api/users/'+userId);   //'api/users/' es el metodo que que voy a usar esta dentro de la api 
		 
	}
       //peticion ajax con el metodo post
	addUser(user): Observable<any>{
		let params = JSON.stringify(user);  //conviarte un json (user) en un string
		let headers = new HttpHeaders().set('Content-Type', 'application/json'); //cabecceras tipo de peticion

		return this._http.post(this.url+'api/useres', params, {headers: headers});  //envia peticion por post
	}

}