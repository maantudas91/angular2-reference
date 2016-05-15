import {TestComponentBuilder, describe, inject, it, expect} from 'angular2/testing';
import {Component} from 'angular2/core';
import {ProductsComponent} from './products.component';
import {DOM} from 'angular2/src/platform/dom/dom_adapter';

export function main() {
  describe('Products component', () => {
    it('should work',
      inject([TestComponentBuilder], (tcb:TestComponentBuilder) => {
        tcb.createAsync(TestComponent).then(rootTc => {
          rootTc.detectChanges();

          let element = rootTc.debugElement.nativeElement;

          expect(DOM.querySelector(element, 'p').textContent.trim()).toEqual('These are the products available.');
        });
      })
    );
  });
}

@Component({
  selector: 'test-cmp',
  template: '<sd-products></sd-products>',
  directives: [ProductsComponent]
})
class TestComponent {
}
