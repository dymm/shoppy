import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemCreateComponent } from './item-create/item-create.component';
import { AppAuthGuard } from './auth/app.authguard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'items',
    pathMatch: 'full',
    canActivate: [AppAuthGuard],
    data: { roles: ['Client'] }
  },
  {
    path: 'items',
    component: ItemListComponent,
    canActivate: [AppAuthGuard],
    data: { roles: ['Client'] }
  },
  {
    path: 'items/:itemId',
    component: ItemDetailComponent,
    canActivate: [AppAuthGuard],
    data: { roles: ['Client'] }
  },
  {
    path: 'create',
    component: ItemCreateComponent,
    canActivate: [AppAuthGuard],
    data: { roles: ['Owner'] }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
