import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Produit } from '../Models/produit.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from 'src/app/Shared/notification.service';
import { Router } from '@angular/router';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  productForm = new FormGroup({
    id: new FormControl(null, [Validators.required]),
    nom: new FormControl(null, [Validators.required]),
    designation: new FormControl(null),
    prix: new FormControl(null, [Validators.required])
  })
  constructor(public dialogRef: MatDialogRef<EditProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Produit,
    private productService: ProductService,
    private router: Router,
    private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.fillFields(this.data)
    this.f.controls['id'].disable()
  }

  updateProduct() {
    if (this.productForm.invalid) {
      this.productForm.markAllAsTouched();
      this.productForm.updateValueAndValidity();
      return;
    }
    const product: Produit = {
      id: this.productForm.value['id'],
      nom: this.productForm.value['nom'],
      designation: this.productForm.value['designation'],
      prix: this.productForm.value['prix']
    }
    let res = this.productService.updateProduct(product);
    console.log('products,',res);

    this.dialogRef.close(product);
    this.notificationService.success('Modifié avec succés');
  }


  fillFields(row: Produit) {
    this.f.patchValue(row)
  }

  public get f() {
    return this.productForm;
  }



}
