import { Component, OnInit } from '@angular/core';
import { Produit } from '../Models/produit.model';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  listProducts?: Array<Produit> ;

  constructor(private _productService:ProductService) { }

  ngOnInit(): void {
    this._productService.getProducts().subscribe(data=>{
      this.listProducts = data;
    })
  }

}
