import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductsComponent } from './Products/list-products/list-products.component';
import { WelcomeComponent } from './Welcome/welcome/welcome.component';
import { ProductDetailComponent } from './Products/product-detail/product-detail.component';
import { AddProductComponent } from './Products/list-products/add-product/add-product.component';

const routes: Routes = [
  { path: 'products', component: ListProductsComponent },
  { path: 'productDetail/:id', component: ProductDetailComponent },
  { path: 'addProduct', component: AddProductComponent},
  { path: 'welcome', component: WelcomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
