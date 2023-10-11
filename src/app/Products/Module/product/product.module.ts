import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductsComponent } from '../../list-products/list-products.component';
import { ProductDetailComponent } from '../../product-detail/product-detail.component';
import { RouterModule } from '@angular/router';
import { AddProductComponent } from '../../list-products/add-product/add-product.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListProductsComponent,
    ProductDetailComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    ListProductsComponent,
  ]
})
export class ProductModule { }
