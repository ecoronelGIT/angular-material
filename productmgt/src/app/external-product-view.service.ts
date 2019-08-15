import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ExternalProductViewService {

    loaded = false;

    constructor() {

    }

    load(): void {
        if (this.loaded) {
            return;
        }

        const script = document.createElement('script');
        script.src = '/assets/product-view.js';
        document.body.appendChild(script);
        this.loaded = true;
    }

}
