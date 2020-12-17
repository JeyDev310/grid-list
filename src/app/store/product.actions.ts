import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';

import { Product } from '../models/product';

export const requestLoadProducts = createAction(
  '[Product/API] Request Load Products'
);

export const loadProducts = createAction(
  '[Product/API] Load Products',
  props<{ products: Product[] }>()
);