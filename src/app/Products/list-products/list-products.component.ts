import { Component, OnInit } from '@angular/core';
import { Produit } from '../Models/produit.model';
import { ProductService } from '../Services/product.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddProductComponent } from '../add-product/add-product.component';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  listProducts?: Array<Produit>;
  produit?: Produit;
  constructor(private _productService: ProductService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this._productService.getProducts().subscribe(data => {
      this.listProducts = data;
    })
  }
  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "35%";
    const dialogRef = this.dialog.open(AddProductComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.produit = result
        console.log('Dialog product: ', this.produit);

      }
    });
  }
}
