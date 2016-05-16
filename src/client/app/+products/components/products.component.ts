import {Component, OnInit} from 'angular2/core';
import {ProductsService, Product} from '../services/products.service';

@Component({
  selector: 'sd-products',
  styleUrls: [
    'app/+products/components/products.component.css'
  ],
  templateUrl: 'app/+products/components/products.component.html'
})
export class ProductsComponent implements OnInit {
  products:Product[] = null;

  constructor(private productsService:ProductsService) {
  }

  ngOnInit():any {
    this.productsService.findAll().subscribe((products:Product[]) => {
      this.products = products;
    });
  }
}
