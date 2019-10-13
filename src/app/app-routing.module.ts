import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CakesComponent } from './cakes/cakes.component';
import { FormComponent } from './cakes/form/form.component';

const routes: Routes = [
  {
    path: '',
    component: CakesComponent,
    data: { title: 'List of Cakes' }
  },
  {
    path: 'cakes/add',
    component: FormComponent,
    data: { title: 'Add Cakes', type: 'add' }
  },
  {
    path: 'cakes/edit/:id',
    component: FormComponent,
    data: { title: 'Edit Cakes', type: 'edit' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
