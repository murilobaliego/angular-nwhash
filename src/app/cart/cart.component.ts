import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  items;
  totalPrice;
  checkoutForm;

  constructor(
    private cartservice: CartService,
    private formBuilder: FormBuilder
  ) {
    this.items = this.cartservice.getItems();
    
    for (let i of this.items) {
      this.totalPrice = (this.totalPrice + i.price);
      console.log(this.totalPrice);
    }

    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }
  
    onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);
 
    this.items = this.cartservice.clearCart();
    this.checkoutForm.reset();
  }
   
}