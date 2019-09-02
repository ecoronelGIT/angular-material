import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { ProductHeaderModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  // Let the host app decide about prod mode
  // enableProdMode();
}

platformBrowserDynamic().bootstrapModule(ProductHeaderModule)
  .catch(err => console.log(err));
