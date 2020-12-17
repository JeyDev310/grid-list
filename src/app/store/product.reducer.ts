import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import { Product } from '../models/product';
import * as ProductActions from './product.actions';

export const productsFeatureKey = 'products';

export interface ProductState {
  isLoading: boolean;
  error: string | null;
  products: []
}

export const initialState: ProductState = {
  isLoading: true,
  error: null,
  products: []
};

export const reducer = createReducer(
  initialState,
    on(ProductActions.loadProducts,
    (state, action) => ({...state, isLoading: false, products: action.products})
  ),
  on(ProductActions.requestLoadProducts,
    (state, action) => ({...state, isLoading: true, products: []})
  )
);

export const selectIsLoading = (state: ProductState) => state.isLoading;
export const selectError = (state: ProductState) => state.error;
export const selectAll = (state: ProductState) => { console.log('---state:', state); return state.products;}
