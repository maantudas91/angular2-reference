import {TestComponentBuilder, inject, it, expect} from 'angular2/testing';
import {Component} from 'angular2/core';
import {DOM} from 'angular2/src/platform/dom/dom_adapter';
import {of} from 'rxjs/observable/of';
import * as sinon from 'sinon';
import {ProductsComponent} from './products.component';
import {ProductsService} from '../services/products.service';

export function main() {
  describe('ProductsComponent', () => {
    it('should work',
      inject([TestComponentBuilder], (tcb:TestComponentBuilder) => {
        tcb.createAsync(TestComponent).then(rootTc => {
          rootTc.detectChanges();

          let element = rootTc.debugElement.nativeElement;

          expect(DOM.querySelector(element, 'p').textContent.trim()).toEqual('These are the products available.');
        });
      })
    );

    it('should query for the list of products', () => {
      let productsService = <ProductsService> (<any> sinon.createStubInstance(ProductsService));
      spyOn(productsService, 'findAll').and.returnValue(of([]));

      let component = new ProductsComponent(productsService);
      expect(component.products).toEqual(null);

      component.ngOnInit();

      expect(component.products).toEqual([]);
      expect(productsService.findAll).toHaveBeenCalled();
    });
  });
}

@Component({
  selector: 'test-cmp',
  template: '<sd-products></sd-products>',
  directives: [ProductsComponent],
  providers: [ProductsService]
})
class TestComponent {
}
