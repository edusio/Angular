import { Component } from '@angular/core';

import {Product} from './model/product';

@Component({
	selector: 'listProducts',
	templateUrl: './listProducts.component.html'
})
export class ListProductsComponent{

	public list: Array<Product>;

	constructor(){
		
		this.list = [];
	}

	ngOnInit(){
		this.list =  JSON.parse(localStorage.getItem('products'));
		/*this.list.forEach((params: Product) => {
			let name = params['name'];
			console.log(name);
				
		});*/

	}

	
}