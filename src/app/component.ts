import { ApplicationRef, Component } from '@angular/core';
import { NgForm } from '@angular/forms';
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
    formSubmitted = false;

    submitForm(form: NgForm) {
        this.formSubmitted = true;
        if (form.valid) {
            this.addProduct(this.newProduct);
            this.newProduct = new Product();
            form.reset();
            this.formSubmitted = false;
        }
    }

    getFormValidationMessages(form: NgForm): string[] {
        const messages: string[] = [];
        Object.keys(form.controls).forEach(k => {
            this.getValidationMessages(form.controls[k], k)
 .forEach(m => messages.push(m));
 });
        return messages;
 }

    get jsonProduct() {
        return JSON.stringify(this.newProduct);
    }

    addProduct(p: Product) {
        console.log('New Product: ' + this.jsonProduct);
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

    getValidationMessages(state: any, thingName?: string) {
        const thing: string = state.path || thingName;
        const messsages: string[] = [];
        if (state.errors) {
// tslint:disable-next-line: forin
               for (const errorName in state.errors) {
                   switch (errorName) {
                       case 'required':
                       messsages.push(`You must enter a ${thing}`);
                       break;
                       case 'minlength':
                       messsages.push(`A ${thing} must be at least
                       ${state.errors.minlength.requiredLength} characters`);
                       break;
                       case 'pattern':
                       messsages.push(`The ${thing} contains
                       illegal characters`);
                       break;
                   }
               }
           }
        return messsages;
        }
    }

