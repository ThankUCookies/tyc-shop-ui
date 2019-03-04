import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../products';
import { IProduct } from '../contracts/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public products: IProduct[];

  constructor() { 
    this.products = PRODUCTS;
  }

  ngOnInit() {
  }
}
