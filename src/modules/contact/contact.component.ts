import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
	selector: 'contact',
	templateUrl: './contact.component.html'
})
export class ContactComponent{

	public contact: Array<String>;
	public title : String;

	constructor(private _route: ActivatedRoute,
		private _router: Router){
		this.title;
	}


}