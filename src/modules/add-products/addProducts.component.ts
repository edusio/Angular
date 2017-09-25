import { Component } from '@angular/core';

import {Product} from './model/product';

@Component({
	selector: 'addProducts',
	templateUrl: './addProducts.component.html'
})
export class AddProductsComponent{
	public product: Product;

	constructor(){
		this.product = new Product(0,'','',0,'');
	}

	ngOnInit(){
		console.log(this.product);
	}

	onSubmit(){
		console.log(this.product);
	}
}