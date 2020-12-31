  
import { RouterModule, Routes } from '@angular/router';
import { AddNumberComponent } from './add-number/add-number.component';
import { ListNumberComponent } from './list-number/list-number.component';

const routes: Routes = [
  { path: 'add-number', component: AddNumberComponent },
  { path: 'list-number', component: ListNumberComponent },
  {path : '', component : AddNumberComponent}
];

export const routing = RouterModule.forRoot(routes);