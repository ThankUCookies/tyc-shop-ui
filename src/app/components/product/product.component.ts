import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from 'src/app/contracts/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input()
  public product: IProduct;
  @Input()
  public darkBg: boolean;
  
  constructor() { }

  ngOnInit() {
  }
}
