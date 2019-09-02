import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { ProductViewModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  // Let the host app decide about prod mode
  // enableProdMode();
}

platformBrowserDynamic().bootstrapModule(ProductViewModule)
  .catch(err => console.log(err));
