import { Component } from '@angular/core';

import {Product} from './model/product';

@Component({
	selector: 'addProducts',
	templateUrl: './addProducts.component.html'
})
export class AddProductsComponent{
	public product: Product;
	public list: Array<Product>;

	constructor(){
		this.setInitialProduct();
		this.list = [];
	}

	setInitialProduct() {
		this.product = new Product(0,'','',0,'');
	}

	ngOnInit(){
		console.log(this.product);
	}

	onSubmit(){
		this.list.push(this.product);
		this.setInitialProduct();
		localStorage.setItem('products', JSON.stringify(this.list));
		console.log('products: ', JSON.parse(localStorage.getItem('products')));
	}
}