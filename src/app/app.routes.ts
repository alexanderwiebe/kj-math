import { Routes } from '@angular/router';
import { DecompositionFriendlyComponent } from './decomposition-friendly/decomposition-friendly.component';
import { DecompositionPlaceValueComponent } from './decomposition-place-value/decomposition-place-value.component';

export const routes: Routes = [
  {
    path: 'decomposition-place-value',
    component: DecompositionPlaceValueComponent,
  },
  { path: 'decomposition-friendly', component: DecompositionFriendlyComponent },
];
