import {Component, ViewEncapsulation} from '@angular/core';
import {ExternalProductViewService} from './external-product-view.service';
import {ExternalProductCartService} from './external-product-cart.service';
import {ExternalProductHeaderService} from './external-product-header.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  constructor(private externalProductViewService: ExternalProductViewService,
              private externalProductCartService: ExternalProductCartService,
              private externalProductHeaderService: ExternalProductHeaderService) {
    this.externalProductHeaderService.load();
    this.externalProductViewService.load();
    this.externalProductCartService.load();
  }

}
