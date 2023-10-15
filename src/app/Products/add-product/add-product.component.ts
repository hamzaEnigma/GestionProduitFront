import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Produit } from '../Models/produit.model';
import { ProductService } from '../Services/product.service';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { NotificationService } from 'src/app/Shared/notification.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productForm = new FormGroup({
    id: new FormControl(null, [Validators.required]),
    nom: new FormControl(null, [Validators.required]),
    designation: new FormControl(null),
    prix: new FormControl(null, [Validators.required])
  })

  constructor(private productService: ProductService,
    private router: Router,
    public dialogRef: MatDialogRef<AddProductComponent>,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
  }

  addProduct() {
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
    this.productService.addProduct(product);
    this.dialogRef.close(product);
    this.notificationService.success('Ajouté avec succés');
  }
  fillForm() {
    this.productForm.patchValue({
      id: '1234',
      nom: 'polo',
      designation: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the' +
        'industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only',
      prix: 120
    })
  }
}
