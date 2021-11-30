import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OrderListComponent } from './pages/order-list/order-list.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },{
    path:'manageStore/orders',
    component: OrderListComponent
  },{
    path:'**',
    redirectTo: '',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
