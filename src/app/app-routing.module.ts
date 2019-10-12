import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CakesComponent } from './cakes/cakes.component';
import { AddComponent } from './cakes/add/add.component';
import { EditComponent } from './cakes/edit/edit.component';

const routes: Routes = [
  {
    path: '',
    component: CakesComponent,
    data: { title: 'List of Cakes' }
  },
  {
    path: 'cakes/add',
    component: AddComponent,
    data: { title: 'Add Cakes' }
  },
  {
    path: 'cakes/edit/:id',
    component: EditComponent,
    data: { title: 'Edit cakes' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
