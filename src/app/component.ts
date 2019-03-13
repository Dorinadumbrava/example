import { ApplicationRef, Component } from '@angular/core';
import { Model } from './repository.model';
import { Product } from './product.model';

@Component({
 selector: "app",
 templateUrl: 'template.html'
})

export class ProductComponent {
 
 model: Model = new Model();

    targetName = 'Kayak';
    selectedProduct: string;
    newProduct: Product = new Product();

    get jsonProduct() {
        return JSON.stringify(this.newProduct);
    }

    addProduct(p: Product){
        console.log("New Product: " + this.jsonProduct);
    }
    
    getProduct(key: number): Product {
        return this.model.getProduct(key);
    }

    getProducts(): Product [] {
        return this.model.getProducts();
    }

    getSelected(product: Product): boolean {
        return product.name === this.selectedProduct;
    }
}
