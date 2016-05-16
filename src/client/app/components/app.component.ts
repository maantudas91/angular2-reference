import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {NavbarComponent} from './navbar.component';
import {ToolbarComponent} from './toolbar.component';
import {ProductsComponent} from '../+products/index';
import {ProductsService} from '../+products/services/products.service';

@Component({
  selector: 'sd-app',
  templateUrl: 'app/components/app.component.html',
  directives: [ROUTER_DIRECTIVES, NavbarComponent, ToolbarComponent],
  providers: [ProductsService]
})
@RouteConfig([
  {
    path: '/',
    name: 'Products',
    component: ProductsComponent
  }
])
export class AppComponent {
}
