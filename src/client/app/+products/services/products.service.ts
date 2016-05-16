import {Observable} from 'rxjs/Observable';
import {empty} from 'rxjs/observable/empty';

export interface Product {
}

export class ProductsService {
  findAll():Observable<Product> {
    return empty();
  }
}
