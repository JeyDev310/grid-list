import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromActions from './store/product.actions';
import * as fromStore from './store/product.reducer';
import * as fromSelector from './store/products.selectors';
import { Product } from './models/product';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  products$: Observable<Product[]>;
  displayMode: string="grid";
  
  constructor(private store: Store<fromStore.ProductState>) {
    this.store.dispatch(fromActions.requestLoadProducts());
    this.products$ = this.store.select(fromSelector.products);
    this.isLoading$ = this.store.select(fromSelector.isLoading);
    this.error$ = this.store.select(fromSelector.error);
    this.store.select(state => state).subscribe(data => {
      console.log('data', data);
    });
  }

}
