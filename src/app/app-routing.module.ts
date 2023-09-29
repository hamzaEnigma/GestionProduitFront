import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductsComponent } from './Products/list-products/list-products.component';
import { WelcomeComponent } from './Welcome/welcome/welcome.component';

const routes: Routes = [
  { path: 'products', component: ListProductsComponent },
  { path: 'welcome', component: WelcomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
