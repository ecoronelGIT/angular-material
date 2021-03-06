import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { ProductHeaderComponent } from './productheader/productheaer.component';

@NgModule({
  declarations: [ProductHeaderComponent],
  imports: [BrowserModule],
  entryComponents: [ProductHeaderComponent]
})
export class ProductHeaderModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const productHeader = createCustomElement(ProductHeaderComponent, { injector: this.injector });
    customElements.define('product-header', productHeader);
  }
}
